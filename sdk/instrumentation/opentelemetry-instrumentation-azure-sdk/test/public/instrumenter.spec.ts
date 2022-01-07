// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { assert } from "chai";
import { OpenTelemetryInstrumenter } from "../../src/instrumenter";
import { trace, context, SpanKind } from "@opentelemetry/api";
import { TracingSpan, TracingSpanKind } from "@azure/core-tracing";
import { TestSpan } from "./util/testSpan";
import { TestTracer } from "./util/testTracer";
import { resetTracer, setTracer } from "./util/testTracerProvider";
import sinon from "sinon";
import { Context } from "mocha";
import { OpenTelemetrySpanWrapper } from "../../src/spanWrapper";

describe("OpenTelemetryInstrumenter", () => {
  const instrumenter = new OpenTelemetryInstrumenter();

  // TODO: the following still uses existing test support for OTel.
  // Once the new APIs are available we should move away from those.
  describe("#startSpan", () => {
    function unwrap(span: TracingSpan): TestSpan {
      return (span as OpenTelemetrySpanWrapper).unwrap() as TestSpan;
    }
    let tracer: TestTracer;
    const packageName = "test-package";
    const packageVersion = "test-version";
    beforeEach(() => {
      tracer = setTracer(tracer);
    });

    afterEach(() => {
      resetTracer();
    });

    it("returns a newly started TracingSpan", () => {
      const { span } = instrumenter.startSpan("test", { packageName, packageVersion });
      const otSpan = unwrap(span);
      assert.equal(otSpan, tracer.getActiveSpans()[0]);
      assert.equal(otSpan.kind, SpanKind.INTERNAL);
    });

    it("passes package information to the tracer", () => {
      const getTracerSpy = sinon.spy(trace, "getTracer");
      instrumenter.startSpan("test", { packageName, packageVersion });

      assert.isTrue(getTracerSpy.calledWith(packageName, packageVersion));
    });

    describe("with an existing context", () => {
      it("returns a context that contains all existing fields", () => {
        const currentContext = context.active().setValue(Symbol.for("foo"), "bar");

        const { tracingContext } = instrumenter.startSpan("test", {
          tracingContext: currentContext,
          packageName,
        });

        assert.equal(tracingContext.getValue(Symbol.for("foo")), "bar");
      });

      it("sets span on the context", () => {
        const currentContext = context.active().setValue(Symbol.for("foo"), "bar");

        const { span, tracingContext } = instrumenter.startSpan("test", {
          tracingContext: currentContext,
          packageName,
        });

        assert.equal(trace.getSpan(tracingContext), unwrap(span));
      });
    });

    describe("when a context is not provided", () => {
      it("uses the active context", () => {
        const contextSpy = sinon.spy(context, "active");

        instrumenter.startSpan("test", { packageName, packageVersion });

        assert.isTrue(contextSpy.called);
      });

      it("sets span on the context", () => {
        const { span, tracingContext } = instrumenter.startSpan("test", {
          packageName,
          packageVersion,
        });

        assert.equal(trace.getSpan(tracingContext), unwrap(span));
      });
    });

    describe("spanOptions", () => {
      it("passes attributes to started span", () => {
        const spanAttributes = {
          attr1: "val1",
          attr2: "val2",
        };
        const { span } = instrumenter.startSpan("test", {
          spanAttributes,
          packageName,
          packageVersion,
        });

        assert.deepEqual(unwrap(span).attributes, spanAttributes);
      });

      describe("spanKind", () => {
        it("maps spanKind correctly", () => {
          const { span } = instrumenter.startSpan("test", {
            packageName,
            spanKind: "client",
          });
          assert.equal(unwrap(span).kind, SpanKind.CLIENT);
        });

        it("defaults spanKind to INTERNAL if omitted", () => {
          const { span } = instrumenter.startSpan("test", { packageName });
          assert.equal(unwrap(span).kind, SpanKind.INTERNAL);
        });

        // TODO: what's the right behavior? throw? log and continue?
        it("defaults spanKind to INTERNAL if an invalid spanKind is provided", () => {
          const { span } = instrumenter.startSpan("test", {
            packageName,
            spanKind: "foo" as TracingSpanKind,
          });
          assert.equal(unwrap(span).kind, SpanKind.INTERNAL);
        });
      });

      it("supports spanLinks", () => {
        const { span: linkedSpan } = instrumenter.startSpan("linked", { packageName });
        const { span } = instrumenter.startSpan("test", {
          packageName,
          spanLinks: [
            {
              spanContext: linkedSpan.spanContext(),
              attributes: {
                attr1: "value1",
              },
            },
          ],
        });

        const links = unwrap(span).links;
        assert.equal(links.length, 1);

        assert.deepEqual(links[0], {
          attributes: {
            attr1: "value1",
          },
          context: {
            ...linkedSpan.spanContext(),
            traceState: undefined,
          },
        });
      });
    });
  });

  describe("#withContext", () => {
    it("passes the correct arguments to OpenTelemetry", function (this: Context) {
      const contextSpy = sinon.spy(context, "with");
      // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
      const callback = (arg1: number) => arg1 + 42;
      const callbackArg = 37;
      const activeContext = context.active();
      instrumenter.withContext(activeContext, callback, callbackArg);

      assert.isTrue(contextSpy.calledWith(activeContext, callback, undefined, callbackArg));
    });

    it("works when caller binds `this`", function (this: Context) {
      // a bit of a silly test but demonstrates how to bind `this` correctly
      // and ensures the behavior does not regress

      // Function syntax
      instrumenter.withContext(context.active(), function (this: any) {
        assert.isUndefined(this);
      });
      instrumenter.withContext(
        context.active(),
        function (this: any) {
          assert.equal(this, 42);
        }.bind(42)
      );

      // Arrow syntax
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const that = this;
      instrumenter.withContext(context.active(), () => {
        assert.equal(this, that);
      });
    });

    it("Returns the value of the callback", () => {
      const result = instrumenter.withContext(context.active(), () => 42);
      assert.equal(result, 42);
    });
  });
});

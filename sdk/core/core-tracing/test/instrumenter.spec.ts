// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { assert } from "chai";
import { Instrumenter, TracingSpan, TracingSpanContext } from "../src/interfaces";
import {
  createDefaultInstrumenter,
  createDefaultTracingSpan,
  getInstrumenter,
  useInstrumenter,
} from "../src/instrumenter";
import { createTracingContext } from "../src/tracingContext";

describe("Instrumenter", () => {
  describe("NoOpInstrumenter", () => {
    let instrumenter: Instrumenter;
    const name = "test-operation";

    beforeEach(() => {
      instrumenter = createDefaultInstrumenter();
    });

    describe("#startSpan", () => {
      const packageName = "test-package";

      it("returns a new context", () => {
        const { tracingContext } = instrumenter.startSpan(name, { packageName });
        assert.exists(tracingContext);
      });

      it("returns context with all existing properties", () => {
        const [key, value] = [Symbol.for("key"), "value"];
        const context = createTracingContext().setValue(key, value);

        const { tracingContext } = instrumenter.startSpan(name, {
          tracingContext: context,
          packageName,
        });
        assert.strictEqual(tracingContext.getValue(key), value);
      });
    });

    describe("#withContext", () => {
      it("applies the callback", () => {
        const expectedText = "expected";
        const result = instrumenter.withContext(createTracingContext(), () => expectedText);
        assert.equal(result, expectedText);
      });
    });

    describe("#parseTraceparentHeader", () => {
      it("returns undefined", () => {
        assert.isUndefined(instrumenter.parseTraceparentHeader(""));
      });
    });

    describe("#createRequestHeaders", () => {
      it("returns an empty object", () => {
        const span: TracingSpanContext = {
          spanId: "",
          traceId: "",
          traceFlags: 0,
        };
        assert.isEmpty(instrumenter.createRequestHeaders(span));
      });
    });
  });

  describe("NoOpSpan", () => {
    it("supports all TracingSpan methods", () => {
      const span: TracingSpan = createDefaultTracingSpan();
      span.setStatus({ status: "success" });
      span.setAttribute("foo", "bar");
      span.recordException(new Error("test"));
      assert.deepEqual(span.spanContext, {
        spanId: "00000000-0000-0000-0000-000000000000",
        traceId: "00000000-0000-0000-0000-000000000000",
        traceFlags: 0x0,
      });
      span.end();
      assert.isFalse(span.isRecording());
    });
  });

  describe("useInstrumenter", () => {
    it("allows setting and getting a global instrumenter", () => {
      const instrumenter = getInstrumenter();
      assert.exists(instrumenter);

      const newInstrumenter = createDefaultInstrumenter();
      useInstrumenter(newInstrumenter);
      assert.strictEqual(getInstrumenter(), newInstrumenter);
    });
  });
});

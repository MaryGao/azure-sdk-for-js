# Migration Guide for Modular Azure SDK Libraries

This guide will help you migrate from previous Azure SDK for JavaScript/TypeScript libraries to the new modularized libraries in this repository. The modular libraries are designed for improved tree-shaking, smaller bundle sizes, and a more modern developer experience.

---

## Why Modular Libraries?

The modular Azure SDK libraries are designed to:
- **Reduce bundle size**: Only import what you use, making your applications smaller and faster.
- **Improve performance**: Faster load times and reduced memory usage.
- **Modernize APIs**: Cleaner, more idiomatic TypeScript APIs, improved type safety, and better support for modern JavaScript features.
- **Enable better tree-shaking**: Unused code is eliminated more effectively by bundlers.

---

## Key Breaking Changes

### 1. Long-Running Operations (LRO) Changes

**What changed?**
- LROs now use updated primitives from the core packages.
- The poller returned by LRO methods may have a different type or API surface.
- Some options and method signatures have changed for consistency and extensibility.

**How to migrate:**
- Update your code to use the new poller types and methods.
- If you previously used custom polling intervals or callbacks, review the new options bag and event system.

**Before:**
```typescript
const poller = await client.beginCreateResource(params);
const result = await poller.pollUntilDone();
```

**After:**
```typescript
const poller = await client.beginCreateResource(params, { /* new options */ });
poller.onProgress((state) => {
  // handle progress
});
const result = await poller.pollUntilDone();
```

**Key points:**
- The poller may now expose `.onProgress`, `.stopPolling`, and other methods.
- The options bag may have changed; check the new library’s documentation for supported options.
- The poller’s state and result types may have changed.

---

### 2. Paging Changes

**What changed?**
- Paging APIs now use updated async iterator patterns.
- The shape of paged responses and iterators may have changed.
- Some methods now require explicit use of `.byPage()` for page-wise iteration.

**How to migrate:**
- Update your code to use the new async iterator and `.byPage()` methods.
- If you previously relied on the structure of paged responses, review the new response types.

**Before:**
```typescript
for await (const item of client.listResources()) {
  // process item
}
```

**After:**
```typescript
for await (const page of client.listResources().byPage({ maxPageSize: 20 })) {
  for (const item of page) {
    // process item
  }
}
```

**Key points:**
- Use `.byPage()` for explicit page iteration and to control page size.
- The paged result may now be a plain array or a different structure; check the new types.

---

### 3. Interface Name Changes

**What changed?**
- Some interfaces and types have been renamed for clarity and consistency.
- For example, types like `ResourceProperties` may now be named `ResourceData`, and other model or options interfaces may have new names.

**How to migrate:**
- Update your type references and imports to use the new interface names.
- Search your codebase for old interface names and replace them with the new ones.

**Before:**
```typescript
import { ResourceProperties } from "@azure/old-library";
const resource: ResourceProperties = { ... };
```

**After:**
```typescript
import { ResourceData } from "@azure/new-modular-library";
const resource: ResourceData = { ... };
```

**Key points:**
- Review the new library’s exported types and update your code accordingly.
- Some option bags and result types may also have new names.

---

## Migration Steps

1. **Update dependencies**: Install the new modular library packages using your package manager.
   ```bash
   pnpm install @azure/<new-modular-library>
   ```
2. **Update imports**: Change import paths to the new modular packages.
3. **Refactor LRO and paging code**: Update your usage to match the new poller and paging patterns.
4. **Update type references**: Rename interfaces and types as needed.
5. **Test thoroughly**: Run your tests and validate your application’s behavior.
6. **Review documentation**: Check the new library’s README and API docs for additional migration notes.

---

## Example Migration

**Old code:**
```typescript
import { OldClient, ResourceProperties } from "@azure/old-library";

const client = new OldClient(credentials, subscriptionId);
const poller = await client.beginCreateResource(params);
const result = await poller.pollUntilDone();

for await (const item of client.listResources()) {
  // process item
}
```

**New code:**
```typescript
import { NewModularClient, ResourceData } from "@azure/new-modular-library";

const client = new NewModularClient(credentials, subscriptionId);
const poller = await client.beginCreateResource(params, { /* new options */ });
poller.onProgress((state) => {
  // handle progress
});
const result = await poller.pollUntilDone();

for await (const page of client.listResources().byPage({ maxPageSize: 20 })) {
  for (const item of page) {
    // process item
  }
}
```

---

## How to Verify

- Review the guide for accuracy and completeness.
- Test migration steps with a sample project using the new modular library.
- Ensure all code samples are up to date and work as expected.
- Run your test suite and validate your application’s behavior after migration.

---

If you need more detailed migration examples for a specific service, or have questions about a particular breaking change, please specify which library or scenario you are migrating.

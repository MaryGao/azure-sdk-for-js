# PR Review History - @azure/arm-commerce (MaryGao/azure-sdk-for-js)

## Recurring Issues (PRs #5, #13, #14, #15)
- `infoFields?: any` regression on UsageAggregation/UsageSample (was `InfoField`)
- `AzureSupportedClouds` not exported from `./api` submodule
- `(undocumented)` on createUsageManagement, UsageManagementContext, UsageManagementClient
- CHANGELOG missing `### Breaking Changes` section

## PR #15 (2026-03-13) — 8 issues (2 critical, 6 medium)
- Critical: `infoFields` type regression + `AzureSupportedClouds` accessibility
- Medium: missing changelog breaking section, 3x undocumented symbols, 2x `any` types
- Auto-generation tool needs fixing — same issues recur across all PRs

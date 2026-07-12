---
source_file: "server/src/middleware/mfaPolicy.ts"
type: "code"
community: "Server Auth Middleware Tests"
location: "L40"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Server_Auth_Middleware_Tests
---

# enforceGlobalMfaPolicy()

## Connections
- [[DEMO_EMAILS]] - `references` [EXTRACTED]
- [[applyGlobalMiddleware()]] - `indirect_call` [INFERRED]
- [[extractToken()]] - `calls` [EXTRACTED]
- [[globalMiddleware.ts]] - `imports` [EXTRACTED]
- [[isMfaSetupExemptPath()]] - `calls` [EXTRACTED]
- [[isPublicApiPath()]] - `calls` [EXTRACTED]
- [[mfaPolicy.ts]] - `contains` [EXTRACTED]
- [[verifyJwtAndLoadUser()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/Server_Auth_Middleware_Tests
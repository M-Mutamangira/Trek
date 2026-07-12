---
type: community
cohesion: 0.08
members: 45
---

# Server Auth Middleware Tests

**Cohesion:** 0.08 - loosely connected
**Members:** 45 nodes

## Members
- [[.canActivate()_1]] - code - server/src/nest/auth/cookie-auth.guard.ts
- [[.canActivate()_2]] - code - server/src/nest/auth/jwt-auth.guard.ts
- [[.canActivate()_3]] - code - server/src/nest/auth/optional-jwt.guard.ts
- [[CookieAuthGuard]] - code - server/src/nest/auth/cookie-auth.guard.ts
- [[DEMO_EMAILS]] - code - server/src/services/demo.ts
- [[IdempotencyRow]] - code - server/src/middleware/idempotency.ts
- [[Injectable_7]] - code
- [[Injectable_9]] - code
- [[JWT_SECRET]] - code - server/src/config.ts
- [[MUTATING_METHODS_1]] - code - server/src/middleware/idempotency.ts
- [[OptionalAuthRequest]] - code - server/src/types.ts
- [[OptionalJwtGuard]] - code - server/src/nest/auth/optional-jwt.guard.ts
- [[adminOnly()]] - code - server/src/middleware/auth.ts
- [[applyIdempotency()]] - code - server/src/middleware/idempotency.ts
- [[auth-guard.test.ts]] - code - server/tests/unit/nest/auth-guard.test.ts
- [[auth.test.ts_1]] - code - server/tests/unit/middleware/auth.test.ts
- [[auth.ts_1]] - code - server/src/middleware/auth.ts
- [[authenticate()]] - code - server/src/middleware/auth.ts
- [[context()]] - code - server/tests/unit/nest/auth-guard.test.ts
- [[cookie-auth.guard.ts]] - code - server/src/nest/auth/cookie-auth.guard.ts
- [[demo.ts]] - code - server/src/services/demo.ts
- [[demoUploadBlock()]] - code - server/src/middleware/auth.ts
- [[enforceGlobalMfaPolicy()]] - code - server/src/middleware/mfaPolicy.ts
- [[extractToken()]] - code - server/src/middleware/auth.ts
- [[idempotency.test.ts]] - code - server/tests/unit/middleware/idempotency.test.ts
- [[idempotency.ts]] - code - server/src/middleware/idempotency.ts
- [[isMfaSetupExemptPath()]] - code - server/src/middleware/mfaPolicy.ts
- [[isPublicApiPath()]] - code - server/src/middleware/mfaPolicy.ts
- [[makeReq()]] - code - server/tests/unit/middleware/auth.test.ts
- [[makeReq()_1]] - code - server/tests/unit/middleware/idempotency.test.ts
- [[makeRes()]] - code - server/tests/unit/middleware/auth.test.ts
- [[makeRes()_1]] - code - server/tests/unit/middleware/idempotency.test.ts
- [[mfaPolicy.test.ts]] - code - server/tests/unit/middleware/mfaPolicy.test.ts
- [[mfaPolicy.ts]] - code - server/src/middleware/mfaPolicy.ts
- [[oauth-api.controller.ts]] - code - server/src/nest/oauth/oauth-api.controller.ts
- [[optional-jwt.guard.ts]] - code - server/src/nest/auth/optional-jwt.guard.ts
- [[optionalAuth()]] - code - server/src/middleware/auth.ts
- [[paramFactory()]] - code - server/tests/unit/nest/auth-guard.test.ts
- [[requireCookieAuth()]] - code - server/src/middleware/auth.ts
- [[rl()]] - code - server/tests/unit/nest/auth-guard.test.ts
- [[thrown()_5]] - code - server/tests/unit/nest/auth-guard.test.ts
- [[thrownAsync()]] - code - server/tests/unit/nest/auth-guard.test.ts
- [[user_7]] - code - server/tests/unit/nest/auth-guard.test.ts
- [[verifyJwtAndLoadUser()]] - code - server/src/middleware/auth.ts
- [[{ rows, dbMock }]] - code - server/tests/unit/middleware/idempotency.test.ts

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Server_Auth_Middleware_Tests
SORT file.name ASC
```

## Connections to other communities
- 14 edges to [[_COMMUNITY_Server Services Authservice Tests]]
- 13 edges to [[_COMMUNITY_Server Services Nest Tests]]
- 13 edges to [[_COMMUNITY_Server Nest Auth Tests]]
- 8 edges to [[_COMMUNITY_Plugins Server Nest Tests]]
- 6 edges to [[_COMMUNITY_Server Scheduler Services Tests]]
- 5 edges to [[_COMMUNITY_Plugins Proxy Server Tests]]
- 5 edges to [[_COMMUNITY_Oauth Server Nest Tests]]
- 4 edges to [[_COMMUNITY_Collections Server Nest Tests]]
- 4 edges to [[_COMMUNITY_Server Services Host Tests]]
- 3 edges to [[_COMMUNITY_Platform Server Nest Tests]]
- 3 edges to [[_COMMUNITY_Server Services Oauthservice Tests]]
- 3 edges to [[_COMMUNITY_Journey Server Nest Tests]]
- 2 edges to [[_COMMUNITY_Backup Server Nest Tests]]
- 2 edges to [[_COMMUNITY_Files Server Nest Tests]]
- 2 edges to [[_COMMUNITY_Client Components Admin Tests]]
- 1 edge to [[_COMMUNITY_Server Config Services Tests]]
- 1 edge to [[_COMMUNITY_Controller Server Nest (Server)]]
- 1 edge to [[_COMMUNITY_Auth Server Nest Tests]]
- 1 edge to [[_COMMUNITY_Server Services Unsplashservice Tests]]
- 1 edge to [[_COMMUNITY_Server Services Oidcservice Tests]]
- 1 edge to [[_COMMUNITY_Server Services Passkeyservice Tests]]
- 1 edge to [[_COMMUNITY_E2e Server Tests Tests]]

## Top bridge nodes
- [[auth-guard.test.ts]] - degree 34, connects to 10 communities
- [[oauth-api.controller.ts]] - degree 21, connects to 9 communities
- [[auth.ts_1]] - degree 30, connects to 8 communities
- [[verifyJwtAndLoadUser()]] - degree 22, connects to 6 communities
- [[demo.ts]] - degree 12, connects to 6 communities
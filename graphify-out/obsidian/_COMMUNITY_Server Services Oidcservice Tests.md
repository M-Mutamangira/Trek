---
type: community
cohesion: 0.07
members: 39
---

# Server Services Oidcservice Tests

**Cohesion:** 0.07 - loosely connected
**Members:** 39 nodes

## Members
- [[JwksEntry]] - code - server/src/services/oidcService.ts
- [[MOCK_CONFIG]] - code - server/tests/unit/services/oidcService.test.ts
- [[MOCK_DISCOVERY_DOC]] - code - server/tests/integration/oidc.test.ts
- [[OidcConfig_1]] - code - server/src/services/oidcService.ts
- [[OidcDiscoveryDoc]] - code - server/src/services/oidcService.ts
- [[OidcTokenResponse]] - code - server/src/services/oidcService.ts
- [[OidcUserInfo]] - code - server/src/services/oidcService.ts
- [[authCodes]] - code - server/src/services/oidcService.ts
- [[base64UrlDecode()]] - code - server/src/services/oidcService.ts
- [[base64url()]] - code - server/src/services/oidcService.ts
- [[consumeAuthCode()_1]] - code - server/src/services/oidcService.ts
- [[consumeState()]] - code - server/src/services/oidcService.ts
- [[createAuthCode()_1]] - code - server/src/services/oidcService.ts
- [[createState()]] - code - server/src/services/oidcService.ts
- [[discover()]] - code - server/src/services/oidcService.ts
- [[exchangeCodeForToken()]] - code - server/src/services/oidcService.ts
- [[fetchJwks()]] - code - server/src/services/oidcService.ts
- [[findOrCreateUser()]] - code - server/src/services/oidcService.ts
- [[frontendUrl()]] - code - server/src/services/oidcService.ts
- [[generateToken()_1]] - code - server/src/services/oidcService.ts
- [[getOidcConfig()]] - code - server/src/services/oidcService.ts
- [[getUserInfo()]] - code - server/src/services/oidcService.ts
- [[jwksCache]] - code - server/src/services/oidcService.ts
- [[makeToken()]] - code - server/tests/unit/services/oidcService.test.ts
- [[mockDiscover]] - code - server/tests/integration/oidc.test.ts
- [[mockExchangeCode]] - code - server/tests/integration/oidc.test.ts
- [[mockGetUserInfo]] - code - server/tests/integration/oidc.test.ts
- [[mockJwks()]] - code - server/tests/unit/services/oidcService.test.ts
- [[mockVerifyIdToken]] - code - server/tests/integration/oidc.test.ts
- [[oidc.test.ts]] - code - server/tests/integration/oidc.test.ts
- [[oidcService.test.ts]] - code - server/tests/unit/services/oidcService.test.ts
- [[oidcService.ts]] - code - server/src/services/oidcService.ts
- [[pendingStates]] - code - server/src/services/oidcService.ts
- [[resolveOidcRole()]] - code - server/src/services/oidcService.ts
- [[safeOidcPicture()]] - code - server/src/services/oidcService.ts
- [[touchLastLogin()]] - code - server/src/services/oidcService.ts
- [[verifyIdToken()]] - code - server/src/services/oidcService.ts
- [[{ testDb, dbMock }_23]] - code - server/tests/integration/oidc.test.ts
- [[{ testDb, dbMock }_80]] - code - server/tests/unit/services/oidcService.test.ts

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Server_Services_Oidcservice_Tests
SORT file.name ASC
```

## Connections to other communities
- 11 edges to [[_COMMUNITY_Server Tests Integration Tests]]
- 6 edges to [[_COMMUNITY_Server Services Nest Tests]]
- 4 edges to [[_COMMUNITY_Server Tests Unit Tests]]
- 3 edges to [[_COMMUNITY_Server Services Settingsservice Tests]]
- 3 edges to [[_COMMUNITY_Server Services Authservice Tests]]
- 2 edges to [[_COMMUNITY_Server Config Services Tests]]
- 2 edges to [[_COMMUNITY_Server Tests Helpers Tests]]
- 2 edges to [[_COMMUNITY_Server Services Tests Tests]]
- 1 edge to [[_COMMUNITY_Oidc Server Nest Tests]]
- 1 edge to [[_COMMUNITY_Server Auth Middleware Tests]]
- 1 edge to [[_COMMUNITY_Collections Server Nest Tests]]
- 1 edge to [[_COMMUNITY_Server Tests Unit Tests_1]]

## Top bridge nodes
- [[oidcService.ts]] - degree 42, connects to 7 communities
- [[oidcService.test.ts]] - degree 23, connects to 5 communities
- [[oidc.test.ts]] - degree 18, connects to 4 communities
- [[findOrCreateUser()]] - degree 6, connects to 2 communities
- [[getOidcConfig()]] - degree 2, connects to 1 community
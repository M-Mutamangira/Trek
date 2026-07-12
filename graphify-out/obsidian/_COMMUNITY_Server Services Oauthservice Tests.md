---
type: community
cohesion: 0.04
members: 96
---

# Server Services Oauthservice Tests

**Cohesion:** 0.04 - loosely connected
**Members:** 96 nodes

## Members
- [[AuthorizeParams]] - code - server/src/services/oauthService.ts
- [[BASE_MCP_INSTRUCTIONS]] - code - server/src/mcp/index.ts
- [[DANGEROUS_SCHEMES]] - code - server/src/mcp/oauthProvider.ts
- [[KEEPALIVE_MS]] - code - server/src/mcp/index.ts
- [[McpSession]] - code - server/src/mcp/sessionManager.ts
- [[OAuthClientRow]] - code - server/src/mcp/oauthProvider.ts
- [[OAuthClientRow_1]] - code - server/src/services/oauthService.ts
- [[OAuthTokenInfo]] - code - server/src/services/oauthService.ts
- [[OAuthTokenRow]] - code - server/src/services/oauthService.ts
- [[PendingCode]] - code - server/src/services/oauthService.ts
- [[RFC-6749]] - concept - server/src/services/oauthService.ts
- [[RFC-6750]] - concept - server/src/mcp/index.ts
- [[RFC-7636]] - concept - server/src/services/oauthService.ts
- [[RFC-7636_1]] - concept - server/tests/unit/services/oauthService.test.ts
- [[RFC-8707_1]] - concept - server/src/mcp/index.ts
- [[RFC-8707_2]] - concept - server/src/services/oauthService.ts
- [[RFC-9728]] - concept - server/src/mcp/index.ts
- [[RateLimitEntry]] - code - server/src/mcp/index.ts
- [[SESSION_TTL_MS]] - code - server/src/mcp/index.ts
- [[ValidateAuthorizeResult]] - code - server/src/services/oauthService.ts
- [[VerifyTokenResult]] - code - server/src/mcp/index.ts
- [[armSseKeepalive()]] - code - server/src/mcp/index.ts
- [[assertValidRedirectUris()]] - code - server/src/mcp/oauthProvider.ts
- [[authenticateClient()]] - code - server/src/services/oauthService.ts
- [[avatarsDir]] - code - server/src/index.ts
- [[backupsDir]] - code - server/src/index.ts
- [[bootstrap()]] - code - server/src/index.ts
- [[closeMcpSessions()]] - code - server/src/mcp/index.ts
- [[config.test.ts]] - code - server/tests/unit/mcp/config.test.ts
- [[config.ts_1]] - code - server/src/mcp/config.ts
- [[consumeAuthCode()]] - code - server/src/services/oauthService.ts
- [[countSessionsForUser()]] - code - server/src/mcp/index.ts
- [[coversDir]] - code - server/src/index.ts
- [[createAuthCode()]] - code - server/src/services/oauthService.ts
- [[createOAuthClient()]] - code - server/src/services/oauthService.ts
- [[deleteOAuthClient()]] - code - server/src/services/oauthService.ts
- [[filesDir]] - code - server/src/index.ts
- [[findChainRoot()]] - code - server/src/services/oauthService.ts
- [[generateAccessToken()]] - code - server/src/services/oauthService.ts
- [[generateRefreshToken()]] - code - server/src/services/oauthService.ts
- [[getAppUrl()]] - code - server/src/services/notifications.ts
- [[getConsent()]] - code - server/src/services/oauthService.ts
- [[getMcpSafeUrl()]] - code - server/src/services/notifications.ts
- [[getUserByAccessToken()]] - code - server/src/services/oauthService.ts
- [[hashToken()]] - code - server/src/services/oauthService.ts
- [[index.ts_3]] - code - server/src/index.ts
- [[index.ts_4]] - code - server/src/mcp/index.ts
- [[invalidateMcpSessions()]] - code - server/src/mcp/index.ts
- [[isConsentSufficient()]] - code - server/src/services/oauthService.ts
- [[isRateLimited()]] - code - server/src/mcp/index.ts
- [[issueClientCredentialsToken()]] - code - server/src/services/oauthService.ts
- [[issueTokens()]] - code - server/src/services/oauthService.ts
- [[listOAuthClients()]] - code - server/src/services/oauthService.ts
- [[listOAuthSessions()_1]] - code - server/src/services/oauthService.ts
- [[logToolCallAudit()]] - code - server/src/mcp/index.ts
- [[makeClient()]] - code - server/tests/unit/services/oauthService.test.ts
- [[makeParams()]] - code - server/tests/unit/services/oauthService.test.ts
- [[makePkce()_1]] - code - server/tests/unit/services/oauthService.test.ts
- [[makeSession()]] - code - server/tests/unit/mcp/sessionManager.test.ts
- [[mcpHandler()]] - code - server/src/mcp/index.ts
- [[oauthProvider.ts]] - code - server/src/mcp/oauthProvider.ts
- [[oauthService.test.ts]] - code - server/tests/unit/services/oauthService.test.ts
- [[oauthService.ts]] - code - server/src/services/oauthService.ts
- [[onListen()]] - code - server/src/index.ts
- [[parsed]] - code - server/src/mcp/index.ts
- [[pendingCodes]] - code - server/src/services/oauthService.ts
- [[photosDir]] - code - server/src/index.ts
- [[rateLimitMap]] - code - server/src/mcp/index.ts
- [[refreshTokens()]] - code - server/src/services/oauthService.ts
- [[resolveKeepaliveMs()]] - code - server/src/mcp/config.ts
- [[resolveSessionTtlMs()]] - code - server/src/mcp/config.ts
- [[revokeChain()]] - code - server/src/services/oauthService.ts
- [[revokeOAuthSession()]] - code - server/src/services/adminService.ts
- [[revokeSession()]] - code - server/src/services/oauthService.ts
- [[revokeToken()]] - code - server/src/services/oauthService.ts
- [[revokeUserSessionsForClient()]] - code - server/src/mcp/sessionManager.ts
- [[rotateOAuthClientSecret()]] - code - server/src/services/oauthService.ts
- [[rowToInfo()]] - code - server/src/mcp/oauthProvider.ts
- [[saveConsent()]] - code - server/src/services/oauthService.ts
- [[sessionManager.test.ts]] - code - server/tests/unit/mcp/sessionManager.test.ts
- [[sessionManager.ts]] - code - server/src/mcp/sessionManager.ts
- [[sessionParsed]] - code - server/src/mcp/index.ts
- [[sessionSweepInterval]] - code - server/src/mcp/index.ts
- [[sessions]] - code - server/src/mcp/sessionManager.ts
- [[setAuthChallenge()]] - code - server/src/mcp/index.ts
- [[shutdown()]] - code - server/src/index.ts
- [[timingSafeEqualHex()]] - code - server/src/services/oauthService.ts
- [[tmpDir]] - code - server/src/index.ts
- [[uploadsDir]] - code - server/src/index.ts
- [[validateAuthorizeRequest()]] - code - server/src/services/oauthService.ts
- [[validateScopes()]] - code - server/src/mcp/scopes.ts
- [[verifyJwtToken()]] - code - server/src/services/authService.ts
- [[verifyMcpToken()]] - code - server/src/services/authService.ts
- [[verifyPKCE()]] - code - server/src/services/oauthService.ts
- [[verifyToken()]] - code - server/src/mcp/index.ts
- [[{ testDb, dbMock }_79]] - code - server/tests/unit/services/oauthService.test.ts

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Server_Services_Oauthservice_Tests
SORT file.name ASC
```

## Connections to other communities
- 17 edges to [[_COMMUNITY_Server Scheduler Services Tests]]
- 13 edges to [[_COMMUNITY_Server Tests Integration Tests]]
- 9 edges to [[_COMMUNITY_Import Server Nest Tests]]
- 9 edges to [[_COMMUNITY_Server Services Notifications Tests]]
- 8 edges to [[_COMMUNITY_Server Services Mcp Tests]]
- 7 edges to [[_COMMUNITY_Server Services Nest Tests]]
- 7 edges to [[_COMMUNITY_Platform Server Nest Tests]]
- 6 edges to [[_COMMUNITY_Server Services Authservice Tests]]
- 5 edges to [[_COMMUNITY_Server Services Adminservice Tests]]
- 4 edges to [[_COMMUNITY_Collections Server Nest Tests]]
- 4 edges to [[_COMMUNITY_Oauth Server Nest Tests]]
- 3 edges to [[_COMMUNITY_Server Services Host Tests]]
- 3 edges to [[_COMMUNITY_Server Auth Middleware Tests]]
- 2 edges to [[_COMMUNITY_Server Tests Unit Tests]]
- 2 edges to [[_COMMUNITY_Auth Server Nest Tests]]
- 2 edges to [[_COMMUNITY_Server Services Settingsservice Tests]]
- 2 edges to [[_COMMUNITY_Server Plugins Plugin Tests]]
- 2 edges to [[_COMMUNITY_Server Services Mapsservice Tests]]
- 2 edges to [[_COMMUNITY_Server Services Passkeyservice Tests]]
- 1 edge to [[_COMMUNITY_Client Components Admin Tests]]
- 1 edge to [[_COMMUNITY_Server Nest Auth Tests]]
- 1 edge to [[_COMMUNITY_Oidc Server Nest Tests]]
- 1 edge to [[_COMMUNITY_Server Services Transitservice Tests]]
- 1 edge to [[_COMMUNITY_Server Tests Helpers Tests]]
- 1 edge to [[_COMMUNITY_Server Services Tests Tests]]

## Top bridge nodes
- [[index.ts_4]] - degree 52, connects to 13 communities
- [[oauthService.ts]] - degree 58, connects to 10 communities
- [[getAppUrl()]] - degree 16, connects to 7 communities
- [[oauthService.test.ts]] - degree 36, connects to 6 communities
- [[oauthProvider.ts]] - degree 23, connects to 5 communities
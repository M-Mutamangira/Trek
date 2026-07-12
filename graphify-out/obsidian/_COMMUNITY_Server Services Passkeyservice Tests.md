---
type: community
cohesion: 0.13
members: 28
---

# Server Services Passkeyservice Tests

**Cohesion:** 0.13 - loosely connected
**Members:** 28 nodes

## Members
- [[AUTH_FAILED]] - code - server/src/services/passkeyService.ts
- [[CredentialRow]] - code - server/src/services/passkeyService.ts
- [[NOT_CONFIGURED]] - code - server/src/services/passkeyService.ts
- [[SUPPORTED_ALGORITHM_IDS]] - code - server/src/services/passkeyService.ts
- [[WebauthnConfig]] - code - server/src/services/webauthnConfig.ts
- [[challengeFromResponse()]] - code - server/src/services/passkeyService.ts
- [[claimChallenge()]] - code - server/src/services/passkeyService.ts
- [[defaultCredentialName()]] - code - server/src/services/passkeyService.ts
- [[deletePasskey()]] - code - server/src/services/passkeyService.ts
- [[getSetting()]] - code - server/src/services/webauthnConfig.ts
- [[hostOf()]] - code - server/src/services/webauthnConfig.ts
- [[isIpHost()]] - code - server/src/services/webauthnConfig.ts
- [[isPasskeyConfigured()]] - code - server/src/services/webauthnConfig.ts
- [[listPasskeys()]] - code - server/src/services/passkeyService.ts
- [[parseTransports()]] - code - server/src/services/passkeyService.ts
- [[passkeyLoginOptions()]] - code - server/src/services/passkeyService.ts
- [[passkeyLoginVerify()]] - code - server/src/services/passkeyService.ts
- [[passkeyRegisterOptions()]] - code - server/src/services/passkeyService.ts
- [[passkeyRegisterVerify()]] - code - server/src/services/passkeyService.ts
- [[passkeyService.ts]] - code - server/src/services/passkeyService.ts
- [[purgeExpiredChallenges()]] - code - server/src/services/passkeyService.ts
- [[renamePasskey()]] - code - server/src/services/passkeyService.ts
- [[resolveWebauthnConfig()]] - code - server/src/services/webauthnConfig.ts
- [[sanitizeName()]] - code - server/src/services/passkeyService.ts
- [[storeChallenge()]] - code - server/src/services/passkeyService.ts
- [[webauthnConfig.test.ts]] - code - server/tests/unit/services/webauthnConfig.test.ts
- [[webauthnConfig.ts]] - code - server/src/services/webauthnConfig.ts
- [[{ settingsStore, appUrlRef }]] - code - server/tests/unit/services/webauthnConfig.test.ts

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Server_Services_Passkeyservice_Tests
SORT file.name ASC
```

## Connections to other communities
- 8 edges to [[_COMMUNITY_Server Services Authservice Tests]]
- 5 edges to [[_COMMUNITY_Server Services Nest Tests]]
- 2 edges to [[_COMMUNITY_Server Services Collabservice Tests]]
- 2 edges to [[_COMMUNITY_Server Services Oauthservice Tests]]
- 1 edge to [[_COMMUNITY_Server Services Settingsservice Tests]]
- 1 edge to [[_COMMUNITY_Server Nest Auth Tests]]
- 1 edge to [[_COMMUNITY_Server Services Notifications Tests]]
- 1 edge to [[_COMMUNITY_Admin Server Nest Tests]]
- 1 edge to [[_COMMUNITY_Collections Server Nest Tests]]
- 1 edge to [[_COMMUNITY_Server Auth Middleware Tests]]

## Top bridge nodes
- [[passkeyService.ts]] - degree 32, connects to 8 communities
- [[webauthnConfig.ts]] - degree 13, connects to 4 communities
- [[passkeyLoginVerify()]] - degree 8, connects to 2 communities
- [[resolveWebauthnConfig()]] - degree 12, connects to 1 community
- [[isPasskeyConfigured()]] - degree 5, connects to 1 community
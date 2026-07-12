---
type: community
cohesion: 0.16
members: 16
---

# Server Config Services Tests

**Cohesion:** 0.16 - loosely connected
**Members:** 16 nodes

## Members
- [[DURATION_UNITS_MS]] - code - server/src/config.ts
- [[ENCRYPTION_KEY]] - code - server/src/config.ts
- [[SESSION_DURATION_REMEMBER_SECONDS]] - code - server/src/config.ts
- [[SESSION_DURATION_SECONDS]] - code - server/src/config.ts
- [[config.ts]] - code - server/src/config.ts
- [[dataDir]] - code - server/src/config.ts
- [[decryptMfaSecret()]] - code - server/src/services/mfaCrypto.ts
- [[encKeyFile]] - code - server/src/config.ts
- [[encryptMfaSecret()]] - code - server/src/services/mfaCrypto.ts
- [[getKey()]] - code - server/src/services/mfaCrypto.ts
- [[jwtSecretFile]] - code - server/src/config.ts
- [[mfaCrypto.test.ts]] - code - server/tests/unit/services/mfaCrypto.test.ts
- [[mfaCrypto.ts]] - code - server/src/services/mfaCrypto.ts
- [[parseDurationMs()]] - code - server/src/config.ts
- [[parsedRememberMs]] - code - server/src/config.ts
- [[parsedSessionMs]] - code - server/src/config.ts

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Server_Config_Services_Tests
SORT file.name ASC
```

## Connections to other communities
- 10 edges to [[_COMMUNITY_Server Services Authservice Tests]]
- 3 edges to [[_COMMUNITY_Config Server Nest Tests]]
- 3 edges to [[_COMMUNITY_Server Tests Helpers Tests]]
- 2 edges to [[_COMMUNITY_Server Services Adminservice Tests]]
- 2 edges to [[_COMMUNITY_Server Services Settingsservice Tests]]
- 2 edges to [[_COMMUNITY_Server Nest Auth Tests]]
- 2 edges to [[_COMMUNITY_Server Services Oidcservice Tests]]
- 1 edge to [[_COMMUNITY_Server Auth Middleware Tests]]
- 1 edge to [[_COMMUNITY_E2e Server Tests Tests]]

## Top bridge nodes
- [[config.ts]] - degree 22, connects to 8 communities
- [[mfaCrypto.ts]] - degree 8, connects to 2 communities
- [[encryptMfaSecret()]] - degree 7, connects to 2 communities
- [[SESSION_DURATION_SECONDS]] - degree 3, connects to 2 communities
- [[decryptMfaSecret()]] - degree 7, connects to 1 community
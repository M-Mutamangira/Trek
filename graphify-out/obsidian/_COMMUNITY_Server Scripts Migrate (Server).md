---
type: community
cohesion: 0.21
members: 15
---

# Server Scripts Migrate (Server)

**Cohesion:** 0.21 - loosely connected
**Members:** 15 nodes

## Members
- [[MigrationResult]] - code - server/scripts/migrate-encryption.ts
- [[apiKey()]] - code - server/scripts/migrate-encryption.ts
- [[decryptApiKey()]] - code - server/scripts/migrate-encryption.ts
- [[decryptMfa()]] - code - server/scripts/migrate-encryption.ts
- [[encryptApiKey()]] - code - server/scripts/migrate-encryption.ts
- [[encryptMfa()]] - code - server/scripts/migrate-encryption.ts
- [[lineQueue]] - code - server/scripts/migrate-encryption.ts
- [[lineWaiters]] - code - server/scripts/migrate-encryption.ts
- [[main()_3]] - code - server/scripts/migrate-encryption.ts
- [[mfaKey()]] - code - server/scripts/migrate-encryption.ts
- [[migrate-encryption.ts]] - code - server/scripts/migrate-encryption.ts
- [[nextLine()]] - code - server/scripts/migrate-encryption.ts
- [[prompt()]] - code - server/scripts/migrate-encryption.ts
- [[promptSecret()]] - code - server/scripts/migrate-encryption.ts
- [[rl]] - code - server/scripts/migrate-encryption.ts

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Server_Scripts_Migrate_Server
SORT file.name ASC
```

## Connections to other communities
- 1 edge to [[_COMMUNITY_Server Tests Unit Tests]]
- 1 edge to [[_COMMUNITY_Server Services Mapsservice Tests]]
- 1 edge to [[_COMMUNITY_Trip Invite Server (Server)]]
- 1 edge to [[_COMMUNITY_Server Services Host Tests]]
- 1 edge to [[_COMMUNITY_Host Server Nest (Server)]]
- 1 edge to [[_COMMUNITY_Plugin Server Plugins Tests]]

## Top bridge nodes
- [[prompt()]] - degree 6, connects to 3 communities
- [[apiKey()]] - degree 4, connects to 1 community
- [[main()_3]] - degree 4, connects to 1 community
- [[nextLine()]] - degree 4, connects to 1 community
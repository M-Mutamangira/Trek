---
type: community
cohesion: 0.27
members: 11
---

# Server Db Seeds Tests

**Cohesion:** 0.27 - loosely connected
**Members:** 11 nodes

## Members
- [[ENV_KEYS]] - code - server/tests/unit/db/seeds-admin.test.ts
- [[countUsers()]] - code - server/tests/unit/db/seeds-admin.test.ts
- [[initDb()]] - code - server/src/db/database.ts
- [[insertExistingUser()]] - code - server/tests/unit/db/seeds-admin.test.ts
- [[isOidcOnlyConfigured()]] - code - server/src/db/seeds.ts
- [[runSeeds()]] - code - server/src/db/seeds.ts
- [[seedAddons()]] - code - server/src/db/seeds.ts
- [[seedAdminAccount()]] - code - server/src/db/seeds.ts
- [[seedCategories()]] - code - server/src/db/seeds.ts
- [[seeds-admin.test.ts]] - code - server/tests/unit/db/seeds-admin.test.ts
- [[seeds.ts]] - code - server/src/db/seeds.ts

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Server_Db_Seeds_Tests
SORT file.name ASC
```

## Connections to other communities
- 3 edges to [[_COMMUNITY_Server Services Nest Tests]]
- 2 edges to [[_COMMUNITY_Server Tests Unit Tests]]
- 2 edges to [[_COMMUNITY_Server Tests Integration Tests]]
- 1 edge to [[_COMMUNITY_Server Plugins Services Tests]]

## Top bridge nodes
- [[initDb()]] - degree 5, connects to 4 communities
- [[seeds-admin.test.ts]] - degree 7, connects to 2 communities
- [[seeds.ts]] - degree 7, connects to 1 community
- [[runSeeds()]] - degree 6, connects to 1 community
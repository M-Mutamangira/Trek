---
type: community
cohesion: 0.24
members: 10
---

# E2e Server Files Tests

**Cohesion:** 0.24 - loosely connected
**Members:** 10 nodes

## Members
- [[FilesModule]] - code - server/src/nest/files/files.module.ts
- [[Module_20]] - code
- [[Module_31]] - code
- [[PhotosModule]] - code - server/src/nest/photos/photos.module.ts
- [[build()_14]] - code - server/tests/e2e/files.e2e.test.ts
- [[files.e2e.test.ts]] - code - server/tests/e2e/files.e2e.test.ts
- [[{ checkPermission }_4]] - code - server/tests/e2e/files.e2e.test.ts
- [[{ db }_13]] - code - server/tests/e2e/files.e2e.test.ts
- [[{ fileSvc }]] - code - server/tests/e2e/files.e2e.test.ts
- [[{ photoSvc, helperSvc }]] - code - server/tests/e2e/files.e2e.test.ts

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/E2e_Server_Files_Tests
SORT file.name ASC
```

## Connections to other communities
- 3 edges to [[_COMMUNITY_E2e Server Tests Tests]]
- 2 edges to [[_COMMUNITY_Server Nest Health Tests]]
- 2 edges to [[_COMMUNITY_E2e Server Tests Tests_1]]
- 2 edges to [[_COMMUNITY_Files Server Nest Tests]]
- 2 edges to [[_COMMUNITY_Photos Server Nest (Server)]]

## Top bridge nodes
- [[files.e2e.test.ts]] - degree 14, connects to 4 communities
- [[FilesModule]] - degree 5, connects to 2 communities
- [[PhotosModule]] - degree 5, connects to 2 communities
---
type: community
cohesion: 0.33
members: 7
---

# E2e Share Server Tests

**Cohesion:** 0.33 - loosely connected
**Members:** 7 nodes

## Members
- [[Module_36]] - code
- [[ShareModule]] - code - server/src/nest/share/share.module.ts
- [[build()_25]] - code - server/tests/e2e/share.e2e.test.ts
- [[share.e2e.test.ts]] - code - server/tests/e2e/share.e2e.test.ts
- [[{ checkPermission }_8]] - code - server/tests/e2e/share.e2e.test.ts
- [[{ db, canAccessTrip }]] - code - server/tests/e2e/share.e2e.test.ts
- [[{ shareSvc }_1]] - code - server/tests/e2e/share.e2e.test.ts

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/E2e_Share_Server_Tests
SORT file.name ASC
```

## Connections to other communities
- 3 edges to [[_COMMUNITY_E2e Server Tests Tests]]
- 2 edges to [[_COMMUNITY_E2e Server Tests Tests_1]]
- 2 edges to [[_COMMUNITY_Share Server Nest Tests]]
- 1 edge to [[_COMMUNITY_Server Nest Health Tests]]

## Top bridge nodes
- [[share.e2e.test.ts]] - degree 11, connects to 3 communities
- [[ShareModule]] - degree 5, connects to 2 communities
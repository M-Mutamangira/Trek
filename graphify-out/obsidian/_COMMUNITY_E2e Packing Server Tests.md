---
type: community
cohesion: 0.33
members: 7
---

# E2e Packing Server Tests

**Cohesion:** 0.33 - loosely connected
**Members:** 7 nodes

## Members
- [[Module_30]] - code
- [[PackingModule]] - code - server/src/nest/packing/packing.module.ts
- [[build()_21]] - code - server/tests/e2e/packing.e2e.test.ts
- [[packing.e2e.test.ts]] - code - server/tests/e2e/packing.e2e.test.ts
- [[{ checkPermission }_5]] - code - server/tests/e2e/packing.e2e.test.ts
- [[{ db }_19]] - code - server/tests/e2e/packing.e2e.test.ts
- [[{ svc }_2]] - code - server/tests/e2e/packing.e2e.test.ts

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/E2e_Packing_Server_Tests
SORT file.name ASC
```

## Connections to other communities
- 3 edges to [[_COMMUNITY_E2e Server Tests Tests]]
- 2 edges to [[_COMMUNITY_E2e Server Tests Tests_1]]
- 2 edges to [[_COMMUNITY_Server Services Nest Tests]]
- 1 edge to [[_COMMUNITY_Server Nest Health Tests]]

## Top bridge nodes
- [[packing.e2e.test.ts]] - degree 11, connects to 3 communities
- [[PackingModule]] - degree 5, connects to 2 communities
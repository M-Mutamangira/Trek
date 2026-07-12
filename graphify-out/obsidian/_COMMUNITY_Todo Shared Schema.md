---
type: community
cohesion: 0.36
members: 8
---

# Todo Shared Schema

**Cohesion:** 0.36 - loosely connected
**Members:** 8 nodes

## Members
- [[TodoCategoryAssigneesRequest]] - code - shared/src/todo/todo.schema.ts
- [[TodoReorderRequest]] - code - shared/src/todo/todo.schema.ts
- [[todo.schema.spec.ts]] - code - shared/src/todo/todo.schema.spec.ts
- [[todo.schema.ts]] - code - shared/src/todo/todo.schema.ts
- [[todoCategoryAssigneesRequestSchema]] - code - shared/src/todo/todo.schema.ts
- [[todoCreateItemRequestSchema]] - code - shared/src/todo/todo.schema.ts
- [[todoReorderRequestSchema]] - code - shared/src/todo/todo.schema.ts
- [[todoUpdateItemRequestSchema]] - code - shared/src/todo/todo.schema.ts

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Todo_Shared_Schema
SORT file.name ASC
```

## Connections to other communities
- 2 edges to [[_COMMUNITY_Client Components Admin Tests]]
- 2 edges to [[_COMMUNITY_Client Sync Store Tests]]
- 1 edge to [[_COMMUNITY_Shared Schema Airtrail Tests]]

## Top bridge nodes
- [[todo.schema.ts]] - degree 10, connects to 2 communities
- [[TodoCategoryAssigneesRequest]] - degree 2, connects to 1 community
- [[TodoReorderRequest]] - degree 2, connects to 1 community
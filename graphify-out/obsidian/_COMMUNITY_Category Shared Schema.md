---
type: community
cohesion: 0.31
members: 9
---

# Category Shared Schema

**Cohesion:** 0.31 - loosely connected
**Members:** 9 nodes

## Members
- [[CategoryListResponse]] - code - shared/src/category/category.schema.ts
- [[CreateCategoryRequest]] - code - shared/src/category/category.schema.ts
- [[UpdateCategoryRequest]] - code - shared/src/category/category.schema.ts
- [[category.schema.spec.ts]] - code - shared/src/category/category.schema.spec.ts
- [[category.schema.ts]] - code - shared/src/category/category.schema.ts
- [[categoryListResponseSchema]] - code - shared/src/category/category.schema.ts
- [[categorySchema]] - code - shared/src/category/category.schema.ts
- [[createCategoryRequestSchema]] - code - shared/src/category/category.schema.ts
- [[updateCategoryRequestSchema]] - code - shared/src/category/category.schema.ts

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Category_Shared_Schema
SORT file.name ASC
```

## Connections to other communities
- 2 edges to [[_COMMUNITY_Client Components Admin Tests]]
- 1 edge to [[_COMMUNITY_Client Sync Store Tests]]
- 1 edge to [[_COMMUNITY_Shared Schema Airtrail Tests]]

## Top bridge nodes
- [[category.schema.ts]] - degree 10, connects to 2 communities
- [[CreateCategoryRequest]] - degree 2, connects to 1 community
- [[UpdateCategoryRequest]] - degree 2, connects to 1 community
---
type: community
cohesion: 0.31
members: 9
---

# File Shared Schema

**Cohesion:** 0.31 - loosely connected
**Members:** 9 nodes

## Members
- [[FileLinkRequest]] - code - shared/src/file/file.schema.ts
- [[FileUpdateRequest]] - code - shared/src/file/file.schema.ts
- [[PhotoVariant]] - code - shared/src/file/file.schema.ts
- [[file.schema.spec.ts]] - code - shared/src/file/file.schema.spec.ts
- [[file.schema.ts]] - code - shared/src/file/file.schema.ts
- [[fileLinkRequestSchema]] - code - shared/src/file/file.schema.ts
- [[fileUpdateRequestSchema]] - code - shared/src/file/file.schema.ts
- [[nullableIdField]] - code - shared/src/file/file.schema.ts
- [[photoVariantSchema]] - code - shared/src/file/file.schema.ts

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/File_Shared_Schema
SORT file.name ASC
```

## Connections to other communities
- 2 edges to [[_COMMUNITY_Client Components Admin Tests]]
- 1 edge to [[_COMMUNITY_Shared Schema Airtrail Tests]]

## Top bridge nodes
- [[file.schema.ts]] - degree 9, connects to 1 community
- [[FileLinkRequest]] - degree 2, connects to 1 community
- [[FileUpdateRequest]] - degree 2, connects to 1 community
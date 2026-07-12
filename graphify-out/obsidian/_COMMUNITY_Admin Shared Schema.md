---
type: community
cohesion: 0.29
members: 10
---

# Admin Shared Schema

**Cohesion:** 0.29 - loosely connected
**Members:** 10 nodes

## Members
- [[AdminFeatureToggleRequest]] - code - shared/src/admin/admin.schema.ts
- [[AdminInviteCreateRequest]] - code - shared/src/admin/admin.schema.ts
- [[AdminPermissionsRequest]] - code - shared/src/admin/admin.schema.ts
- [[AdminUserCreateRequest]] - code - shared/src/admin/admin.schema.ts
- [[admin.schema.spec.ts]] - code - shared/src/admin/admin.schema.spec.ts
- [[admin.schema.ts]] - code - shared/src/admin/admin.schema.ts
- [[adminFeatureToggleRequestSchema]] - code - shared/src/admin/admin.schema.ts
- [[adminInviteCreateRequestSchema]] - code - shared/src/admin/admin.schema.ts
- [[adminPermissionsRequestSchema]] - code - shared/src/admin/admin.schema.ts
- [[adminUserCreateRequestSchema]] - code - shared/src/admin/admin.schema.ts

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Admin_Shared_Schema
SORT file.name ASC
```

## Connections to other communities
- 1 edge to [[_COMMUNITY_Shared Schema Airtrail Tests]]

## Top bridge nodes
- [[admin.schema.ts]] - degree 10, connects to 1 community
---
type: community
cohesion: 0.47
members: 6
---

# Settings Shared Schema

**Cohesion:** 0.47 - moderately connected
**Members:** 6 nodes

## Members
- [[SettingUpsertRequest]] - code - shared/src/settings/settings.schema.ts
- [[SettingsBulkRequest]] - code - shared/src/settings/settings.schema.ts
- [[settingUpsertRequestSchema]] - code - shared/src/settings/settings.schema.ts
- [[settings.schema.spec.ts]] - code - shared/src/settings/settings.schema.spec.ts
- [[settings.schema.ts]] - code - shared/src/settings/settings.schema.ts
- [[settingsBulkRequestSchema]] - code - shared/src/settings/settings.schema.ts

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Settings_Shared_Schema
SORT file.name ASC
```

## Connections to other communities
- 2 edges to [[_COMMUNITY_Client Components Admin Tests]]
- 1 edge to [[_COMMUNITY_Shared Schema Airtrail Tests]]

## Top bridge nodes
- [[settings.schema.ts]] - degree 6, connects to 1 community
- [[SettingsBulkRequest]] - degree 2, connects to 1 community
- [[SettingUpsertRequest]] - degree 2, connects to 1 community
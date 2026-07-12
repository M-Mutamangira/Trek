---
type: community
cohesion: 0.05
members: 61
---

# Server Tests Unit Tests

**Cohesion:** 0.05 - loosely connected
**Members:** 61 nodes

## Members
- [[Database]] - code - server/reset-admin.js
- [[ManifestError]] - code - server/src/nest/plugins/install/manifest.ts
- [[RFC-7591]] - concept - server/src/db/migrations.ts
- [[RFC-8707]] - concept - server/src/db/migrations.ts
- [[atlas-region-crosswalk.test.ts]] - code - server/tests/unit/db/atlas-region-crosswalk.test.ts
- [[atlasService.test.ts]] - code - server/tests/unit/services/atlasService.test.ts
- [[bcrypt]] - code - server/reset-admin.js
- [[budgetServiceDb.test.ts]] - code - server/tests/unit/services/budgetServiceDb.test.ts
- [[buildFreshDb()]] - code - server/tests/unit/services/migration.test.ts
- [[cloneItem()]] - code - server/src/services/packingService.ts
- [[conflictUpdate.test.ts]] - code - server/tests/unit/services/conflictUpdate.test.ts
- [[createItem()]] - code - server/src/services/packingService.ts
- [[createNotification()_1]] - code - server/tests/unit/mcp/tools-notifications.test.ts
- [[createTestDb()]] - code - server/tests/helpers/test-db.ts
- [[crypto]] - code - server/reset-admin.js
- [[db]] - code - server/reset-admin.js
- [[declareAction()]] - code - server/tests/unit/plugins/operator-egress.test.ts
- [[declareField()]] - code - server/tests/unit/plugins/settings-isolation.test.ts
- [[existing]] - code - server/reset-admin.js
- [[freshDb()]] - code - server/tests/unit/db/atlas-region-crosswalk.test.ts
- [[freshPlace()]] - code - server/tests/unit/services/conflictUpdate.test.ts
- [[hash]] - code - server/reset-admin.js
- [[insert()]] - code - server/tests/unit/services/trimUserWhitespace.test.ts
- [[insertPlace()]] - code - server/tests/unit/services/atlasService.test.ts
- [[insertPlaceWithCoords()]] - code - server/tests/unit/services/atlasService.test.ts
- [[insertReservationEndpoint()]] - code - server/tests/unit/services/atlasService.test.ts
- [[install()]] - code - server/tests/unit/plugins/operator-egress.test.ts
- [[makeDb()_4]] - code - server/tests/unit/services/trimUserWhitespace.test.ts
- [[mark()]] - code - server/tests/unit/db/atlas-region-crosswalk.test.ts
- [[memberRow()]] - code - server/tests/unit/services/tripMembership.test.ts
- [[memoriesUnified.test.ts]] - code - server/tests/unit/services/memoriesUnified.test.ts
- [[migration.test.ts]] - code - server/tests/unit/services/migration.test.ts
- [[migrations.ts]] - code - server/src/db/migrations.ts
- [[operator-egress.test.ts]] - code - server/tests/unit/plugins/operator-egress.test.ts
- [[packingService.test.ts]] - code - server/tests/unit/services/packingService.test.ts
- [[paidFlag()]] - code - server/tests/unit/services/budgetServiceDb.test.ts
- [[path]] - code - server/reset-admin.js
- [[rerunLastMigration()]] - code - server/tests/unit/db/atlas-region-crosswalk.test.ts
- [[reset-admin.js]] - code - server/reset-admin.js
- [[row()_5]] - code - server/tests/unit/services/trimUserWhitespace.test.ts
- [[runMigration69()]] - code - server/tests/unit/services/migration.test.ts
- [[runMigrations()]] - code - server/src/db/migrations.ts
- [[seedDefaults()_1]] - code - server/tests/helpers/test-db.ts
- [[setUserConfig()]] - code - server/tests/unit/plugins/settings-isolation.test.ts
- [[settings-isolation.test.ts]] - code - server/tests/unit/plugins/settings-isolation.test.ts
- [[setupPreMigration69Db()]] - code - server/tests/unit/services/migration.test.ts
- [[todoService.test.ts]] - code - server/tests/unit/services/todoService.test.ts
- [[trekPhotoMedia.test.ts]] - code - server/tests/unit/services/trekPhotoMedia.test.ts
- [[trimUserWhitespace()]] - code - server/src/db/migrations.ts
- [[trimUserWhitespace.test.ts]] - code - server/tests/unit/services/trimUserWhitespace.test.ts
- [[tripMembership.test.ts]] - code - server/tests/unit/services/tripMembership.test.ts
- [[{ testDb, dbMock }_61]] - code - server/tests/unit/plugins/operator-egress.test.ts
- [[{ testDb, dbMock }_62]] - code - server/tests/unit/plugins/settings-isolation.test.ts
- [[{ testDb, dbMock }_64]] - code - server/tests/unit/services/atlasService.test.ts
- [[{ testDb, dbMock }_66]] - code - server/tests/unit/services/budgetServiceDb.test.ts
- [[{ testDb, dbMock }_70]] - code - server/tests/unit/services/conflictUpdate.test.ts
- [[{ testDb, dbMock }_76]] - code - server/tests/unit/services/memoriesUnified.test.ts
- [[{ testDb, dbMock }_81]] - code - server/tests/unit/services/packingService.test.ts
- [[{ testDb, dbMock }_85]] - code - server/tests/unit/services/todoService.test.ts
- [[{ testDb, dbMock }_86]] - code - server/tests/unit/services/trekPhotoMedia.test.ts
- [[{ testDb, dbMock }_88]] - code - server/tests/unit/services/tripMembership.test.ts

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Server_Tests_Unit_Tests
SORT file.name ASC
```

## Connections to other communities
- 108 edges to [[_COMMUNITY_Server Tests Integration Tests]]
- 35 edges to [[_COMMUNITY_Server Tests Mcp Tests]]
- 33 edges to [[_COMMUNITY_Server Tests Unit Tests_1]]
- 28 edges to [[_COMMUNITY_Server Tests Helpers Tests]]
- 22 edges to [[_COMMUNITY_Server Services Packingservice (Server)]]
- 18 edges to [[_COMMUNITY_Server Services Tests Tests]]
- 13 edges to [[_COMMUNITY_Server Atlasservice Services (Server)]]
- 12 edges to [[_COMMUNITY_Server Tests Unit Tests_2]]
- 10 edges to [[_COMMUNITY_Server Services Host Tests]]
- 9 edges to [[_COMMUNITY_Server Memories Services Tests]]
- 6 edges to [[_COMMUNITY_Plugins Server Nest Tests_1]]
- 6 edges to [[_COMMUNITY_Server Services Budgetservice Tests]]
- 5 edges to [[_COMMUNITY_Plugins Server Nest Tests_2]]
- 4 edges to [[_COMMUNITY_Server Services Nest Tests]]
- 4 edges to [[_COMMUNITY_Server Services Oidcservice Tests]]
- 4 edges to [[_COMMUNITY_Server Services Placeservice Tests]]
- 3 edges to [[_COMMUNITY_Server Services Settingsservice Tests]]
- 3 edges to [[_COMMUNITY_Server Services Journeyservice Tests]]
- 2 edges to [[_COMMUNITY_E2e Server Tests Tests]]
- 2 edges to [[_COMMUNITY_Server Db Seeds Tests]]
- 2 edges to [[_COMMUNITY_Server Services Adminservice Tests]]
- 2 edges to [[_COMMUNITY_Server Services Authservice Tests]]
- 2 edges to [[_COMMUNITY_Server Services Oauthservice Tests]]
- 2 edges to [[_COMMUNITY_Server Services Vacayservice Tests]]
- 2 edges to [[_COMMUNITY_Server Plugins Egress Tests]]
- 2 edges to [[_COMMUNITY_Memories Server Services (Server)]]
- 2 edges to [[_COMMUNITY_Server Services Mcp Tests]]
- 1 edge to [[_COMMUNITY_Server Scripts Migrate (Server)]]
- 1 edge to [[_COMMUNITY_Plugins Server Plugin Tests]]
- 1 edge to [[_COMMUNITY_Server Plugins Plugin Tests]]
- 1 edge to [[_COMMUNITY_Plugins Server Nest Tests_4]]
- 1 edge to [[_COMMUNITY_Client Components Admin Tests]]
- 1 edge to [[_COMMUNITY_Import Server Nest Tests]]
- 1 edge to [[_COMMUNITY_Server Tests Unit Tests_3]]

## Top bridge nodes
- [[runMigrations()]] - degree 107, connects to 16 communities
- [[migrations.ts]] - degree 106, connects to 14 communities
- [[todoService.test.ts]] - degree 20, connects to 7 communities
- [[conflictUpdate.test.ts]] - degree 19, connects to 7 communities
- [[packingService.test.ts]] - degree 27, connects to 6 communities
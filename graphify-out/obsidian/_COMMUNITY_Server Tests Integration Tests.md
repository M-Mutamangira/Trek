---
type: community
cohesion: 0.06
members: 109
---

# Server Tests Integration Tests

**Cohesion:** 0.06 - loosely connected
**Members:** 109 nodes

## Members
- [[AppModule]] - code - server/src/nest/app.module.ts
- [[DEFAULT_ADDONS]] - code - server/tests/helpers/test-db.ts
- [[DEFAULT_CATEGORIES]] - code - server/tests/helpers/test-db.ts
- [[DEFAULT_PHOTO_PROVIDERS]] - code - server/tests/helpers/test-db.ts
- [[FIXTURE_IMG]] - code - server/tests/integration/files.test.ts
- [[FIXTURE_IMG_1]] - code - server/tests/integration/security.test.ts
- [[FIXTURE_JPEG]] - code - server/tests/integration/profile.test.ts
- [[FIXTURE_PDF]] - code - server/tests/integration/collab.test.ts
- [[FIXTURE_PDF_1]] - code - server/tests/integration/files.test.ts
- [[FIXTURE_PDF_2]] - code - server/tests/integration/profile.test.ts
- [[GPX_FIXTURE]] - code - server/tests/integration/places.test.ts
- [[KML_FIXTURE]] - code - server/tests/integration/places.test.ts
- [[KML_MALFORMED_FIXTURE]] - code - server/tests/integration/places.test.ts
- [[KML_NESTED_FIXTURE]] - code - server/tests/integration/places.test.ts
- [[KMZ_FIXTURE]] - code - server/tests/integration/places.test.ts
- [[Module_6]] - code
- [[RESET_TABLES]] - code - server/tests/helpers/test-db.ts
- [[TEST_CONFIG]] - code - server/tests/helpers/test-db.ts
- [[api-docs.kill-switch.ts]] - code - server/src/nest/common/api-docs.kill-switch.ts
- [[api-docs.test.ts]] - code - server/tests/integration/api-docs.test.ts
- [[apiDocsEnabled()]] - code - server/src/nest/common/api-docs.kill-switch.ts
- [[assignments.test.ts_1]] - code - server/tests/integration/assignments.test.ts
- [[atlas.test.ts]] - code - server/tests/integration/atlas.test.ts
- [[auth.ts_2]] - code - server/tests/helpers/auth.ts
- [[authCookie()]] - code - server/tests/helpers/auth.ts
- [[authHeader()]] - code - server/tests/helpers/auth.ts
- [[backup.test.ts]] - code - server/tests/integration/backup.test.ts
- [[bootstrap.test.ts]] - code - server/tests/integration/bootstrap.test.ts
- [[bootstrap.ts]] - code - server/src/bootstrap.ts
- [[budget.test.ts_1]] - code - server/tests/integration/budget.test.ts
- [[buildApp()]] - code - server/src/bootstrap.ts
- [[buildDbMock()]] - code - server/tests/helpers/test-db.ts
- [[categories.test.ts]] - code - server/tests/integration/categories.test.ts
- [[categoryService.test.ts]] - code - server/tests/unit/services/categoryService.test.ts
- [[collab.test.ts]] - code - server/tests/integration/collab.test.ts
- [[connectRawWs()]] - code - server/tests/websocket/connection.test.ts
- [[connectWs()]] - code - server/tests/websocket/connection.test.ts
- [[connection.test.ts]] - code - server/tests/websocket/connection.test.ts
- [[createSession()]] - code - server/tests/integration/mcp.test.ts
- [[createTables()]] - code - server/src/db/schema.ts
- [[dayNotes.test.ts_1]] - code - server/tests/integration/dayNotes.test.ts
- [[days.test.ts_1]] - code - server/tests/integration/days.test.ts
- [[files.test.ts_1]] - code - server/tests/integration/files.test.ts
- [[generateToken()_2]] - code - server/tests/helpers/auth.ts
- [[getOnlineUserIds()]] - code - server/src/websocket.ts
- [[immich.test.ts]] - code - server/tests/integration/immich.test.ts
- [[insertBooleanNotification()]] - code - server/tests/integration/notifications.test.ts
- [[insertSimpleNotification()]] - code - server/tests/integration/notifications.test.ts
- [[invalidatePermissionsCache()]] - code - server/src/services/permissions.ts
- [[journey.test.ts]] - code - server/tests/integration/journey.test.ts
- [[makePkce()]] - code - server/tests/integration/oauth.test.ts
- [[maps.test.ts]] - code - server/tests/integration/maps.test.ts
- [[mcp.test.ts]] - code - server/tests/integration/mcp.test.ts
- [[misc.test.ts]] - code - server/tests/integration/misc.test.ts
- [[notifications.test.ts]] - code - server/tests/integration/notifications.test.ts
- [[oauth.test.ts]] - code - server/tests/integration/oauth.test.ts
- [[packing.test.ts_1]] - code - server/tests/integration/packing.test.ts
- [[places.test.ts_1]] - code - server/tests/integration/places.test.ts
- [[profile.test.ts]] - code - server/tests/integration/profile.test.ts
- [[reservations.test.ts_1]] - code - server/tests/integration/reservations.test.ts
- [[resetRateLimits()]] - code - server/tests/helpers/test-db.ts
- [[resetTestDb()]] - code - server/tests/helpers/test-db.ts
- [[schema.ts]] - code - server/src/db/schema.ts
- [[security.test.ts]] - code - server/tests/integration/security.test.ts
- [[setMcpEnabled()]] - code - server/tests/integration/oauth.test.ts
- [[settings.test.ts]] - code - server/tests/integration/settings.test.ts
- [[settingsService.test.ts]] - code - server/tests/unit/services/settingsService.test.ts
- [[tagService.test.ts]] - code - server/tests/unit/services/tagService.test.ts
- [[tags.test.ts]] - code - server/tests/integration/tags.test.ts
- [[test-db.ts]] - code - server/tests/helpers/test-db.ts
- [[todo.test.ts_1]] - code - server/tests/integration/todo.test.ts
- [[uploadFile()]] - code - server/tests/integration/files.test.ts
- [[uploadsDir_3]] - code - server/tests/integration/collab.test.ts
- [[uploadsDir_4]] - code - server/tests/integration/files.test.ts
- [[uploadsDir_5]] - code - server/tests/integration/security.test.ts
- [[vacay.test.ts]] - code - server/tests/integration/vacay.test.ts
- [[waitForMessages()]] - code - server/tests/websocket/connection.test.ts
- [[{ isAddonEnabledMock }]] - code - server/tests/integration/oauth.test.ts
- [[{ testDb, dbMock }_1]] - code - server/tests/integration/api-docs.test.ts
- [[{ testDb, dbMock }_2]] - code - server/tests/integration/assignments.test.ts
- [[{ testDb, dbMock }_3]] - code - server/tests/integration/atlas.test.ts
- [[{ testDb, dbMock }_5]] - code - server/tests/integration/backup.test.ts
- [[{ testDb, dbMock }_6]] - code - server/tests/integration/bootstrap.test.ts
- [[{ testDb, dbMock }_7]] - code - server/tests/integration/budget.test.ts
- [[{ testDb, dbMock }_8]] - code - server/tests/integration/categories.test.ts
- [[{ testDb, dbMock }_9]] - code - server/tests/integration/collab.test.ts
- [[{ testDb, dbMock }_10]] - code - server/tests/integration/dayNotes.test.ts
- [[{ testDb, dbMock }_12]] - code - server/tests/integration/days.test.ts
- [[{ testDb, dbMock }_13]] - code - server/tests/integration/files.test.ts
- [[{ testDb, dbMock }_14]] - code - server/tests/integration/immich.test.ts
- [[{ testDb, dbMock }_15]] - code - server/tests/integration/journey.test.ts
- [[{ testDb, dbMock }_16]] - code - server/tests/integration/maps.test.ts
- [[{ testDb, dbMock }_17]] - code - server/tests/integration/mcp.test.ts
- [[{ testDb, dbMock }_20]] - code - server/tests/integration/misc.test.ts
- [[{ testDb, dbMock }_21]] - code - server/tests/integration/notifications.test.ts
- [[{ testDb, dbMock }_22]] - code - server/tests/integration/oauth.test.ts
- [[{ testDb, dbMock }_24]] - code - server/tests/integration/packing.test.ts
- [[{ testDb, dbMock }_25]] - code - server/tests/integration/places.test.ts
- [[{ testDb, dbMock }_26]] - code - server/tests/integration/profile.test.ts
- [[{ testDb, dbMock }_27]] - code - server/tests/integration/reservations.test.ts
- [[{ testDb, dbMock }_28]] - code - server/tests/integration/security.test.ts
- [[{ testDb, dbMock }_29]] - code - server/tests/integration/settings.test.ts
- [[{ testDb, dbMock }_32]] - code - server/tests/integration/tags.test.ts
- [[{ testDb, dbMock }_33]] - code - server/tests/integration/todo.test.ts
- [[{ testDb, dbMock }_35]] - code - server/tests/integration/vacay.test.ts
- [[{ testDb, dbMock }_67]] - code - server/tests/unit/services/categoryService.test.ts
- [[{ testDb, dbMock }_83]] - code - server/tests/unit/services/settingsService.test.ts
- [[{ testDb, dbMock }_84]] - code - server/tests/unit/services/tagService.test.ts
- [[{ testDb, dbMock }_92]] - code - server/tests/websocket/connection.test.ts

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Server_Tests_Integration_Tests
SORT file.name ASC
```

## Connections to other communities
- 108 edges to [[_COMMUNITY_Server Tests Unit Tests]]
- 99 edges to [[_COMMUNITY_Server Tests Unit Tests_1]]
- 96 edges to [[_COMMUNITY_Server Tests Helpers Tests]]
- 68 edges to [[_COMMUNITY_Server Tests Mcp Tests]]
- 44 edges to [[_COMMUNITY_Server Services Tests Tests]]
- 35 edges to [[_COMMUNITY_Server Tests Unit Tests_2]]
- 13 edges to [[_COMMUNITY_Server Services Oauthservice Tests]]
- 13 edges to [[_COMMUNITY_Server Services Host Tests]]
- 11 edges to [[_COMMUNITY_Server Services Oidcservice Tests]]
- 11 edges to [[_COMMUNITY_Server Services Nest Tests]]
- 7 edges to [[_COMMUNITY_Platform Server Nest Tests]]
- 7 edges to [[_COMMUNITY_Server Services Authservice Tests]]
- 4 edges to [[_COMMUNITY_Server Services Adminservice Tests]]
- 4 edges to [[_COMMUNITY_Server Services Journeyservice Tests]]
- 4 edges to [[_COMMUNITY_Server Services Vacayservice Tests]]
- 4 edges to [[_COMMUNITY_Server Services Settingsservice Tests]]
- 3 edges to [[_COMMUNITY_Server Scheduler Services Tests]]
- 3 edges to [[_COMMUNITY_Server Nest Health Tests]]
- 3 edges to [[_COMMUNITY_Server Nest Zod Tests]]
- 3 edges to [[_COMMUNITY_Server Nest Auth Tests]]
- 3 edges to [[_COMMUNITY_Server Plugins Services Tests]]
- 2 edges to [[_COMMUNITY_Server Db Seeds Tests]]
- 2 edges to [[_COMMUNITY_Auth Server Nest Tests]]
- 2 edges to [[_COMMUNITY_Server Services Collabservice Tests]]
- 1 edge to [[_COMMUNITY_Server Services Mapsservice Tests]]
- 1 edge to [[_COMMUNITY_Server Services Placeservice Tests]]
- 1 edge to [[_COMMUNITY_Server Tests Unit Tests_3]]
- 1 edge to [[_COMMUNITY_Server Tests Websocket Tests]]

## Top bridge nodes
- [[test-db.ts]] - degree 112, connects to 16 communities
- [[createTables()]] - degree 104, connects to 14 communities
- [[schema.ts]] - degree 101, connects to 13 communities
- [[resetTestDb()]] - degree 94, connects to 12 communities
- [[bootstrap.ts]] - degree 51, connects to 9 communities
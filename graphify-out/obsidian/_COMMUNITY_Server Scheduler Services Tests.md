---
type: community
cohesion: 0.07
members: 59
---

# Server Scheduler Services Tests

**Cohesion:** 0.07 - loosely connected
**Members:** 59 nodes

## Members
- [[.prepare()_4]] - code - server/src/scheduler.ts
- [[ACTION_LABELS]] - code - server/src/services/auditLog.ts
- [[BackupSettings]] - code - server/src/scheduler.ts
- [[BackupSettings_1]] - code - server/tests/unit/scheduler.test.ts
- [[C]] - code - server/src/services/auditLog.ts
- [[LOG_LEVEL]] - code - server/src/services/auditLog.ts
- [[NOW_SEC]] - code - server/tests/unit/idempotency-cleanup.test.ts
- [[PurgeDb]] - code - server/src/scheduler.ts
- [[RFC-7591_1]] - concept - server/src/middleware/globalMiddleware.ts
- [[RFC-8414]] - concept - server/src/middleware/globalMiddleware.ts
- [[RFC-9728_1]] - concept - server/src/middleware/globalMiddleware.ts
- [[VALID_DAYS_OF_WEEK]] - code - server/src/scheduler.ts
- [[VALID_HOURS]] - code - server/src/scheduler.ts
- [[VALID_INTERVALS]] - code - server/src/scheduler.ts
- [[applyGlobalMiddleware()]] - code - server/src/middleware/globalMiddleware.ts
- [[auditLog.ts]] - code - server/src/services/auditLog.ts
- [[autoBackupTimestampMs()]] - code - server/src/scheduler.ts
- [[backupsDir_1]] - code - server/src/scheduler.ts
- [[buildCronExpression()]] - code - server/src/scheduler.ts
- [[buildInfoSummary()]] - code - server/src/services/auditLog.ts
- [[cleanupOldBackups()]] - code - server/src/scheduler.ts
- [[dataDir_2]] - code - server/src/scheduler.ts
- [[formatTs()]] - code - server/src/services/auditLog.ts
- [[getDefaults()]] - code - server/src/scheduler.ts
- [[globalMiddleware.ts]] - code - server/src/middleware/globalMiddleware.ts
- [[idempotency-cleanup.test.ts]] - code - server/tests/unit/idempotency-cleanup.test.ts
- [[idempotencyTtlSeconds()]] - code - server/src/scheduler.ts
- [[immich.controller.ts]] - code - server/src/nest/memories/immich.controller.ts
- [[insertKey()]] - code - server/tests/unit/idempotency-cleanup.test.ts
- [[isoFilename()]] - code - server/tests/unit/scheduler.test.ts
- [[loadSettings()]] - code - server/src/scheduler.ts
- [[logDebug()]] - code - server/src/services/auditLog.ts
- [[logError()_1]] - code - server/src/services/auditLog.ts
- [[logFilePath]] - code - server/src/services/auditLog.ts
- [[logInfo()_1]] - code - server/src/services/auditLog.ts
- [[logWarn()_1]] - code - server/src/services/auditLog.ts
- [[logsDir]] - code - server/src/services/auditLog.ts
- [[purgeExpiredIdempotencyKeys()]] - code - server/src/scheduler.ts
- [[resolveUserEmail()]] - code - server/src/services/auditLog.ts
- [[rotateIfNeeded()]] - code - server/src/services/auditLog.ts
- [[runBackup()]] - code - server/src/scheduler.ts
- [[saveSettings()]] - code - server/src/scheduler.ts
- [[scheduler.test.ts]] - code - server/tests/unit/scheduler.test.ts
- [[scheduler.ts]] - code - server/src/scheduler.ts
- [[settings()]] - code - server/tests/unit/scheduler.test.ts
- [[settingsFile]] - code - server/src/scheduler.ts
- [[start()]] - code - server/src/scheduler.ts
- [[startAirTrailSync()]] - code - server/src/scheduler.ts
- [[startDemoReset()]] - code - server/src/scheduler.ts
- [[startIdempotencyCleanup()]] - code - server/src/scheduler.ts
- [[startPlacePhotoCacheCleanup()]] - code - server/src/scheduler.ts
- [[startTodoReminders()]] - code - server/src/scheduler.ts
- [[startTrekPhotoCacheCleanup()]] - code - server/src/scheduler.ts
- [[startTripReminders()]] - code - server/src/scheduler.ts
- [[startVersionCheck()]] - code - server/src/scheduler.ts
- [[stop()_2]] - code - server/src/scheduler.ts
- [[uploadsDir_1]] - code - server/src/scheduler.ts
- [[writeAudit()]] - code - server/src/services/auditLog.ts
- [[writeToFile()]] - code - server/src/services/auditLog.ts

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Server_Scheduler_Services_Tests
SORT file.name ASC
```

## Connections to other communities
- 26 edges to [[_COMMUNITY_Admin Server Nest Tests]]
- 22 edges to [[_COMMUNITY_Server Services Notifications Tests]]
- 17 edges to [[_COMMUNITY_Server Services Oauthservice Tests]]
- 13 edges to [[_COMMUNITY_Auth Server Nest Tests]]
- 12 edges to [[_COMMUNITY_Server Services Airtrail Tests]]
- 11 edges to [[_COMMUNITY_Server Nest Auth Tests]]
- 9 edges to [[_COMMUNITY_Backup Server Nest Tests]]
- 8 edges to [[_COMMUNITY_Oauth Server Nest Tests]]
- 6 edges to [[_COMMUNITY_Server Auth Middleware Tests]]
- 6 edges to [[_COMMUNITY_Trips Server Nest (Server)_1]]
- 5 edges to [[_COMMUNITY_Server Services Nest Tests]]
- 5 edges to [[_COMMUNITY_Memories Server Services Tests]]
- 4 edges to [[_COMMUNITY_Trip Invite Server (Server)]]
- 3 edges to [[_COMMUNITY_Server Tests Integration Tests]]
- 3 edges to [[_COMMUNITY_Controller Server Nest (Server)]]
- 3 edges to [[_COMMUNITY_Server Services Unsplashservice Tests]]
- 3 edges to [[_COMMUNITY_Server Services Authservice Tests]]
- 2 edges to [[_COMMUNITY_Plugins Server Nest Tests]]
- 2 edges to [[_COMMUNITY_Memories Server Nest Tests]]
- 2 edges to [[_COMMUNITY_Trips Server Nest Tests]]
- 1 edge to [[_COMMUNITY_Journey Server Nest Tests]]
- 1 edge to [[_COMMUNITY_Memories Server Nest Tests_1]]
- 1 edge to [[_COMMUNITY_Collections Server Nest Tests]]
- 1 edge to [[_COMMUNITY_Server Plugins Services Tests]]

## Top bridge nodes
- [[writeAudit()]] - degree 80, connects to 14 communities
- [[auditLog.ts]] - degree 46, connects to 12 communities
- [[immich.controller.ts]] - degree 13, connects to 9 communities
- [[logInfo()_1]] - degree 28, connects to 6 communities
- [[scheduler.ts]] - degree 36, connects to 3 communities
---
type: community
cohesion: 0.07
members: 39
---

# Server Tests Unit Tests

**Cohesion:** 0.07 - loosely connected
**Members:** 39 nodes

## Members
- [[TEST_NOTICE]] - code - server/tests/integration/systemNotices.test.ts
- [[TRIP_INVITE]] - code - server/tests/unit/services/channelOverride.test.ts
- [[channelOverride.test.ts]] - code - server/tests/unit/services/channelOverride.test.ts
- [[countAllNotifications()]] - code - server/tests/unit/services/notificationService.test.ts
- [[createAdmin()]] - code - server/tests/helpers/factories.ts
- [[disableNotificationPref()]] - code - server/tests/helpers/factories.ts
- [[getInAppNotifications()]] - code - server/tests/unit/services/notificationService.test.ts
- [[getLastNotifiedVersion()]] - code - server/tests/unit/services/versionNotification.test.ts
- [[getNotificationCount()]] - code - server/tests/unit/services/versionNotification.test.ts
- [[inAppNotificationPrefs.test.ts]] - code - server/tests/unit/services/inAppNotificationPrefs.test.ts
- [[insertBooleanNotification()_1]] - code - server/tests/unit/services/inAppNotificationPrefs.test.ts
- [[insertSimpleNotification()_1]] - code - server/tests/unit/services/inAppNotificationPrefs.test.ts
- [[mockGitHubFetchFailure()]] - code - server/tests/unit/services/versionNotification.test.ts
- [[mockGitHubLatest()]] - code - server/tests/unit/services/versionNotification.test.ts
- [[notificationPreferencesService.test.ts]] - code - server/tests/unit/services/notificationPreferencesService.test.ts
- [[notificationService.test.ts]] - code - server/tests/unit/services/notificationService.test.ts
- [[rogue()]] - code - server/tests/unit/services/channelOverride.test.ts
- [[rogueGlobal]] - code - server/tests/unit/services/channelOverride.test.ts
- [[rogueSend]] - code - server/tests/unit/services/channelOverride.test.ts
- [[setAdminNtfyTopic()]] - code - server/tests/unit/services/notificationService.test.ts
- [[setAdminWebhookUrl()]] - code - server/tests/unit/services/notificationService.test.ts
- [[setAppSetting()]] - code - server/tests/helpers/factories.ts
- [[setNotificationChannels()]] - code - server/tests/helpers/factories.ts
- [[setSmtp()]] - code - server/tests/unit/services/channelOverride.test.ts
- [[setSmtp()_1]] - code - server/tests/unit/services/notificationService.test.ts
- [[setUserNtfyTopic()]] - code - server/tests/unit/services/notificationService.test.ts
- [[setUserWebhookUrl()]] - code - server/tests/unit/services/notificationService.test.ts
- [[setupCollisionAdmin()]] - code - server/tests/integration/systemNotices.test.ts
- [[systemNotices.test.ts]] - code - server/tests/integration/systemNotices.test.ts
- [[versionNotification.test.ts]] - code - server/tests/unit/services/versionNotification.test.ts
- [[{ broadcastMock }_21]] - code - server/tests/unit/services/inAppNotificationPrefs.test.ts
- [[{ sendMailMock }]] - code - server/tests/unit/services/channelOverride.test.ts
- [[{ sendMailMock, fetchMock, broadcastMock }]] - code - server/tests/unit/services/notificationService.test.ts
- [[{ testDb, dbMock }_31]] - code - server/tests/integration/systemNotices.test.ts
- [[{ testDb, dbMock }_68]] - code - server/tests/unit/services/channelOverride.test.ts
- [[{ testDb, dbMock }_72]] - code - server/tests/unit/services/inAppNotificationPrefs.test.ts
- [[{ testDb, dbMock }_77]] - code - server/tests/unit/services/notificationPreferencesService.test.ts
- [[{ testDb, dbMock }_78]] - code - server/tests/unit/services/notificationService.test.ts
- [[{ testDb, dbMock }_91]] - code - server/tests/unit/services/versionNotification.test.ts

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Server_Tests_Unit_Tests
SORT file.name ASC
```

## Connections to other communities
- 35 edges to [[_COMMUNITY_Server Tests Integration Tests]]
- 22 edges to [[_COMMUNITY_Server Services Notifications Tests]]
- 12 edges to [[_COMMUNITY_Server Tests Unit Tests]]
- 12 edges to [[_COMMUNITY_Server Tests Helpers Tests]]
- 6 edges to [[_COMMUNITY_Server Services Tests Tests]]
- 4 edges to [[_COMMUNITY_Server Services Adminservice Tests]]
- 4 edges to [[_COMMUNITY_Server Services Collabservice Tests]]
- 4 edges to [[_COMMUNITY_Server Systemnotices Conditions Tests]]
- 3 edges to [[_COMMUNITY_Plugins Server Nest Tests_2]]
- 2 edges to [[_COMMUNITY_Server Package Overrides (Server)]]
- 1 edge to [[_COMMUNITY_Server Tests Unit Tests_1]]
- 1 edge to [[_COMMUNITY_Server Tests Mcp Tests]]
- 1 edge to [[_COMMUNITY_Server Services Authservice Tests]]

## Top bridge nodes
- [[createAdmin()]] - degree 21, connects to 7 communities
- [[channelOverride.test.ts]] - degree 28, connects to 6 communities
- [[notificationService.test.ts]] - degree 27, connects to 6 communities
- [[notificationPreferencesService.test.ts]] - degree 22, connects to 5 communities
- [[systemNotices.test.ts]] - degree 20, connects to 5 communities
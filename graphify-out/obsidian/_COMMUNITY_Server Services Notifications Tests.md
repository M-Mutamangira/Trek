---
type: community
cohesion: 0.05
members: 98
---

# Server Services Notifications Tests

**Cohesion:** 0.05 - loosely connected
**Members:** 98 nodes

## Members
- [[.isConfiguredFor()]] - code - server/src/services/notifications/channelRegistry.ts
- [[.isInstanceConfigured()]] - code - server/src/services/notifications/channelRegistry.ts
- [[.sendGlobal()]] - code - server/src/services/notifications/channelRegistry.ts
- [[.sendToUser()]] - code - server/src/services/notifications/channelRegistry.ts
- [[.supportsEvent()]] - code - server/src/services/notifications/channelRegistry.ts
- [[.test()_5]] - code - server/src/services/notifications/channelRegistry.ts
- [[.testChannel()_1]] - code - server/src/nest/notifications/notifications.service.ts
- [[ADMIN_GLOBAL_CHANNELS]] - code - server/src/services/notificationPreferencesService.ts
- [[ADMIN_SCOPED_EVENTS]] - code - server/src/services/notificationPreferencesService.ts
- [[ALL_EVENT_TYPES]] - code - server/src/services/notificationPreferencesService.ts
- [[AdminGlobalChannel]] - code - server/src/services/notificationPreferencesService.ts
- [[BUILTIN_CHANNELS]] - code - server/src/services/notifications/builtins.ts
- [[ChannelDescriptor_1]] - code - server/src/services/notificationPreferencesService.ts
- [[ChannelMessage]] - code - server/src/services/notifications/channelRegistry.ts
- [[EVENT_NOTIFICATION_CONFIG]] - code - server/src/services/notificationService.ts
- [[EventNotifConfig]] - code - server/src/services/notificationService.ts
- [[ExternalChannel]] - code - server/src/services/notifications/channelRegistry.ts
- [[FALLBACK_EVENT_CONFIG]] - code - server/src/services/notificationService.ts
- [[MSG]] - code - server/tests/unit/services/channelRegistry.test.ts
- [[NTFY_DEFAULT_META]] - code - server/src/services/notifications.ts
- [[NTFY_EVENT_META]] - code - server/src/services/notifications.ts
- [[NotifChannel]] - code - server/src/services/notificationPreferencesService.ts
- [[NotifEventType]] - code - server/src/services/notificationPreferencesService.ts
- [[NotificationInput]] - code - server/src/services/inAppNotifications.ts
- [[NotificationPayload]] - code - server/src/services/notificationService.ts
- [[NtfyConfig]] - code - server/src/nest/notifications/notifications.service.ts
- [[NtfyConfig_1]] - code - server/src/services/notifications.ts
- [[PreferencesMatrix_1]] - code - server/src/nest/notifications/notifications.service.ts
- [[PreferencesMatrix_2]] - code - server/src/services/notificationPreferencesService.ts
- [[RespondResult]] - code - server/src/nest/notifications/notifications.service.ts
- [[SmtpConfig]] - code - server/src/services/notifications.ts
- [[_EvtBwd]] - code - server/src/services/notifications.ts
- [[_EvtFwd]] - code - server/src/services/notifications.ts
- [[__resetChannelsForTest()]] - code - server/src/services/notifications/channelRegistry.ts
- [[_eventKeyDriftGuard]] - code - server/src/services/notifications.ts
- [[allCombos()]] - code - server/src/services/notificationPreferencesService.ts
- [[applyUserChannelPrefs()]] - code - server/src/services/notificationPreferencesService.ts
- [[buildEmailHtml()]] - code - server/src/services/notifications.ts
- [[buildPasswordResetHtml()]] - code - server/src/services/notifications.ts
- [[buildWebhookBody()]] - code - server/src/services/notifications.ts
- [[builtins]] - code - server/src/services/notifications/channelRegistry.ts
- [[builtins.ts]] - code - server/src/services/notifications/builtins.ts
- [[channelRegistry.test.ts]] - code - server/tests/unit/services/channelRegistry.test.ts
- [[channelRegistry.ts]] - code - server/src/services/notifications/channelRegistry.ts
- [[combosFor()]] - code - server/src/services/notificationPreferencesService.ts
- [[deleteAll()]] - code - server/src/services/inAppNotifications.ts
- [[describeChannels()]] - code - server/src/services/notificationPreferencesService.ts
- [[emailChannel]] - code - server/src/services/notifications/builtins.ts
- [[encodeHeaderValue()]] - code - server/src/services/notifications.ts
- [[escapeHtml()_1]] - code - server/src/services/notifications.ts
- [[fakeChannel()]] - code - server/tests/unit/services/channelRegistry.test.ts
- [[getActiveChannels()]] - code - server/src/services/notificationPreferencesService.ts
- [[getAdminGlobalPref()]] - code - server/src/services/notificationPreferencesService.ts
- [[getAdminNtfyConfig()]] - code - server/src/services/notifications.ts
- [[getAdminWebhookUrl()]] - code - server/src/services/notifications.ts
- [[getAppSetting()]] - code - server/src/services/notificationPreferencesService.ts
- [[getAppSetting()_1]] - code - server/src/services/notifications.ts
- [[getChannel()]] - code - server/src/services/notifications/channelRegistry.ts
- [[getEventText()]] - code - server/src/services/notifications.ts
- [[getPreferencesMatrix()]] - code - server/src/services/notificationPreferencesService.ts
- [[getSmtpConfig()]] - code - server/src/services/notifications.ts
- [[getUserEmail()]] - code - server/src/services/notifications.ts
- [[getUserLanguage()]] - code - server/src/services/notifications.ts
- [[getUserNtfyConfig()]] - code - server/src/services/notifications.ts
- [[getUserWebhookUrl()]] - code - server/src/services/notifications.ts
- [[inAppDescriptor()]] - code - server/src/services/notificationPreferencesService.ts
- [[isAdminGlobalChannel()]] - code - server/src/services/notificationPreferencesService.ts
- [[isChannelActive()]] - code - server/src/services/notificationPreferencesService.ts
- [[isEnabledForEvent()]] - code - server/src/services/notificationPreferencesService.ts
- [[isPluginChannelId()]] - code - server/src/services/notifications/channelRegistry.ts
- [[isSmtpConfigured()]] - code - server/src/services/notifications.ts
- [[isWebhookConfigured()]] - code - server/src/services/notificationPreferencesService.ts
- [[listChannels()]] - code - server/src/services/notifications/channelRegistry.ts
- [[notificationPreferencesService.ts]] - code - server/src/services/notificationPreferencesService.ts
- [[notificationService.ts]] - code - server/src/services/notificationService.ts
- [[notifications.service.ts]] - code - server/src/nest/notifications/notifications.service.ts
- [[notifications.test.ts_1]] - code - server/tests/unit/services/notifications.test.ts
- [[notifications.ts_2]] - code - server/src/services/notifications.ts
- [[ntfyChannel]] - code - server/src/services/notifications/builtins.ts
- [[registerBuiltinChannels()]] - code - server/src/services/notifications/builtins.ts
- [[registerChannel()]] - code - server/src/services/notifications/channelRegistry.ts
- [[resolveNtfyUrl()]] - code - server/src/services/notifications.ts
- [[resolveRecipients()]] - code - server/src/services/inAppNotifications.ts
- [[sanitizePluginChannels()]] - code - server/src/services/notifications/channelRegistry.ts
- [[send()_5]] - code - server/src/services/notificationService.ts
- [[sendEmail()]] - code - server/src/services/notifications.ts
- [[sendNtfy()]] - code - server/src/services/notifications.ts
- [[sendPasswordResetEmail()]] - code - server/src/services/notifications.ts
- [[sendWebhook()]] - code - server/src/services/notifications.ts
- [[setAdminGlobalPref()]] - code - server/src/services/notificationPreferencesService.ts
- [[setAdminPreferences()]] - code - server/src/services/notificationPreferencesService.ts
- [[setPreferences()]] - code - server/src/services/notificationPreferencesService.ts
- [[shouldSendToUser()]] - code - server/src/services/notificationService.ts
- [[supportsAllButSynology()]] - code - server/src/services/notifications/builtins.ts
- [[testNtfy()]] - code - server/src/services/notifications.ts
- [[testSmtp()]] - code - server/src/services/notifications.ts
- [[testWebhook()]] - code - server/src/services/notifications.ts
- [[webhookChannel]] - code - server/src/services/notifications/builtins.ts

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Server_Services_Notifications_Tests
SORT file.name ASC
```

## Connections to other communities
- 22 edges to [[_COMMUNITY_Server Scheduler Services Tests]]
- 22 edges to [[_COMMUNITY_Server Tests Unit Tests_2]]
- 17 edges to [[_COMMUNITY_Server Services Collabservice Tests]]
- 12 edges to [[_COMMUNITY_Notifications Server Nest Tests]]
- 10 edges to [[_COMMUNITY_Server Services Settingsservice Tests]]
- 9 edges to [[_COMMUNITY_Server Services Oauthservice Tests]]
- 9 edges to [[_COMMUNITY_Server Utils Ssrfguard Tests]]
- 8 edges to [[_COMMUNITY_Plugins Server Nest Tests_2]]
- 6 edges to [[_COMMUNITY_Server Services Nest Tests]]
- 4 edges to [[_COMMUNITY_Admin Server Nest Tests]]
- 3 edges to [[_COMMUNITY_Server Memories Services Tests]]
- 2 edges to [[_COMMUNITY_Server Nest Auth Tests]]
- 2 edges to [[_COMMUNITY_Server Services Mcp Tests]]
- 2 edges to [[_COMMUNITY_Server Services Host Tests]]
- 2 edges to [[_COMMUNITY_Plugins Server Nest Tests_1]]
- 2 edges to [[_COMMUNITY_Server Services Adminservice Tests]]
- 2 edges to [[_COMMUNITY_Memories Server Services (Server)]]
- 1 edge to [[_COMMUNITY_Plugin Server Plugins Tests]]
- 1 edge to [[_COMMUNITY_Collab Server Nest Tests]]
- 1 edge to [[_COMMUNITY_E2e Server Tests Tests_1]]
- 1 edge to [[_COMMUNITY_Oauth Server Nest Tests]]
- 1 edge to [[_COMMUNITY_Oidc Server Nest Tests]]
- 1 edge to [[_COMMUNITY_Packing Server Nest Tests]]
- 1 edge to [[_COMMUNITY_Platform Server Nest Tests]]
- 1 edge to [[_COMMUNITY_Server Plugins Plugin Tests]]
- 1 edge to [[_COMMUNITY_Reservations Server Nest Tests]]
- 1 edge to [[_COMMUNITY_Trips Server Nest Tests]]
- 1 edge to [[_COMMUNITY_Server Services Collectionsservice (Server)]]
- 1 edge to [[_COMMUNITY_Server Services Mapsservice Tests]]
- 1 edge to [[_COMMUNITY_Server Services Vacayservice Tests]]
- 1 edge to [[_COMMUNITY_Server Services Transitservice Tests]]
- 1 edge to [[_COMMUNITY_Server Services Passkeyservice Tests]]

## Top bridge nodes
- [[notificationService.ts]] - degree 44, connects to 16 communities
- [[notifications.ts_2]] - degree 61, connects to 13 communities
- [[send()_5]] - degree 23, connects to 9 communities
- [[notificationPreferencesService.ts]] - degree 39, connects to 5 communities
- [[notifications.service.ts]] - degree 29, connects to 4 communities
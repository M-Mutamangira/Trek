---
type: community
cohesion: 0.16
members: 16
---

# Notification Shared Schema Tests

**Cohesion:** 0.16 - loosely connected
**Members:** 16 nodes

## Members
- [[ChannelTestResult]] - code - shared/src/notification/notification.schema.ts
- [[InAppListResult]] - code - shared/src/notification/notification.schema.ts
- [[NotificationRespondRequest]] - code - shared/src/notification/notification.schema.ts
- [[PreferencesUpdateRequest]] - code - shared/src/notification/notification.schema.ts
- [[UnreadCountResult]] - code - shared/src/notification/notification.schema.ts
- [[channelTestResultSchema]] - code - shared/src/notification/notification.schema.ts
- [[inAppListResultSchema]] - code - shared/src/notification/notification.schema.ts
- [[notification.schema.spec.ts]] - code - shared/src/notification/notification.schema.spec.ts
- [[notification.schema.ts]] - code - shared/src/notification/notification.schema.ts
- [[notificationRespondRequestSchema]] - code - shared/src/notification/notification.schema.ts
- [[notificationRowSchema]] - code - shared/src/notification/notification.schema.ts
- [[preferencesUpdateRequestSchema]] - code - shared/src/notification/notification.schema.ts
- [[testNtfyRequestSchema]] - code - shared/src/notification/notification.schema.ts
- [[testSmtpRequestSchema]] - code - shared/src/notification/notification.schema.ts
- [[testWebhookRequestSchema]] - code - shared/src/notification/notification.schema.ts
- [[unreadCountResultSchema]] - code - shared/src/notification/notification.schema.ts

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Notification_Shared_Schema_Tests
SORT file.name ASC
```

## Connections to other communities
- 6 edges to [[_COMMUNITY_Client Components Admin Tests]]
- 1 edge to [[_COMMUNITY_Shared Schema Airtrail Tests]]

## Top bridge nodes
- [[notification.schema.ts]] - degree 16, connects to 1 community
- [[channelTestResultSchema]] - degree 3, connects to 1 community
- [[inAppListResultSchema]] - degree 3, connects to 1 community
- [[InAppListResult]] - degree 2, connects to 1 community
- [[NotificationRespondRequest]] - degree 2, connects to 1 community
---
type: community
cohesion: 0.11
members: 33
---

# Server Systemnotices Conditions Tests

**Cohesion:** 0.11 - loosely connected
**Members:** 33 nodes

## Members
- [[Admin Screenshot]] - image - docs/screenshots/admin.png
- [[ConditionContext]] - code - server/src/systemNotices/conditions.ts
- [[Display]] - code - server/src/systemNotices/types.ts
- [[English Translations]] - code - client/src/i18n/translations/en.ts
- [[NoticeCondition]] - code - server/src/systemNotices/types.ts
- [[NoticeCta]] - code - server/src/systemNotices/types.ts
- [[NoticeMedia]] - code - server/src/systemNotices/types.ts
- [[RETIRED_NOTICE_IDS]] - code - server/src/systemNotices/registry.ts
- [[SYSTEM_NOTICES]] - code - server/src/systemNotices/registry.ts
- [[Severity_1]] - code - server/src/systemNotices/types.ts
- [[System Notices Documentation]] - document - docs/system-notices.md
- [[SystemNotice]] - code - server/src/systemNotices/types.ts
- [[SystemNoticeDTO_1]] - code - server/src/systemNotices/types.ts
- [[base_3]] - code - server/tests/unit/systemNotices/versionRange.test.ts
- [[baseCtx]] - code - server/tests/unit/systemNotices/conditions.test.ts
- [[baseNotice]] - code - server/tests/unit/systemNotices/conditions.test.ts
- [[collectRegisteredActionIds()]] - code - server/tests/unit/systemNotices/registry.test.ts
- [[conditions.test.ts]] - code - server/tests/unit/systemNotices/conditions.test.ts
- [[conditions.ts]] - code - server/src/systemNotices/conditions.ts
- [[customPredicates]] - code - server/src/systemNotices/conditions.ts
- [[dismissNotice()]] - code - server/src/systemNotices/service.ts
- [[evaluate()]] - code - server/src/systemNotices/conditions.ts
- [[evaluateOne()]] - code - server/src/systemNotices/conditions.ts
- [[getActiveNoticesFor()]] - code - server/src/systemNotices/service.ts
- [[getCurrentAppVersion()]] - code - server/src/systemNotices/service.ts
- [[isNoticeVersionActive()]] - code - server/src/systemNotices/service.ts
- [[registerPredicate()]] - code - server/src/systemNotices/conditions.ts
- [[registry.test.ts_1]] - code - server/tests/unit/systemNotices/registry.test.ts
- [[registry.ts]] - code - server/src/systemNotices/registry.ts
- [[service.ts]] - code - server/src/systemNotices/service.ts
- [[severityWeight()]] - code - server/src/systemNotices/service.ts
- [[types.ts_1]] - code - server/src/systemNotices/types.ts
- [[versionRange.test.ts]] - code - server/tests/unit/systemNotices/versionRange.test.ts

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Server_Systemnotices_Conditions_Tests
SORT file.name ASC
```

## Connections to other communities
- 4 edges to [[_COMMUNITY_Server Services Nest Tests]]
- 4 edges to [[_COMMUNITY_System Notices Server Tests]]
- 4 edges to [[_COMMUNITY_Server Tests Unit Tests_2]]
- 3 edges to [[_COMMUNITY_Import Server Nest Tests]]
- 1 edge to [[_COMMUNITY_Client Components Systemnotices Tests]]
- 1 edge to [[_COMMUNITY_Slidingtabs Client Components Tests]]
- 1 edge to [[_COMMUNITY_Server Services Adminservice Tests]]

## Top bridge nodes
- [[service.ts]] - degree 16, connects to 2 communities
- [[conditions.ts]] - degree 14, connects to 2 communities
- [[registry.ts]] - degree 12, connects to 2 communities
- [[getActiveNoticesFor()]] - degree 7, connects to 2 communities
- [[System Notices Documentation]] - degree 6, connects to 2 communities
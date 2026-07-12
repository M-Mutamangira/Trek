---
type: community
cohesion: 0.16
members: 20
---

# Plugins Server Plugin Tests

**Cohesion:** 0.16 - loosely connected
**Members:** 20 nodes

## Members
- [[.auditLog()_1]] - code - server/src/nest/plugins/plugins.service.ts
- [[.mine()]] - code - server/src/nest/plugins/plugin-activity.controller.ts
- [[.prepare()_2]] - code - server/src/nest/plugins/host/plugin-audit.ts
- [[AuditDb]] - code - server/src/nest/plugins/host/plugin-audit.ts
- [[AuditEntry_1]] - code - server/src/nest/plugins/host/plugin-audit.ts
- [[Get_43]] - code
- [[MAX_AUDIT_ROWS]] - code - server/src/nest/plugins/host/plugin-audit.ts
- [[Query_14]] - code
- [[Req_18]] - code
- [[appendAudit()]] - code - server/src/nest/plugins/host/plugin-audit.ts
- [[appendsSincePrune]] - code - server/src/nest/plugins/host/plugin-audit.ts
- [[auditResource()]] - code - server/src/nest/plugins/host/plugin-audit.ts
- [[envInt()]] - code - server/src/nest/plugins/host/plugin-audit.ts
- [[isAuditable()]] - code - server/src/nest/plugins/host/plugin-audit.ts
- [[makeDb()_3]] - code - server/tests/unit/plugins/plugin-audit.test.ts
- [[plugin-audit.test.ts]] - code - server/tests/unit/plugins/plugin-audit.test.ts
- [[plugin-audit.ts]] - code - server/src/nest/plugins/host/plugin-audit.ts
- [[pruneAudit()]] - code - server/src/nest/plugins/host/plugin-audit.ts
- [[readAudit()]] - code - server/src/nest/plugins/host/plugin-audit.ts
- [[readAuditForUser()]] - code - server/src/nest/plugins/host/plugin-audit.ts

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Plugins_Server_Plugin_Tests
SORT file.name ASC
```

## Connections to other communities
- 7 edges to [[_COMMUNITY_Host Server Plugins Tests]]
- 4 edges to [[_COMMUNITY_Plugins Server Nest Tests]]
- 3 edges to [[_COMMUNITY_Server Services Host Tests]]
- 2 edges to [[_COMMUNITY_Plugins Server Nest Tests_2]]
- 1 edge to [[_COMMUNITY_Server Tests Unit Tests]]
- 1 edge to [[_COMMUNITY_Plugins Server Nest Tests_3]]
- 1 edge to [[_COMMUNITY_Plugins Server Nest Tests_4]]

## Top bridge nodes
- [[plugin-audit.ts]] - degree 18, connects to 4 communities
- [[.auditLog()_1]] - degree 3, connects to 2 communities
- [[appendAudit()]] - degree 6, connects to 1 community
- [[.mine()]] - degree 6, connects to 1 community
- [[readAudit()]] - degree 5, connects to 1 community
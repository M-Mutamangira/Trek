---
type: community
cohesion: 0.36
members: 12
---

# Server Plugins Egress Tests

**Cohesion:** 0.36 - loosely connected
**Members:** 12 nodes

## Members
- [[ConnectTarget]] - code - server/src/nest/plugins/runtime/egress-policy.ts
- [[classifyConnect()]] - code - server/src/nest/plugins/runtime/egress-policy.ts
- [[dgramConnectTarget()]] - code - server/src/nest/plugins/runtime/egress-policy.ts
- [[dgramSendTarget()]] - code - server/src/nest/plugins/runtime/egress-policy.ts
- [[egress-policy.test.ts]] - code - server/tests/unit/plugins/egress-policy.test.ts
- [[egress-policy.ts]] - code - server/src/nest/plugins/runtime/egress-policy.ts
- [[expandV6()]] - code - server/src/nest/plugins/runtime/egress-policy.ts
- [[installEgressGuard()]] - code - server/src/nest/plugins/runtime/plugin-host-entry.ts
- [[isBlockedIp()]] - code - server/src/nest/plugins/runtime/egress-policy.ts
- [[isIP()]] - code - server/tests/unit/plugins/egress-policy.test.ts
- [[makeHostAllow()]] - code - server/src/nest/plugins/runtime/egress-policy.ts
- [[unwrapConnectArgs()]] - code - server/src/nest/plugins/runtime/egress-policy.ts

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Server_Plugins_Egress_Tests
SORT file.name ASC
```

## Connections to other communities
- 8 edges to [[_COMMUNITY_Plugin Server Plugins Tests]]
- 3 edges to [[_COMMUNITY_Plugins Server Nest Tests_1]]
- 2 edges to [[_COMMUNITY_Server Tests Unit Tests]]
- 1 edge to [[_COMMUNITY_Client Components Admin Tests]]
- 1 edge to [[_COMMUNITY_Platform Server Nest Tests]]

## Top bridge nodes
- [[egress-policy.ts]] - degree 12, connects to 3 communities
- [[installEgressGuard()]] - degree 9, connects to 3 communities
- [[isBlockedIp()]] - degree 7, connects to 2 communities
- [[makeHostAllow()]] - degree 5, connects to 2 communities
- [[classifyConnect()]] - degree 5, connects to 1 community
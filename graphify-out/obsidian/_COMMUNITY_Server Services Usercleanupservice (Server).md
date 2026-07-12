---
type: community
cohesion: 0.83
members: 4
---

# Server Services Usercleanupservice (Server)

**Cohesion:** 0.83 - tightly connected
**Members:** 4 nodes

## Members
- [[cleanupUserReferences()]] - code - server/src/services/userCleanupService.ts
- [[deleteUserCompletely()]] - code - server/src/services/userCleanupService.ts
- [[erasePluginUserData()]] - code - server/src/services/userCleanupService.ts
- [[userCleanupService.ts]] - code - server/src/services/userCleanupService.ts

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Server_Services_Usercleanupservice_Server
SORT file.name ASC
```

## Connections to other communities
- 3 edges to [[_COMMUNITY_Server Services Adminservice Tests]]
- 3 edges to [[_COMMUNITY_Server Services Authservice Tests]]
- 3 edges to [[_COMMUNITY_Server Services Tripservice (Server)]]
- 2 edges to [[_COMMUNITY_Server Services Nest Tests]]
- 2 edges to [[_COMMUNITY_Server Plugins Services Tests]]
- 1 edge to [[_COMMUNITY_Server Supervisor Plugins Tests]]

## Top bridge nodes
- [[userCleanupService.ts]] - degree 10, connects to 6 communities
- [[deleteUserCompletely()]] - degree 7, connects to 2 communities
- [[erasePluginUserData()]] - degree 5, connects to 2 communities
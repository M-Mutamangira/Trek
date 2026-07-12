---
type: community
cohesion: 0.83
members: 4
---

# Server Services Passwordpolicy Tests

**Cohesion:** 0.83 - tightly connected
**Members:** 4 nodes

## Members
- [[COMMON_PASSWORDS]] - code - server/src/services/passwordPolicy.ts
- [[passwordPolicy.test.ts]] - code - server/tests/unit/services/passwordPolicy.test.ts
- [[passwordPolicy.ts]] - code - server/src/services/passwordPolicy.ts
- [[validatePassword()]] - code - server/src/services/passwordPolicy.ts

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Server_Services_Passwordpolicy_Tests
SORT file.name ASC
```

## Connections to other communities
- 5 edges to [[_COMMUNITY_Server Services Authservice Tests]]
- 4 edges to [[_COMMUNITY_Server Services Adminservice Tests]]

## Top bridge nodes
- [[validatePassword()]] - degree 10, connects to 2 communities
- [[passwordPolicy.ts]] - degree 5, connects to 2 communities
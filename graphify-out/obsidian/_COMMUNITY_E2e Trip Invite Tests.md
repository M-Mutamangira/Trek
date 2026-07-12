---
type: community
cohesion: 0.29
members: 8
---

# E2e Trip Invite Tests

**Cohesion:** 0.29 - loosely connected
**Members:** 8 nodes

## Members
- [[Module_41]] - code
- [[TripInviteModule]] - code - server/src/nest/trip-invite/trip-invite.module.ts
- [[build()_30]] - code - server/tests/e2e/trip-invite.e2e.test.ts
- [[trip-invite.e2e.test.ts]] - code - server/tests/e2e/trip-invite.e2e.test.ts
- [[{ checkPermission }_10]] - code - server/tests/e2e/trip-invite.e2e.test.ts
- [[{ db, canAccessTrip }_1]] - code - server/tests/e2e/trip-invite.e2e.test.ts
- [[{ inviteSvc }]] - code - server/tests/e2e/trip-invite.e2e.test.ts
- [[{ joinTripAsMember }]] - code - server/tests/e2e/trip-invite.e2e.test.ts

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/E2e_Trip_Invite_Tests
SORT file.name ASC
```

## Connections to other communities
- 3 edges to [[_COMMUNITY_E2e Server Tests Tests]]
- 2 edges to [[_COMMUNITY_E2e Server Tests Tests_1]]
- 2 edges to [[_COMMUNITY_Server Nest Auth Tests]]
- 1 edge to [[_COMMUNITY_Server Nest Health Tests]]

## Top bridge nodes
- [[trip-invite.e2e.test.ts]] - degree 12, connects to 3 communities
- [[TripInviteModule]] - degree 5, connects to 2 communities
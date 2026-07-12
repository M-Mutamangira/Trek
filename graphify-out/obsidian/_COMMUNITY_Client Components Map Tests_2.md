---
type: community
cohesion: 0.17
members: 22
---

# Client Components Map Tests

**Cohesion:** 0.17 - loosely connected
**Members:** 22 nodes

## Members
- [[OSRM_PROFILE_BASE]] - code - client/src/components/Map/RouteCalculator.ts
- [[RouteAnchors]] - code - client/src/types.ts
- [[RouteCalculator.test.ts]] - code - client/src/components/Map/RouteCalculator.test.ts
- [[RouteCalculator.ts]] - code - client/src/components/Map/RouteCalculator.ts
- [[RouteWithLegs]] - code - client/src/types.ts
- [[Waypoint]] - code - client/src/types.ts
- [[buildOsrmRouteResponse()]] - code - client/src/components/Map/RouteCalculator.test.ts
- [[calculateRoute()]] - code - client/src/components/Map/RouteCalculator.ts
- [[calculateRouteWithLegs()]] - code - client/src/components/Map/RouteCalculator.ts
- [[calculateSegments()]] - code - client/src/components/Map/RouteCalculator.ts
- [[formatDuration()]] - code - client/src/components/Map/RouteCalculator.ts
- [[formatRouteDistance()]] - code - client/src/components/Map/RouteCalculator.ts
- [[generateGoogleMapsUrl()]] - code - client/src/components/Map/RouteCalculator.ts
- [[getDistanceUnit()]] - code - client/src/components/Map/RouteCalculator.ts
- [[nearestNeighborOrder()]] - code - client/src/components/Map/RouteCalculator.ts
- [[optimizeRoute()]] - code - client/src/components/Map/RouteCalculator.ts
- [[routeCache]] - code - client/src/components/Map/RouteCalculator.ts
- [[sqDist()]] - code - client/src/components/Map/RouteCalculator.ts
- [[tourLength()]] - code - client/src/components/Map/RouteCalculator.ts
- [[twoOptImprove()]] - code - client/src/components/Map/RouteCalculator.ts
- [[wp1]] - code - client/src/components/Map/RouteCalculator.test.ts
- [[wp2]] - code - client/src/components/Map/RouteCalculator.test.ts

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Client_Components_Map_Tests
SORT file.name ASC
```

## Connections to other communities
- 16 edges to [[_COMMUNITY_Client Components Planner Tests]]
- 4 edges to [[_COMMUNITY_Client Components Tests Tests]]
- 4 edges to [[_COMMUNITY_Client Sync Store Tests]]
- 4 edges to [[_COMMUNITY_Client Components Planner Tests_1]]
- 3 edges to [[_COMMUNITY_Usetransportroutes Client Hooks Tests]]

## Top bridge nodes
- [[RouteCalculator.ts]] - degree 30, connects to 5 communities
- [[RouteCalculator.test.ts]] - degree 11, connects to 2 communities
- [[calculateRouteWithLegs()]] - degree 10, connects to 2 communities
- [[RouteAnchors]] - degree 3, connects to 2 communities
- [[optimizeRoute()]] - degree 7, connects to 1 community
---
type: community
cohesion: 0.43
members: 7
---

# Client Components Map (Client)

**Cohesion:** 0.43 - moderately connected
**Members:** 7 nodes

## Members
- [[GeoPosition]] - code - client/src/hooks/useGeolocation.ts
- [[LocationMarkerHandle]] - code - client/src/components/Map/locationMarkerMapbox.ts
- [[MarkerConstructor]] - code - client/src/components/Map/locationMarkerMapbox.ts
- [[attachLocationMarker()]] - code - client/src/components/Map/locationMarkerMapbox.ts
- [[buildLocationEl()]] - code - client/src/components/Map/locationMarkerMapbox.ts
- [[ensurePulseStyle()]] - code - client/src/components/Map/locationMarkerMapbox.ts
- [[locationMarkerMapbox.ts]] - code - client/src/components/Map/locationMarkerMapbox.ts

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Client_Components_Map_Client
SORT file.name ASC
```

## Connections to other communities
- 4 edges to [[_COMMUNITY_Client Components Map (Client)_1]]
- 3 edges to [[_COMMUNITY_Client Components Map (Client)]]

## Top bridge nodes
- [[locationMarkerMapbox.ts]] - degree 8, connects to 2 communities
- [[attachLocationMarker()]] - degree 5, connects to 1 community
- [[GeoPosition]] - degree 4, connects to 1 community
- [[LocationMarkerHandle]] - degree 3, connects to 1 community
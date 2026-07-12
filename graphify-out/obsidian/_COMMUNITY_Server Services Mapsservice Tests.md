---
type: community
cohesion: 0.07
members: 61
---

# Server Services Mapsservice Tests

**Cohesion:** 0.07 - loosely connected
**Members:** 61 nodes

## Members
- [[.constructor()_99]] - code - server/tests/unit/services/mapsService.test.ts
- [[.photo()_1]] - code - server/src/nest/maps/maps.service.ts
- [[.pois()_1]] - code - server/src/nest/maps/maps.service.ts
- [[API_LANG_OVERRIDES]] - code - server/src/services/mapsService.ts
- [[Airport_1]] - code - server/src/services/airportService.ts
- [[CATEGORY_OSM_FILTERS]] - code - server/src/services/mapsService.ts
- [[DEFAULT_OVERPASS_MIRRORS]] - code - server/src/services/mapsService.ts
- [[GoogleAutocompleteSuggestion]] - code - server/src/services/mapsService.ts
- [[GooglePlaceDetails]] - code - server/src/services/mapsService.ts
- [[GooglePlaceResult]] - code - server/src/services/mapsService.ts
- [[LocationBias_2]] - code - server/src/nest/maps/maps.service.ts
- [[NominatimResult]] - code - server/src/services/mapsService.ts
- [[OVERPASS_MIRRORS]] - code - server/src/services/mapsService.ts
- [[OVERPASS_TIMEOUT_MS]] - code - server/src/services/mapsService.ts
- [[OverpassElement]] - code - server/src/services/mapsService.ts
- [[OverpassPoi]] - code - server/src/services/mapsService.ts
- [[OverpassPoiElement]] - code - server/src/services/mapsService.ts
- [[POI_CACHE]] - code - server/src/services/mapsService.ts
- [[POI_CATEGORY_KEYS]] - code - server/src/services/mapsService.ts
- [[PoiSearchResult]] - code - server/src/services/mapsService.ts
- [[SsrfBlockedError_1]] - code - server/tests/unit/services/mapsService.test.ts
- [[UA]] - code - server/src/services/mapsService.ts
- [[WikiCommonsPage]] - code - server/src/services/mapsService.ts
- [[acquirePhotoFetchSlot()]] - code - server/src/services/mapsService.ts
- [[airportService.ts]] - code - server/src/services/airportService.ts
- [[autocompleteNominatim()]] - code - server/src/services/mapsService.ts
- [[autocompletePlaces()]] - code - server/src/services/mapsService.ts
- [[backfillFlightEndpoints()]] - code - server/src/services/airportService.ts
- [[buildOsmDetails()]] - code - server/src/services/mapsService.ts
- [[buildUserAgent()]] - code - server/src/services/mapsService.ts
- [[fetchOverpassDetails()]] - code - server/src/services/mapsService.ts
- [[fetchWikimediaPhoto()]] - code - server/src/services/mapsService.ts
- [[findByIata()]] - code - server/src/services/airportService.ts
- [[getMapsKey()]] - code - server/src/services/mapsService.ts
- [[getPlaceDetails()]] - code - server/src/services/mapsService.ts
- [[getPlaceDetailsExpanded()]] - code - server/src/services/mapsService.ts
- [[getPlacePhoto()]] - code - server/src/services/mapsService.ts
- [[googleFetch()]] - code - server/src/services/mapsService.ts
- [[googleFtidFromMapsUrl()]] - code - server/src/services/mapsService.ts
- [[load()]] - code - server/src/services/airportService.ts
- [[lookupNominatim()]] - code - server/src/services/mapsService.ts
- [[maps.service.ts]] - code - server/src/nest/maps/maps.service.ts
- [[mapsService.test.ts]] - code - server/tests/unit/services/mapsService.test.ts
- [[mapsService.ts]] - code - server/src/services/mapsService.ts
- [[mapsWeather.ts]] - code - server/src/mcp/tools/mapsWeather.ts
- [[nominatimStub]] - code - server/tests/unit/services/mapsService.test.ts
- [[overpassFetch()]] - code - server/src/services/mapsService.ts
- [[parseOpeningHours()]] - code - server/src/services/mapsService.ts
- [[photoFetchQueue]] - code - server/src/services/mapsService.ts
- [[registerMapsWeatherTools()]] - code - server/src/mcp/tools/mapsWeather.ts
- [[releasePhotoFetchSlot()]] - code - server/src/services/mapsService.ts
- [[resolveGoogleMapsUrl()]] - code - server/src/services/mapsService.ts
- [[resolveOverpassEndpoints()]] - code - server/src/services/mapsService.ts
- [[resolveOverpassTimeoutMs()]] - code - server/src/services/mapsService.ts
- [[reverseGeocode()]] - code - server/src/services/mapsService.ts
- [[searchAirports()]] - code - server/src/services/airportService.ts
- [[searchNominatim()]] - code - server/src/services/mapsService.ts
- [[searchOverpassPois()]] - code - server/src/services/mapsService.ts
- [[searchPlaces()]] - code - server/src/services/mapsService.ts
- [[toApiLang()]] - code - server/src/services/mapsService.ts
- [[{ mockDbGet, mockDbRun, mockCheckSsrf, mockCacheGet, mockCacheGetErrored, mockCachePut, mockCacheGetInFlight, mockCacheSetInFlight }]] - code - server/tests/unit/services/mapsService.test.ts

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Server_Services_Mapsservice_Tests
SORT file.name ASC
```

## Connections to other communities
- 16 edges to [[_COMMUNITY_Server Services Mcp Tests]]
- 15 edges to [[_COMMUNITY_Maps Server Nest Tests]]
- 7 edges to [[_COMMUNITY_Server Services Placeservice Tests]]
- 5 edges to [[_COMMUNITY_Server Services Nest Tests]]
- 5 edges to [[_COMMUNITY_Server Weather Weatherservice Tests]]
- 5 edges to [[_COMMUNITY_Server Utils Ssrfguard Tests]]
- 4 edges to [[_COMMUNITY_Airports Server Nest Tests]]
- 4 edges to [[_COMMUNITY_Server Assignments Nest Tests]]
- 3 edges to [[_COMMUNITY_Import Server Nest Tests]]
- 3 edges to [[_COMMUNITY_Server Services Settingsservice Tests]]
- 2 edges to [[_COMMUNITY_Server Nest Health Tests]]
- 2 edges to [[_COMMUNITY_Client Components Admin Tests]]
- 2 edges to [[_COMMUNITY_Server Services Oauthservice Tests]]
- 2 edges to [[_COMMUNITY_Server Services Transitservice Tests]]
- 1 edge to [[_COMMUNITY_Server Scripts Migrate (Server)]]
- 1 edge to [[_COMMUNITY_Plugins Server Nest Tests]]
- 1 edge to [[_COMMUNITY_E2e Server Categories Tests]]
- 1 edge to [[_COMMUNITY_Maps Server Tests Tests]]
- 1 edge to [[_COMMUNITY_Trip Invite Server (Server)]]
- 1 edge to [[_COMMUNITY_Server Services Notifications Tests]]
- 1 edge to [[_COMMUNITY_Server Tests Integration Tests]]
- 1 edge to [[_COMMUNITY_Server Tests Mcp Tests]]

## Top bridge nodes
- [[mapsService.ts]] - degree 62, connects to 12 communities
- [[maps.service.ts]] - degree 19, connects to 5 communities
- [[airportService.ts]] - degree 11, connects to 4 communities
- [[searchPlaces()]] - degree 13, connects to 3 communities
- [[getPlacePhoto()]] - degree 12, connects to 3 communities
---
type: community
cohesion: 0.07
members: 62
---

# Server Services Placeservice Tests

**Cohesion:** 0.07 - loosely connected
**Members:** 62 nodes

## Members
- [[DedupSet_1]] - code - server/src/services/placeService.ts
- [[ENTITY_MAP]] - code - server/src/services/kmlImport.ts
- [[EnrichablePlace]] - code - server/src/services/placeEnrichment.ts
- [[GpxImportOptions]] - code - server/src/services/placeService.ts
- [[KMZ_FIXTURE_1]] - code - server/tests/unit/services/kmzUnpack.test.ts
- [[KmlImportOptions]] - code - server/src/services/placeService.ts
- [[KmlImportSummary]] - code - server/src/services/kmlImport.ts
- [[KmlPlacemarkNode]] - code - server/src/services/kmlImport.ts
- [[ListImportOptions]] - code - server/src/services/placeService.ts
- [[PackingItemRow]] - code - server/src/nest/packing/packing.controller.ts
- [[ParsedKmlPlacemark]] - code - server/src/services/kmlImport.ts
- [[PlaceImportResult]] - code - server/src/services/placeService.ts
- [[UTF8_DECODER_FATAL]] - code - server/src/services/kmlImport.ts
- [[UTF8_DECODER_LOOSE]] - code - server/src/services/kmlImport.ts
- [[UpdateConflict]] - code - server/src/services/conflictResult.ts
- [[asArray()]] - code - server/src/services/kmlImport.ts
- [[asTrimmedString()]] - code - server/src/services/kmlImport.ts
- [[buildCategoryNameLookup()]] - code - server/src/services/kmlImport.ts
- [[buildDedupSet()_1]] - code - server/src/services/placeService.ts
- [[conflictResult.ts]] - code - server/src/services/conflictResult.ts
- [[createKmlImportSummary()]] - code - server/src/services/kmlImport.ts
- [[decodeHtmlEntities()]] - code - server/src/services/kmlImport.ts
- [[decodeUtf8WithWarning()]] - code - server/src/services/kmlImport.ts
- [[enrichImportedPlaces()]] - code - server/src/services/placeEnrichment.ts
- [[enrichOne()]] - code - server/src/services/placeEnrichment.ts
- [[extractKmlPlacemarkNodes()]] - code - server/src/services/kmlImport.ts
- [[findDuplicatePlace()_1]] - code - server/src/services/placeService.ts
- [[getPlace()]] - code - server/src/services/placeService.ts
- [[getPlaceWithTags()]] - code - server/src/db/database.ts
- [[googleMapsFeatureIdFromItem()]] - code - server/src/services/placeService.ts
- [[googleMapsHexId()]] - code - server/src/services/placeService.ts
- [[gpxParser]] - code - server/src/services/placeService.ts
- [[haversineMeters()]] - code - server/src/services/placeEnrichment.ts
- [[importGoogleList()]] - code - server/src/services/placeService.ts
- [[importGpx()]] - code - server/src/services/placeService.ts
- [[importKmlPlaces()]] - code - server/src/services/placeService.ts
- [[importKmzPlaces()]] - code - server/src/services/placeService.ts
- [[importMapFile()]] - code - server/src/services/placeService.ts
- [[importNaverList()]] - code - server/src/services/placeService.ts
- [[isPlaceDuplicate()]] - code - server/src/services/placeService.ts
- [[isUpdateConflict()]] - code - server/src/services/conflictResult.ts
- [[kmlImport.ts]] - code - server/src/services/kmlImport.ts
- [[kmlImportUtils.test.ts]] - code - server/tests/unit/services/kmlImportUtils.test.ts
- [[kmlParser]] - code - server/src/services/placeService.ts
- [[kmzUnpack.test.ts]] - code - server/tests/unit/services/kmzUnpack.test.ts
- [[mapWithConcurrency()]] - code - server/src/services/placeEnrichment.ts
- [[packing.controller.ts]] - code - server/src/nest/packing/packing.controller.ts
- [[parseKmlLineStringCoordinates()]] - code - server/src/services/kmlImport.ts
- [[parseKmlPointCoordinates()]] - code - server/src/services/kmlImport.ts
- [[parsePlacemarkNode()]] - code - server/src/services/kmlImport.ts
- [[pickEnrichmentMatch()]] - code - server/src/services/placeEnrichment.ts
- [[placeEnrichment.test.ts]] - code - server/tests/unit/services/placeEnrichment.test.ts
- [[placeEnrichment.ts]] - code - server/src/services/placeEnrichment.ts
- [[placeService.ts]] - code - server/src/services/placeService.ts
- [[resolveCategoryIdForFolder()]] - code - server/src/services/kmlImport.ts
- [[sanitizeKmlDescription()]] - code - server/src/services/kmlImport.ts
- [[str()_3]] - code - server/src/services/placeEnrichment.ts
- [[target_2]] - code - server/tests/unit/services/placeEnrichment.test.ts
- [[trackInsertedInDedupSet()]] - code - server/src/services/placeService.ts
- [[unpackKmzToKml()]] - code - server/src/services/placeService.ts
- [[updatePlace()_1]] - code - server/src/services/placeService.ts
- [[updatePlacesMany()]] - code - server/src/services/placeService.ts

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Server_Services_Placeservice_Tests
SORT file.name ASC
```

## Connections to other communities
- 16 edges to [[_COMMUNITY_Server Services Nest Tests]]
- 15 edges to [[_COMMUNITY_Server Services Mcp Tests]]
- 10 edges to [[_COMMUNITY_Server Services Host Tests]]
- 8 edges to [[_COMMUNITY_Server Utils Ssrfguard Tests]]
- 7 edges to [[_COMMUNITY_Server Services Mapsservice Tests]]
- 7 edges to [[_COMMUNITY_Server Tests Helpers Tests]]
- 4 edges to [[_COMMUNITY_Packing Server Nest Tests]]
- 4 edges to [[_COMMUNITY_Server Tests Unit Tests]]
- 4 edges to [[_COMMUNITY_Server Services Unsplashservice Tests]]
- 3 edges to [[_COMMUNITY_Places Server Nest Tests]]
- 2 edges to [[_COMMUNITY_Plugins Server Nest Tests]]
- 2 edges to [[_COMMUNITY_Server Plugins Controller Tests]]
- 2 edges to [[_COMMUNITY_Server Services Packingservice (Server)]]
- 1 edge to [[_COMMUNITY_Server Nest Auth Tests]]
- 1 edge to [[_COMMUNITY_Journey Server Nest Tests]]
- 1 edge to [[_COMMUNITY_Import Server Nest Tests]]
- 1 edge to [[_COMMUNITY_Collections Server Nest Tests]]
- 1 edge to [[_COMMUNITY_Maps Server Nest Tests]]
- 1 edge to [[_COMMUNITY_Server Tests Integration Tests]]

## Top bridge nodes
- [[placeService.ts]] - degree 70, connects to 10 communities
- [[packing.controller.ts]] - degree 14, connects to 6 communities
- [[importGoogleList()]] - degree 14, connects to 4 communities
- [[isUpdateConflict()]] - degree 10, connects to 4 communities
- [[updatePlace()_1]] - degree 9, connects to 4 communities
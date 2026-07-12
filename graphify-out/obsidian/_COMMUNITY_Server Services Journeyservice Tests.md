---
type: community
cohesion: 0.12
members: 56
---

# Server Services Journeyservice Tests

**Cohesion:** 0.12 - loosely connected
**Members:** 56 nodes

## Members
- [[JourneySharePermissions]] - code - server/src/services/journeyShareService.ts
- [[JourneyShareTokenInfo]] - code - server/src/services/journeyShareService.ts
- [[addContributor()]] - code - server/src/services/journeyService.ts
- [[addPhoto()]] - code - server/src/services/journeyService.ts
- [[addProviderPhoto()]] - code - server/src/services/journeyService.ts
- [[addProviderPhotoToGallery()]] - code - server/src/services/journeyService.ts
- [[addTripToJourney()]] - code - server/src/services/journeyService.ts
- [[broadcastJourneyEvent()]] - code - server/src/services/journeyService.ts
- [[canAccessJourney()]] - code - server/src/services/journeyService.ts
- [[canEdit()]] - code - server/src/services/journeyService.ts
- [[canShareJourneys()]] - code - server/src/mcp/scopes.ts
- [[createEntry()_2]] - code - server/src/services/journeyService.ts
- [[createJourney()_2]] - code - server/src/services/journeyService.ts
- [[createOrUpdateJourneyShareLink()]] - code - server/src/services/journeyShareService.ts
- [[daysOf()]] - code - server/tests/unit/services/journeyService.test.ts
- [[deleteEntry()_2]] - code - server/src/services/journeyService.ts
- [[deleteGalleryPhoto()]] - code - server/src/services/journeyService.ts
- [[deleteJourney()_2]] - code - server/src/services/journeyService.ts
- [[deleteJourneyShareLink()]] - code - server/src/services/journeyShareService.ts
- [[deletePhoto()]] - code - server/src/services/journeyService.ts
- [[ensureInGallery()]] - code - server/src/services/journeyService.ts
- [[getJourneyFull()]] - code - server/src/services/journeyService.ts
- [[getJourneyShareLink()]] - code - server/src/services/journeyShareService.ts
- [[getOrCreateLocalTrekPhoto()]] - code - server/src/services/memories/photoResolverService.ts
- [[getSuggestions()]] - code - server/src/services/journeyService.ts
- [[insertEntry()]] - code - server/tests/unit/services/journeyService.test.ts
- [[insertSkeletonEntry()]] - code - server/src/services/journeyService.ts
- [[isOwner()_2]] - code - server/src/services/journeyService.ts
- [[journey.ts]] - code - server/src/mcp/tools/journey.ts
- [[journeyService.test.ts]] - code - server/tests/unit/services/journeyService.test.ts
- [[journeyService.ts]] - code - server/src/services/journeyService.ts
- [[journeyShareService.ts]] - code - server/src/services/journeyShareService.ts
- [[linkGalleryPhotoToEntry()]] - code - server/src/services/journeyService.ts
- [[linkPhotoToEntry()]] - code - server/src/services/journeyService.ts
- [[listEntries()]] - code - server/src/services/journeyService.ts
- [[listUserTrips()]] - code - server/src/services/journeyService.ts
- [[notFound()]] - code - server/src/mcp/tools/journey.ts
- [[onPlaceCreated()]] - code - server/src/services/journeyService.ts
- [[promoteSkeletonIfNeeded()]] - code - server/src/services/journeyService.ts
- [[registerJourneyTools()]] - code - server/src/mcp/tools/journey.ts
- [[removeContributor()]] - code - server/src/services/journeyService.ts
- [[removeTripFromJourney()]] - code - server/src/services/journeyService.ts
- [[reorderEntries()]] - code - server/src/services/journeyService.ts
- [[setPhotoProvider()]] - code - server/src/services/journeyService.ts
- [[setTrekPhotoProvider()]] - code - server/src/services/memories/photoResolverService.ts
- [[skeletonFor()_2]] - code - server/tests/unit/services/journeyService.test.ts
- [[syncTripPhotos()]] - code - server/src/services/journeyService.ts
- [[syncTripPlaces()]] - code - server/src/services/journeyService.ts
- [[unlinkPhotoFromEntry()]] - code - server/src/services/journeyService.ts
- [[updateContributorRole()]] - code - server/src/services/journeyService.ts
- [[updateEntry()_2]] - code - server/src/services/journeyService.ts
- [[updateJourney()]] - code - server/src/services/journeyService.ts
- [[updateJourneyPreferences()]] - code - server/src/services/journeyService.ts
- [[updatePhoto()]] - code - server/src/services/journeyService.ts
- [[uploadGalleryPhotos()]] - code - server/src/services/journeyService.ts
- [[{ testDb, dbMock }_73]] - code - server/tests/unit/services/journeyService.test.ts

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Server_Services_Journeyservice_Tests
SORT file.name ASC
```

## Connections to other communities
- 31 edges to [[_COMMUNITY_Server Services Mcp Tests]]
- 18 edges to [[_COMMUNITY_Server Services Host Tests]]
- 14 edges to [[_COMMUNITY_Server Services Nest Tests]]
- 12 edges to [[_COMMUNITY_Server Tests Helpers Tests]]
- 7 edges to [[_COMMUNITY_Server Memories Services Tests]]
- 6 edges to [[_COMMUNITY_Import Server Nest Tests]]
- 5 edges to [[_COMMUNITY_Server Services Collabservice Tests]]
- 4 edges to [[_COMMUNITY_Server Tests Integration Tests]]
- 4 edges to [[_COMMUNITY_Server Tests Unit Tests_1]]
- 3 edges to [[_COMMUNITY_Server Tests Unit Tests]]
- 3 edges to [[_COMMUNITY_Memories Server Services (Server)]]
- 3 edges to [[_COMMUNITY_Server Services Tests Tests]]
- 2 edges to [[_COMMUNITY_Plugins Server Nest Tests]]
- 1 edge to [[_COMMUNITY_Server Services Adminservice Tests]]
- 1 edge to [[_COMMUNITY_Server Services Authservice Tests]]
- 1 edge to [[_COMMUNITY_Vacay Server Nest Tests]]
- 1 edge to [[_COMMUNITY_Server Services Budgetservice Tests]]
- 1 edge to [[_COMMUNITY_Places Server Nest Tests]]
- 1 edge to [[_COMMUNITY_Server Plugins Controller Tests]]

## Top bridge nodes
- [[journeyService.ts]] - degree 72, connects to 8 communities
- [[journeyService.test.ts]] - degree 53, connects to 8 communities
- [[journey.ts]] - degree 44, connects to 5 communities
- [[registerJourneyTools()]] - degree 35, connects to 5 communities
- [[journeyShareService.ts]] - degree 15, connects to 3 communities
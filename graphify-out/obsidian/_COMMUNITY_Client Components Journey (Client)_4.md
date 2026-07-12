---
type: community
cohesion: 0.36
members: 8
---

# Client Components Journey (Client)

**Cohesion:** 0.36 - loosely connected
**Members:** 8 nodes

## Members
- [[DatePicker()]] - code - client/src/components/Journey/JourneyDetailPageDatePicker.tsx
- [[JourneyDetailPageDatePicker.tsx]] - code - client/src/components/Journey/JourneyDetailPageDatePicker.tsx
- [[JourneyDetailPageProviderPicker.tsx]] - code - client/src/components/Journey/JourneyDetailPageProviderPicker.tsx
- [[JourneyDetailPageScrollTrigger.tsx]] - code - client/src/components/Journey/JourneyDetailPageScrollTrigger.tsx
- [[JourneyTrip]] - code - client/src/store/journeyStore.ts
- [[ProviderPicker()]] - code - client/src/components/Journey/JourneyDetailPageProviderPicker.tsx
- [[ScrollTrigger()]] - code - client/src/components/Journey/JourneyDetailPageScrollTrigger.tsx
- [[groupPhotosByDate()]] - code - client/src/pages/journeyDetail/JourneyDetailPage.helpers.ts

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Client_Components_Journey_Client
SORT file.name ASC
```

## Connections to other communities
- 6 edges to [[_COMMUNITY_Client Components Settings Tests]]
- 5 edges to [[_COMMUNITY_Client Pages Journeydetailpage (Client)]]
- 2 edges to [[_COMMUNITY_Client Pages Journeypublic (Client)]]
- 2 edges to [[_COMMUNITY_Client Utils Uploadqueue Tests]]
- 1 edge to [[_COMMUNITY_Client Components Journey (Client)]]
- 1 edge to [[_COMMUNITY_Server Services Wikiservice (Server)]]

## Top bridge nodes
- [[JourneyDetailPageProviderPicker.tsx]] - degree 13, connects to 4 communities
- [[ProviderPicker()]] - degree 5, connects to 3 communities
- [[JourneyDetailPageDatePicker.tsx]] - degree 5, connects to 2 communities
- [[DatePicker()]] - degree 4, connects to 2 communities
- [[JourneyTrip]] - degree 3, connects to 2 communities
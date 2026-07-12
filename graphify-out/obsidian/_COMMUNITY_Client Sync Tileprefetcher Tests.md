---
type: community
cohesion: 0.28
members: 16
---

# Client Sync Tileprefetcher Tests

**Cohesion:** 0.28 - loosely connected
**Members:** 16 nodes

## Members
- [[MAX_TILES]] - code - client/src/sync/tilePrefetcher.ts
- [[NOTE opaque (no-cors) tile responses are padded by Chromium to ~7 MB each]] - rationale - client/src/sync/tilePrefetcher.ts
- [[SUBDOMAINS]] - code - client/src/sync/tilePrefetcher.ts
- [[TileBbox]] - code - client/src/sync/tilePrefetcher.ts
- [[buildTileUrl()]] - code - client/src/sync/tilePrefetcher.ts
- [[clearTileCache()]] - code - client/src/sync/tilePrefetcher.ts
- [[computeBbox()]] - code - client/src/sync/tilePrefetcher.ts
- [[countTiles()]] - code - client/src/sync/tilePrefetcher.ts
- [[ensureMinSpan()]] - code - client/src/sync/tilePrefetcher.ts
- [[latToTileY()]] - code - client/src/sync/tilePrefetcher.ts
- [[lngToTileX()]] - code - client/src/sync/tilePrefetcher.ts
- [[nextSubdomain()]] - code - client/src/sync/tilePrefetcher.ts
- [[prefetchTiles()]] - code - client/src/sync/tilePrefetcher.ts
- [[prefetchTilesForTrip()]] - code - client/src/sync/tilePrefetcher.ts
- [[tilePrefetcher.test.ts]] - code - client/tests/unit/sync/tilePrefetcher.test.ts
- [[tilePrefetcher.ts]] - code - client/src/sync/tilePrefetcher.ts

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Client_Sync_Tileprefetcher_Tests
SORT file.name ASC
```

## Connections to other communities
- 14 edges to [[_COMMUNITY_Client Sync Store Tests]]
- 2 edges to [[_COMMUNITY_Client Components Tests Tests]]

## Top bridge nodes
- [[tilePrefetcher.test.ts]] - degree 16, connects to 2 communities
- [[tilePrefetcher.ts]] - degree 22, connects to 1 community
- [[prefetchTilesForTrip()]] - degree 6, connects to 1 community
- [[clearTileCache()]] - degree 2, connects to 1 community
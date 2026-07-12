---
type: community
cohesion: 0.08
members: 51
---

# Memories Server Services (Server)

**Cohesion:** 0.08 - loosely connected
**Members:** 51 nodes

## Members
- [[.synologyGetAssetInfo()]] - code - server/src/nest/memories/memories.service.ts
- [[.synologyGetSettings()]] - code - server/src/nest/memories/memories.service.ts
- [[.synologyGetStatus()]] - code - server/src/nest/memories/memories.service.ts
- [[.synologySearchPhotos()]] - code - server/src/nest/memories/memories.service.ts
- [[.synologyUpdateSettings()]] - code - server/src/nest/memories/memories.service.ts
- [[AlbumsList]] - code - server/src/services/memories/helpersService.ts
- [[ApiCallParams]] - code - server/src/services/memories/synologyService.ts
- [[Asset]] - code - server/src/services/memories/helpersService.ts
- [[AssetInfo]] - code - server/src/services/memories/helpersService.ts
- [[AssetsList]] - code - server/src/services/memories/helpersService.ts
- [[PhotoProviderConfig]] - code - server/src/services/memories/helpersService.ts
- [[SYNOLOGY_ERROR_MESSAGES]] - code - server/src/services/memories/synologyService.ts
- [[ServiceError]] - code - server/src/services/memories/helpersService.ts
- [[StatusResult]] - code - server/src/services/memories/helpersService.ts
- [[SyncAlbumResult]] - code - server/src/services/memories/helpersService.ts
- [[SynologyApiResponse]] - code - server/src/services/memories/synologyService.ts
- [[SynologyCredentials]] - code - server/src/services/memories/synologyService.ts
- [[SynologyPhotoItem]] - code - server/src/services/memories/synologyService.ts
- [[SynologySettings]] - code - server/src/services/memories/synologyService.ts
- [[SynologyUserRecord]] - code - server/src/services/memories/synologyService.ts
- [[TrekPhoto]] - code - server/src/types.ts
- [[_buildSynologyEndpoint()]] - code - server/src/services/memories/synologyService.ts
- [[_buildSynologyFormBody()]] - code - server/src/services/memories/synologyService.ts
- [[_clearSynologySID()]] - code - server/src/services/memories/synologyService.ts
- [[_clearSynologySession()]] - code - server/src/services/memories/synologyService.ts
- [[_fetchSynologyJson()]] - code - server/src/services/memories/synologyService.ts
- [[_getSynologyCredentials()]] - code - server/src/services/memories/synologyService.ts
- [[_getSynologySession()]] - code - server/src/services/memories/synologyService.ts
- [[_normalizeSynologyPhotoInfo()]] - code - server/src/services/memories/synologyService.ts
- [[_readSynologyUser()]] - code - server/src/services/memories/synologyService.ts
- [[_requestSynologyApi()]] - code - server/src/services/memories/synologyService.ts
- [[_splitPackedSynologyId()]] - code - server/src/services/memories/synologyService.ts
- [[canAccessTrekPhoto()]] - code - server/src/services/memories/helpersService.ts
- [[canAccessUserPhoto()]] - code - server/src/services/memories/helpersService.ts
- [[ensureLocalThumbnail()]] - code - server/src/services/memories/thumbnailService.ts
- [[fetchSynologyThumbnailBytes()]] - code - server/src/services/memories/synologyService.ts
- [[getPhotoInfo()]] - code - server/src/services/memories/photoResolverService.ts
- [[getSynologyAssetInfo()]] - code - server/src/services/memories/synologyService.ts
- [[getSynologySettings()]] - code - server/src/services/memories/synologyService.ts
- [[getSynologyStatus()]] - code - server/src/services/memories/synologyService.ts
- [[handleServiceResult()]] - code - server/src/services/memories/helpersService.ts
- [[helpersService.ts]] - code - server/src/services/memories/helpersService.ts
- [[photoResolverService.ts]] - code - server/src/services/memories/photoResolverService.ts
- [[photos.service.ts]] - code - server/src/nest/photos/photos.service.ts
- [[resolveTrekPhoto()]] - code - server/src/services/memories/photoResolverService.ts
- [[searchSynologyPhotos()]] - code - server/src/services/memories/synologyService.ts
- [[streamCachedThumbnail()]] - code - server/src/services/memories/photoResolverService.ts
- [[streamPhoto()]] - code - server/src/services/memories/photoResolverService.ts
- [[streamSynologyAsset()]] - code - server/src/services/memories/synologyService.ts
- [[synologyService.ts]] - code - server/src/services/memories/synologyService.ts
- [[updateSynologySettings()]] - code - server/src/services/memories/synologyService.ts

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Memories_Server_Services_Server
SORT file.name ASC
```

## Connections to other communities
- 39 edges to [[_COMMUNITY_Server Memories Services Tests]]
- 35 edges to [[_COMMUNITY_Memories Server Services Tests]]
- 15 edges to [[_COMMUNITY_Server Services Settingsservice Tests]]
- 9 edges to [[_COMMUNITY_Memories Server Nest Tests]]
- 8 edges to [[_COMMUNITY_Server Services Nest Tests]]
- 6 edges to [[_COMMUNITY_Photos Server Nest (Server)]]
- 6 edges to [[_COMMUNITY_Server Utils Ssrfguard Tests]]
- 5 edges to [[_COMMUNITY_Import Server Nest Tests]]
- 3 edges to [[_COMMUNITY_Server Services Journeyservice Tests]]
- 2 edges to [[_COMMUNITY_Server Services Mcp Tests]]
- 2 edges to [[_COMMUNITY_Server Services Adminservice Tests]]
- 2 edges to [[_COMMUNITY_Server Tests Unit Tests]]
- 2 edges to [[_COMMUNITY_Server Services Notifications Tests]]
- 1 edge to [[_COMMUNITY_Maps Server Nest Tests]]
- 1 edge to [[_COMMUNITY_Addons Server Nest Tests]]
- 1 edge to [[_COMMUNITY_Journey Server Nest Tests]]
- 1 edge to [[_COMMUNITY_Files Server Nest Tests]]
- 1 edge to [[_COMMUNITY_Server Plugins Controller Tests]]
- 1 edge to [[_COMMUNITY_Server Services Tests Tests]]
- 1 edge to [[_COMMUNITY_Server Services Memories (Server)]]
- 1 edge to [[_COMMUNITY_Server Tests Helpers Tests]]

## Top bridge nodes
- [[helpersService.ts]] - degree 40, connects to 10 communities
- [[photoResolverService.ts]] - degree 37, connects to 10 communities
- [[synologyService.ts]] - degree 62, connects to 8 communities
- [[streamPhoto()]] - degree 12, connects to 4 communities
- [[updateSynologySettings()]] - degree 9, connects to 4 communities
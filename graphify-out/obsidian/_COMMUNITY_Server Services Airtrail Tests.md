---
type: community
cohesion: 0.08
members: 67
---

# Server Services Airtrail Tests

**Cohesion:** 0.08 - loosely connected
**Members:** 67 nodes

## Members
- [[.constructor()_92]] - code - server/src/services/airtrail/airtrailClient.ts
- [[.constructor()_93]] - code - server/src/services/airtrail/airtrailClient.ts
- [[AirtrailAirport]] - code - server/src/services/airtrail/airtrailClient.ts
- [[AirtrailAuthError]] - code - server/src/services/airtrail/airtrailClient.ts
- [[AirtrailCreds]] - code - server/src/services/airtrail/airtrailClient.ts
- [[AirtrailFlightRaw]] - code - server/src/services/airtrail/airtrailClient.ts
- [[AirtrailNamedCode]] - code - server/src/services/airtrail/airtrailClient.ts
- [[AirtrailRequestError]] - code - server/src/services/airtrail/airtrailClient.ts
- [[AirtrailSavePayload]] - code - server/src/services/airtrail/airtrailClient.ts
- [[AirtrailSeat]] - code - server/src/services/airtrail/airtrailClient.ts
- [[ExistingFlightRow]] - code - server/src/services/airtrail/airtrailImport.ts
- [[MappedEndpoint]] - code - server/src/services/airtrail/airtrailMapper.ts
- [[MappedReservation]] - code - server/src/services/airtrail/airtrailMapper.ts
- [[UserConnRow]] - code - server/src/services/airtrail/airtrailService.ts
- [[airport()]] - code - server/tests/unit/services/airtrailMapper.test.ts
- [[airport()_1]] - code - server/tests/unit/services/airtrailSync.test.ts
- [[airportCode()]] - code - server/src/services/airtrail/airtrailMapper.ts
- [[airtrail.controller.ts]] - code - server/src/nest/integrations/airtrail.controller.ts
- [[airtrailClient.ts]] - code - server/src/services/airtrail/airtrailClient.ts
- [[airtrailImport.ts]] - code - server/src/services/airtrail/airtrailImport.ts
- [[airtrailMapper.test.ts]] - code - server/tests/unit/services/airtrailMapper.test.ts
- [[airtrailMapper.ts]] - code - server/src/services/airtrail/airtrailMapper.ts
- [[airtrailService.ts]] - code - server/src/services/airtrail/airtrailService.ts
- [[airtrailSync.test.ts]] - code - server/tests/unit/services/airtrailSync.test.ts
- [[airtrailSync.ts]] - code - server/src/services/airtrail/airtrailSync.ts
- [[airtrailWriteGate.test.ts]] - code - server/tests/unit/services/airtrailWriteGate.test.ts
- [[airtrailWriteback.test.ts]] - code - server/tests/unit/services/airtrailWriteback.test.ts
- [[apiBase()]] - code - server/src/services/airtrail/airtrailClient.ts
- [[broadcastUpdated()]] - code - server/src/services/airtrail/airtrailSync.ts
- [[buildSavePayload()]] - code - server/src/services/airtrail/airtrailSync.ts
- [[canonicalHash()]] - code - server/src/services/airtrail/airtrailMapper.ts
- [[depDate()]] - code - server/src/services/airtrail/airtrailImport.ts
- [[detach()]] - code - server/src/services/airtrail/airtrailSync.ts
- [[entityCode()]] - code - server/src/services/airtrail/airtrailMapper.ts
- [[entityName()]] - code - server/src/services/airtrail/airtrailMapper.ts
- [[existingFlight()]] - code - server/tests/unit/services/airtrailSync.test.ts
- [[flight()]] - code - server/tests/unit/services/airtrailMapper.test.ts
- [[getAirtrailCredentials()]] - code - server/src/services/airtrail/airtrailService.ts
- [[getConnectionSettings()]] - code - server/src/services/airtrail/airtrailService.ts
- [[getConnectionStatus()]] - code - server/src/services/airtrail/airtrailService.ts
- [[getFlight()]] - code - server/src/services/airtrail/airtrailClient.ts
- [[getFlightsForPicker()]] - code - server/src/services/airtrail/airtrailService.ts
- [[getReservationWithJoins()]] - code - server/src/services/reservationService.ts
- [[hasCoords()]] - code - server/src/services/airtrail/airtrailMapper.ts
- [[importAirtrailFlights()]] - code - server/src/services/airtrail/airtrailImport.ts
- [[isAirtrailWriteEnabled()]] - code - server/src/services/airtrail/airtrailService.ts
- [[linkedRow]] - code - server/tests/unit/services/airtrailWriteGate.test.ts
- [[listFlights()]] - code - server/src/services/airtrail/airtrailClient.ts
- [[loadEndpoints()]] - code - server/src/services/reservationService.ts
- [[localParts()]] - code - server/src/services/airtrail/airtrailMapper.ts
- [[mapFlightToReservation()]] - code - server/src/services/airtrail/airtrailMapper.ts
- [[normalizeFlight()]] - code - server/src/services/airtrail/airtrailMapper.ts
- [[parseJson()_3]] - code - server/src/services/airtrail/airtrailClient.ts
- [[probe()_1]] - code - server/src/services/airtrail/airtrailService.ts
- [[pushReservationToAirtrail()]] - code - server/src/services/airtrail/airtrailSync.ts
- [[readRow()]] - code - server/src/services/airtrail/airtrailService.ts
- [[request()]] - code - server/src/services/airtrail/airtrailClient.ts
- [[runAirtrailSync()]] - code - server/src/services/airtrail/airtrailSync.ts
- [[runAirtrailSyncForUser()]] - code - server/src/services/airtrail/airtrailSync.ts
- [[runSpy]] - code - server/tests/unit/services/airtrailWriteGate.test.ts
- [[saveFlight()]] - code - server/src/services/airtrail/airtrailClient.ts
- [[saveSettings()_1]] - code - server/src/services/airtrail/airtrailService.ts
- [[softSignature()]] - code - server/src/services/airtrail/airtrailImport.ts
- [[splitLocal()]] - code - server/src/services/airtrail/airtrailSync.ts
- [[syncGloballyEnabled()]] - code - server/src/services/airtrail/airtrailSync.ts
- [[syncOwner()]] - code - server/src/services/airtrail/airtrailSync.ts
- [[testConnection()]] - code - server/src/services/airtrail/airtrailService.ts

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Server_Services_Airtrail_Tests
SORT file.name ASC
```

## Connections to other communities
- 17 edges to [[_COMMUNITY_Server Services Nest Tests]]
- 12 edges to [[_COMMUNITY_Server Scheduler Services Tests]]
- 9 edges to [[_COMMUNITY_Server Services Mcp Tests]]
- 8 edges to [[_COMMUNITY_Import Server Nest Tests]]
- 7 edges to [[_COMMUNITY_Controller Server Nest Tests]]
- 5 edges to [[_COMMUNITY_Server Utils Ssrfguard Tests]]
- 5 edges to [[_COMMUNITY_Server Services Tripservice (Server)]]
- 5 edges to [[_COMMUNITY_Server Services Settingsservice Tests]]
- 3 edges to [[_COMMUNITY_Reservations Server Nest Tests]]
- 2 edges to [[_COMMUNITY_Plugin Sdk Cli]]
- 2 edges to [[_COMMUNITY_Plugins Server Nest Tests]]
- 2 edges to [[_COMMUNITY_Server Nest Zod Tests]]
- 2 edges to [[_COMMUNITY_Memories Server Services Tests]]
- 1 edge to [[_COMMUNITY_Client Components Planner Tests_2]]
- 1 edge to [[_COMMUNITY_Server Nest Auth Tests]]
- 1 edge to [[_COMMUNITY_Journey Server Nest Tests]]
- 1 edge to [[_COMMUNITY_Server Nest Integrations (Server)]]
- 1 edge to [[_COMMUNITY_Auth Server Nest Tests]]
- 1 edge to [[_COMMUNITY_Collections Server Nest Tests]]
- 1 edge to [[_COMMUNITY_Server Nest Health Tests]]
- 1 edge to [[_COMMUNITY_Plugin Server Plugins Tests]]
- 1 edge to [[_COMMUNITY_Server Services Adminservice Tests]]
- 1 edge to [[_COMMUNITY_Server Tests Helpers Tests]]
- 1 edge to [[_COMMUNITY_Server Services Tests Tests]]

## Top bridge nodes
- [[airtrail.controller.ts]] - degree 22, connects to 11 communities
- [[airtrailSync.ts]] - degree 43, connects to 7 communities
- [[airtrailService.ts]] - degree 31, connects to 4 communities
- [[airtrailImport.ts]] - degree 19, connects to 4 communities
- [[importAirtrailFlights()]] - degree 11, connects to 4 communities
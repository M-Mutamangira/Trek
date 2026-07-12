---
type: community
cohesion: 0.27
members: 10
---

# Weather Shared Schema

**Cohesion:** 0.27 - loosely connected
**Members:** 10 nodes

## Members
- [[DetailedWeatherQuery]] - code - shared/src/weather/weather.schema.ts
- [[HourlyEntry_1]] - code - shared/src/weather/weather.schema.ts
- [[WeatherQuery]] - code - shared/src/weather/weather.schema.ts
- [[WeatherResult_1]] - code - shared/src/weather/weather.schema.ts
- [[detailedWeatherQuerySchema]] - code - shared/src/weather/weather.schema.ts
- [[hourlyEntrySchema]] - code - shared/src/weather/weather.schema.ts
- [[weather.schema.spec.ts]] - code - shared/src/weather/weather.schema.spec.ts
- [[weather.schema.ts]] - code - shared/src/weather/weather.schema.ts
- [[weatherQuerySchema]] - code - shared/src/weather/weather.schema.ts
- [[weatherResultSchema]] - code - shared/src/weather/weather.schema.ts

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Weather_Shared_Schema
SORT file.name ASC
```

## Connections to other communities
- 2 edges to [[_COMMUNITY_Client Components Admin Tests]]
- 1 edge to [[_COMMUNITY_Shared Schema Airtrail Tests]]

## Top bridge nodes
- [[weather.schema.ts]] - degree 10, connects to 1 community
- [[weatherResultSchema]] - degree 3, connects to 1 community
- [[WeatherResult_1]] - degree 2, connects to 1 community
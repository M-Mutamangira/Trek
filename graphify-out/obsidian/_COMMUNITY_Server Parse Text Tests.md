---
type: community
cohesion: 0.33
members: 11
---

# Server Parse Text Tests

**Cohesion:** 0.33 - loosely connected
**Members:** 11 nodes

## Members
- [[TEXT_LIKE]] - code - server/src/nest/llm-parse/text-extract.ts
- [[cleanPdfText()]] - code - server/src/nest/llm-parse/text-extract.ts
- [[extractPdfText()]] - code - server/src/nest/llm-parse/text-extract.ts
- [[extractText()]] - code - server/src/nest/llm-parse/text-extract.ts
- [[isPdf()]] - code - server/src/nest/llm-parse/text-extract.ts
- [[isTextLike()]] - code - server/src/nest/llm-parse/text-extract.ts
- [[pdf-parse]] - code - server/package.json
- [[stripMarkup()]] - code - server/src/nest/llm-parse/text-extract.ts
- [[text-extract.test.ts]] - code - server/tests/unit/nest/llm-parse/text-extract.test.ts
- [[text-extract.ts]] - code - server/src/nest/llm-parse/text-extract.ts
- [[{ getText }]] - code - server/tests/unit/nest/llm-parse/text-extract.test.ts

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Server_Parse_Text_Tests
SORT file.name ASC
```

## Connections to other communities
- 5 edges to [[_COMMUNITY_Import Server Nest Tests]]
- 1 edge to [[_COMMUNITY_Server Package Dependencies (Server)]]

## Top bridge nodes
- [[text-extract.ts]] - degree 9, connects to 1 community
- [[extractText()]] - degree 7, connects to 1 community
- [[isPdf()]] - degree 5, connects to 1 community
- [[pdf-parse]] - degree 2, connects to 1 community
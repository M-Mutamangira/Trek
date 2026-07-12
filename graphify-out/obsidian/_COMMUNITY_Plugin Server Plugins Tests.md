---
type: community
cohesion: 0.13
members: 26
---

# Plugin Server Plugins Tests

**Cohesion:** 0.13 - loosely connected
**Members:** 26 nodes

## Members
- [[.emit()]] - code - server/src/nest/plugins/runtime/plugin-sdk.ts
- [[.event()]] - code - plugin-sdk/src/mock-host.ts
- [[.rpc()]] - code - server/src/nest/plugins/runtime/plugin-sdk.ts
- [[ChildTransport]] - code - server/src/nest/plugins/runtime/plugin-sdk.ts
- [[NOTE we intentionally do NOT lock `process.channel``process._channel`.]] - rationale - server/src/nest/plugins/runtime/plugin-host-entry.ts
- [[PLUGIN_API_VERSION_1]] - code - server/src/nest/plugins/runtime/plugin-sdk.ts
- [[PluginContext_1]] - code - server/src/nest/plugins/runtime/plugin-sdk.ts
- [[boot()]] - code - server/src/nest/plugins/runtime/plugin-host-entry.ts
- [[createPluginContext()]] - code - server/src/nest/plugins/runtime/plugin-sdk.ts
- [[definePlugin()_1]] - code - server/src/nest/plugins/runtime/plugin-sdk.ts
- [[errMsg()]] - code - server/src/nest/plugins/runtime/plugin-host-entry.ts
- [[errStack()]] - code - server/src/nest/plugins/runtime/plugin-host-entry.ts
- [[fakeTransport()]] - code - server/tests/unit/plugins/plugin-sdk.test.ts
- [[handleInvoke()]] - code - server/src/nest/plugins/runtime/plugin-host-entry.ts
- [[heartbeat]] - code - server/src/nest/plugins/runtime/plugin-host-entry.ts
- [[installIpcGuard()]] - code - server/src/nest/plugins/runtime/plugin-host-entry.ts
- [[installSdkInjection()_1]] - code - server/src/nest/plugins/runtime/plugin-host-entry.ts
- [[makeSupervisor()]] - code - server/tests/integration/plugins/supervisor.test.ts
- [[onFatal()]] - code - server/src/nest/plugins/runtime/plugin-host-entry.ts
- [[pending]] - code - server/src/nest/plugins/runtime/plugin-host-entry.ts
- [[plugin-host-entry.ts]] - code - server/src/nest/plugins/runtime/plugin-host-entry.ts
- [[plugin-sdk.test.ts]] - code - server/tests/unit/plugins/plugin-sdk.test.ts
- [[pluginConfig]] - code - server/src/nest/plugins/runtime/plugin-host-entry.ts
- [[send()_3]] - code - server/src/nest/plugins/runtime/plugin-host-entry.ts
- [[shutdown()_1]] - code - server/src/nest/plugins/runtime/plugin-host-entry.ts
- [[transport]] - code - server/src/nest/plugins/runtime/plugin-host-entry.ts

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Plugin_Server_Plugins_Tests
SORT file.name ASC
```

## Connections to other communities
- 8 edges to [[_COMMUNITY_Server Plugins Egress Tests]]
- 7 edges to [[_COMMUNITY_Server Nest Plugins (Server)]]
- 2 edges to [[_COMMUNITY_Plugins Server Nest Tests_2]]
- 2 edges to [[_COMMUNITY_Host Server Plugins Tests]]
- 1 edge to [[_COMMUNITY_Plugin Sdk Cli]]
- 1 edge to [[_COMMUNITY_Plugin Sdk Cli Tests]]
- 1 edge to [[_COMMUNITY_Plugin Sdk Mock Tests]]
- 1 edge to [[_COMMUNITY_Server Services Host Tests]]
- 1 edge to [[_COMMUNITY_Server Services Notifications Tests]]
- 1 edge to [[_COMMUNITY_Server Scripts Migrate (Server)]]
- 1 edge to [[_COMMUNITY_Server Supervisor Plugins Tests]]
- 1 edge to [[_COMMUNITY_Server Nest Plugins (Server)_1]]
- 1 edge to [[_COMMUNITY_Server Services Airtrail Tests]]
- 1 edge to [[_COMMUNITY_Server Plugins Services Tests]]

## Top bridge nodes
- [[plugin-host-entry.ts]] - degree 32, connects to 5 communities
- [[.event()]] - degree 9, connects to 5 communities
- [[createPluginContext()]] - degree 10, connects to 3 communities
- [[ChildTransport]] - degree 5, connects to 1 community
- [[plugin-sdk.test.ts]] - degree 5, connects to 1 community
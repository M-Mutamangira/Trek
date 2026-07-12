---
type: community
cohesion: 0.05
members: 84
---

# Server Supervisor Plugins Tests

**Cohesion:** 0.05 - loosely connected
**Members:** 84 nodes

## Members
- [[.activate()_2]] - code - server/src/nest/plugins/supervisor/plugin-supervisor.ts
- [[.activeIds()]] - code - server/src/nest/plugins/supervisor/plugin-supervisor.ts
- [[.armActivationDeadline()]] - code - server/src/nest/plugins/supervisor/plugin-supervisor.ts
- [[.bufferEvent()]] - code - server/src/nest/plugins/supervisor/plugin-supervisor.ts
- [[.childRss()]] - code - server/src/nest/plugins/supervisor/plugin-supervisor.ts
- [[.clearActivationTimer()]] - code - server/src/nest/plugins/supervisor/plugin-supervisor.ts
- [[.collectUserExport()]] - code - server/src/nest/plugins/supervisor/plugin-supervisor.ts
- [[.constructor()_57]] - code - server/src/nest/plugins/host/rate-limit.ts
- [[.constructor()_56]] - code - server/src/nest/plugins/host/rate-limit.ts
- [[.deliverEvent()]] - code - server/src/nest/plugins/supervisor/plugin-supervisor.ts
- [[.deliverScheduled()]] - code - server/src/nest/plugins/supervisor/plugin-supervisor.ts
- [[.deliverUserErasure()]] - code - server/src/nest/plugins/supervisor/plugin-supervisor.ts
- [[.disable()_2]] - code - server/src/nest/plugins/supervisor/plugin-supervisor.ts
- [[.ensureSweep()]] - code - server/src/nest/plugins/supervisor/plugin-supervisor.ts
- [[.exportsOf()]] - code - server/src/nest/plugins/supervisor/plugin-supervisor.ts
- [[.flushPendingEvents()]] - code - server/src/nest/plugins/supervisor/plugin-supervisor.ts
- [[.invoke()_1]] - code - server/src/nest/plugins/supervisor/plugin-supervisor.ts
- [[.isActive()_2]] - code - server/src/nest/plugins/supervisor/plugin-supervisor.ts
- [[.kill()]] - code - server/src/nest/plugins/supervisor/plugin-supervisor.ts
- [[.onEvent()]] - code - server/src/nest/plugins/supervisor/plugin-supervisor.ts
- [[.onExit()]] - code - server/src/nest/plugins/supervisor/plugin-supervisor.ts
- [[.onLog()]] - code - server/src/nest/plugins/supervisor/plugin-supervisor.ts
- [[.onMessage()]] - code - server/src/nest/plugins/supervisor/plugin-supervisor.ts
- [[.onStatus()]] - code - server/src/nest/plugins/supervisor/plugin-supervisor.ts
- [[.providersOf()_1]] - code - server/src/nest/plugins/supervisor/plugin-supervisor.ts
- [[.reapStale()]] - code - server/src/nest/plugins/supervisor/plugin-supervisor.ts
- [[.recordLog()]] - code - server/src/nest/plugins/supervisor/plugin-supervisor.ts
- [[.rejectPending()]] - code - server/src/nest/plugins/supervisor/plugin-supervisor.ts
- [[.release()]] - code - server/src/nest/plugins/host/rate-limit.ts
- [[.routesOf()_1]] - code - server/src/nest/plugins/supervisor/plugin-supervisor.ts
- [[.sendEvent()]] - code - server/src/nest/plugins/supervisor/plugin-supervisor.ts
- [[.setStatus()_2]] - code - server/src/nest/plugins/supervisor/plugin-supervisor.ts
- [[.shutdownAll()]] - code - server/src/nest/plugins/supervisor/plugin-supervisor.ts
- [[.spawn()]] - code - server/src/nest/plugins/supervisor/plugin-supervisor.ts
- [[.statusOf()]] - code - server/src/nest/plugins/supervisor/plugin-supervisor.ts
- [[.subscribersOf()]] - code - server/src/nest/plugins/supervisor/plugin-supervisor.ts
- [[.take()_1]] - code - server/src/nest/plugins/host/rate-limit.ts
- [[.tryAcquire()]] - code - server/src/nest/plugins/host/rate-limit.ts
- [[DATA_ROOT]] - code - server/src/nest/plugins/paths.ts
- [[DEFAULTS_3]] - code - server/src/nest/plugins/supervisor/plugin-supervisor.ts
- [[DEFAULT_LOG_LIMIT]] - code - server/src/nest/plugins/host/rate-limit.ts
- [[DEFAULT_RPC_LIMIT]] - code - server/src/nest/plugins/host/rate-limit.ts
- [[ENTITY_ID_KEYS]] - code - server/src/plugin-event-sink.ts
- [[ENTITY_SNAPSHOT]] - code - server/src/plugin-event-sink.ts
- [[Envelope]] - code - server/src/nest/plugins/protocol/envelope.ts
- [[HOOK_PERMISSION]] - code - server/src/nest/plugins/supervisor/plugin-supervisor.ts
- [[Pending_1]] - code - server/src/nest/plugins/supervisor/plugin-supervisor.ts
- [[PluginStatus]] - code - server/src/nest/plugins/supervisor/plugin-supervisor.ts
- [[PluginSupervisor]] - code - server/src/nest/plugins/supervisor/plugin-supervisor.ts
- [[RpcLimitConfig]] - code - server/src/nest/plugins/host/rate-limit.ts
- [[RpcRateLimiter]] - code - server/src/nest/plugins/host/rate-limit.ts
- [[SNAPSHOT_GRANT]] - code - server/src/plugin-event-sink.ts
- [[ScheduledJob]] - code - server/src/nest/plugins/host/plugin-jobs.ts
- [[Supervised]] - code - server/src/nest/plugins/supervisor/plugin-supervisor.ts
- [[SupervisorHooks]] - code - server/src/nest/plugins/supervisor/plugin-supervisor.ts
- [[TokenBucket]] - code - server/src/nest/plugins/host/rate-limit.ts
- [[ensurePluginModuleType()]] - code - server/src/nest/plugins/paths.ts
- [[entitySnapshot()]] - code - server/src/plugin-event-sink.ts
- [[event-subscriptions.test.ts]] - code - server/tests/unit/plugins/event-subscriptions.test.ts
- [[h_1]] - code - server/tests/unit/plugins/plugin-jobs.test.ts
- [[makeSupervisor()_1]] - code - server/tests/unit/plugins/event-subscriptions.test.ts
- [[makeSupervisor()_3]] - code - server/tests/unit/plugins/supervisor-lifecycle.test.ts
- [[paths.ts]] - code - server/src/nest/plugins/paths.ts
- [[plugin-event-meta.test.ts]] - code - server/tests/unit/plugins/plugin-event-meta.test.ts
- [[plugin-event-sink.ts]] - code - server/src/plugin-event-sink.ts
- [[plugin-jobs.test.ts]] - code - server/tests/unit/plugins/plugin-jobs.test.ts
- [[plugin-jobs.ts]] - code - server/src/nest/plugins/host/plugin-jobs.ts
- [[plugin-supervisor.ts]] - code - server/src/nest/plugins/supervisor/plugin-supervisor.ts
- [[pluginEventMeta]] - code - server/src/plugin-event-sink.ts
- [[pluginPermissionArgs()]] - code - server/src/nest/plugins/paths.ts
- [[pluginRealCodeDir()]] - code - server/src/nest/plugins/paths.ts
- [[protocol-paths.test.ts]] - code - server/tests/unit/plugins/protocol-paths.test.ts
- [[put()_2]] - code - server/tests/unit/plugins/event-subscriptions.test.ts
- [[rate-limit.test.ts]] - code - server/tests/unit/plugins/rate-limit.test.ts
- [[rate-limit.ts]] - code - server/src/nest/plugins/host/rate-limit.ts
- [[readPath()]] - code - server/src/plugin-event-sink.ts
- [[resolveChildEntry()]] - code - server/src/nest/plugins/paths.ts
- [[scheduleJobs()]] - code - server/src/nest/plugins/host/plugin-jobs.ts
- [[serverCodeRoot()]] - code - server/src/nest/plugins/paths.ts
- [[setPluginEventSink()]] - code - server/src/plugin-event-sink.ts
- [[stop()_3]] - code - server/tests/unit/plugins/plugin-jobs.test.ts
- [[stopJobs()]] - code - server/src/nest/plugins/host/plugin-jobs.ts
- [[supervisor-lifecycle.test.ts]] - code - server/tests/unit/plugins/supervisor-lifecycle.test.ts
- [[toEntityId()]] - code - server/src/plugin-event-sink.ts

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Server_Supervisor_Plugins_Tests
SORT file.name ASC
```

## Connections to other communities
- 12 edges to [[_COMMUNITY_Server Plugins Services Tests]]
- 11 edges to [[_COMMUNITY_Plugins Server Nest Tests_2]]
- 9 edges to [[_COMMUNITY_Plugins Server Nest Tests_1]]
- 8 edges to [[_COMMUNITY_Host Server Plugins Tests]]
- 6 edges to [[_COMMUNITY_Server Services Nest Tests]]
- 3 edges to [[_COMMUNITY_Host Server Nest (Server)_1]]
- 2 edges to [[_COMMUNITY_Trip Invite Server (Server)]]
- 1 edge to [[_COMMUNITY_Client Api Components Tests]]
- 1 edge to [[_COMMUNITY_Plugins Server Nest Tests]]
- 1 edge to [[_COMMUNITY_Server Services Usercleanupservice (Server)]]
- 1 edge to [[_COMMUNITY_Plugin Server Plugins Tests]]
- 1 edge to [[_COMMUNITY_Client Components Pdf Tests]]

## Top bridge nodes
- [[plugin-supervisor.ts]] - degree 38, connects to 5 communities
- [[paths.ts]] - degree 21, connects to 5 communities
- [[protocol-paths.test.ts]] - degree 14, connects to 4 communities
- [[PluginSupervisor]] - degree 37, connects to 3 communities
- [[plugin-event-sink.ts]] - degree 14, connects to 2 communities
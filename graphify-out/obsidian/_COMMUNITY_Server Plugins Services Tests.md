---
type: community
cohesion: 0.05
members: 70
---

# Server Plugins Services Tests

**Cohesion:** 0.05 - loosely connected
**Members:** 70 nodes

## Members
- [[.checkpoint()]] - code - server/src/nest/plugins/host/plugin-data.service.ts
- [[.close()_1]] - code - server/src/nest/plugins/host/plugin-data.service.ts
- [[.constructor()_55]] - code - server/src/nest/plugins/host/plugin-data.service.ts
- [[.exec()_2]] - code - server/src/nest/plugins/host/plugin-data.service.ts
- [[.guard()]] - code - server/src/nest/plugins/host/plugin-data.service.ts
- [[.isOpen()]] - code - server/src/nest/plugins/host/plugin-data.service.ts
- [[.migrate()_1]] - code - server/src/nest/plugins/host/plugin-data.service.ts
- [[.query()_1]] - code - server/src/nest/plugins/host/plugin-data.service.ts
- [[.snapshotInto()]] - code - server/src/nest/plugins/host/plugin-data.service.ts
- [[.tx()]] - code - server/src/nest/plugins/host/plugin-data.service.ts
- [[BackupInfo]] - code - server/src/services/backupService.ts
- [[DatabaseMock]] - code - server/tests/unit/services/backupService.test.ts
- [[PluginDataDb]] - code - server/src/nest/plugins/host/plugin-data.service.ts
- [[RestoreResult]] - code - server/src/services/backupService.ts
- [[SupervisorTuning]] - code - server/src/nest/plugins/supervisor/plugin-supervisor.ts
- [[applyStagedPluginTrees()]] - code - server/src/nest/plugins/plugin-backup.ts
- [[applyStagedRestoreNow()]] - code - server/src/nest/plugins/plugin-backup.ts
- [[archiverInstanceMock]] - code - server/tests/unit/services/backupService.test.ts
- [[archiverMock]] - code - server/tests/unit/services/backupService.test.ts
- [[backupAttempts]] - code - server/src/services/backupService.ts
- [[backupFileExists()]] - code - server/src/services/backupService.ts
- [[backupFilePath()]] - code - server/src/services/backupService.ts
- [[backupService.test.ts]] - code - server/tests/unit/services/backupService.test.ts
- [[backupService.ts]] - code - server/src/services/backupService.ts
- [[backupsDir_2]] - code - server/src/services/backupService.ts
- [[broadcasts]] - code - server/tests/integration/plugins/supervisor.test.ts
- [[checkRateLimit()]] - code - server/src/services/backupService.ts
- [[checkpointAllPluginDataDbs()]] - code - server/src/nest/plugins/host/plugin-data.service.ts
- [[closeDb()]] - code - server/src/db/database.ts
- [[codeStaging()]] - code - server/src/nest/plugins/plugin-backup.ts
- [[createBackup()]] - code - server/src/services/backupService.ts
- [[dataDir_3]] - code - server/src/services/backupService.ts
- [[dataStaging()]] - code - server/src/nest/plugins/plugin-backup.ts
- [[dbMock]] - code - server/tests/unit/services/backupService.test.ts
- [[deleteBackup()]] - code - server/src/services/backupService.ts
- [[ensureBackupsDir()]] - code - server/src/services/backupService.ts
- [[formatSize()_1]] - code - server/src/services/backupService.ts
- [[fsMock]] - code - server/tests/unit/services/backupService.test.ts
- [[getAutoSettings()]] - code - server/src/services/backupService.ts
- [[getUploadTmpDir()]] - code - server/src/services/backupService.ts
- [[isValidBackupFilename()]] - code - server/src/services/backupService.ts
- [[listBackups()]] - code - server/src/services/backupService.ts
- [[logMeta()]] - code - server/tests/integration/plugins/supervisor.test.ts
- [[openDbs]] - code - server/src/nest/plugins/host/plugin-data.service.ts
- [[parseAutoBackupBody()]] - code - server/src/services/backupService.ts
- [[parseIntField()]] - code - server/src/services/backupService.ts
- [[plugin-backup.test.ts]] - code - server/tests/unit/plugins/plugin-backup.test.ts
- [[plugin-backup.ts]] - code - server/src/nest/plugins/plugin-backup.ts
- [[plugin-data.service.ts]] - code - server/src/nest/plugins/host/plugin-data.service.ts
- [[plugin-data.test.ts]] - code - server/tests/unit/plugins/plugin-data.test.ts
- [[pluginDataDir()]] - code - server/src/nest/plugins/paths.ts
- [[pluginDbFile()]] - code - server/src/nest/plugins/paths.ts
- [[pluginsDataRoot()]] - code - server/src/nest/plugins/paths.ts
- [[rawBackupUploadLimit]] - code - server/src/services/backupService.ts
- [[rawDecompressedLimit]] - code - server/src/services/backupService.ts
- [[read()_1]] - code - server/tests/unit/plugins/plugin-backup.test.ts
- [[reinitialize()]] - code - server/src/db/database.ts
- [[removePluginData()]] - code - server/src/nest/plugins/host/plugin-data.service.ts
- [[restoreFromZip()]] - code - server/src/services/backupService.ts
- [[setupAllTablesPresent()]] - code - server/tests/unit/services/backupService.test.ts
- [[setupSuccessfulExtraction()]] - code - server/tests/unit/services/backupService.test.ts
- [[snapshotAllPluginDataDbs()]] - code - server/src/nest/plugins/host/plugin-data.service.ts
- [[stageExtractedPluginTrees()]] - code - server/src/nest/plugins/plugin-backup.ts
- [[supervisor.test.ts]] - code - server/tests/integration/plugins/supervisor.test.ts
- [[swapContents()]] - code - server/src/nest/plugins/plugin-backup.ts
- [[unzipperMock]] - code - server/tests/unit/services/backupService.test.ts
- [[updateAutoSettings()]] - code - server/src/services/backupService.ts
- [[uploadsDir_2]] - code - server/src/services/backupService.ts
- [[write()_1]] - code - server/tests/unit/plugins/plugin-backup.test.ts
- [[writePlugin()]] - code - server/tests/integration/plugins/supervisor.test.ts

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Server_Plugins_Services_Tests
SORT file.name ASC
```

## Connections to other communities
- 12 edges to [[_COMMUNITY_Server Supervisor Plugins Tests]]
- 10 edges to [[_COMMUNITY_Plugins Server Nest Tests_2]]
- 8 edges to [[_COMMUNITY_Plugins Server Nest Tests_1]]
- 5 edges to [[_COMMUNITY_Server Services Nest Tests]]
- 4 edges to [[_COMMUNITY_Backup Server Nest Tests]]
- 4 edges to [[_COMMUNITY_Client Components Admin Tests]]
- 3 edges to [[_COMMUNITY_Host Server Plugins Tests]]
- 3 edges to [[_COMMUNITY_Server Tests Integration Tests]]
- 2 edges to [[_COMMUNITY_Server Services Host Tests]]
- 2 edges to [[_COMMUNITY_Host Server Nest (Server)]]
- 2 edges to [[_COMMUNITY_Server Services Usercleanupservice (Server)]]
- 2 edges to [[_COMMUNITY_Trip Invite Server (Server)]]
- 1 edge to [[_COMMUNITY_Server Db Seeds Tests]]
- 1 edge to [[_COMMUNITY_Host Server Nest (Server)_1]]
- 1 edge to [[_COMMUNITY_Server Scheduler Services Tests]]
- 1 edge to [[_COMMUNITY_Maps Server Nest Tests]]
- 1 edge to [[_COMMUNITY_Client Components Pdf Tests]]
- 1 edge to [[_COMMUNITY_Plugin Server Plugins Tests]]

## Top bridge nodes
- [[backupService.ts]] - degree 43, connects to 6 communities
- [[supervisor.test.ts]] - degree 13, connects to 5 communities
- [[plugin-data.service.ts]] - degree 15, connects to 4 communities
- [[createBackup()]] - degree 10, connects to 4 communities
- [[PluginDataDb]] - degree 16, connects to 3 communities
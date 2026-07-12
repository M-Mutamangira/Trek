---
type: community
cohesion: 0.06
members: 69
---

# Server Services Authservice Tests

**Cohesion:** 0.06 - loosely connected
**Members:** 69 nodes

## Members
- [[.canActivate()_4]] - code - server/src/nest/auth/passkey-enabled.guard.ts
- [[ADMIN_SETTINGS_KEYS]] - code - server/src/services/authService.ts
- [[DUMMY_PASSWORD_HASH]] - code - server/src/services/authService.ts
- [[Injectable_10]] - code
- [[KNOWN_COUNTRIES]] - code - server/src/services/authService.ts
- [[PasskeyEnabledGuard]] - code - server/src/nest/auth/passkey-enabled.guard.ts
- [[PasswordResetRequestOutcome]] - code - server/src/services/authService.ts
- [[ResetPasswordOutcome]] - code - server/src/services/authService.ts
- [[authService.test.ts]] - code - server/tests/unit/services/authService.test.ts
- [[authService.ts]] - code - server/src/services/authService.ts
- [[authServiceDb.test.ts]] - code - server/tests/unit/services/authServiceDb.test.ts
- [[avatarDir_1]] - code - server/src/services/authService.ts
- [[changePassword()]] - code - server/src/services/authService.ts
- [[createEphemeralToken()]] - code - server/src/services/ephemeralTokens.ts
- [[createMcpToken()]] - code - server/src/services/authService.ts
- [[createResourceToken()]] - code - server/src/services/authService.ts
- [[createWsToken()]] - code - server/src/services/authService.ts
- [[deleteAccount()]] - code - server/src/services/authService.ts
- [[deleteAvatar()]] - code - server/src/services/authService.ts
- [[deleteMcpToken()_1]] - code - server/src/services/authService.ts
- [[demoLogin()]] - code - server/src/services/authService.ts
- [[disableMfa()]] - code - server/src/services/authService.ts
- [[distanceService.ts]] - code - server/src/services/distanceService.ts
- [[enableMfa()]] - code - server/src/services/authService.ts
- [[endpoint()]] - code - server/tests/unit/services/authServiceDb.test.ts
- [[generateBackupCodes()]] - code - server/src/services/authService.ts
- [[generateToken()]] - code - server/src/services/authService.ts
- [[getAppConfig()]] - code - server/src/services/authService.ts
- [[getAppSettings()]] - code - server/src/services/authService.ts
- [[getFlightDistanceKm()]] - code - server/src/services/distanceService.ts
- [[getHiddenCountries()]] - code - server/src/services/atlasService.ts
- [[getPendingMfaSecret()]] - code - server/src/services/authService.ts
- [[getSettings()]] - code - server/src/services/authService.ts
- [[getTravelStats()]] - code - server/src/services/authService.ts
- [[hashBackupCode()]] - code - server/src/services/authService.ts
- [[hashBackupCodeBcrypt()]] - code - server/src/services/authService.ts
- [[hashResetToken()]] - code - server/src/services/authService.ts
- [[haversineKm()_3]] - code - server/src/services/distanceService.ts
- [[isDemoEmail()]] - code - server/src/services/demo.ts
- [[isOidcOnlyMode()]] - code - server/src/services/authService.ts
- [[listMcpTokens()_1]] - code - server/src/services/authService.ts
- [[listUsers()_1]] - code - server/src/services/authService.ts
- [[loginUser()]] - code - server/src/services/authService.ts
- [[makeUser()]] - code - server/tests/unit/services/authService.test.ts
- [[maskKey()]] - code - server/src/services/authService.ts
- [[mask_stored_api_key()]] - code - server/src/services/authService.ts
- [[matchBackupCode()]] - code - server/src/services/authService.ts
- [[mfaSetupPending]] - code - server/src/services/authService.ts
- [[normalizeBackupCode()]] - code - server/src/services/authService.ts
- [[parseBackupCodeHashes()]] - code - server/src/services/authService.ts
- [[passkey-enabled.guard.ts]] - code - server/src/nest/auth/passkey-enabled.guard.ts
- [[perEmailResetAttempts]] - code - server/src/services/authService.ts
- [[registerUser()]] - code - server/src/services/authService.ts
- [[requestPasswordReset()]] - code - server/src/services/authService.ts
- [[resetPassword()]] - code - server/src/services/authService.ts
- [[resolveAuthToggles()]] - code - server/src/services/authService.ts
- [[revokeUserSessions()]] - code - server/src/mcp/sessionManager.ts
- [[saveAvatar()]] - code - server/src/services/authService.ts
- [[setupMfa()]] - code - server/src/services/authService.ts
- [[stripUserForClient()]] - code - server/src/services/authService.ts
- [[updateApiKeys()]] - code - server/src/services/authService.ts
- [[updateAppSettings()]] - code - server/src/services/authService.ts
- [[updateMapsKey()]] - code - server/src/services/authService.ts
- [[updateSettings()]] - code - server/src/services/authService.ts
- [[utcSuffix()_1]] - code - server/src/services/authService.ts
- [[validateInviteToken()]] - code - server/src/services/authService.ts
- [[validateKeys()]] - code - server/src/services/authService.ts
- [[verifyMfaLogin()]] - code - server/src/services/authService.ts
- [[{ testDb, dbMock }_65]] - code - server/tests/unit/services/authServiceDb.test.ts

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Server_Services_Authservice_Tests
SORT file.name ASC
```

## Connections to other communities
- 14 edges to [[_COMMUNITY_Server Auth Middleware Tests]]
- 12 edges to [[_COMMUNITY_Server Services Mcp Tests]]
- 12 edges to [[_COMMUNITY_Server Services Settingsservice Tests]]
- 10 edges to [[_COMMUNITY_Server Config Services Tests]]
- 10 edges to [[_COMMUNITY_Server Services Nest Tests]]
- 10 edges to [[_COMMUNITY_Server Services Adminservice Tests]]
- 10 edges to [[_COMMUNITY_Server Services Collabservice Tests]]
- 8 edges to [[_COMMUNITY_Server Atlasservice Services (Server)]]
- 8 edges to [[_COMMUNITY_Server Services Passkeyservice Tests]]
- 7 edges to [[_COMMUNITY_Server Tests Integration Tests]]
- 6 edges to [[_COMMUNITY_Server Services Oauthservice Tests]]
- 5 edges to [[_COMMUNITY_Server Nest Auth Tests]]
- 5 edges to [[_COMMUNITY_Server Services Passwordpolicy Tests]]
- 4 edges to [[_COMMUNITY_Collections Server Nest Tests]]
- 4 edges to [[_COMMUNITY_Server Services Host Tests]]
- 3 edges to [[_COMMUNITY_Server Services Vacayservice Tests]]
- 3 edges to [[_COMMUNITY_Files Server Nest Tests]]
- 3 edges to [[_COMMUNITY_Oidc Server Nest Tests]]
- 3 edges to [[_COMMUNITY_Server Scheduler Services Tests]]
- 3 edges to [[_COMMUNITY_Server Services Usercleanupservice (Server)]]
- 3 edges to [[_COMMUNITY_Server Services Oidcservice Tests]]
- 2 edges to [[_COMMUNITY_Server Tests Unit Tests]]
- 2 edges to [[_COMMUNITY_Server Services Packingservice (Server)]]
- 2 edges to [[_COMMUNITY_Server Tests Helpers Tests]]
- 2 edges to [[_COMMUNITY_Server Tests Unit Tests_1]]
- 1 edge to [[_COMMUNITY_Server Package Dependencies (Server)]]
- 1 edge to [[_COMMUNITY_Server Services Budgetservice Tests]]
- 1 edge to [[_COMMUNITY_Server Services Journeyservice Tests]]
- 1 edge to [[_COMMUNITY_Auth Server Nest Tests]]
- 1 edge to [[_COMMUNITY_Client Components Admin Tests]]
- 1 edge to [[_COMMUNITY_Server Services Unsplashservice Tests]]
- 1 edge to [[_COMMUNITY_Trips Server Nest (Server)_2]]
- 1 edge to [[_COMMUNITY_Server Services Tests Tests]]
- 1 edge to [[_COMMUNITY_Server Tests Unit Tests_2]]

## Top bridge nodes
- [[authService.ts]] - degree 126, connects to 23 communities
- [[isDemoEmail()]] - degree 22, connects to 9 communities
- [[authServiceDb.test.ts]] - degree 40, connects to 8 communities
- [[resolveAuthToggles()]] - degree 16, connects to 4 communities
- [[authService.test.ts]] - degree 12, connects to 3 communities
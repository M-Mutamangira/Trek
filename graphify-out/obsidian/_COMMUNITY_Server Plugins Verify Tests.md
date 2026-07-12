---
type: community
cohesion: 0.22
members: 13
---

# Server Plugins Verify Tests

**Cohesion:** 0.22 - loosely connected
**Members:** 13 nodes

## Members
- [[.verifySignatureAndTofu()]] - code - server/src/nest/plugins/registry/registry.service.ts
- [[ED25519_SPKI_PREFIX]] - code - server/src/nest/plugins/install/verify-signature.ts
- [[KEY_ID]] - code - server/tests/unit/plugins/verify-signature.test.ts
- [[RFC-8410]] - concept - server/src/nest/plugins/install/verify-signature.ts
- [[SignatureError]] - code - server/src/nest/plugins/install/verify-signature.ts
- [[b64()]] - code - server/tests/unit/plugins/verify-signature.test.ts
- [[ed25519KeyFromRaw()]] - code - server/src/nest/plugins/install/verify-signature.ts
- [[makeKeypair()]] - code - server/tests/unit/plugins/verify-signature.test.ts
- [[parseMinisignPubKey()]] - code - server/src/nest/plugins/install/verify-signature.ts
- [[parseMinisignSignature()]] - code - server/src/nest/plugins/install/verify-signature.ts
- [[verify-signature.test.ts]] - code - server/tests/unit/plugins/verify-signature.test.ts
- [[verify-signature.ts]] - code - server/src/nest/plugins/install/verify-signature.ts
- [[verifyAuthorSignature()]] - code - server/src/nest/plugins/install/verify-signature.ts

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Server_Plugins_Verify_Tests
SORT file.name ASC
```

## Connections to other communities
- 4 edges to [[_COMMUNITY_Plugins Server Nest Tests_1]]

## Top bridge nodes
- [[verify-signature.ts]] - degree 9, connects to 1 community
- [[verifyAuthorSignature()]] - degree 6, connects to 1 community
- [[.verifySignatureAndTofu()]] - degree 3, connects to 1 community
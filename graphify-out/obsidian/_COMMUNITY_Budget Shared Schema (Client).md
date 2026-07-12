---
type: community
cohesion: 0.08
members: 30
---

# Budget Shared Schema (Client)

**Cohesion:** 0.08 - loosely connected
**Members:** 30 nodes

## Members
- [[BudgetCreateSettlementRequest]] - code - shared/src/budget/budget.schema.ts
- [[BudgetItemPayer_1]] - code - shared/src/budget/budget.schema.ts
- [[BudgetReorderCategoriesRequest]] - code - shared/src/budget/budget.schema.ts
- [[BudgetReorderItemsRequest]] - code - shared/src/budget/budget.schema.ts
- [[BudgetSettlement]] - code - shared/src/budget/budget.schema.ts
- [[BudgetToggleMemberPaidRequest]] - code - shared/src/budget/budget.schema.ts
- [[BudgetUpdateMembersRequest]] - code - shared/src/budget/budget.schema.ts
- [[BudgetUpdatePayersRequest]] - code - shared/src/budget/budget.schema.ts
- [[BudgetUpdateSettlementRequest]] - code - shared/src/budget/budget.schema.ts
- [[COST_CATEGORIES]] - code - shared/src/budget/budget.schema.ts
- [[CostCategory]] - code - shared/src/budget/budget.schema.ts
- [[CostCategoryMeta]] - code - client/src/components/Budget/costsCategories.tsx
- [[RESERVATION_TYPE_TO_COST_CATEGORY]] - code - shared/src/budget/budget.schema.ts
- [[budget.schema.spec.ts]] - code - shared/src/budget/budget.schema.spec.ts
- [[budget.schema.ts]] - code - shared/src/budget/budget.schema.ts
- [[budgetCreateItemRequestSchema]] - code - shared/src/budget/budget.schema.ts
- [[budgetCreateSettlementRequestSchema]] - code - shared/src/budget/budget.schema.ts
- [[budgetItemMemberSchema]] - code - shared/src/budget/budget.schema.ts
- [[budgetItemPayerSchema]] - code - shared/src/budget/budget.schema.ts
- [[budgetItemSchema]] - code - shared/src/budget/budget.schema.ts
- [[budgetReorderCategoriesRequestSchema]] - code - shared/src/budget/budget.schema.ts
- [[budgetReorderItemsRequestSchema]] - code - shared/src/budget/budget.schema.ts
- [[budgetSettlementSchema]] - code - shared/src/budget/budget.schema.ts
- [[budgetToggleMemberPaidRequestSchema]] - code - shared/src/budget/budget.schema.ts
- [[budgetUpdateItemRequestSchema]] - code - shared/src/budget/budget.schema.ts
- [[budgetUpdateMembersRequestSchema]] - code - shared/src/budget/budget.schema.ts
- [[budgetUpdatePayersRequestSchema]] - code - shared/src/budget/budget.schema.ts
- [[budgetUpdateSettlementRequestSchema]] - code - shared/src/budget/budget.schema.ts
- [[memberInputSchema]] - code - shared/src/budget/budget.schema.ts
- [[payerInputSchema]] - code - shared/src/budget/budget.schema.ts

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Budget_Shared_Schema_Client
SORT file.name ASC
```

## Connections to other communities
- 4 edges to [[_COMMUNITY_Client Sync Store Tests]]
- 3 edges to [[_COMMUNITY_Client Components Admin Tests]]
- 3 edges to [[_COMMUNITY_Client Components Budget Tests]]
- 1 edge to [[_COMMUNITY_Client Components Planner Tests_2]]
- 1 edge to [[_COMMUNITY_Shared Schema Airtrail Tests]]

## Top bridge nodes
- [[budget.schema.ts]] - degree 34, connects to 3 communities
- [[CostCategory]] - degree 3, connects to 1 community
- [[CostCategoryMeta]] - degree 2, connects to 1 community
- [[BudgetReorderCategoriesRequest]] - degree 2, connects to 1 community
- [[BudgetToggleMemberPaidRequest]] - degree 2, connects to 1 community
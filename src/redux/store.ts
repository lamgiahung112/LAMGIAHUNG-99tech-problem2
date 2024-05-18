import { configureStore } from "@reduxjs/toolkit"
import { balanceSlice } from "./slices/userBalanceSlice"
import { tokenPriceLookupSlice } from "./slices/tokenPriceLookupSlice"
import { currencySwapFormSlice } from "./slices/currencySwapFormSlice"
import { assetTableSortSlice } from "./slices/assetTableSortSlice"

export const store = configureStore({
	reducer: {
		balance: balanceSlice.reducer,
		priceLookup: tokenPriceLookupSlice.reducer,
		currencySwapForm: currencySwapFormSlice.reducer,
		assetTableSort: assetTableSortSlice.reducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

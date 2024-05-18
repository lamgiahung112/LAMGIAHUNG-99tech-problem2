import { createSlice } from "@reduxjs/toolkit"

export interface AssetTableSortSlice {
	coinNameSort: SortDirection
	amountSort: SortDirection
	priceSort: SortDirection
}

const initialState: AssetTableSortSlice = {
	amountSort: undefined,
	coinNameSort: undefined,
	priceSort: undefined,
}

export const assetTableSortSlice = createSlice({
	name: "asset-table-sort",
	initialState,
	reducers: {
		changeAmountSort(state) {
			state.amountSort = state.amountSort === "ASC" ? "DES" : "ASC"
		},
		changeCoinNameSort(state) {
			state.coinNameSort = state.coinNameSort === "ASC" ? "DES" : "ASC"
		},
		changePriceSort(state) {
			state.priceSort = state.priceSort === "ASC" ? "DES" : "ASC"
		},
	},
})

export const { changeAmountSort, changeCoinNameSort, changePriceSort } =
	assetTableSortSlice.actions

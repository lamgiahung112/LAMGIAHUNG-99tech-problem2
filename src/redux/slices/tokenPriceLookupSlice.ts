import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import getPriceLookup from "../../fake-apis/getPriceLookup"

export type TokenPriceLookupSlice = {
	lookupMap: Record<Asset, number>
}

const initialState: TokenPriceLookupSlice = {
	lookupMap: {},
}

export const fetchTokenPriceLookup = createAsyncThunk(
	"/price/lookup",
	async (_: void, thunkApi) => {
		const finalState: Record<Asset, number> = {}
		const priceLookup = await getPriceLookup()

		priceLookup.forEach((val) => {
			finalState[val.currency] = val.price
		})
		return thunkApi.fulfillWithValue(finalState)
	}
)

export const tokenPriceLookupSlice = createSlice({
	name: "token-price-lookup-slice",
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(fetchTokenPriceLookup.fulfilled, (state, action) => {
			state.lookupMap = action.payload
		})
	},
})

export const {} = tokenPriceLookupSlice.actions

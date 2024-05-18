import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import getUserWalletDetails from "../../fake-apis/getUserWalletDetails"

export interface BalanceSlice {
	isHidden: boolean
	assetDetails: UserWalletAssetDetail
}

const initialState: BalanceSlice = {
	isHidden: true,
	assetDetails: {},
}

export const fetchAssetDetails = createAsyncThunk(
	"/balance/assetdetails",
	async (_: void, thunkApi) => {
		const response = await getUserWalletDetails()
		return thunkApi.fulfillWithValue(response)
	}
)

export const balanceSlice = createSlice({
	name: "balance-slice",
	initialState,
	reducers: {
		toggle(state) {
			state.isHidden = !state.isHidden
		},
	},
	extraReducers(builder) {
		builder.addCase(fetchAssetDetails.fulfilled, (state, action) => {
			state.assetDetails = action.payload
		})
	},
})

export const { toggle } = balanceSlice.actions

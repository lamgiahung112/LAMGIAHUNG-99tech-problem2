import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"

export type CurrencySwapFormSlice = {
	isOpen: boolean
	isLoading: boolean
	amount: number
	err: string
	lhsAsset: Asset | null
	rhsAsset: Asset | null
}

const initialState: CurrencySwapFormSlice = {
	isOpen: false,
	isLoading: false,
	err: "",
	amount: 0,
	lhsAsset: null,
	rhsAsset: null,
}

export const fakeTransfer = createAsyncThunk("fake-transfer", async (_: void, thunk) => {
	const delay = () =>
		new Promise<number>((resolve, _) => {
			const timer = setTimeout(() => {
				resolve(1)
				clearTimeout(timer)
			}, 1500)
		})
	await toast.promise(delay(), {
		pending: "Transferring your assets!",
		success: "Successfully transferred your assets!",
	})
	return thunk.fulfillWithValue(1)
})

export const currencySwapFormSlice = createSlice({
	name: "currency-swap-form-slice",
	initialState,
	reducers: {
		open(state, action: PayloadAction<Asset>) {
			state.isOpen = true
			state.lhsAsset = action.payload
			state.rhsAsset = action.payload
		},
		close(state) {
			state.isOpen = false
			state.lhsAsset = null
			state.rhsAsset = null
		},
		changeAmount(state, action: PayloadAction<number>) {
			state.amount = action.payload
		},
		changeErr(state, action: PayloadAction<string>) {
			state.err = action.payload
		},
		changeLhsAsset(state, action: PayloadAction<Asset>) {
			state.lhsAsset = action.payload
		},
		changeRhsAsset(state, action: PayloadAction<Asset>) {
			state.rhsAsset = action.payload
		},
	},
	extraReducers(builder) {
		builder.addCase(fakeTransfer.pending, (state) => {
			state.isLoading = true
		})
		builder.addCase(fakeTransfer.fulfilled, (state) => {
			state.isLoading = false
		})
	},
})

export const { open, close, changeLhsAsset, changeRhsAsset, changeAmount, changeErr } =
	currencySwapFormSlice.actions

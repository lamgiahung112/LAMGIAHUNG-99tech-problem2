import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../redux/store"
import { changeErr, close, fakeTransfer } from "../../redux/slices/currencySwapFormSlice"
import ArrowDownIcon from "../svg/arrow-down.svg?react"
import CurrencyPickerWrapper from "./currency-picker-wrapper"
import AmountInput from "./amount-input"

function CurrencySwapForm() {
	const { isOpen, lhsAsset, isLoading, amount, rhsAsset } = useSelector(
		(state: RootState) => state.currencySwapForm
	)
	const assetDetails = useSelector((state: RootState) => state.balance.assetDetails)
	const dispatch = useDispatch<AppDispatch>()

	async function validateThenTransfer() {
		if (amount <= 0) {
			dispatch(changeErr("Amount must be larger than 0."))
			return
		}
		if (amount > assetDetails[lhsAsset!]) {
			dispatch(changeErr("Amount must not exceed available amount."))
			return
		}
		if (lhsAsset === rhsAsset) {
			dispatch(changeErr("Cannot transfer to the same coin."))
			return
		}
		await dispatch(fakeTransfer())
		dispatch(close())
	}

	if (!isOpen) {
		return <></>
	}

	return (
		<div
			className="flex justify-center items-center transition fixed top-0 left-0 right-0 bottom-0 w-screen h-screen bg-opacity-45 bg-neutral-600"
			onClick={() => dispatch(close())}
		>
			<div
				className="flex flex-col justify-between w-[30%] bg-slate-700 rounded-xl py-4 px-8 gap-y-8"
				onClick={(e) => {
					e.stopPropagation()
				}}
			>
				<div className="flex justify-between">
					<div className="text-2xl">Currency Transfer</div>
					<div
						className="flex items-center justify-center font-semibold cursor-pointer text-slate-400 hover:text-slate-300"
						onClick={() => dispatch(close())}
					>
						X
					</div>
				</div>
				<div className="flex flex-col flex-[1] justify-center gap-y-4">
					<div className="flex flex-col bg-slate-600 p-4 rounded-xl gap-y-4">
						<CurrencyPickerWrapper isLhs />
						<ArrowDownIcon className="h-4 w-8 fill-neutral-400" />
						<CurrencyPickerWrapper isLhs={false} />
					</div>
					<div className="h-[1px] bg-neutral-500 w-full"></div>
					<AmountInput />
				</div>
				<button
					className="bg-slate-600 py-2 rounded-md hover:bg-slate-500 disabled:bg-slate-800 disabled:text-neutral-400"
					disabled={amount === 0 || isLoading}
					onClick={validateThenTransfer}
				>
					{isLoading && "Transferring..."}
					{!isLoading && "Confirm"}
				</button>
			</div>
		</div>
	)
}

export default CurrencySwapForm

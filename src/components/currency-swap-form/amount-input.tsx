import { FC } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import { changeAmount } from "../../redux/slices/currencySwapFormSlice"

const AmountInput: FC = () => {
	const assetDetails = useSelector((state: RootState) => state.balance.assetDetails)
	const { lhsAsset, amount, err } = useSelector(
		(state: RootState) => state.currencySwapForm
	)
	const dispatch = useDispatch()

	return (
		<div className="flex flex-col">
			<div className="flex justify-between">
				<div>Amount</div>
				<div>{assetDetails[lhsAsset!].toFixed(8)} available</div>
			</div>
			<input
				className="p-2 outline-none rounded-md bg-slate-500"
				type="number"
				min={0}
				value={amount}
				onChange={(e) => dispatch(changeAmount(+e.target.value))}
			/>
			<div className="text-red-600">{err}</div>
		</div>
	)
}

export default AmountInput

import { FC, useState } from "react"
import ChevronDown from "../svg/chevron-down.svg?react"
import { twMerge } from "tailwind-merge"
import DropdownCurrencyPicker from "./drop-down-currency-picker"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import { changeLhsAsset, changeRhsAsset } from "../../redux/slices/currencySwapFormSlice"

interface CurrencyPickerWrapperProps {
	isLhs: boolean
}

const CurrencyPickerWrapper: FC<CurrencyPickerWrapperProps> = (props) => {
	const [isOptionOpen, setIsOptionOpen] = useState(false)
	const assetDetails = useSelector((state: RootState) => state.balance.assetDetails)
	const lookupMap = useSelector((state: RootState) => state.priceLookup.lookupMap)
	const { lhsAsset, rhsAsset } = useSelector(
		(state: RootState) => state.currencySwapForm
	)

	const dispatch = useDispatch()

	return (
		<>
			<div className="flex gap-x-4 z-auto">
				<div className="w-10">{props.isLhs ? "From" : "To"}</div>
				<div
					className="relative flex justify-between items-center w-full cursor-pointer"
					onClick={() => setIsOptionOpen(!isOptionOpen)}
				>
					{props.isLhs ? lhsAsset : rhsAsset}
					<ChevronDown
						className={twMerge(
							"fill-neutral-400 transition h-4 w-4",
							!isOptionOpen && "rotate-90"
						)}
					/>
					<DropdownCurrencyPicker
						assetList={Object.keys(props.isLhs ? assetDetails : lookupMap)}
						onPicked={(asset) => {
							if (props.isLhs) {
								return dispatch(changeLhsAsset(asset))
							}
							return dispatch(changeRhsAsset(asset))
						}}
						isOpen={isOptionOpen}
					/>
				</div>
			</div>
			{isOptionOpen && (
				<div
					className="fixed top-0 left-0 right-0 bottom-0 z-30 bg-transparent"
					onClick={() => setIsOptionOpen(false)}
				></div>
			)}
		</>
	)
}

export default CurrencyPickerWrapper

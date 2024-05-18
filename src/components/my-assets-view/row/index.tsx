import { FC } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../redux/store"
import { open } from "../../../redux/slices/currencySwapFormSlice"

interface AssetTableRowProps {
	assetName: Asset
}

const AssetTableRow: FC<AssetTableRowProps> = (props) => {
	const { assetDetails, isHidden } = useSelector((state: RootState) => state.balance)
	const { lookupMap } = useSelector((state: RootState) => state.priceLookup)

	const dispatch = useDispatch()

	return (
		<div
			onClick={() => dispatch(open(props.assetName))}
			className="flex justify-between py-4 px-2 w-full hover:bg-neutral-600 rounded-md cursor-pointer"
		>
			<div className="flex-[1] flex gap-x-2">
				<img src={`/${props.assetName}.svg`} />
				{props.assetName}
			</div>
			<div className="flex-[1] flex justify-end">
				{!isHidden && assetDetails[props.assetName]}
				{isHidden && "*********"}
			</div>
			<div className="flex-[1] flex justify-end">
				{!isHidden && lookupMap[props.assetName]}
				{isHidden && "*********"}
			</div>
		</div>
	)
}

export default AssetTableRow

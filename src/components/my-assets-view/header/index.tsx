import { FC } from "react"
import AssetTableHeaderTitle from "./title"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../redux/store"
import {
	changeAmountSort,
	changeCoinNameSort,
	changePriceSort,
} from "../../../redux/slices/assetTableSortSlice"

const AssetTableHeader: FC = () => {
	const { amountSort, coinNameSort, priceSort } = useSelector(
		(state: RootState) => state.assetTableSort
	)
	const dispatch = useDispatch()

	function onCoinNameSortChange() {
		dispatch(changeCoinNameSort())
	}

	function onAmountSortChange() {
		dispatch(changeAmountSort())
	}

	function onPriceSortChange() {
		dispatch(changePriceSort())
	}

	return (
		<div className="flex justify-between w-full">
			<AssetTableHeaderTitle
				className="flex-[1]"
				title="Coin"
				sort={coinNameSort}
				onSwitchSort={onCoinNameSortChange}
			/>
			<AssetTableHeaderTitle
				className="flex-[1] justify-end"
				title="Amount"
				sort={amountSort}
				onSwitchSort={onAmountSortChange}
			/>
			<AssetTableHeaderTitle
				className="flex-[1] justify-end"
				title="Price"
				sort={priceSort}
				onSwitchSort={onPriceSortChange}
			/>
		</div>
	)
}

export default AssetTableHeader

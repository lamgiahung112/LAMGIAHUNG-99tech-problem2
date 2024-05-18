/// <reference types="vite-plugin-svgr/client" />
import { FC, useMemo } from "react"
import AssetTableHeader from "./header"
import AssetTableRow from "./row"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import AssetTableRowSkeleton from "./row/row-skeleton"

interface AssetTableProps {}

const AssetTable: FC<AssetTableProps> = () => {
	const assetDetails = useSelector((state: RootState) => state.balance.assetDetails)
	const lookupMap = useSelector((state: RootState) => state.priceLookup.lookupMap)
	const { amountSort, coinNameSort, priceSort } = useSelector(
		(state: RootState) => state.assetTableSort
	)

	const sortedAssets = useMemo(() => {
		const result = Object.keys(assetDetails)
			.sort((asset1, asset2) => {
				if (coinNameSort === undefined) return 0
				if (coinNameSort === "ASC") {
					return asset1 > asset2 ? -1 : 1
				}
				return asset1 < asset2 ? -1 : 1
			})
			.sort((asset1, asset2) => {
				if (amountSort === undefined) return 0
				if (amountSort === "ASC") {
					return assetDetails[asset2] - assetDetails[asset1]
				}
				return assetDetails[asset1] - assetDetails[asset2]
			})
			.sort((asset1, asset2) => {
				if (priceSort === undefined) return 0
				if (priceSort === "ASC") {
					return lookupMap[asset2] - lookupMap[asset1]
				}
				return lookupMap[asset1] - lookupMap[asset2]
			})
		return result
	}, [assetDetails, lookupMap, amountSort, coinNameSort, priceSort])

	return (
		<div className="flex flex-col">
			<AssetTableHeader />
			{Object.keys(assetDetails).length === 0 && (
				<>
					<AssetTableRowSkeleton />
					<AssetTableRowSkeleton />
					<AssetTableRowSkeleton />
					<AssetTableRowSkeleton />
					<AssetTableRowSkeleton />
				</>
			)}
			{sortedAssets.map((asset) => (
				<AssetTableRow key={asset} assetName={asset} />
			))}
		</div>
	)
}

export default AssetTable

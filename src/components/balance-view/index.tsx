import { useDispatch, useSelector } from "react-redux"
import Container from "../common/Container"
import { AppDispatch, RootState } from "../../redux/store"
import { fetchAssetDetails, toggle } from "../../redux/slices/userBalanceSlice"
import { memo, useEffect, useMemo } from "react"
import { fetchTokenPriceLookup } from "../../redux/slices/tokenPriceLookupSlice"
import EyeOpenIcon from "../svg/eye-open.svg?react"
import EyeClosedIcon from "../svg/eye-closed.svg?react"

function BalanceView() {
	const { isHidden, assetDetails } = useSelector((state: RootState) => state.balance)
	const { lookupMap } = useSelector((state: RootState) => state.priceLookup)
	const dispatch = useDispatch<AppDispatch>()

	useEffect(() => {
		dispatch(fetchTokenPriceLookup())
		dispatch(fetchAssetDetails())
	}, [])

	const totalAmountInEth = useMemo(
		function calcAmountInEth() {
			let amountInEth = 0
			console.log(assetDetails)
			Object.entries(assetDetails).forEach((val) => {
				const amountInDollar = val[1] * lookupMap[val[0]]
				amountInEth += amountInDollar / lookupMap["ETH"]
			})
			return !Number.isNaN(amountInEth) ? amountInEth : 0
		},
		[lookupMap, assetDetails]
	)

	return (
		<Container className="flex flex-col gap-y-2">
			<div className="flex gap-x-4">
				<div className="text-xl font-semibold">Estimated balance</div>
				{!isHidden && (
					<EyeOpenIcon
						className="cursor-pointer"
						onClick={() => dispatch(toggle())}
					/>
				)}
				{isHidden && (
					<EyeClosedIcon
						className="cursor-pointer"
						onClick={() => dispatch(toggle())}
					/>
				)}
			</div>
			<div className="flex gap-x-4 items-end">
				{isHidden && <div className="text-3xl">*********</div>}
				{!isHidden && <div className="text-3xl">{totalAmountInEth}</div>}
				<div className="font-semibold">ETH</div>
			</div>
		</Container>
	)
}

export default memo(BalanceView)

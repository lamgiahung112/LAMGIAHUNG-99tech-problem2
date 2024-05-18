import { FC } from "react"

interface DropdownCurrencyPickerProps {
	isOpen: boolean
	assetList: string[]
	onPicked: (assetName: Asset) => void
}

const DropdownCurrencyPicker: FC<DropdownCurrencyPickerProps> = (props) => {
	if (!props.isOpen) return <></>

	return (
		<div className="absolute left-0 top-8 p-2 z-40 bg-neutral-700 w-full transition rounded-md">
			{props.assetList.map((assetName) => {
				return (
					<div
						key={`${assetName}`}
						onClick={() => props.onPicked(assetName)}
						className="flex gap-x-2 p-2 hover:bg-neutral-600 rounded-md"
					>
						<img src={`/${assetName}.svg`} className="w-6 h-6 max-h-[20vh]" />
						{assetName}
					</div>
				)
			})}
		</div>
	)
}

export default DropdownCurrencyPicker

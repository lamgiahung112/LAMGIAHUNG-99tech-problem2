import { FC } from "react"
import ChevronUp from "../../svg/chevron-up.svg?react"
import ChevronDown from "../../svg/chevron-down.svg?react"
import { twMerge } from "tailwind-merge"

interface AssetTableHeaderTitleProps {
	className?: string
	sort: SortDirection
	title: string
	onSwitchSort(): void
}

const AssetTableHeaderTitle: FC<AssetTableHeaderTitleProps> = (props) => {
	return (
		<div
			onClick={props.onSwitchSort}
			className={twMerge(
				"flex items-center gap-x-1 cursor-pointer group px-2",
				props.className
			)}
		>
			<div className="text-neutral-500 group-hover:text-neutral-300">
				{props.title}
			</div>
			<div className="flex flex-col">
				<ChevronUp
					className={twMerge(
						"fill-neutral-500 h-2 w-2",
						props.sort === undefined && "group-hover:fill-neutral-300",
						props.sort === "ASC" && "fill-yellow-600"
					)}
				/>
				<ChevronDown
					className={twMerge(
						"fill-neutral-500 h-2 w-2",
						props.sort === undefined && "group-hover:fill-neutral-300",
						props.sort === "DES" && "fill-yellow-600"
					)}
				/>
			</div>
		</div>
	)
}

export default AssetTableHeaderTitle

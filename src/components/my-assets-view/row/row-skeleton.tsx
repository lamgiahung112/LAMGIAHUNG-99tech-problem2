import Skeleton from "../../common/Skeleton"

function AssetTableRowSkeleton() {
	return (
		<div className="flex justify-between py-4 px-2 w-full rounded-md">
			<div className="flex-[1] flex gap-x-2">
				<Skeleton className="w-4 h-4" />
				<Skeleton className="h-4 w-[80px]" />
			</div>
			<div className="flex-[1] flex justify-end">
				<Skeleton className="h-4 w-[120px]" />
			</div>
			<div className="flex-[1] flex justify-end">
				<Skeleton className="h-4 w-[120px]" />
			</div>
		</div>
	)
}

export default AssetTableRowSkeleton

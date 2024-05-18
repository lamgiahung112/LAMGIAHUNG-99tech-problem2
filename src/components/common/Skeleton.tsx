import { FC } from "react"
import { twMerge } from "tailwind-merge"

interface SkeletonProps {
	className?: string
}

const Skeleton: FC<SkeletonProps> = (props) => {
	return (
		<div
			className={twMerge("animate-pulse bg-gray-500 rounded-md", props.className)}
		></div>
	)
}

export default Skeleton

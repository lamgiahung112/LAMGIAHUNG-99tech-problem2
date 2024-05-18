import { FC, PropsWithChildren } from "react"
import { twMerge } from "tailwind-merge"

interface ContainerProps extends PropsWithChildren {
	className?: string
}

const Container: FC<ContainerProps> = (props) => {
	return (
		<div
			className={twMerge(
				"rounded-3xl border border-neutral-400 p-8",
				props.className
			)}
		>
			{props.children}
		</div>
	)
}

export default Container

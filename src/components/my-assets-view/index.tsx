import Container from "../common/Container"
import AssetTable from "./asset-table"

function MyAssetsView() {
	return (
		<Container className="flex flex-col gap-y-2">
			<div className="text-xl font-semibold">My Assets</div>
			<AssetTable />
		</Container>
	)
}

export default MyAssetsView

import { ToastContainer } from "react-toastify"
import BalanceView from "./components/balance-view"
import CurrencySwapForm from "./components/currency-swap-form"
import MyAssetsView from "./components/my-assets-view"
import "./index.css"
import "react-toastify/dist/ReactToastify.css"

function App() {
	return (
		<div className="flex flex-col gap-y-4 px-[2.5%] py-4 md:py-[2.5%] md:px-[10%] w-screen min-h-screen bg-neutral-900 text-white">
			<BalanceView />
			<MyAssetsView />
			<CurrencySwapForm />
			<ToastContainer position="top-center" />
		</div>
	)
}

export default App

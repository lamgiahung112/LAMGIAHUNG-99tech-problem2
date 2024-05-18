async function getUserWalletDetails(): Promise<UserWalletAssetDetail> {
	function delay() {
		return new Promise<UserWalletAssetDetail>((resolve, _) => {
			setTimeout(() => {
				resolve({
					BLUR: 302.11,
					ETH: 0.38322,
					USD: 2033,
				})
			}, 1500)
		})
	}

	return delay()
}

export default getUserWalletDetails

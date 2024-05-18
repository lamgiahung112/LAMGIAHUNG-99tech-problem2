declare type Asset = string
declare type SortDirection = "ASC" | "DES" | undefined

declare type WalletAsset = {
	currency: Asset
	price: number
}

declare type UserWalletAssetDetail = Record<Asset, number>

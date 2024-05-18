async function getPriceLookup() {
	const fetchResult = await fetch("https://interview.switcheo.com/prices.json", {})
	return fetchResult.json() as Promise<{ currency: Asset; price: number }[]>
}

export default getPriceLookup

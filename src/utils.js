const allProductsUrl = 'https://raw.githubusercontent.com/robinmind786/b6b629-clariss-clectronics-api/main/products2.json';


const formatPrice = (price) => {
  let formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format((price / 100).toFixed(2));
  return formattedPrice;
};

const getElement = (selection) => {
	const element = document.querySelector(selection);
	if(element) return element;
	throw new Error(
		`Please check "${selection}" selector, no such element exist`
	);
};

const getStorageItem = (item) => {
	let storageItem = localStorage.getItem(item);
	if(storageItem) {
		storageItem = JSON.parse(localStorage.getItem(item));
	} else {
		storageItem = [];
	}
	return storageItem;
};

const setStorageItem = (name, item) => {
	localStorage.setItem(name, JSON.stringify(item));
}



export {
	getElement,
	allProductsUrl,
	setStorageItem,
	getStorageItem,
	formatPrice
}
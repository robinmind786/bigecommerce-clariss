// global import

// specific import
import { getElement } from './src/utils.js';
import fetchProducts from './src/fetchProducts.js';
import { store, setupStore } from './src/store.js'
import display from './src/displayProducts.js';
import { fixBug } from './src/bugfix.js';

const init = async () => {
	const products = await fetchProducts();
	if(products) {
		setupStore(products);
		display(store, getElement('#topProducts'));
	}
	fixBug();
};

window.addEventListener('DOMContentLoaded', init);
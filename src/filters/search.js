import { getElement } from '../utils.js';
import display from '../displayProducts.js';
import { fixBug } from '../bugfix.js';
const setupSearch = (store) => {
	const form = getElement('.search-form');
	const searchInput = getElement('.search-input');
	form.addEventListener('keyup', function() {
		const value = searchInput.value;
		if(value) {
			const newStore = store.filter((product) => {
				let {name} = product;
				name = name.toLowerCase();
				if(name.startsWith(value)) {
					return product;
				}
			});
			display(newStore, getElement('#allProducts'));
			if(newStore.length < 1) {
				const products = getElement('#allProducts');
				products.innerHTML = `<h3 style="text-align:center" class="filter-error">
      				 sorry, no products matched your search
       </h3>`;
			}
		} else {
			display(store, getElement('#allProducts'));
		}
		fixBug();
	});
};


export default setupSearch;
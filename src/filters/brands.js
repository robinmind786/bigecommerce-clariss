import { getElement } from '../utils.js';
import display from '../displayProducts.js';
import { fixBug } from '../bugfix.js';
const brandSetup = (store) => {
	let brands = ['All', ... new Set(store.map((product) => product.brand))];
	const brandsDom = getElement('.brands');
	brandsDom.innerHTML = brands.map((brand) => {
		return `<li><button class="brand-btn">${brand}</button></li>`
	}).join('');

	brandsDom.addEventListener('click', function(e){
		const element = e.target;
		if(element.classList.contains('brand-btn')) {
			let newStore = [];
			if(element.textContent === 'All') {
				newStore = [...store];
			} else {
				newStore = store.filter((product) => product.brand === e.target.textContent);
			}
			display(newStore, getElement('#allProducts'));
		}
		fixBug();
	});
};

export default brandSetup;
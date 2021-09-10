// global import
import '../ui/productsui.js';

// import filter
import setupSearch from '../filters/search.js';
import brandSetup from '../filters/brands.js';
import setupPrice from '../filters/price.js';

// specfic import
import { getElement } from '../utils.js';
import { store } from '../store.js'
import display from '../displayProducts.js';
import { fixBug } from '../bugfix.js';


const loader = getElement('#allLoader');

display(store, getElement('#allProducts'));

setupSearch(store);
brandSetup(store);
setupPrice(store);


loader.style.display = 'none';


window.addEventListener('DOMContentLoaded', function() {
	fixBug();
});
// global import
import '../ui/productsui.js';

// specfic import
import { getElement } from '../utils.js';
import { store } from '../store.js'
import display from '../displayProducts.js';
import { fixBug } from '../bugfix.js';


const loader = getElement('#allLoader');

display(store, getElement('#allProducts'));




loader.style.display = 'none';


window.addEventListener('DOMContentLoaded', function() {
	fixBug();
});
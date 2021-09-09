// specfic import
import { getElement } from '../utils.js';
import { store } from '../store.js'
import display from '../displayProducts.js';
import { fixBug } from '../bugfix.js';

const listView = document.querySelector('#listView');
const gridView = document.querySelector('#GridView');



listView.addEventListener('click', function() {
	document.getElementById("GridView").disabled = false;
    var head = document.head;
    var link = document.createElement("link");
    link.type = "text/css";
    link.id = 'gridView';
    link.rel = "stylesheet";
    link.href = "/css/js.css";
    head.appendChild(link);
});

gridView.addEventListener('click', function() {
	const x = document.getElementsByTagName("link")[6].id;
	console.log(x)
	if(x === 'gridView') {
		const y = document.getElementsByTagName("link")[6];
		y.remove();
	} else {
		const x = document.getElementsByTagName("link")[5];
		console.log('Bug')
	}
	document.getElementById("GridView").disabled = true;
	
});


window.addEventListener('DOMContentLoaded', function() {
	document.getElementById("GridView").disabled = true;
});
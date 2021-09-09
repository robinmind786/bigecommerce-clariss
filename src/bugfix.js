import display from './displayProducts.js';

const fixBug = () => {
	const saleText = document.querySelectorAll('.sale-text');
	console.log(saleText)
	const sLen = saleText.length;
	var i;
	for(i = 0; i < sLen; i++) {
		const saleTextParent = saleText[i].parentElement;
		if(saleText[i].innerHTML === '') {
			saleTextParent.style.display = 'none'
		} else {
			saleTextParent.style.display = 'block'
		}
	}
};


export {
	fixBug,
}
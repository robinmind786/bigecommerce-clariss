import display from './displayProducts.js';

const fixBug = () => {
	// Fix Sale
	const saleText = document.querySelectorAll('.sale-text');
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

	// fix Price
	const wasPrice = document.querySelectorAll('#priceDel')
	const wPLen = wasPrice.length;
	for(i = 0; i < wPLen; i++) {
		const wasPriceParent = wasPrice[i].parentElement.parentElement.parentElement;
		const priceFlex = wasPriceParent.parentElement;
		if(wasPrice[i].innerHTML === '$0.00' || wasPrice[i].innerHTML === '0' || wasPrice[i].innerHTML === '$' || wasPrice[i].innerHTML === '0.00') {
			wasPriceParent.style.display = 'none';
			priceFlex.style.display = 'flex';
			priceFlex.style.justifyContent = 'center';

		} else {
			wasPriceParent.style.display = 'block';
			priceFlex.style.display = 'flex';
			priceFlex.style.justifyContent = 'space-between';
		}
	}

};


export {
	fixBug,
}
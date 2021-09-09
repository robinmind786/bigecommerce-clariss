const display = (products, element) => {
	const newProducsts = products.map((product) => {
		const {sale, image, brand, name, color, reviews, wasprice, presentprice} = product;
		return `
       <article class="card">
         <div class="card-header">
           <div class="card-img">
             <a href="#"><img src="${image}"></a>
           </div>
           <div class="sale">
             <p class="sale-text" id="saleText">${sale}</p>
           </div>
           <div class="quick-view">
             <ul>
               <li class="tooltip">
                <button><i class="fa fa-eye"></i></button>
                <sapn class="tooltipText">Quick View</sapn>
              </li>
               <li class="tooltip">
                <button><i class="fa fa-heart"></i></button>
                <sapn class="tooltipText">Wishlist</sapn>
              </li>
             </ul>
           </div>
         </div>
         <div class="card-body">
           <div class="brand">
             <h5>${brand}</h5>
           </div>
           <div class="title">
             <a href="#"><h4>${name}</h4></a>
           </div>
           <div class="color">
             <ul>
               <li></li>
               <li></li>
               <li></li>
             </ul>
           </div>
           <div class="rating">
             <ul>
               <li><i class="fa fa-star"></i></li>
               <li><i class="fa fa-star"></i></li>
               <li><i class="fa fa-star"></i></li>
               <li><i class="fa fa-star"></i></li>
               <li><i class="fa fa-star"></i></li>
             </ul>
           </div>
         </div>
         <div class="card-footer">
           <div class="price">
             <div class="was-price">
               <h2>WAS: <span><del>${wasprice/100}</del></span></h2>
             </div>
             <div class="now-price">
               <h2>Now: <span>${presentprice/100}</span></h2>
             </div>
           </div>
           <div class="btn">
             <button>Add To Cart</button>
           </div>
         </div>
       </article>
		`;
	}).join('');
	element.innerHTML = newProducsts;
};

export default display;
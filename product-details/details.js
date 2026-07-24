// Product details - dynamic product from URL + nav cart count
var allProducts=[
  {name:"French Baguette",price:85,img:"../images/products/frenchBaguette.jpg",cat:"Loaf Breads",desc:"Classic French baguette. Crispy crust, soft inside. 500g.",specs:{Brand:"Uncle George",Type:"French Baguette",Weight:"500g","Shelf Life":"3-5 days",Ingredients:"Flour, Water, Yeast, Salt"}},
  {name:"White Bread",price:65,img:"../images/products/p2-white-bread.jpg",cat:"Loaf Breads",desc:"Soft and fluffy white loaf. Perfect for sandwiches. 550g.",specs:{Brand:"Uncle George",Type:"White Bread",Weight:"550g","Shelf Life":"3-5 days",Ingredients:"Flour, Water, Yeast, Sugar, Salt"}},
  {name:"Whole Wheat Bread",price:75,img:"../images/products/p3-wheat-bread.jpg",cat:"Loaf Breads",desc:"Healthy whole wheat loaf. High fiber, great taste. 550g.",specs:{Brand:"Uncle George",Type:"Whole Wheat",Weight:"550g","Shelf Life":"3-5 days",Ingredients:"Whole Wheat Flour, Water, Yeast, Salt"}},
  {name:"Butter Bread",price:85,img:"../images/products/p4-butter-bread.jpg",cat:"Loaf Breads",desc:"Buttery and soft. Great for toast and breakfast. 550g.",specs:{Brand:"Uncle George",Type:"Butter Bread",Weight:"550g","Shelf Life":"3-5 days",Ingredients:"Flour, Butter, Water, Yeast, Sugar"}},
  {name:"Cheese Bread",price:95,img:"../images/products/p5-cheese-bread.jpg",cat:"Loaf Breads",desc:"Rich cheese-flavored loaf. A family favorite. 550g.",specs:{Brand:"Uncle George",Type:"Cheese Bread",Weight:"550g","Shelf Life":"3-5 days",Ingredients:"Flour, Cheese, Water, Yeast, Salt"}},
  {name:"Butter Milk Bread",price:90,img:"../images/products/p12-butter-milk.jpg",cat:"Loaf Breads",desc:"Creamy milk-infused loaf. Extra soft texture. 550g.",specs:{Brand:"Uncle George",Type:"Butter Milk Bread",Weight:"550g","Shelf Life":"3-5 days",Ingredients:"Flour, Milk, Butter, Yeast, Sugar"}},
  {name:"Pinoy Pandesal",price:22,img:"../images/products/p6-pandesal.jpg",cat:"Pastries",desc:"Classic Filipino pandesal. Soft, warm, and affordable. 250g.",specs:{Brand:"Uncle George",Type:"Pandesal",Weight:"250g","Shelf Life":"1-2 days",Ingredients:"Flour, Water, Yeast, Sugar, Breadcrumbs"}},
  {name:"Chicken Pastel",price:55,img:"../images/products/p7-chicken-pastel.jpg",cat:"Pastries",desc:"Savory chicken-filled pastry. Flaky and delicious.",specs:{Brand:"Uncle George",Type:"Chicken Pastel",Weight:"100g","Shelf Life":"2-3 days",Ingredients:"Flour, Chicken, Butter, Vegetables"}},
  {name:"Chocolate Pandesal",price:35,img:"../images/products/p8-chocolate-pandesal.jpg",cat:"Pastries",desc:"Sweet chocolate pandesal. A twist on the classic.",specs:{Brand:"Uncle George",Type:"Chocolate Pandesal",Weight:"200g","Shelf Life":"1-2 days",Ingredients:"Flour, Cocoa, Sugar, Yeast, Breadcrumbs"}},
  {name:"Ensaymada",price:45,img:"../images/products/p9-ensaymada.jpg",cat:"Pastries",desc:"Soft brioche topped with butter, sugar, and cheese.",specs:{Brand:"Uncle George",Type:"Ensaymada",Weight:"80g","Shelf Life":"2-3 days",Ingredients:"Flour, Butter, Sugar, Cheese, Eggs"}},
  {name:"Spanish Bread",price:35,img:"../images/products/p10-spanish-bread.jpg",cat:"Pastries",desc:"Sweet Filipino-style Spanish bread rolls. 180g pack.",specs:{Brand:"Uncle George",Type:"Spanish Bread",Weight:"180g pack","Shelf Life":"2-3 days",Ingredients:"Flour, Sugar, Butter, Breadcrumbs"}},
  {name:"Pan De Coco",price:40,img:"../images/products/p11-pan-de-coco.jpg",cat:"Pastries",desc:"Sweet coconut-filled bread bun. Classic Filipino treat.",specs:{Brand:"Uncle George",Type:"Pan De Coco",Weight:"80g","Shelf Life":"2-3 days",Ingredients:"Flour, Coconut, Sugar, Yeast"}},
  {name:"Banana Cake",price:55,img:"../images/products/bananCake.jpg",cat:"Pastries",desc:"Moist and fluffy banana cake. Made with real bananas.",specs:{Brand:"Uncle George",Type:"Banana Cake",Weight:"250g","Shelf Life":"3-5 days",Ingredients:"Flour, Banana, Sugar, Eggs, Butter"}},
  {name:"Chicken Pie",price:45,img:"../images/products/chickenPie.jpg",cat:"Pastries",desc:"Savory chicken-filled pie. Flaky crust, creamy filling.",specs:{Brand:"Uncle George",Type:"Chicken Pie",Weight:"120g","Shelf Life":"2-3 days",Ingredients:"Flour, Chicken, Butter, Cream, Vegetables"}},
  {name:"Chocolate Cake",price:65,img:"../images/products/chocolateCake.jpg",cat:"Pastries",desc:"Rich chocolate cake. Decadent and moist.",specs:{Brand:"Uncle George",Type:"Chocolate Cake",Weight:"300g","Shelf Life":"3-5 days",Ingredients:"Flour, Cocoa, Sugar, Eggs, Butter"}},
  {name:"Cinnamon Rolls",price:40,img:"../images/products/cinnamonRolls.jpg",cat:"Pastries",desc:"Soft cinnamon rolls with sweet glaze. Warm and fresh.",specs:{Brand:"Uncle George",Type:"Cinnamon Rolls",Weight:"100g","Shelf Life":"2-3 days",Ingredients:"Flour, Cinnamon, Sugar, Butter, Glaze"}},
  {name:"Cranberry Walnut Bread",price:95,img:"../images/products/cranberryWalnutBread.jpg",cat:"Loaf Breads",desc:"Whole wheat bread with cranberries and walnuts. 500g.",specs:{Brand:"Uncle George",Type:"Cranberry Walnut Bread",Weight:"500g","Shelf Life":"3-5 days",Ingredients:"Whole Wheat Flour, Cranberries, Walnuts, Yeast"}},
  {name:"Egg Pandesal",price:25,img:"../images/products/eggPandesal.jpg",cat:"Pastries",desc:"Classic pandesal with egg. Soft and warm.",specs:{Brand:"Uncle George",Type:"Egg Pandesal",Weight:"60g","Shelf Life":"1-2 days",Ingredients:"Flour, Egg, Sugar, Yeast, Breadcrumbs"}},
  {name:"Hamburger Buns",price:70,img:"../images/products/hamburgerBuns.jpg",cat:"Loaf Breads",desc:"Soft hamburger buns. Perfect for burgers and sandwiches.",specs:{Brand:"Uncle George",Type:"Hamburger Buns",Weight:"50g each","Shelf Life":"3-5 days",Ingredients:"Flour, Sugar, Butter, Yeast, Sesame Seeds"}},
  {name:"Hopia Baboy",price:35,img:"../images/products/hopiaBaboy.jpg",cat:"Pastries",desc:"Flaky pastry with savory pork filling. Classic Filipino snack.",specs:{Brand:"Uncle George",Type:"Hopia Baboy",Weight:"40g","Shelf Life":"3-5 days",Ingredients:"Flour, Pork, Onion, Garlic, Butter"}},
  {name:"Mamon Rolls",price:30,img:"../images/products/mamonRolls.jpg",cat:"Pastries",desc:"Light and fluffy sponge cake rolls. Sweet and airy.",specs:{Brand:"Uncle George",Type:"Mamon Rolls",Weight:"30g","Shelf Life":"2-3 days",Ingredients:"Flour, Sugar, Eggs, Butter, Milk"}},
  {name:"Mochi Bread",price:45,img:"../images/products/mochiBread.jpg",cat:"Pastries",desc:"Chewy mochi bread with a soft, sticky texture.",specs:{Brand:"Uncle George",Type:"Mochi Bread",Weight:"60g","Shelf Life":"2-3 days",Ingredients:"Glutinous Rice Flour, Sugar, Butter, Milk"}},
  {name:"Qeso Pandesal",price:28,img:"../images/products/qesoPandesal.jpg",cat:"Pastries",desc:"Cheese-flavored pandesal. Cheesy and soft.",specs:{Brand:"Uncle George",Type:"Qeso Pandesal",Weight:"60g","Shelf Life":"1-2 days",Ingredients:"Flour, Cheese, Sugar, Yeast, Breadcrumbs"}},
  {name:"Raisin Bread",price:80,img:"../images/products/raisinBread.jpg",cat:"Loaf Breads",desc:"Sweet bread loaded with raisins. 500g.",specs:{Brand:"Uncle George",Type:"Raisin Bread",Weight:"500g","Shelf Life":"3-5 days",Ingredients:"Flour, Raisins, Sugar, Butter, Yeast"}},
  {name:"Raisin Pan De Rosa",price:45,img:"../images/products/raisinPanDeRosa.jpg",cat:"Pastries",desc:"Rose-shaped bread with raisins. Soft and sweet.",specs:{Brand:"Uncle George",Type:"Raisin Pan De Rosa",Weight:"60g","Shelf Life":"2-3 days",Ingredients:"Flour, Raisins, Sugar, Butter, Yeast"}},
  {name:"Ube Pandan",price:50,img:"../images/products/ubePandan.jpg",cat:"Pastries",desc:"Purple yam and pandan flavored bread. Filipino classic.",specs:{Brand:"Uncle George",Type:"Ube Pandan",Weight:"60g","Shelf Life":"2-3 days",Ingredients:"Flour, Ube, Pandan, Sugar, Butter"}}
];

function getProduct(){
  var params=new URLSearchParams(window.location.search);
  var name=params.get('product');
  if(!name)return null;
  for(var i=0;i<allProducts.length;i++){
    if(allProducts[i].name===name)return allProducts[i];
  }
  return null;
}

function renderDetails(p){
  document.getElementById('carouselImg1').src=p.img;
  document.getElementById('carouselImg1').alt=p.name;
  document.getElementById('carouselImg2').src=p.img;
  document.getElementById('carouselImg2').alt=p.name;
  document.getElementById('carouselImg3').src=p.img;
  document.getElementById('carouselImg3').alt=p.name;
  document.getElementById('thumb1').src=p.img;
  document.getElementById('thumb2').src=p.img;
  document.getElementById('thumb3').src=p.img;
  document.getElementById('productCategory').textContent=p.cat;
  document.getElementById('productName').textContent=p.name;
  document.getElementById('productPrice').innerHTML='&#8369;'+p.price;
  document.getElementById('productDesc').textContent=p.desc;
  document.title=p.name+' - Uncle George';

  var specsHtml='';
  for(var key in p.specs){
    specsHtml+='<tr><td class="text-muted fw-bold" style="width:40%">'+key+'</td><td>'+p.specs[key]+'</td></tr>';
  }
  document.getElementById('specsTable').innerHTML=specsHtml;
  document.getElementById('descBody').innerHTML='<p>'+p.desc+'</p>';

  document.getElementById('addToCartBtn').onclick=function(){
    var cart=JSON.parse(localStorage.getItem('unclegorg_cart')||'[]');
    var found=false;
    for(var i=0;i<cart.length;i++){if(cart[i].name===p.name){cart[i].qty++;found=true;break;}}
    if(!found)cart.push({name:p.name,price:p.price,img:p.img,qty:1});
    localStorage.setItem('unclegorg_cart',JSON.stringify(cart));
    alert('Added to cart: '+p.name);
    updateNavBadge();
  };
}

function updateNavBadge(){
  var cart=JSON.parse(localStorage.getItem('unclegorg_cart')||'[]');
  var n=cart.reduce(function(s,i){return s+i.qty},0);
  var el=document.getElementById('navCartCount');
  if(el){if(n>0){el.textContent=n;el.classList.add('badge','bg-danger')}else{el.textContent='';el.classList.remove('badge','bg-danger')}}
}

document.addEventListener('DOMContentLoaded',function(){
  var p=getProduct();
  if(p){renderDetails(p);}
  updateNavBadge();
});

// Product details - dynamic product from URL + nav cart count
var allProducts=[
  {name:"French Baguette",price:85,img:"../images/products/frenchBaguette.jpg",cat:"Loaf Breads",desc:"Classic French baguette with a crispy golden crust and soft, airy interior. Baked fresh daily using traditional methods. 500g.",specs:{Brand:"Uncle George",Type:"French Baguette",Weight:"500g","Shelf Life":"3-5 days",Ingredients:"Flour, Water, Yeast, Salt"}},
  {name:"White Bread",price:65,img:"../images/products/wholeWheatLoaf.jpg",cat:"Loaf Breads",desc:"Soft and fluffy white loaf bread. Perfect for sandwiches, toast, and everyday meals. 550g.",specs:{Brand:"Uncle George",Type:"White Bread",Weight:"550g","Shelf Life":"3-5 days",Ingredients:"Flour, Water, Yeast, Sugar, Salt, Butter"}},
  {name:"Whole Wheat Bread",price:75,img:"../images/products/wholeWheatMultigrain.jpg",cat:"Loaf Breads",desc:"Healthy whole wheat loaf packed with fiber and nutrients. Great taste, great for you. 550g.",specs:{Brand:"Uncle George",Type:"Whole Wheat Bread",Weight:"550g","Shelf Life":"3-5 days",Ingredients:"Whole Wheat Flour, Water, Yeast, Salt, Honey"}},
  {name:"Butter Bread",price:85,img:"../images/products/cheeseLoafBread.jpg",cat:"Loaf Breads",desc:"Rich and buttery loaf bread. Soft texture with a golden crust. Perfect for toast and breakfast. 550g.",specs:{Brand:"Uncle George",Type:"Butter Bread",Weight:"550g","Shelf Life":"3-5 days",Ingredients:"Flour, Butter, Water, Yeast, Sugar, Milk"}},
  {name:"Cheese Bread",price:95,img:"../images/products/cheeseLoafBread.jpg",cat:"Loaf Breads",desc:"Savory loaf bread loaded with real cheese. A family favorite for meals and snacks. 550g.",specs:{Brand:"Uncle George",Type:"Cheese Bread",Weight:"550g","Shelf Life":"3-5 days",Ingredients:"Flour, Cheese, Water, Yeast, Butter, Salt"}},
  {name:"Butter Milk Bread",price:90,img:"../images/products/sourDoughFocacciaBread.jpg",cat:"Loaf Breads",desc:"Creamy milk-infused loaf with an extra soft and pillowy texture. Deliciously tender. 550g.",specs:{Brand:"Uncle George",Type:"Butter Milk Bread",Weight:"550g","Shelf Life":"3-5 days",Ingredients:"Flour, Milk, Butter, Yeast, Sugar, Eggs"}},
  {name:"Sourdough Focaccia",price:95,img:"../images/products/sourDoughFocacciaBread.jpg",cat:"Loaf Breads",desc:"Artisan sourdough focaccia with a crispy crust and soft, airy interior. Topped with olive oil and herbs.",specs:{Brand:"Uncle George",Type:"Sourdough Focaccia",Weight:"400g","Shelf Life":"2-3 days",Ingredients:"Sourdough Starter, Flour, Olive Oil, Herbs, Salt"}},
  {name:"Pinoy Pandesal",price:22,img:"../images/products/wholeWheatPandesal.jpg",cat:"Pastries",desc:"Classic Filipino pandesal. Soft, warm, and coated with breadcrumbs. Best enjoyed fresh from the oven. 250g pack.",specs:{Brand:"Uncle George",Type:"Pinoy Pandesal",Weight:"250g pack","Shelf Life":"1-2 days",Ingredients:"Flour, Water, Yeast, Sugar, Breadcrumbs"}},
  {name:"Egg Pandesal",price:25,img:"../images/products/eggPandesal.jpg",cat:"Pastries",desc:"Soft pandesal made with real eggs for a richer flavor and fluffier texture. A Filipino breakfast staple.",specs:{Brand:"Uncle George",Type:"Egg Pandesal",Weight:"60g each","Shelf Life":"1-2 days",Ingredients:"Flour, Eggs, Sugar, Yeast, Breadcrumbs, Butter"}},
  {name:"Qeso Pandesal",price:28,img:"../images/products/qesoPandesal.jpg",cat:"Pastries",desc:"Cheese-flavored pandesal with real cheese chunks. Cheesy, soft, and irresistible.",specs:{Brand:"Uncle George",Type:"Qeso Pandesal",Weight:"60g each","Shelf Life":"1-2 days",Ingredients:"Flour, Cheese, Sugar, Yeast, Breadcrumbs, Butter"}},
  {name:"Chicken Pastel",price:55,img:"../images/products/chickenPie.jpg",cat:"Pastries",desc:"Savory chicken-filled pastry with a flaky, buttery crust. Filled with creamy chicken and vegetables.",specs:{Brand:"Uncle George",Type:"Chicken Pastel",Weight:"100g","Shelf Life":"2-3 days",Ingredients:"Flour, Chicken, Butter, Carrots, Peas, Cream"}},
  {name:"Chunky Chicken Pie",price:60,img:"../images/products/chunkyChickenPie.jpg",cat:"Pastries",desc:"Hearty pie loaded with chunky chicken pieces in a rich, creamy sauce. Baked in a flaky golden crust.",specs:{Brand:"Uncle George",Type:"Chunky Chicken Pie",Weight:"150g","Shelf Life":"2-3 days",Ingredients:"Flour, Chicken, Butter, Cream, Mushrooms, Peas"}},
  {name:"Ensaymada",price:45,img:"../images/products/mamonRolls.jpg",cat:"Pastries",desc:"Soft brioche roll topped with butter, sugar, and grated cheese. A Filipino merienda favorite.",specs:{Brand:"Uncle George",Type:"Ensaymada",Weight:"80g","Shelf Life":"2-3 days",Ingredients:"Flour, Butter, Sugar, Cheese, Eggs, Milk"}},
  {name:"Spanish Bread",price:35,img:"../images/products/cinnamonRolls.jpg",cat:"Pastries",desc:"Sweet Filipino-style bread rolls coated in buttery breadcrumbs with a sugar filling. 180g pack.",specs:{Brand:"Uncle George",Type:"Spanish Bread",Weight:"180g pack","Shelf Life":"2-3 days",Ingredients:"Flour, Sugar, Butter, Breadcrumbs, Yeast"}},
  {name:"Pan De Coco",price:40,img:"../images/products/mochiBread.jpg",cat:"Pastries",desc:"Soft bread bun filled with sweet grated coconut. A classic Filipino panaderia treat.",specs:{Brand:"Uncle George",Type:"Pan De Coco",Weight:"80g","Shelf Life":"2-3 days",Ingredients:"Flour, Coconut, Sugar, Butter, Yeast"}},
  {name:"Banana Cake",price:55,img:"../images/products/bananCake.jpg",cat:"Pastries",desc:"Moist and fluffy banana cake made with real ripe bananas. Sweet, aromatic, and homemade-tasting.",specs:{Brand:"Uncle George",Type:"Banana Cake",Weight:"250g","Shelf Life":"3-5 days",Ingredients:"Flour, Banana, Sugar, Eggs, Butter, Baking Soda"}},
  {name:"Banana Carrot Cake",price:60,img:"../images/products/bananaCarrotCake.jpg",cat:"Pastries",desc:"A healthy twist combining ripe bananas and fresh carrots. Moist, flavorful, and naturally sweet.",specs:{Brand:"Uncle George",Type:"Banana Carrot Cake",Weight:"250g","Shelf Life":"3-5 days",Ingredients:"Flour, Banana, Carrot, Sugar, Eggs, Butter, Cinnamon"}},
  {name:"Chocolate Cake",price:65,img:"../images/products/chocolateCake.jpg",cat:"Pastries",desc:"Rich and decadent chocolate cake with a moist, fudgy texture. A must-have for chocolate lovers.",specs:{Brand:"Uncle George",Type:"Chocolate Cake",Weight:"300g","Shelf Life":"3-5 days",Ingredients:"Flour, Cocoa Powder, Sugar, Eggs, Butter, Chocolate"}},
  {name:"Egg Pie",price:50,img:"../images/products/eggPie.jpg",cat:"Pastries",desc:"Classic Filipino egg pie with a smooth, creamy custard filling in a buttery pastry crust.",specs:{Brand:"Uncle George",Type:"Egg Pie",Weight:"200g","Shelf Life":"2-3 days",Ingredients:"Flour, Eggs, Sugar, Butter, Milk, Vanilla"}},
  {name:"Cinnamon Rolls",price:40,img:"../images/products/cinnamonRolls.jpg",cat:"Pastries",desc:"Soft, gooey cinnamon rolls swirled with cinnamon sugar and topped with sweet glaze. Best served warm.",specs:{Brand:"Uncle George",Type:"Cinnamon Rolls",Weight:"100g each","Shelf Life":"2-3 days",Ingredients:"Flour, Cinnamon, Sugar, Butter, Yeast, Glaze"}},
  {name:"Cranberry Walnut Bread",price:95,img:"../images/products/cranberryWalnutBread.jpg",cat:"Loaf Breads",desc:"Whole wheat bread studded with dried cranberries and crunchy walnuts. Healthy and delicious. 500g.",specs:{Brand:"Uncle George",Type:"Cranberry Walnut Bread",Weight:"500g","Shelf Life":"3-5 days",Ingredients:"Whole Wheat Flour, Cranberries, Walnuts, Yeast, Honey"}},
  {name:"Hamburger Buns",price:70,img:"../images/products/hamburgerBuns.jpg",cat:"Loaf Breads",desc:"Soft and sturdy hamburger buns. Perfect for burgers, sandwiches, and sliders. Pack of 6.",specs:{Brand:"Uncle George",Type:"Hamburger Buns",Weight:"50g each","Shelf Life":"3-5 days",Ingredients:"Flour, Sugar, Butter, Yeast, Sesame Seeds, Milk"}},
  {name:"Hopia Baboy",price:35,img:"../images/products/hopiaBaboy.jpg",cat:"Pastries",desc:"Flaky, multi-layered pastry filled with seasoned ground pork. A savory Filipino snack.",specs:{Brand:"Uncle George",Type:"Hopia Baboy",Weight:"40g each","Shelf Life":"3-5 days",Ingredients:"Flour, Pork, Onion, Garlic, Butter, Soy Sauce"}},
  {name:"Mamon Rolls",price:30,img:"../images/products/mamonRolls.jpg",cat:"Pastries",desc:"Light and airy sponge cake rolls. Soft, sweet, and perfect with coffee or milk.",specs:{Brand:"Uncle George",Type:"Mamon Rolls",Weight:"30g each","Shelf Life":"2-3 days",Ingredients:"Flour, Sugar, Eggs, Butter, Milk, Baking Powder"}},
  {name:"Mochi Bread",price:45,img:"../images/products/mochiBread.jpg",cat:"Pastries",desc:"Chewy bread made with glutinous rice flour. Unique stretchy texture with a soft, sweet interior.",specs:{Brand:"Uncle George",Type:"Mochi Bread",Weight:"60g each","Shelf Life":"2-3 days",Ingredients:"Glutinous Rice Flour, Sugar, Butter, Milk, Eggs"}},
  {name:"Raisin Bread",price:80,img:"../images/products/raisinBread.jpg",cat:"Loaf Breads",desc:"Sweet bread loaf loaded with plump raisins. Great for toast, French toast, or snacking. 500g.",specs:{Brand:"Uncle George",Type:"Raisin Bread",Weight:"500g","Shelf Life":"3-5 days",Ingredients:"Flour, Raisins, Sugar, Butter, Yeast, Cinnamon"}},
  {name:"Raisin Pan De Rosa",price:45,img:"../images/products/raisinPanDeRosa.jpg",cat:"Pastries",desc:"Beautiful rose-shaped bread filled with sweet raisins. Soft, pretty, and perfect for gifts.",specs:{Brand:"Uncle George",Type:"Raisin Pan De Rosa",Weight:"60g each","Shelf Life":"2-3 days",Ingredients:"Flour, Raisins, Sugar, Butter, Yeast, Milk"}},
  {name:"Ube Pandan",price:50,img:"../images/products/ubePandan.jpg",cat:"Pastries",desc:"Purple yam and pandan flavored bread. A uniquely Filipino treat with a vibrant color and sweet aroma.",specs:{Brand:"Uncle George",Type:"Ube Pandan",Weight:"60g each","Shelf Life":"2-3 days",Ingredients:"Flour, Ube, Pandan, Sugar, Butter, Milk"}}
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

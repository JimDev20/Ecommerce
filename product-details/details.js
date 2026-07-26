// Product details - dynamic product from URL + nav cart count
var allProducts=[
  {name:"French Baguette",price:45,img:"../images/products/frenchBaguette.jpg",cat:"Loaf Breads",discount:12,desc:"Classic French baguette with a crispy golden crust and soft, airy interior. Baked fresh daily using traditional methods. 500g.",specs:{Brand:"Uncle George",Type:"French Baguette",Weight:"500g","Shelf Life":"3-5 days",Ingredients:"Flour, Water, Yeast, Salt"}},
  {name:"Whole Wheat Loaf",price:110,img:"../images/products/wholeWheatLoaf.jpg",cat:"Loaf Breads",desc:"Soft and fluffy white loaf bread. Perfect for sandwiches, toast, and everyday meals. 420g.",specs:{Brand:"Uncle George",Type:"White Bread",Weight:"550g","Shelf Life":"3-5 days",Ingredients:"Flour, Water, Yeast, Sugar, Salt, Butter"}},
  {name:"Whole Wheat Multigrain",price:110,img:"../images/products/wholeWheatMultigrain.jpg",cat:"Loaf Breads",discount:12,desc:"Healthy whole wheat loaf packed with fiber and nutrients. Great taste, great for you. 550g.",specs:{Brand:"Uncle George",Type:"Whole Wheat Bread",Weight:"550g","Shelf Life":"3-5 days",Ingredients:"Whole Wheat Flour, Water, Yeast, Salt, Honey"}},
  {name:"Butter Bread",price:130,img:"../images/products/ciabattaBread.jpg",cat:"Loaf Breads",desc:"Artisan ciabatta bread with a crispy crust and airy, buttery interior. Baked fresh daily. Perfect for toast and breakfast. 550g.",specs:{Brand:"Uncle George",Type:"Butter Bread",Weight:"550g","Shelf Life":"3-5 days",Ingredients:"Flour, Butter, Water, Yeast, Sugar, Milk"}},
  {name:"Cheese Bread",price:145,img:"../images/products/cheeseLoafBread.jpg",cat:"Loaf Breads",desc:"Savory loaf bread loaded with real cheese. A family favorite for meals and snacks. 550g.",specs:{Brand:"Uncle George",Type:"Cheese Bread",Weight:"600g","Shelf Life":"3-5 days",Ingredients:"Flour, Cheese, Water, Yeast, Butter, Salt"}},
  {name:"Sandwich Pullman Loaf",price:110,img:"../images/products/sandwichPullmanLoaf.jpg",cat:"Loaf Breads",desc:"Classic square-shaped pullman loaf with a soft, even crumb. Perfect for sandwiches, toast, and everyday use. 550g.",specs:{Brand:"Uncle George",Type:"Sandwich Pullman Loaf",Weight:"550g","Shelf Life":"3-5 days",Ingredients:"Flour, Water, Yeast, Sugar, Salt, Butter, Milk"}},
  {name:"Sourdough Focaccia",price:180,img:"../images/products/sourDoughFocacciaBread.jpg",cat:"Loaf Breads",desc:"Artisan sourdough focaccia with a crispy crust and soft, airy interior. Topped with olive oil and herbs.",specs:{Brand:"Uncle George",Type:"Sourdough Focaccia",Weight:"400g","Shelf Life":"2-3 days",Ingredients:"Sourdough Starter, Flour, Olive Oil, Herbs, Salt"}},
  {name:"Whole Wheat Pandesal",price:102,img:"../images/products/wholeWheatPandesal.jpg",cat:"Bread Rolls",desc:"Classic Filipino pandesal. Soft, warm, and coated with breadcrumbs. Best enjoyed fresh from the oven. 250g pack.",specs:{Brand:"Uncle George",Type:"Pinoy Pandesal",Weight:"250g pack","Shelf Life":"1-2 days",Ingredients:"Flour, Water, Yeast, Sugar, Breadcrumbs"}},
  {name:"Egg Pandesal",price:125,img:"../images/products/eggPandesal.jpg",cat:"Bread Rolls",desc:"Soft pandesal made with real eggs for a richer flavor and fluffier texture. A Filipino breakfast staple.",specs:{Brand:"Uncle George",Type:"Egg Pandesal",Weight:"60g each","Shelf Life":"1-2 days",Ingredients:"Flour, Eggs, Sugar, Yeast, Breadcrumbs, Butter"}},
  {name:"Qeso Pandesal",price:110,img:"../images/products/qesoPandesal.jpg",cat:"Bread Rolls",desc:"Cheese-flavored pandesal with real cheese chunks. Cheesy, soft, and irresistible.",specs:{Brand:"Uncle George",Type:"Qeso Pandesal",Weight:"60g each","Shelf Life":"1-2 days",Ingredients:"Flour, Cheese, Sugar, Yeast, Breadcrumbs, Butter"}},
  {name:"Chicken Pie",price:60,img:"../images/products/chickenPie.jpg",cat:"Pies & Pastries",desc:"Savory chicken-filled pastry with a flaky, buttery crust. Filled with creamy chicken and vegetables.",specs:{Brand:"Uncle George",Type:"Chicken Pie",Weight:"100g","Shelf Life":"2-3 days",Ingredients:"Flour, Chicken, Butter, Carrots, Peas, Cream"}},
  {name:"Chunky Chicken Pie",price:580,img:"../images/products/chunkyChickenPie.jpg",cat:"Pies & Pastries",desc:"Hearty pie loaded with chunky chicken pieces in a rich, creamy sauce. Baked in a flaky golden crust. 9 inch pan.",specs:{Brand:"Uncle George",Type:"Chunky Chicken Pie",Weight:"9 inch pan","Shelf Life":"2-3 days",Ingredients:"Flour, Chicken, Butter, Cream, Mushrooms, Peas"}},
  {name:"Sourdough Artisan Bread",price:120,img:"../images/products/sourdoughArtisanBread.jpg",cat:"Loaf Breads",desc:"Artisan sourdough bread with a crispy crust and soft, tangy interior. Handcrafted daily. 450g.",specs:{Brand:"Uncle George",Type:"Sourdough Artisan Bread",Weight:"450g","Shelf Life":"3-5 days",Ingredients:"Flour, Sourdough Starter, Water, Salt, Olive Oil, Butter"}},
  {name:"Walnut Cinnamon Ring",price:155,img:"../images/products/cinnamonRolls.jpg",cat:"Bread Rolls",discount:12,desc:"Sweet Filipino-style bread rolls coated in buttery breadcrumbs with a sugar filling. 520g.",specs:{Brand:"Uncle George",Type:"Walnut Cinnamon Ring",Weight:"520g","Shelf Life":"2-3 days",Ingredients:"Flour, Sugar, Butter, Breadcrumbs, Yeast"}},
  {name:"Mochi Bread",price:150,img:"../images/products/mochiBread.jpg",cat:"Bread Rolls",desc:"Chewy bread made with glutinous rice flour. Unique stretchy texture with a soft, sweet interior.",specs:{Brand:"Uncle George",Type:"Mochi Bread",Weight:"80g","Shelf Life":"2-3 days",Ingredients:"Glutinous Rice Flour, Sugar, Butter, Milk, Eggs"}},
  {name:"Banana Cake",price:180,img:"../images/products/bananCake.jpg",cat:"Cakes",discount:12,desc:"Moist and fluffy banana cake made with real ripe bananas. Sweet, aromatic, and homemade-tasting.",specs:{Brand:"Uncle George",Type:"Banana Cake",Weight:"250g","Shelf Life":"3-5 days",Ingredients:"Flour, Banana, Sugar, Eggs, Butter, Baking Soda"}},
  {name:"Banana Carrot Cake",price:260,img:"../images/products/bananaCarrotCake.jpg",cat:"Cakes",desc:"A healthy twist combining ripe bananas and fresh carrots. Moist, flavorful, and naturally sweet.",specs:{Brand:"Uncle George",Type:"Banana Carrot Cake",Weight:"250g","Shelf Life":"3-5 days",Ingredients:"Flour, Banana, Carrot, Sugar, Eggs, Butter, Cinnamon"}},
  {name:"Chocolate Cake",price:280,img:"../images/products/chocolateCake.jpg",cat:"Cakes",desc:"Rich and decadent chocolate cake with a moist, fudgy texture. A must-have for chocolate lovers.",specs:{Brand:"Uncle George",Type:"Chocolate Cake",Weight:"300g","Shelf Life":"3-5 days",Ingredients:"Flour, Cocoa Powder, Sugar, Eggs, Butter, Chocolate"}},
  {name:"Egg Pie",price:240,img:"../images/products/eggPie.jpg",cat:"Pies & Pastries",desc:"Classic Filipino egg pie with a smooth, creamy custard filling in a buttery pastry crust.",specs:{Brand:"Uncle George",Type:"Egg Pie",Weight:"200g","Shelf Life":"2-3 days",Ingredients:"Flour, Eggs, Sugar, Butter, Milk, Vanilla"}},
  {name:"Hotdog Rolls",price:80,img:"../images/products/hotdogRolls.jpg",cat:"Bread Rolls",desc:"Soft bread rolls perfect for hotdogs. Fluffy and lightly toasted.",specs:{Brand:"Uncle George",Type:"Hotdog Rolls",Weight:"60g each","Shelf Life":"2-3 days",Ingredients:"Flour, Sugar, Butter, Yeast, Milk, Eggs"}},
  {name:"Cranberry Walnut Bread",price:155,img:"../images/products/cranberryWalnutBread.jpg",cat:"Loaf Breads",desc:"Whole wheat bread studded with dried cranberries and crunchy walnuts. Healthy and delicious. 450g.",specs:{Brand:"Uncle George",Type:"Cranberry Walnut Bread",Weight:"500g","Shelf Life":"3-5 days",Ingredients:"Whole Wheat Flour, Cranberries, Walnuts, Yeast, Honey"}},
  {name:"Hamburger Buns",price:150,img:"../images/products/hamburgerBuns.jpg",cat:"Loaf Breads",desc:"Soft and sturdy hamburger buns. Perfect for burgers, sandwiches, and sliders. Pack of 6.",specs:{Brand:"Uncle George",Type:"Hamburger Buns",Weight:"50g each","Shelf Life":"3-5 days",Ingredients:"Flour, Sugar, Butter, Yeast, Sesame Seeds, Milk"}},
  {name:"Hopia Baboy",price:220,img:"../images/products/hopiaBaboy.jpg",cat:"Pies & Pastries",desc:"Flaky, multi-layered pastry filled with seasoned ground pork. A savory Filipino snack.",specs:{Brand:"Uncle George",Type:"Hopia Baboy",Weight:"40g each","Shelf Life":"3-5 days",Ingredients:"Flour, Pork, Onion, Garlic, Butter, Soy Sauce"}},
  {name:"Mamon Rolls",price:30,img:"../images/products/mamonRolls.jpg",cat:"Bread Rolls",desc:"Light and airy sponge cake rolls. Soft, sweet, and perfect with coffee or milk.",specs:{Brand:"Uncle George",Type:"Mamon Rolls",Weight:"30g each","Shelf Life":"2-3 days",Ingredients:"Flour, Sugar, Eggs, Butter, Milk, Baking Powder"}},
  {name:"Ciabatta Cheese",price:95,img:"../images/products/ciabattaCheese.jpg",cat:"Bread Rolls",desc:"Chewy ciabatta bread with real melted cheese baked into every bite. Crispy crust, soft interior.",specs:{Brand:"Uncle George",Type:"Ciabatta Cheese",Weight:"120g each","Shelf Life":"2-3 days",Ingredients:"Flour, Cheese, Water, Yeast, Olive Oil, Salt"}},
  {name:"Raisin Bread",price:135,img:"../images/products/raisinBread.jpg",cat:"Loaf Breads",desc:"Sweet bread loaf loaded with plump raisins. Great for toast, French toast, or snacking. 500g.",specs:{Brand:"Uncle George",Type:"Raisin Bread",Weight:"500g","Shelf Life":"3-5 days",Ingredients:"Flour, Raisins, Sugar, Butter, Yeast, Cinnamon"}},
  {name:"Raisin Pan De Rosa",price:135,img:"../images/products/raisinPanDeRosa.jpg",cat:"Bread Rolls",desc:"Beautiful rose-shaped bread filled with sweet raisins. Soft, pretty, and perfect for gifts.",specs:{Brand:"Uncle George",Type:"Raisin Pan De Rosa",Weight:"60g each","Shelf Life":"2-3 days",Ingredients:"Flour, Raisins, Sugar, Butter, Yeast, Milk"}},
  {name:"Ube Pandan",price:130,img:"../images/products/cheesyubepandandelight.jpg",cat:"Bread Rolls",desc:"Purple yam and pandan flavored bread. A uniquely Filipino treat with a vibrant color and sweet aroma.",specs:{Brand:"Uncle George",Type:"Ube Pandan",Weight:"60g each","Shelf Life":"2-3 days",Ingredients:"Flour, Ube, Pandan, Sugar, Butter, Milk"}},
  {name:"Caramel Cake",price:290,img:"../images/products/caramelCake.jpg",cat:"Cakes",desc:"Moist and tender cake topped with a rich, buttery caramel glaze. Sweet, indulgent, and perfect for any celebration.",specs:{Brand:"Uncle George",Type:"Caramel Cake",Weight:"300g","Shelf Life":"3-5 days",Ingredients:"Flour, Sugar, Butter, Eggs, Milk, Caramel, Vanilla"}},
  {name:"Mango Cake",price:275,img:"../images/products/mangoCake.jpg",cat:"Cakes",desc:"Light and fluffy cake made with real fresh mango. Tropical, refreshing, and naturally sweet.",specs:{Brand:"Uncle George",Type:"Mango Cake",Weight:"250g","Shelf Life":"2-3 days",Ingredients:"Flour, Fresh Mango, Sugar, Eggs, Butter, Cream, Gelatin"}},
  {name:"Mini Monay",price:38,img:"../images/products/miniMonay.jpg",cat:"Bread Rolls",desc:"Soft and slightly dense Filipino bread roll with a golden crust. Simple, wholesome, and best enjoyed warm.",specs:{Brand:"Uncle George",Type:"Mini Monay",Weight:"50g each","Shelf Life":"2-3 days",Ingredients:"Flour, Water, Yeast, Sugar, Salt, Butter"}},
  {name:"Red Velvet Chocolate Cake",price:300,img:"../images/products/redVelvetChocolateCake.jpg",cat:"Cakes",desc:"Classic red velvet cake with a rich cocoa flavor and velvety cream cheese frosting. Elegant and decadent.",specs:{Brand:"Uncle George",Type:"Red Velvet Chocolate Cake",Weight:"350g","Shelf Life":"3-5 days",Ingredients:"Flour, Cocoa Powder, Sugar, Eggs, Butter, Buttermilk, Cream Cheese"}}
];

function showToast(message,type){
  var t=document.getElementById('appToast'),b=document.getElementById('appToastBody');
  if(!t||!b)return;
  b.textContent=message;
  t.className='toast align-items-center text-bg-'+(type||'success')+' border-0';
  new bootstrap.Toast(t,{delay:3000}).show();
}

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
  document.getElementById('productImage').src=p.img;
  document.getElementById('productImage').alt=p.name;
  document.getElementById('productCategory').textContent=p.cat;
  document.getElementById('productName').textContent=p.name;
  if(p.discount){
    var salePrice=Math.round(p.price*(1-p.discount/100));
    document.getElementById('productPrice').innerHTML='<span style="text-decoration:line-through;color:#999;margin-right:8px;">&#8369;'+p.price+'</span><span style="color:#c0392b;font-size:1.3rem;">&#8369;'+salePrice+'</span> <span class="badge bg-danger">-'+p.discount+'%</span>';
  } else {
    document.getElementById('productPrice').innerHTML='&#8369;'+p.price;
  }
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
    var finalPrice=p.discount?Math.round(p.price*(1-p.discount/100)):p.price;
    var found=false;
    for(var i=0;i<cart.length;i++){if(cart[i].name===p.name){cart[i].qty++;found=true;break;}}
    if(!found)cart.push({name:p.name,price:finalPrice,img:p.img,qty:1});
    localStorage.setItem('unclegorg_cart',JSON.stringify(cart));
    showToast('Added to cart: '+p.name,'success');
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

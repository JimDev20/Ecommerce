/* ========================================
   Uncle George - Unified JavaScript
   ======================================== */

/* ========================================
   PRODUCT DATA
   ======================================== */
var allProducts = [
  {name:"French Baguette",price:45,img:"images/products/frenchBaguette.jpg",cat:"Loaf Breads",discount:12,images:["images/products/frenchBaguette.jpg","images/3 sides carousel/french baguette/frenchBaguette-lifestyle.jpeg","images/3 sides carousel/french baguette/frenchBaguette-cross.jpeg"],desc:"Classic French baguette with a crispy golden crust and soft, airy interior. Baked fresh daily using traditional methods. 500g.",specs:{Brand:"Uncle George",Type:"French Baguette",Weight:"500g","Shelf Life":"3-5 days",Ingredients:"Flour, Water, Yeast, Salt"}},
  {name:"Whole Wheat Loaf",price:110,img:"images/products/wholeWheatLoaf.jpg",cat:"Loaf Breads",images:["images/products/wholeWheatLoaf.jpg","images/3 sides carousel/whole wheat loaf/wholeWheatLoaf-lifestyle.jpeg","images/3 sides carousel/whole wheat loaf/wholeWheatLoaf-cross.jpeg"],desc:"Soft and fluffy white loaf bread. Perfect for sandwiches, toast, and everyday meals. 420g.",specs:{Brand:"Uncle George",Type:"White Bread",Weight:"550g","Shelf Life":"3-5 days",Ingredients:"Flour, Water, Yeast, Sugar, Salt, Butter"}},
  {name:"Whole Wheat Multigrain",price:110,img:"images/products/wholeWheatMultigrain.jpg",cat:"Loaf Breads",discount:12,images:["images/products/wholeWheatMultigrain.jpg","images/3 sides carousel/whole wheat multigrain/wholeWheatMultigrain-lifestyle.jpeg","images/3 sides carousel/whole wheat multigrain/wholeWheatMultigrain-cross.jpeg"],desc:"Healthy whole wheat loaf packed with fiber and nutrients. Great taste, great for you. 550g.",specs:{Brand:"Uncle George",Type:"Whole Wheat Bread",Weight:"550g","Shelf Life":"3-5 days",Ingredients:"Whole Wheat Flour, Water, Yeast, Salt, Honey"}},
  {name:"Butter Bread",price:130,img:"images/products/ciabattaBread.jpg",cat:"Loaf Breads",images:["images/products/ciabattaBread.jpg","images/3 sides carousel/ciabatta bread/ciabattaBread-lifestyle.png","images/3 sides carousel/ciabatta bread/ciabattaBread-cross.png"],desc:"Artisan ciabatta bread with a crispy crust and airy, buttery interior. Baked fresh daily. Perfect for toast and breakfast. 550g.",specs:{Brand:"Uncle George",Type:"Butter Bread",Weight:"550g","Shelf Life":"3-5 days",Ingredients:"Flour, Butter, Water, Yeast, Sugar, Milk"}},
  {name:"Cheese Bread",price:145,img:"images/products/cheeseLoafBread.jpg",cat:"Loaf Breads",images:["images/products/cheeseLoafBread.jpg","images/3 sides carousel/cheese loaf bread/cheeseLoafBread-lifestyle.png","images/3 sides carousel/cheese loaf bread/cheeseLoafBread-cross.png"],desc:"Savory loaf bread loaded with real cheese. A family favorite for meals and snacks. 550g.",specs:{Brand:"Uncle George",Type:"Cheese Bread",Weight:"600g","Shelf Life":"3-5 days",Ingredients:"Flour, Cheese, Water, Yeast, Butter, Salt"}},
  {name:"Sandwich Pullman Loaf",price:110,img:"images/products/sandwichPullmanLoaf.jpg",cat:"Loaf Breads",images:["images/products/sandwichPullmanLoaf.jpg","images/3 sides carousel/sandwich pullman loaf/sandwichPullmanLoaf-lifestyle.jpeg","images/3 sides carousel/sandwich pullman loaf/sandwichPullmanLoaf-cross.jpeg"],desc:"Classic square-shaped pullman loaf with a soft, even crumb. Perfect for sandwiches, toast, and everyday use. 550g.",specs:{Brand:"Uncle George",Type:"Sandwich Pullman Loaf",Weight:"550g","Shelf Life":"3-5 days",Ingredients:"Flour, Water, Yeast, Sugar, Salt, Butter, Milk"}},
  {name:"Sourdough Focaccia",price:180,img:"images/products/sourDoughFocacciaBread.jpg",cat:"Loaf Breads",images:["images/products/sourDoughFocacciaBread.jpg","images/3 sides carousel/sourdough focacia bread/sourDoughFocacciaBread-lifestyle.jpeg","images/3 sides carousel/sourdough focacia bread/sourDoughFocacciaBread-cross.jpeg"],desc:"Artisan sourdough focaccia with a crispy crust and soft, airy interior. Topped with olive oil and herbs.",specs:{Brand:"Uncle George",Type:"Sourdough Focaccia",Weight:"400g","Shelf Life":"2-3 days",Ingredients:"Sourdough Starter, Flour, Olive Oil, Herbs, Salt"}},
  {name:"Whole Wheat Pandesal",price:102,img:"images/products/wholeWheatPandesal.jpg",cat:"Bread Rolls",images:["images/products/wholeWheatPandesal.jpg","images/3 sides carousel/whole wheat pandesal/wholeWheatPandesal-lifestyle.jpeg","images/3 sides carousel/whole wheat pandesal/wholeWheatPandesal-cross.jpeg"],desc:"Classic Filipino pandesal. Soft, warm, and coated with breadcrumbs. Best enjoyed fresh from the oven. 250g pack.",specs:{Brand:"Uncle George",Type:"Pinoy Pandesal",Weight:"250g pack","Shelf Life":"1-2 days",Ingredients:"Flour, Water, Yeast, Sugar, Breadcrumbs"}},
  {name:"Egg Pandesal",price:125,img:"images/products/eggPandesal.jpg",cat:"Bread Rolls",images:["images/products/eggPandesal.jpg","images/3 sides carousel/egg pandesal/eggPandesal-lfestyle.png","images/3 sides carousel/egg pandesal/eggPandesal-cross.png"],desc:"Soft pandesal made with real eggs for a richer flavor and fluffier texture. A Filipino breakfast staple.",specs:{Brand:"Uncle George",Type:"Egg Pandesal",Weight:"60g each","Shelf Life":"1-2 days",Ingredients:"Flour, Eggs, Sugar, Yeast, Breadcrumbs, Butter"}},
  {name:"Qeso Pandesal",price:110,img:"images/products/qesoPandesal.jpg",cat:"Bread Rolls",images:["images/products/qesoPandesal.jpg","images/3 sides carousel/qeso pandesal/qesoPandesal-lifestyle.jpeg","images/3 sides carousel/qeso pandesal/qesoPandesal-cross.jpeg"],desc:"Cheese-flavored pandesal with real cheese chunks. Cheesy, soft, and irresistible.",specs:{Brand:"Uncle George",Type:"Qeso Pandesal",Weight:"60g each","Shelf Life":"1-2 days",Ingredients:"Flour, Cheese, Sugar, Yeast, Breadcrumbs, Butter"}},
  {name:"Chicken Pie",price:60,img:"images/products/chickenPie.jpg",cat:"Pies & Pastries",images:["images/products/chickenPie.jpg","images/3 sides carousel/chicken pie/chickenPie-lifestyle.png","images/3 sides carousel/chicken pie/chickenPie-cross.png"],desc:"Savory chicken-filled pastry with a flaky, buttery crust. Filled with creamy chicken and vegetables.",specs:{Brand:"Uncle George",Type:"Chicken Pie",Weight:"100g","Shelf Life":"2-3 days",Ingredients:"Flour, Chicken, Butter, Carrots, Peas, Cream"}},
  {name:"Chunky Chicken Pie",price:580,img:"images/products/chunkyChickenPie.jpg",cat:"Pies & Pastries",images:["images/products/chunkyChickenPie.jpg","images/3 sides carousel/chunky chicken pie/chunckyChickenPie-lifestyle.png","images/3 sides carousel/chunky chicken pie/chunkyChickenPie-cross.png"],desc:"Hearty pie loaded with chunky chicken pieces in a rich, creamy sauce. Baked in a flaky golden crust. 9 inch pan.",specs:{Brand:"Uncle George",Type:"Chunky Chicken Pie",Weight:"9 inch pan","Shelf Life":"2-3 days",Ingredients:"Flour, Chicken, Butter, Cream, Mushrooms, Peas"}},
  {name:"Sourdough Artisan Bread",price:120,img:"images/products/sourdoughArtisanBread.jpg",cat:"Loaf Breads",images:["images/products/sourdoughArtisanBread.jpg","images/3 sides carousel/sourdough artisan bread/sourdoughArtisanBread-lifestyle.jpeg","images/3 sides carousel/sourdough artisan bread/sourdoughArtisanBread-cross.jpeg"],desc:"Artisan sourdough bread with a crispy crust and soft, tangy interior. Handcrafted daily. 450g.",specs:{Brand:"Uncle George",Type:"Sourdough Artisan Bread",Weight:"450g","Shelf Life":"3-5 days",Ingredients:"Flour, Sourdough Starter, Water, Salt, Olive Oil, Butter"}},
  {name:"Walnut Cinnamon Ring",price:155,img:"images/products/cinnamonRolls.jpg",cat:"Bread Rolls",discount:12,images:["images/products/cinnamonRolls.jpg","images/3 sides carousel/walnut cinnamon ring/cinnamonRolls-lifestyle.png","images/3 sides carousel/walnut cinnamon ring/cinnamonRolls-cross.png"],desc:"Sweet Filipino-style bread rolls coated in buttery breadcrumbs with a sugar filling. 520g.",specs:{Brand:"Uncle George",Type:"Walnut Cinnamon Ring",Weight:"520g","Shelf Life":"2-3 days",Ingredients:"Flour, Sugar, Butter, Breadcrumbs, Yeast"}},
  {name:"Mochi Bread",price:150,img:"images/products/mochiBread.jpg",cat:"Bread Rolls",images:["images/products/mochiBread.jpg","images/3 sides carousel/mochi bread/mochiBread-lifestyle.jpeg","images/3 sides carousel/mochi bread/mochiBread-cross.jpeg"],desc:"Chewy bread made with glutinous rice flour. Unique stretchy texture with a soft, sweet interior.",specs:{Brand:"Uncle George",Type:"Mochi Bread",Weight:"80g","Shelf Life":"2-3 days",Ingredients:"Glutinous Rice Flour, Sugar, Butter, Milk, Eggs"}},
  {name:"Banana Cake",price:180,img:"images/products/bananCake.jpg",cat:"Cakes",discount:12,images:["images/products/bananCake.jpg","images/3 sides carousel/banana cake/bananaCake-lifestyle.png","images/3 sides carousel/banana cake/bananaCake-cross.png"],desc:"Moist and fluffy banana cake made with real ripe bananas. Sweet, aromatic, and homemade-tasting.",specs:{Brand:"Uncle George",Type:"Banana Cake",Weight:"250g","Shelf Life":"3-5 days",Ingredients:"Flour, Banana, Sugar, Eggs, Butter, Baking Soda"}},
  {name:"Banana Carrot Cake",price:260,img:"images/products/bananaCarrotCake.jpg",cat:"Cakes",images:["images/products/bananaCarrotCake.jpg","images/3 sides carousel/banana carrot cake/bananaCarrotCake-lifestyle.png","images/3 sides carousel/banana carrot cake/bananaCarrotCake-cross.png"],desc:"A healthy twist combining ripe bananas and fresh carrots. Moist, flavorful, and naturally sweet.",specs:{Brand:"Uncle George",Type:"Banana Carrot Cake",Weight:"250g","Shelf Life":"3-5 days",Ingredients:"Flour, Banana, Carrot, Sugar, Eggs, Butter, Cinnamon"}},
  {name:"Chocolate Cake",price:280,img:"images/products/chocolateCake.jpg",cat:"Cakes",images:["images/products/chocolateCake.jpg","images/3 sides carousel/chocolate cake/chocolateCake-lifestyle.png","images/3 sides carousel/chocolate cake/chocolateCake-cross.png"],desc:"Rich and decadent chocolate cake with a moist, fudgy texture. A must-have for chocolate lovers.",specs:{Brand:"Uncle George",Type:"Chocolate Cake",Weight:"300g","Shelf Life":"3-5 days",Ingredients:"Flour, Cocoa Powder, Sugar, Eggs, Butter, Chocolate"}},
  {name:"Egg Pie",price:240,img:"images/products/eggPie.jpg",cat:"Pies & Pastries",images:["images/products/eggPie.jpg","images/3 sides carousel/egg pie/eggPie-lifestyle.jpeg","images/3 sides carousel/egg pie/eggPie-cross.jpeg"],desc:"Classic Filipino egg pie with a smooth, creamy custard filling in a buttery pastry crust.",specs:{Brand:"Uncle George",Type:"Egg Pie",Weight:"200g","Shelf Life":"2-3 days",Ingredients:"Flour, Eggs, Sugar, Butter, Milk, Vanilla"}},
  {name:"Hotdog Rolls",price:80,img:"images/products/hotdogRolls.jpg",cat:"Bread Rolls",images:["images/products/hotdogRolls.jpg","images/3 sides carousel/hotdog rolls/hotdogRolls-lifestyle.jpeg","images/3 sides carousel/hotdog rolls/hotdogRolls-cross.jpeg"],desc:"Soft bread rolls perfect for hotdogs. Fluffy and lightly toasted.",specs:{Brand:"Uncle George",Type:"Hotdog Rolls",Weight:"60g each","Shelf Life":"2-3 days",Ingredients:"Flour, Sugar, Butter, Yeast, Milk, Eggs"}},
  {name:"Cranberry Walnut Bread",price:155,img:"images/products/cranberryWalnutBread.jpg",cat:"Loaf Breads",images:["images/products/cranberryWalnutBread.jpg","images/3 sides carousel/cranberry walnut bread/cranberryWalnutBread-lifestyle.png","images/3 sides carousel/cranberry walnut bread/cranberryWalnutBread-cross.png"],desc:"Whole wheat bread studded with dried cranberries and crunchy walnuts. Healthy and delicious. 450g.",specs:{Brand:"Uncle George",Type:"Cranberry Walnut Bread",Weight:"500g","Shelf Life":"3-5 days",Ingredients:"Whole Wheat Flour, Cranberries, Walnuts, Yeast, Honey"}},
  {name:"Hamburger Buns",price:150,img:"images/products/hamburgerBuns.jpg",cat:"Loaf Breads",images:["images/products/hamburgerBuns.jpg","images/3 sides carousel/hamburger buns/hamburgerBuns-lifestyle.jpeg","images/3 sides carousel/hamburger buns/hamburgerBuns-cross.jpeg"],desc:"Soft and sturdy hamburger buns. Perfect for burgers, sandwiches, and sliders. Pack of 6.",specs:{Brand:"Uncle George",Type:"Hamburger Buns",Weight:"50g each","Shelf Life":"3-5 days",Ingredients:"Flour, Sugar, Butter, Yeast, Sesame Seeds, Milk"}},
  {name:"Hopia Baboy",price:220,img:"images/products/hopiaBaboy.jpg",cat:"Pies & Pastries",images:["images/products/hopiaBaboy.jpg","images/3 sides carousel/hopia baboy/hopiaBaboy-ilfestyle.jpeg","images/3 sides carousel/hopia baboy/hopiaBaboy-cross.jpeg"],desc:"Flaky, multi-layered pastry filled with seasoned ground pork. A savory Filipino snack.",specs:{Brand:"Uncle George",Type:"Hopia Baboy",Weight:"40g each","Shelf Life":"3-5 days",Ingredients:"Flour, Pork, Onion, Garlic, Butter, Soy Sauce"}},
  {name:"Mamon Rolls",price:30,img:"images/products/mamonRolls.jpg",cat:"Bread Rolls",images:["images/products/mamonRolls.jpg","images/3 sides carousel/mamon rolls/mamonRolls-lifestyle.jpeg","images/3 sides carousel/mamon rolls/mamonRolls-cross.jpeg"],desc:"Light and airy sponge cake rolls. Soft, sweet, and perfect with coffee or milk.",specs:{Brand:"Uncle George",Type:"Mamon Rolls",Weight:"30g each","Shelf Life":"2-3 days",Ingredients:"Flour, Sugar, Eggs, Butter, Milk, Baking Powder"}},
  {name:"Ciabatta Cheese",price:95,img:"images/products/ciabattaCheese.jpg",cat:"Bread Rolls",images:["images/products/ciabattaCheese.jpg","images/3 sides carousel/ciabatta cheese/ciabattaCheese-lifestyle.png","images/3 sides carousel/ciabatta cheese/ciabattaCheese-cross.png"],desc:"Chewy ciabatta bread with real melted cheese baked into every bite. Crispy crust, soft interior.",specs:{Brand:"Uncle George",Type:"Ciabatta Cheese",Weight:"120g each","Shelf Life":"2-3 days",Ingredients:"Flour, Cheese, Water, Yeast, Olive Oil, Salt"}},
  {name:"Raisin Bread",price:135,img:"images/products/raisinBread.jpg",cat:"Loaf Breads",images:["images/products/raisinBread.jpg","images/3 sides carousel/raisin bread/raisinBread-lifestyle.jpeg","images/3 sides carousel/raisin bread/raisinBread-cross.jpeg"],desc:"Sweet bread loaf loaded with plump raisins. Great for toast, French toast, or snacking. 500g.",specs:{Brand:"Uncle George",Type:"Raisin Bread",Weight:"500g","Shelf Life":"3-5 days",Ingredients:"Flour, Raisins, Sugar, Butter, Yeast, Cinnamon"}},
  {name:"Raisin Pan De Rosa",price:135,img:"images/products/raisinPanDeRosa.jpg",cat:"Bread Rolls",images:["images/products/raisinPanDeRosa.jpg","images/3 sides carousel/raisin pan de rosa/raisinPanDeRosa-lifestyle.jpeg","images/3 sides carousel/raisin pan de rosa/raisinPanDeRosa-cross.jpeg"],desc:"Beautiful rose-shaped bread filled with sweet raisins. Soft, pretty, and perfect for gifts.",specs:{Brand:"Uncle George",Type:"Raisin Pan De Rosa",Weight:"60g each","Shelf Life":"2-3 days",Ingredients:"Flour, Raisins, Sugar, Butter, Yeast, Milk"}},
  {name:"Ube Pandan",price:130,img:"images/products/cheesyUbePandanDelight.jpg",cat:"Bread Rolls",images:["images/products/cheesyUbePandanDelight.jpg","images/3 sides carousel/cheesey ube pandan delight/cheesyUbePandanDelight-lifestyle.png","images/3 sides carousel/cheesey ube pandan delight/cheesyUbePandanDelight-cross.png"],desc:"Purple yam and pandan flavored bread. A uniquely Filipino treat with a vibrant color and sweet aroma.",specs:{Brand:"Uncle George",Type:"Ube Pandan",Weight:"60g each","Shelf Life":"2-3 days",Ingredients:"Flour, Ube, Pandan, Sugar, Butter, Milk"}},
  {name:"Caramel Cake",price:290,img:"images/products/caramelCake.jpg",cat:"Cakes",images:["images/products/caramelCake.jpg","images/3 sides carousel/caramel cake/caramelCake-lifestyle.png","images/3 sides carousel/caramel cake/caramelCake-cross.png"],desc:"Moist and tender cake topped with a rich, buttery caramel glaze. Sweet, indulgent, and perfect for any celebration.",specs:{Brand:"Uncle George",Type:"Caramel Cake",Weight:"300g","Shelf Life":"3-5 days",Ingredients:"Flour, Sugar, Butter, Eggs, Milk, Caramel, Vanilla"}},
  {name:"Mango Cake",price:275,img:"images/products/mangoCake.jpg",cat:"Cakes",images:["images/products/mangoCake.jpg","images/3 sides carousel/mango cake/mangoCake-lifestyle.jpeg","images/3 sides carousel/mango cake/mangoCake-cross.jpeg"],desc:"Light and fluffy cake made with real fresh mango. Tropical, refreshing, and naturally sweet.",specs:{Brand:"Uncle George",Type:"Mango Cake",Weight:"250g","Shelf Life":"2-3 days",Ingredients:"Flour, Fresh Mango, Sugar, Eggs, Butter, Cream, Gelatin"}},
  {name:"Mini Monay",price:38,img:"images/products/miniMonay.jpg",cat:"Bread Rolls",images:["images/products/miniMonay.jpg","images/3 sides carousel/mini monay/miniMonay-lifestyle.jpeg","images/3 sides carousel/mini monay/miniMonay-cross.jpeg"],desc:"Soft and slightly dense Filipino bread roll with a golden crust. Simple, wholesome, and best enjoyed warm.",specs:{Brand:"Uncle George",Type:"Mini Monay",Weight:"50g each","Shelf Life":"2-3 days",Ingredients:"Flour, Water, Yeast, Sugar, Salt, Butter"}},
  {name:"Red Velvet Chocolate Cake",price:300,img:"images/products/redVelvetChocolateCake.jpg",cat:"Cakes",images:["images/products/redVelvetChocolateCake.jpg","images/3 sides carousel/red velvet chocolate cake/redVelvetChocolateCake-lifestyle.jpeg","images/3 sides carousel/red velvet chocolate cake/redVelvetChocolateCake-cross.jpeg"],desc:"Classic red velvet cake with a rich cocoa flavor and velvety cream cheese frosting. Elegant and decadent.",specs:{Brand:"Uncle George",Type:"Red Velvet Chocolate Cake",Weight:"350g","Shelf Life":"3-5 days",Ingredients:"Flour, Cocoa Powder, Sugar, Eggs, Butter, Buttermilk, Cream Cheese"}}
];

var featuredProducts = [
  {name:"French Baguette",price:45,img:"images/products/frenchBaguette.jpg"},
  {name:"Whole Wheat Pandesal",price:102,img:"images/products/wholeWheatPandesal.jpg"},
  {name:"Sourdough Artisan Bread",price:120,img:"images/products/sourdoughArtisanBread.jpg"},
  {name:"Chocolate Cake",price:280,img:"images/products/chocolateCake.jpg"},
  {name:"Ciabatta Cheese",price:95,img:"images/products/ciabattaCheese.jpg"},
  {name:"Ube Pandan",price:130,img:"images/products/cheesyUbePandanDelight.jpg"}
];

/* ========================================
   HELPER: detect base path
   ======================================== */
function getBase() {
  var path = window.location.pathname;
  if (path.indexOf('/pages/') !== -1 || path.indexOf('/pages\\') !== -1) return '../';
  return '';
}

function productLink(name) {
  return getBase() + 'pages/product-details.html?product=' + encodeURIComponent(name);
}

function pageLink(page) {
  return getBase() + (page === 'index' ? 'index.html' : 'pages/' + page + '.html');
}

/* ========================================
   UTILITY FUNCTIONS
   ======================================== */
function showToast(message, type) {
  var t = document.getElementById('appToast'), b = document.getElementById('appToastBody');
  if (!t || !b) return;
  b.textContent = message;
  t.className = 'toast align-items-center text-bg-' + (type || 'success') + ' border-0';
  new bootstrap.Toast(t, {delay: 3000}).show();
}

function getCart() {
  return JSON.parse(localStorage.getItem('unclegorg_cart') || '[]');
}

function saveCart(cart) {
  localStorage.setItem('unclegorg_cart', JSON.stringify(cart));
}

function updateNavBadge() {
  var cart = getCart();
  var n = cart.reduce(function(s, i) { return s + i.qty; }, 0);
  var el = document.getElementById('navCartCount');
  if (el) {
    if (n > 0) { el.textContent = n; el.classList.add('badge', 'bg-danger'); }
    else { el.textContent = ''; el.classList.remove('badge', 'bg-danger'); }
  }
}

function addToCart(name, price, image) {
  var cart = getCart();
  var found = false;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].name === name) { cart[i].qty++; found = true; break; }
  }
  if (!found) cart.push({name: name, price: price, img: image, qty: 1});
  saveCart(cart);
  showToast('Added to cart: ' + name, 'success');
  updateNavBadge();
}

/* ========================================
   SCROLL ANIMATIONS
   ======================================== */
var animObserver;
function observeAnimations() {
  if (!animObserver) {
    animObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) { entry.target.classList.add('visible'); }
      });
    }, {threshold: 0.1, rootMargin: '0px 0px -20px 0px'});
  }
  document.querySelectorAll('.scroll-animate').forEach(function(el) { animObserver.observe(el); });
}

/* ========================================
   HOME PAGE
   ======================================== */
function initHome() {
  var g = document.getElementById('featuredGrid');
  if (!g) return;
  g.innerHTML = featuredProducts.map(function(p, i) {
    return '<div class="col-lg-2 col-md-4 col-6 mb-4 scroll-animate stagger-' + (i + 1) + '"><div class="card product-card h-100"><a href="' + productLink(p.name) + '" class="text-decoration-none"><div class="overflow-hidden">' +
      '<img src="' + p.img + '" class="card-img-top" alt="' + p.name + '"></div></a><div class="card-body pb-3">' +
      '<h6 class="card-title fw-bold mt-1 mb-1" style="font-size:.9rem;">' + p.name + '</h6>' +
      '<p class="fw-bold text-danger mb-1" style="font-size:.95rem;">&#8369;' + p.price + '</p>' +
      '<button class="btn btn-sm btn-custom w-100 mt-auto add-to-cart-btn" data-name="' + p.name.replace(/"/g, '&quot;') + '" data-price="' + p.price + '" data-img="' + p.img.replace(/"/g, '&quot;') + '"><i class="bi bi-cart-plus me-1"></i>Add</button>' +
      '</div></div></div>';
  }).join('');
  setTimeout(function() { observeAnimations(); }, 100);
}

/* ========================================
   PRODUCTS PAGE
   ======================================== */
var prodCurrentPage = 1;
var prodPerPage = 8;
var prodCurrentCategory = 'all';

function initProducts() {
  prodCurrentPage = 1;
  var params = new URLSearchParams(window.location.search);
  var cat = params.get('cat');
  prodCurrentCategory = cat || 'all';
  renderProducts();
  renderPagination();
  setTimeout(function() { observeAnimations(); }, 100);
}

function filterCategory(cat) {
  prodCurrentCategory = cat;
  prodCurrentPage = 1;
  var btns = document.querySelectorAll('#categoryFilter .btn');
  btns.forEach(function(b) { b.className = 'btn btn-sm btn-outline-secondary'; });
  var idx = {'all': 0, 'Loaf Breads': 1, 'Bread Rolls': 2, 'Pies & Pastries': 3, 'Cakes': 4};
  if (idx[cat] !== undefined) { btns[idx[cat]].className = 'btn btn-sm btn-custom'; }
  renderProducts();
  renderPagination();
  setTimeout(function() { observeAnimations(); }, 100);
}

function getFilteredProducts() {
  if (prodCurrentCategory === 'all') return allProducts;
  return allProducts.filter(function(p) { return p.cat === prodCurrentCategory; });
}

function renderProducts() {
  var g = document.getElementById('productsGrid');
  if (!g) return;
  var filtered = getFilteredProducts();
  var start = (prodCurrentPage - 1) * prodPerPage;
  var page = filtered.slice(start, start + prodPerPage);
  g.innerHTML = page.map(function(p, i) {
    var cat = p.cat.replace(/&/g, '&amp;');
    return '<div class="col-lg-3 col-md-4 col-6 mb-4 scroll-animate stagger-' + ((i % 8) + 1) + '"><div class="card product-card h-100"><a href="' + productLink(p.name) + '" class="text-decoration-none"><div class="overflow-hidden">' +
      '<img src="' + p.img + '" class="card-img-top" alt="' + p.name + '"></div></a><div class="card-body">' +
      '<span class="badge bg-secondary-subtle text-secondary mb-1 small">' + cat + '</span>' +
      '<h6 class="card-title fw-bold mt-1">' + p.name + '</h6>' +
      '<p class="text-muted small mb-1" style="font-size:.8rem;">' + p.desc + '</p>' +
      '<p class="fw-bold text-danger mb-2">&#8369;' + p.price + '</p>' +
      '<div class="d-flex gap-2 mt-auto">' +
      '<a href="' + productLink(p.name) + '" class="btn btn-sm btn-outline-secondary flex-grow-1"><i class="bi bi-eye me-1"></i>View Details</a>' +
      '<button class="btn btn-sm btn-custom add-to-cart-btn" data-name="' + p.name.replace(/"/g, '&quot;') + '" data-price="' + p.price + '" data-img="' + p.img.replace(/"/g, '&quot;') + '"><i class="bi bi-cart-plus"></i></button>' +
      '</div></div></div></div>';
  }).join('');
}

function renderPagination() {
  var filtered = getFilteredProducts();
  var pages = Math.ceil(filtered.length / prodPerPage);
  var pag = document.getElementById('pagination');
  if (!pag) return;
  var html = '<li class="page-item ' + (prodCurrentPage === 1 ? 'disabled' : '') + '"><a class="page-link" href="#" onclick="goPage(' + (prodCurrentPage - 1) + ');return false;"><i class="bi bi-chevron-left"></i></a></li>';
  for (var i = 1; i <= pages; i++) {
    html += '<li class="page-item ' + (prodCurrentPage === i ? 'active' : '') + '"><a class="page-link" href="#" onclick="goPage(' + i + ');return false;">' + i + '</a></li>';
  }
  html += '<li class="page-item ' + (prodCurrentPage === pages ? 'disabled' : '') + '"><a class="page-link" href="#" onclick="goPage(' + (prodCurrentPage + 1) + ');return false;"><i class="bi bi-chevron-right"></i></a></li>';
  pag.innerHTML = html;
}

function goPage(p) {
  var filtered = getFilteredProducts();
  var maxPage = Math.ceil(filtered.length / prodPerPage);
  if (p < 1 || p > maxPage) return;
  prodCurrentPage = p;
  renderProducts();
  renderPagination();
  setTimeout(function() { observeAnimations(); }, 100);
  window.scrollTo({top: 200, behavior: 'smooth'});
}

/* ========================================
   PRODUCT DETAILS PAGE
   ======================================== */
function initProductDetails() {
  var params = new URLSearchParams(window.location.search);
  var name = params.get('product');
  if (!name) { showProductError(); return; }
  var product = null;
  for (var i = 0; i < allProducts.length; i++) {
    if (allProducts[i].name.toLowerCase() === name.toLowerCase()) { product = allProducts[i]; break; }
  }
  if (!product) { showProductError(); return; }
  renderProductDetails(product);
  renderRelatedProducts(product);
}

function showProductError() {
  var content = document.getElementById('productContent');
  var related = document.getElementById('relatedSection');
  var error = document.getElementById('productError');
  if (content) content.classList.add('d-none');
  if (related) related.classList.add('d-none');
  if (error) error.classList.remove('d-none');
}

function renderProductDetails(p) {
  var inner = document.getElementById('productCarouselInner');
  var thumbs = document.getElementById('productThumbs');
  var imgs = p.images || [p.img, p.img, p.img];
  if (inner) {
    inner.innerHTML = '<div class="carousel-item active"><img src="' + imgs[0] + '" class="d-block w-100" alt="' + p.name + '" style="height:500px;object-fit:cover;"></div>' +
      '<div class="carousel-item"><img src="' + imgs[1] + '" class="d-block w-100" alt="' + p.name + '" style="height:500px;object-fit:cover;"></div>' +
      '<div class="carousel-item"><img src="' + imgs[2] + '" class="d-block w-100" alt="' + p.name + '" style="height:500px;object-fit:cover;"></div>';
  }
  if (thumbs) {
    thumbs.innerHTML = '<img src="' + imgs[0] + '" class="product-thumb active" alt="' + p.name + '" data-bs-target="#productCarousel" data-bs-slide-to="0" style="width:80px;height:80px;object-fit:cover;border-radius:8px;cursor:pointer;border:3px solid #D2691E;">' +
      '<img src="' + imgs[1] + '" class="product-thumb" alt="' + p.name + '" data-bs-target="#productCarousel" data-bs-slide-to="1" style="width:80px;height:80px;object-fit:cover;border-radius:8px;cursor:pointer;border:3px solid transparent;">' +
      '<img src="' + imgs[2] + '" class="product-thumb" alt="' + p.name + '" data-bs-target="#productCarousel" data-bs-slide-to="2" style="width:80px;height:80px;object-fit:cover;border-radius:8px;cursor:pointer;border:3px solid transparent;">';
    thumbs.querySelectorAll('.product-thumb').forEach(function(th) {
      th.addEventListener('click', function() {
        thumbs.querySelectorAll('.product-thumb').forEach(function(t) { t.style.borderColor = 'transparent'; });
        this.style.borderColor = '#D2691E';
      });
    });
    var carousel = document.getElementById('productCarousel');
    if (carousel) {
      carousel.addEventListener('slid.bs.carousel', function(e) {
        var idx = e.to;
        thumbs.querySelectorAll('.product-thumb').forEach(function(t, i) {
          t.style.borderColor = (i === idx) ? '#D2691E' : 'transparent';
        });
      });
    }
  }
  document.getElementById('productCategory').textContent = p.cat;
  document.getElementById('productName').textContent = p.name;
  if (p.discount) {
    var salePrice = Math.round(p.price * (1 - p.discount / 100));
    document.getElementById('productPrice').innerHTML = '<span style="text-decoration:line-through;color:#999;margin-right:8px;">&#8369;' + p.price + '</span><span style="color:#c0392b;font-size:1.3rem;">&#8369;' + salePrice + '</span> <span class="badge bg-danger">-' + p.discount + '%</span>';
  } else {
    document.getElementById('productPrice').innerHTML = '&#8369;' + p.price;
  }
  document.getElementById('productDesc').textContent = p.desc;
  document.title = p.name + ' - Uncle George';

  var specsHtml = '';
  for (var key in p.specs) {
    specsHtml += '<tr><td class="text-muted fw-bold" style="width:40%">' + key + '</td><td>' + p.specs[key] + '</td></tr>';
  }
  document.getElementById('specsTable').innerHTML = specsHtml;
  document.getElementById('descBody').innerHTML = '<p>' + p.desc.replace(/&/g, '&amp;') + '</p>';

  document.getElementById('addToCartBtn').onclick = function() {
    var finalPrice = p.discount ? Math.round(p.price * (1 - p.discount / 100)) : p.price;
    addToCart(p.name, finalPrice, p.img);
  };
}

function renderRelatedProducts(current) {
  var related = allProducts.filter(function(p) { return p.cat === current.cat && p.name !== current.name; });
  if (related.length === 0) return;
  for (var i = related.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var tmp = related[i]; related[i] = related[j]; related[j] = tmp; }
  related = related.slice(0, 3);
  var g = document.getElementById('relatedGrid');
  if (!g) return;
  g.innerHTML = related.map(function(p) {
    var cat = p.cat.replace(/&/g, '&amp;');
    return '<div class="col-lg-4 col-md-6"><div class="card product-card h-100"><a href="' + productLink(p.name) + '" class="text-decoration-none"><div class="overflow-hidden"><img src="' + p.img + '" class="card-img-top" alt="' + p.name + '" loading="lazy"></div></a><div class="card-body"><span class="badge bg-secondary-subtle text-secondary mb-1 small">' + cat + '</span><h6 class="card-title fw-bold mt-1">' + p.name + '</h6><p class="fw-bold text-danger mb-2">&#8369;' + p.price + '</p><button class="btn btn-sm btn-custom w-100 mt-auto add-to-cart-related" data-name="' + p.name.replace(/"/g, '&quot;') + '" data-price="' + p.price + '" data-img="' + p.img.replace(/"/g, '&quot;') + '"><i class="bi bi-cart-plus me-1"></i>Add to Cart</button></div></div></div>';
  }).join('');
}

/* ========================================
   CART PAGE
   ======================================== */
function initCart() {
  var cart = getCart();
  cart.forEach(function(item) {
    if (item.image && !item.img) { item.img = item.image; delete item.image; }
  });
  saveCart(cart);
  renderCart();
}

function renderCart() {
  var cart = getCart();
  var body = document.getElementById('cartBody');
  var table = document.getElementById('cartTable');
  var empty = document.getElementById('emptyCart');
  var actions = document.getElementById('cartActions');
  if (!body) return;
  if (cart.length === 0) {
    body.innerHTML = '';
    table.classList.add('d-none');
    empty.classList.remove('d-none');
    actions.classList.add('d-none');
    updateCartTotals();
    return;
  }
  table.classList.remove('d-none');
  empty.classList.add('d-none');
  actions.classList.remove('d-none');
  body.innerHTML = cart.map(function(item, i) {
    return '<tr><td><div class="d-flex align-items-center"><img src="' + item.img + '" class="cart-item-img me-3"><span>' + item.name + '</span></div></td>' +
    '<td>&#8369;' + item.price.toFixed(2) + '</td>' +
    '<td><div class="d-flex align-items-center"><button class="btn btn-sm btn-outline-secondary" onclick="changeQty(' + i + ',-1)">-</button>' +
    '<input type="number" class="form-control form-control-sm text-center mx-1" value="' + item.qty + '" readonly style="width:60px;">' +
    '<button class="btn btn-sm btn-outline-secondary" onclick="changeQty(' + i + ',1)">+</button></div></td>' +
    '<td class="fw-bold">&#8369;' + (item.price * item.qty).toFixed(2) + '</td>' +
    '<td><button class="btn btn-sm btn-outline-danger" onclick="removeItem(' + i + ')"><i class="bi bi-trash"></i></button></td></tr>';
  }).join('');
  updateCartTotals();
}

function updateCartTotals() {
  var cart = getCart();
  var sub = cart.reduce(function(s, i) { return s + i.price * i.qty; }, 0);
  var delivery = sub >= 200 ? 0 : 50;
  var tax = sub * 0.12;
  var total = sub + delivery + tax;
  document.getElementById('cartTotal').textContent = '₱' + sub.toFixed(2);
  var delEl = document.getElementById('deliveryFee');
  if (delivery === 0) { delEl.textContent = 'Free'; delEl.className = 'text-success'; }
  else { delEl.textContent = '₱' + delivery.toFixed(2); delEl.className = ''; }
  document.getElementById('taxAmount').textContent = '₱' + tax.toFixed(2);
  document.getElementById('grandTotal').textContent = '₱' + total.toFixed(2);
}

function changeQty(i, d) {
  var cart = getCart();
  cart[i].qty += d;
  if (cart[i].qty <= 0) cart.splice(i, 1);
  saveCart(cart);
  renderCart();
  updateNavBadge();
}

function removeItem(i) {
  var cart = getCart();
  cart.splice(i, 1);
  saveCart(cart);
  renderCart();
  updateNavBadge();
}

function clearCart() {
  saveCart([]);
  renderCart();
  updateNavBadge();
  showCartAlert('Cart cleared.');
}

function showCartAlert(msg) {
  var a = document.getElementById('cartAlert');
  if (a) {
    a.classList.remove('d-none');
    a.innerHTML = '<i class="bi bi-check-circle-fill me-2"></i>' + msg + '<button type="button" class="btn-close" data-bs-dismiss="alert"></button>';
    setTimeout(function() { a.classList.add('d-none'); }, 3000);
  }
}

function checkout() {
  var cart = getCart();
  if (cart.length === 0) { showCartAlert('Your cart is empty!'); return; }
  showCartAlert('Proceeding to checkout... (Demo)');
}

/* ========================================
   CONTACT PAGE
   ======================================== */
function initContact() {
  var form = document.getElementById('contactForm');
  if (form) {
    form.onsubmit = function(e) {
      e.preventDefault();
      var name = document.getElementById('fullName').value.trim();
      var email = document.getElementById('email').value.trim();
      var subject = document.getElementById('subject').value;
      var message = document.getElementById('message').value.trim();
      if (!name || !email || !subject || !message) { showToast('Please fill in all fields.', 'warning'); return; }
      showToast('Thank you! Your message has been sent.', 'success');
      form.reset();
    };
  }
}

/* ========================================
   PAGE DETECTION & INIT
   ======================================== */
document.addEventListener('DOMContentLoaded', function() {
  // Fix old data format
  var cart = getCart();
  cart.forEach(function(item) {
    if (item.image && !item.img) { item.img = item.image; delete item.image; }
  });
  saveCart(cart);
  updateNavBadge();

  // Delegated add-to-cart clicks
  document.addEventListener('click', function(e) {
    var btn = e.target.closest('.add-to-cart-btn');
    if (btn) {
      addToCart(btn.getAttribute('data-name'), Number(btn.getAttribute('data-price')), btn.getAttribute('data-img'));
      return;
    }
    var btn2 = e.target.closest('.add-to-cart-related');
    if (btn2) {
      addToCart(btn2.getAttribute('data-name'), Number(btn2.getAttribute('data-price')), btn2.getAttribute('data-img'));
    }
  });

  // Scroll-to-top button
  var scrollBtn = document.createElement('button');
  scrollBtn.className = 'scroll-top';
  scrollBtn.innerHTML = '<i class="bi bi-arrow-up"></i>';
  scrollBtn.onclick = function() { window.scrollTo({top: 0, behavior: 'smooth'}); };
  document.body.appendChild(scrollBtn);
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) scrollBtn.classList.add('show');
    else scrollBtn.classList.remove('show');
  });

  // Parallax hero background
  window.addEventListener('scroll', function() {
    var hero = document.querySelector('.hero-section');
    if (!hero) return;
    hero.style.backgroundPositionY = window.pageYOffset * 0.3 + 'px';
  });

  // Detect page and initialize
  if (document.getElementById('featuredGrid')) { initHome(); }
  else if (document.getElementById('productsGrid')) { initProducts(); }
  else if (document.getElementById('productCarouselInner')) { initProductDetails(); }
  else if (document.getElementById('cartBody')) { initCart(); }
  else if (document.getElementById('contactForm')) { initContact(); }
});

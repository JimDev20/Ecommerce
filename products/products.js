// Products page - product grid, pagination, add to cart
var products=[
  {name:"French Baguette",price:85,img:"../images/products/frenchBaguette.jpg",cat:"Loaf Breads",desc:"Classic French baguette. Crispy crust, soft inside. 500g."},
  {name:"White Bread",price:65,img:"../images/products/wwLoaf.jpg",cat:"Loaf Breads",desc:"Soft and fluffy white loaf. Perfect for sandwiches. 550g."},
  {name:"Whole Wheat Bread",price:75,img:"../images/products/wwMultigrain.jpg",cat:"Loaf Breads",desc:"Healthy whole wheat loaf. High fiber, great taste. 550g."},
  {name:"Butter Bread",price:85,img:"../images/products/cheeseLoafBread.jpg",cat:"Loaf Breads",desc:"Buttery and soft. Great for toast and breakfast. 550g."},
  {name:"Cheese Bread",price:95,img:"../images/products/cheeseLoafBread.jpg",cat:"Loaf Breads",desc:"Rich cheese-flavored loaf. A family favorite. 550g."},
  {name:"Butter Milk Bread",price:90,img:"../images/products/sourDoughFocacciaBread.jpg",cat:"Loaf Breads",desc:"Creamy milk-infused loaf. Extra soft texture. 550g."},
  {name:"Sourdough Focaccia",price:95,img:"../images/products/sourDoughFocacciaBread.jpg",cat:"Loaf Breads",desc:"Artisan sourdough focaccia. Crusty outside, soft inside."},
  {name:"Pinoy Pandesal",price:22,img:"../images/products/wwPandesal.jpg",cat:"Pastries",desc:"Classic Filipino pandesal. Soft, warm, and affordable. 250g."},
  {name:"Egg Pandesal",price:25,img:"../images/products/eggPandesal.jpg",cat:"Pastries",desc:"Classic pandesal with egg. Soft and warm."},
  {name:"Qeso Pandesal",price:28,img:"../images/products/qesoPandesal.jpg",cat:"Pastries",desc:"Cheese-flavored pandesal. Cheesy and soft."},
  {name:"Chicken Pastel",price:55,img:"../images/products/chickenPie.jpg",cat:"Pastries",desc:"Savory chicken-filled pastry. Flaky and delicious."},
  {name:"Chunky Chicken Pie",price:60,img:"../images/products/chunkyChickenPie.jpg",cat:"Pastries",desc:"Hearty chicken pie with chunky filling. Flaky crust."},
  {name:"Ensaymada",price:45,img:"../images/products/mamonRolls.jpg",cat:"Pastries",desc:"Soft brioche topped with butter, sugar, and cheese."},
  {name:"Spanish Bread",price:35,img:"../images/products/cinnamonRolls.jpg",cat:"Pastries",desc:"Sweet Filipino-style Spanish bread rolls. 180g pack."},
  {name:"Pan De Coco",price:40,img:"../images/products/mochiBread.jpg",cat:"Pastries",desc:"Sweet coconut-filled bread bun. Classic Filipino treat."},
  {name:"Banana Cake",price:55,img:"../images/products/bananCake.jpg",cat:"Pastries",desc:"Moist and fluffy banana cake. Made with real bananas."},
  {name:"Banana Carrot Cake",price:60,img:"../images/products/bananaCarrotCake.jpg",cat:"Pastries",desc:"Healthy banana carrot cake. Moist and flavorful."},
  {name:"Chocolate Cake",price:65,img:"../images/products/chocolateCake.jpg",cat:"Pastries",desc:"Rich chocolate cake. Decadent and moist."},
  {name:"Egg Pie",price:50,img:"../images/products/eggPie.jpg",cat:"Pastries",desc:"Classic Filipino egg pie. Creamy custard filling."},
  {name:"Cinnamon Rolls",price:40,img:"../images/products/cinnamonRolls.jpg",cat:"Pastries",desc:"Soft cinnamon rolls with sweet glaze. Warm and fresh."},
  {name:"Cranberry Walnut Bread",price:95,img:"../images/products/cranberryWalnutBread.jpg",cat:"Loaf Breads",desc:"Whole wheat bread with cranberries and walnuts. 500g."},
  {name:"Hamburger Buns",price:70,img:"../images/products/hamburgerBuns.jpg",cat:"Loaf Breads",desc:"Soft hamburger buns. Perfect for burgers and sandwiches."},
  {name:"Hopia Baboy",price:35,img:"../images/products/hopiaBaboy.jpg",cat:"Pastries",desc:"Flaky pastry with savory pork filling. Classic Filipino snack."},
  {name:"Mamon Rolls",price:30,img:"../images/products/mamonRolls.jpg",cat:"Pastries",desc:"Light and fluffy sponge cake rolls. Sweet and airy."},
  {name:"Mochi Bread",price:45,img:"../images/products/mochiBread.jpg",cat:"Pastries",desc:"Chewy mochi bread with a soft, sticky texture."},
  {name:"Raisin Bread",price:80,img:"../images/products/raisinBread.jpg",cat:"Loaf Breads",desc:"Sweet bread loaded with raisins. 500g."},
  {name:"Raisin Pan De Rosa",price:45,img:"../images/products/raisinPanDeRosa.jpg",cat:"Pastries",desc:"Rose-shaped bread with raisins. Soft and sweet."},
  {name:"Ube Pandan",price:50,img:"../images/products/ubePandan.jpg",cat:"Pastries",desc:"Purple yam and pandan flavored bread. Filipino classic."}
];

var currentPage=1;
var perPage=8;

function renderProducts(){
  var g=document.getElementById('productsGrid');
  var start=(currentPage-1)*perPage;
  var page=products.slice(start,start+perPage);
  g.innerHTML=page.map(function(p){
    return '<div class="col-lg-3 col-md-4 col-6 mb-4"><div class="card product-card h-100"><a href="../product-details/index.html?product='+encodeURIComponent(p.name)+'" class="text-decoration-none"><div class="overflow-hidden">'+
      '<img src="'+p.img+'" class="card-img-top" alt="'+p.name+'"></div></a><div class="card-body">'+
      '<span class="badge bg-secondary-subtle text-secondary mb-1 small">'+p.cat+'</span>'+
      '<h6 class="card-title fw-bold mt-1">'+p.name+'</h6>'+
      '<p class="text-muted small mb-1" style="font-size:.8rem;">'+p.desc+'</p>'+
      '<p class="fw-bold text-danger mb-2">&#8369;'+p.price+'</p>'+
      '<div class="d-flex gap-2">'+
      '<a href="../product-details/index.html?product='+encodeURIComponent(p.name)+'" class="btn btn-sm btn-outline-secondary flex-grow-1"><i class="bi bi-eye me-1"></i>View Details</a>'+
      '<button class="btn btn-sm btn-custom" onclick="addToCart(\''+p.name+'\','+p.price+',\''+p.img+'\')"><i class="bi bi-cart-plus"></i></button>'+
      '</div></div></div></div>';
  }).join('');
}

function renderPagination(){
  var pages=Math.ceil(products.length/perPage);
  var pag=document.getElementById('pagination');
  if(!pag)return;
  var html='<li class="page-item '+(currentPage===1?'disabled':'')+'"><a class="page-link" href="#" onclick="goPage('+(currentPage-1)+');return false;"><i class="bi bi-chevron-left"></i></a></li>';
  for(var i=1;i<=pages;i++){
    html+='<li class="page-item '+(currentPage===i?'active':'')+'"><a class="page-link" href="#" onclick="goPage('+i+');return false;">'+i+'</a></li>';
  }
  html+='<li class="page-item '+(currentPage===pages?'disabled':'')+'"><a class="page-link" href="#" onclick="goPage('+(currentPage+1)+');return false;"><i class="bi bi-chevron-right"></i></a></li>';
  pag.innerHTML=html;
}

function goPage(p){
  var maxPage=Math.ceil(products.length/perPage);
  if(p<1||p>maxPage)return;
  currentPage=p;
  renderProducts();
  renderPagination();
  window.scrollTo({top:200,behavior:'smooth'});
}

document.addEventListener('DOMContentLoaded',function(){
  renderProducts();
  renderPagination();

  var c=JSON.parse(localStorage.getItem('unclegorg_cart')||'[]');
  var n=c.reduce(function(s,i){return s+i.qty},0);
  var el=document.getElementById('navCartCount');
  if(el&&n>0){el.textContent=n;el.classList.add('badge','bg-danger');}
});

function addToCart(name,price,image){
  var cart=JSON.parse(localStorage.getItem('unclegorg_cart')||'[]');
  var found=false;
  for(var i=0;i<cart.length;i++){if(cart[i].name===name){cart[i].qty++;found=true;break;}}
  if(!found)cart.push({name:name,price:price,img:image,qty:1});
  localStorage.setItem('unclegorg_cart',JSON.stringify(cart));
  alert('Added to cart: '+name);
}

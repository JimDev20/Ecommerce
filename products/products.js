// Products page - product grid, pagination, add to cart
var products=[
  {name:"French Baguette",price:45,img:"../images/products/frenchBaguette.jpg",cat:"Loaf Breads",desc:"Classic French baguette. Crispy crust, soft inside. 500g."},
  {name:"Whole Wheat Loaf",price:110,img:"../images/products/wholeWheatLoaf.jpg",cat:"Loaf Breads",desc:"Soft and fluffy white loaf. Perfect for sandwiches. 420g."},
  {name:"Whole Wheat Multigrain",price:110,img:"../images/products/wholeWheatMultigrain.jpg",cat:"Loaf Breads",desc:"Healthy whole wheat loaf. High fiber, great taste. 550g."},
  {name:"Butter Bread",price:130,img:"../images/products/ciabattaBread.jpg",cat:"Loaf Breads",desc:"Artisan ciabatta bread with a crispy crust and airy, buttery interior. Perfect for toast and breakfast. 550g."},
  {name:"Cheese Bread",price:145,img:"../images/products/cheeseLoafBread.jpg",cat:"Loaf Breads",desc:"Rich cheese-flavored loaf. A family favorite. 600g."},
  {name:"Sandwich Pullman Loaf",price:110,img:"../images/products/sandwichPullmanLoaf.jpg",cat:"Loaf Breads",desc:"Classic pullman loaf. Square-shaped, soft, and perfect for sandwiches. 550g."},
  {name:"Sourdough Focaccia",price:180,img:"../images/products/sourDoughFocacciaBread.jpg",cat:"Loaf Breads",desc:"Artisan sourdough focaccia. Crusty outside, soft inside."},
  {name:"Cranberry Walnut Bread",price:155,img:"../images/products/cranberryWalnutBread.jpg",cat:"Loaf Breads",desc:"Whole wheat bread with cranberries and walnuts. 450g."},
  {name:"Hamburger Buns",price:150,img:"../images/products/hamburgerBuns.jpg",cat:"Loaf Breads",desc:"Soft hamburger buns. Perfect for burgers and sandwiches."},
  {name:"Raisin Bread",price:135,img:"../images/products/raisinBread.jpg",cat:"Loaf Breads",desc:"Sweet bread loaded with raisins. 500g."},
  {name:"Sourdough Artisan Bread",price:120,img:"../images/products/sourdoughArtisanBread.jpg",cat:"Loaf Breads",desc:"Artisan sourdough bread with a crispy crust and soft, tangy interior. Handcrafted daily. 450g."},
  {name:"Whole Wheat Pandesal",price:102,img:"../images/products/wholeWheatPandesal.jpg",cat:"Bread Rolls",desc:"Classic Filipino pandesal. Soft, warm, and affordable. 250g."},
  {name:"Egg Pandesal",price:125,img:"../images/products/eggPandesal.jpg",cat:"Bread Rolls",desc:"Classic pandesal with egg. Soft and warm."},
  {name:"Qeso Pandesal",price:110,img:"../images/products/qesoPandesal.jpg",cat:"Bread Rolls",desc:"Cheese-flavored pandesal. Cheesy and soft."},
  {name:"Walnut Cinnamon Ring",price:155,img:"../images/products/cinnamonRolls.jpg",cat:"Bread Rolls",desc:"Sweet Filipino-style Spanish bread rolls. 520g."},
  {name:"Mochi Bread",price:150,img:"../images/products/mochiBread.jpg",cat:"Bread Rolls",desc:"Chewy bread with a soft, sticky texture. Classic Filipino treat."},
  {name:"Mamon Rolls",price:30,img:"../images/products/mamonRolls.jpg",cat:"Bread Rolls",desc:"Light and fluffy sponge cake rolls. Sweet and airy."},
  {name:"Ciabatta Cheese",price:95,img:"../images/products/ciabattaCheese.jpg",cat:"Bread Rolls",desc:"Chewy ciabatta bread with real melted cheese baked into every bite. Crispy crust, soft interior."},
  {name:"Raisin Pan De Rosa",price:135,img:"../images/products/raisinPanDeRosa.jpg",cat:"Bread Rolls",desc:"Rose-shaped bread with raisins. Soft and sweet."},
  {name:"Ube Pandan",price:130,img:"../images/products/cheesyubepandandelight.jpg",cat:"Bread Rolls",desc:"Purple yam and pandan flavored bread. Filipino classic."},
  {name:"Mini Monay",price:38,img:"../images/products/miniMonay.jpg",cat:"Bread Rolls",desc:"Soft and dense Filipino bread roll. Great with coffee or soup."},
  {name:"Chicken Pie",price:60,img:"../images/products/chickenPie.jpg",cat:"Pies & Pastries",desc:"Savory chicken-filled pastry. Flaky and delicious."},
  {name:"Chunky Chicken Pie",price:580,img:"../images/products/chunkyChickenPie.jpg",cat:"Pies & Pastries",desc:"Hearty chicken pie with chunky filling. Flaky crust. 9 inch pan."},
  {name:"Egg Pie",price:240,img:"../images/products/eggPie.jpg",cat:"Pies & Pastries",desc:"Classic Filipino egg pie. Creamy custard filling."},
  {name:"Hopia Baboy",price:220,img:"../images/products/hopiaBaboy.jpg",cat:"Pies & Pastries",desc:"Flaky pastry with savory pork filling. Classic Filipino snack."},
  {name:"Hotdog Rolls",price:80,img:"../images/products/hotdogRolls.jpg",cat:"Bread Rolls",desc:"Soft bread rolls perfect for hotdogs. Fluffy and lightly toasted."},
  {name:"Banana Cake",price:180,img:"../images/products/bananCake.jpg",cat:"Cakes",desc:"Moist and fluffy banana cake. Made with real bananas."},
  {name:"Banana Carrot Cake",price:260,img:"../images/products/bananaCarrotCake.jpg",cat:"Cakes",desc:"Healthy banana carrot cake. Moist and flavorful."},
  {name:"Chocolate Cake",price:280,img:"../images/products/chocolateCake.jpg",cat:"Cakes",desc:"Rich chocolate cake. Decadent and moist."},
  {name:"Caramel Cake",price:290,img:"../images/products/caramelCake.jpg",cat:"Cakes",desc:"Moist cake topped with rich, buttery caramel glaze. Sweet and indulgent."},
  {name:"Mango Cake",price:275,img:"../images/products/mangoCake.jpg",cat:"Cakes",desc:"Light and fluffy cake made with fresh mango. Tropical and refreshing."},
  {name:"Red Velvet Chocolate Cake",price:300,img:"../images/products/redVelvetChocolateCake.jpg",cat:"Cakes",desc:"Classic red velvet cake with chocolate and cream cheese frosting. Decadent."},
];

var currentPage=1;
var perPage=8;
var currentCategory='all';

function filterCategory(cat){
  currentCategory=cat;
  currentPage=1;
  var btns=document.querySelectorAll('#categoryFilter .btn');
  btns.forEach(function(b){
    b.className='btn btn-sm btn-outline-secondary';
  });
  var idx={'all':0,'Loaf Breads':1,'Bread Rolls':2,'Pies & Pastries':3,'Cakes':4};
  if(idx[cat]!==undefined){btns[idx[cat]].className='btn btn-sm btn-custom';}
  renderProducts();
  renderPagination();
  observeAnimations();
}

function getFilteredProducts(){
  if(currentCategory==='all')return products;
  return products.filter(function(p){return p.cat===currentCategory;});
}

function renderProducts(){
  var g=document.getElementById('productsGrid');
  var filtered=getFilteredProducts();
  var start=(currentPage-1)*perPage;
  var page=filtered.slice(start,start+perPage);
  g.innerHTML=page.map(function(p,i){
    return '<div class="col-lg-3 col-md-4 col-6 mb-4 scroll-animate stagger-'+((i%8)+1)+'"><div class="card product-card h-100"><a href="../product-details/index.html?product='+encodeURIComponent(p.name)+'" class="text-decoration-none"><div class="overflow-hidden">'+
      '<img src="'+p.img+'" class="card-img-top" alt="'+p.name+'"></div></a><div class="card-body">'+
      '<span class="badge bg-secondary-subtle text-secondary mb-1 small">'+p.cat+'</span>'+
      '<h6 class="card-title fw-bold mt-1">'+p.name+'</h6>'+
      '<p class="text-muted small mb-1" style="font-size:.8rem;">'+p.desc+'</p>'+
      '<p class="fw-bold text-danger mb-2">&#8369;'+p.price+'</p>'+
      '<div class="d-flex gap-2 mt-auto">'+
      '<a href="../product-details/index.html?product='+encodeURIComponent(p.name)+'" class="btn btn-sm btn-outline-secondary flex-grow-1"><i class="bi bi-eye me-1"></i>View Details</a>'+
      '<button class="btn btn-sm btn-custom" onclick="addToCart(\''+p.name+'\','+p.price+',\''+p.img+'\')"><i class="bi bi-cart-plus"></i></button>'+
      '</div></div></div></div>';
  }).join('');
}

function renderPagination(){
  var filtered=getFilteredProducts();
  var pages=Math.ceil(filtered.length/perPage);
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
  var filtered=getFilteredProducts();
  var maxPage=Math.ceil(filtered.length/perPage);
  if(p<1||p>maxPage)return;
  currentPage=p;
  renderProducts();
  renderPagination();
  observeAnimations();
  window.scrollTo({top:200,behavior:'smooth'});
}

var animObserver;
function observeAnimations(){
  if(!animObserver){
    animObserver=new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){entry.target.classList.add('visible');}
      });
    },{threshold:0.1,rootMargin:'0px 0px -20px 0px'});
  }
  document.querySelectorAll('.scroll-animate').forEach(function(el){animObserver.observe(el);});
}

document.addEventListener('DOMContentLoaded',function(){
  var params=new URLSearchParams(window.location.search);
  var cat=params.get('cat');
  if(cat){
    filterCategory(cat);
  } else {
    renderProducts();
    renderPagination();
  }
  observeAnimations();

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
  var n=cart.reduce(function(s,i){return s+i.qty},0);
  var el=document.getElementById('navCartCount');
  if(el){el.textContent=n;el.classList.add('badge','bg-danger');}
}

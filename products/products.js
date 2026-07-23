/* PRODUCTS - products.js
   20 bread products with client-side pagination.
   ERROR: If products don't show or filters broken -> check here */
var products=[
  {name:"French Baguette",price:85,old:120,img:"../images/products/product1.jpg",cat:"Loaf Breads",badge:"Sale",badgeCls:"bg-danger",desc:"Classic French baguette, crispy outside, soft inside. 500g."},
  {name:"White Loaf Bread",price:65,img:"../images/products/product2.jpg",cat:"Loaf Breads",badge:"New",badgeCls:"bg-success",desc:"Soft and fluffy white loaf. Perfect for sandwiches. 550g."},
  {name:"Wheat Loaf Bread",price:75,old:110,img:"../images/products/product3.jpg",cat:"Loaf Breads",badge:"Sale",badgeCls:"bg-danger",desc:"Healthy whole wheat loaf. High fiber, great taste. 550g."},
  {name:"Cheese Loaf Bread",price:95,img:"../images/products/product4.jpg",cat:"Loaf Breads",badge:"Popular",badgeCls:"bg-info",desc:"Rich cheese-flavored loaf. A family favorite. 550g."},
  {name:"Butter Loaf Bread",price:85,img:"../images/products/product5.jpg",cat:"Loaf Breads",desc:"Buttery and soft. Great for toast and breakfast. 550g."},
  {name:"Butter Milk Loaf",price:90,img:"../images/products/product6.jpg",cat:"Loaf Breads",badge:"New",badgeCls:"bg-success",desc:"Creamy milk-infused loaf. Extra soft texture. 550g."},
  {name:"Monroe Bread",price:55,img:"../images/products/product7.jpg",cat:"Loaf Breads",desc:"Budget-friendly classic bread. Everyday essential. 500g."},
  {name:"Super Budget Loaf",price:45,old:65,img:"../images/products/product8.jpg",cat:"Loaf Breads",badge:"Sale",badgeCls:"bg-danger",desc:"Affordable quality loaf for the whole family. 450g."},
  {name:"Pinoy Tasty",price:35,img:"../images/products/product9.jpg",cat:"Loaf Breads",desc:"Government-standard affordable white bread. 450g."},
  {name:"Egg Pandesal",price:60,img:"../images/products/product10.jpg",cat:"Pandesal & Rolls",badge:"Popular",badgeCls:"bg-info",desc:"Soft Filipino egg pandesal rolls. Freshly baked daily."},
  {name:"Ube Qeso Pandesal",price:75,img:"../images/products/product11.jpg",cat:"Pandesal & Rolls",badge:"New",badgeCls:"bg-success",desc:"Purple yam and cheese pandesal. Sweet and savory."},
  {name:"Pinoy Pandesal",price:22,img:"../images/products/product12.jpg",cat:"Pandesal & Rolls",desc:"Classic Filipino pandesal. Soft, warm, and affordable."},
  {name:"Whole Wheat Multi-Grain",price:85,img:"../images/products/product13.jpg",cat:"Specialty Breads",desc:"All-natural multi-grain blend. Nutritious and filling. 550g."},
  {name:"Cranberry Walnut Bread",price:95,img:"../images/products/product17.jpg",cat:"Specialty Breads",badge:"Popular",badgeCls:"bg-info",desc:"Breakfast bread with cranberries and walnuts. 500g."},
  {name:"Spanish Bread",price:70,img:"../images/products/product15.jpg",cat:"Pastries",desc:"Sweet Filipino-style Spanish bread rolls. 180g pack."},
  {name:"Ensaymada",price:45,img:"../images/products/product16.jpg",cat:"Pastries",badge:"New",badgeCls:"bg-success",desc:"Soft brioche topped with butter, sugar, and cheese."},
  {name:"Cheese Cupcake",price:35,img:"../images/products/product19.jpg",cat:"Pastries",desc:"Sweet and salty Filipino cheese cupcakes. 6-pack."},
  {name:"Mamon",price:40,img:"../images/products/product20.jpg",cat:"Pastries",desc:"Fluffy Filipino sponge cakes. Light and airy."},
  {name:"Choco Danish Roll",price:55,img:"../images/products/product14.jpg",cat:"Pastries",desc:"Soft bread roll filled with chocolate. 350g."},
  {name:"Cream Bread",price:50,img:"../images/products/product18.jpg",cat:"Loaf Breads",desc:"Soft cream-filled bread. Mild and sweet. 400g."}
];

var currentPage=1;
var perPage=8;

function getFiltered(){
  var active=document.querySelector('#filters button.active');
  var cat=active?active.dataset.cat:'all';
  if(cat==='all') return products;
  return products.filter(function(p){return p.cat===cat});
}

function renderProducts(list){
  var g=document.getElementById('productsGrid');
  var start=(currentPage-1)*perPage;
  var page=list.slice(start,start+perPage);
  g.innerHTML=page.map(function(p){
    return '<div class="col-lg-3 col-md-4 col-6 mb-4"><div class="card product-card h-100"><div class="overflow-hidden position-relative">'+
      (p.badge?'<span class="badge '+p.badgeCls+' position-absolute top-0 start-0 m-2">'+p.badge+'</span>':'')+
      '<img src="'+p.img+'" class="card-img-top" alt="'+p.name+'"></div><div class="card-body">'+
      '<span class="badge bg-secondary-subtle text-secondary mb-1 small">'+p.cat+'</span><h6 class="card-title fw-bold mt-1">'+p.name+'</h6>'+
      '<div class="mb-1"><i class="bi bi-star-fill text-warning" style="font-size:.7rem;"></i><i class="bi bi-star-fill text-warning" style="font-size:.7rem;"></i><i class="bi bi-star-fill text-warning" style="font-size:.7rem;"></i><i class="bi bi-star-fill text-warning" style="font-size:.7rem;"></i><i class="bi bi-star text-warning" style="font-size:.7rem;"></i></div>'+
      '<p class="text-muted small mb-1" style="font-size:.8rem;">'+p.desc+'</p>'+
      '<p class="fw-bold text-danger mb-2">&#8369;'+p.price.toLocaleString()+(p.old?' <small class="text-decoration-line-through text-muted">&#8369;'+p.old.toLocaleString()+'</small>':'')+'</p>'+
      '<button class="btn btn-sm btn-custom w-100" onclick="addToCart(\''+p.name+'\','+p.price+',\''+p.img+'\')"><i class="bi bi-cart-plus me-1"></i>Add to Cart</button>'+
      '</div></div></div>';
  }).join('');
}

function renderPagination(total){
  var pages=Math.ceil(total/perPage);
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
  var filtered=getFiltered();
  var maxPage=Math.ceil(filtered.length/perPage);
  if(p<1||p>maxPage)return;
  currentPage=p;
  renderProducts(filtered);
  renderPagination(filtered.length);
  window.scrollTo({top:200,behavior:'smooth'});
}

document.addEventListener('DOMContentLoaded',function(){
  var filtered=getFiltered();
  renderProducts(filtered);
  renderPagination(filtered.length);

  var c=JSON.parse(localStorage.getItem('unclegorg_cart')||'[]');
  var n=c.reduce(function(s,i){return s+i.quantity},0);
  var el=document.getElementById('navCartCount');
  if(el&&n>0){el.textContent=n;el.classList.add('badge','bg-danger');}

  document.querySelectorAll('#filters button').forEach(function(btn){
    btn.addEventListener('click',function(){
      document.querySelectorAll('#filters button').forEach(function(b){b.classList.remove('active')});
      this.classList.add('active');
      currentPage=1;
      var f=getFiltered();
      renderProducts(f);
      renderPagination(f.length);
    });
  });

  var sb=document.getElementById('scrollTopBtn');
  if(sb){window.addEventListener('scroll',function(){sb.classList.toggle('show',window.scrollY>300)});sb.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'})});}
});

function addToCart(name,price,image){
  var cart=JSON.parse(localStorage.getItem('unclegorg_cart')||'[]');
  var found=false;
  for(var i=0;i<cart.length;i++){if(cart[i].name===name){cart[i].quantity++;found=true;break;}}
  if(!found)cart.push({name:name,price:price,image:image,quantity:1});
  localStorage.setItem('unclegorg_cart',JSON.stringify(cart));
  alert('Added to cart: '+name);
}
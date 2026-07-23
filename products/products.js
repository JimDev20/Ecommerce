/* PRODUCTS - products.js
   Renders product grid, handles filters.
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
  {name:"Egg Pandesal",price:60,img:"../images/products/product9.jpg",cat:"Pandesal & Rolls",badge:"Popular",badgeCls:"bg-info",desc:"Soft Filipino egg pandesal rolls. Freshly baked daily."},
  {name:"Ube Qeso Pandesal",price:75,img:"../images/products/product10.jpg",cat:"Pandesal & Rolls",badge:"New",badgeCls:"bg-success",desc:"Purple yam and cheese pandesal. Sweet and savory."},
  {name:"Whole Wheat Multi-Grain",price:85,img:"../images/products/product11.jpg",cat:"Specialty Breads",desc:"All-natural multi-grain blend. Nutritious and filling. 550g."},
  {name:"Cranberry Walnut Bread",price:95,img:"../images/products/product12.jpg",cat:"Specialty Breads",badge:"Popular",badgeCls:"bg-info",desc:"Breakfast bread with cranberries and walnuts. 500g."}
];

function renderProducts(list){
  var g=document.getElementById('productsGrid');
  g.innerHTML=list.map(function(p){
    return '<div class="col-lg-3 col-md-6"><div class="card product-card h-100"><div class="overflow-hidden position-relative">'+
      (p.badge?'<span class="badge '+p.badgeCls+' position-absolute top-0 start-0 m-2">'+p.badge+'</span>':'')+
      '<img src="'+p.img+'" class="card-img-top" alt="'+p.name+'"></div><div class="card-body">'+
      '<span class="badge bg-secondary mb-1">'+p.cat+'</span><h5 class="card-title">'+p.name+'</h5>'+
      '<div class="mb-2"><i class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i><i class="bi bi-star text-warning"></i></div>'+
      '<p class="text-muted small">'+p.desc+'</p>'+
      '<p class="fw-bold text-danger">₱'+p.price.toLocaleString()+(p.old?' <small class="text-decoration-line-through text-muted">₱'+p.old.toLocaleString()+'</small>':'')+'</p>'+
      '<a href="../product-details/index.html" class="btn btn-sm btn-outline-secondary me-1">View Details</a>'+
      '<button class="btn btn-sm btn-custom" onclick="addToCart(\''+p.name+'\','+p.price+',\''+p.img+'\')"><i class="bi bi-cart-plus"></i></button>'+
      '</div></div></div>';
  }).join('');
}

document.addEventListener('DOMContentLoaded',function(){
  renderProducts(products);

  // Cart count
  var c=JSON.parse(localStorage.getItem('unclegorg_cart')||'[]');
  var n=c.reduce(function(s,i){return s+i.quantity},0);
  var el=document.getElementById('navCartCount');
  if(el&&n>0){el.textContent=n;el.classList.add('badge','bg-danger');}

  // Filters
  document.querySelectorAll('#filters button').forEach(function(btn){
    btn.addEventListener('click',function(){
      document.querySelectorAll('#filters button').forEach(function(b){b.classList.remove('active')});
      this.classList.add('active');
      var cat=this.dataset.cat;
      if(cat==='all') renderProducts(products);
      else renderProducts(products.filter(function(p){return p.cat===cat}));
    });
  });

  // Scroll top
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
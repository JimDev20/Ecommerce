/* PRODUCTS - products.js
   Renders product grid, handles filters.
   ERROR: If products don't show or filters broken -> check here */
var products=[
  {name:"Wireless Headphones",price:1299,img:"../images/products/product1.jpg",cat:"Electronics",badge:"Sale",badgeCls:"bg-danger",desc:"Premium noise-cancelling headphones."},
  {name:"Smart Watch Pro",price:2499,img:"../images/products/product2.jpg",cat:"Electronics",badge:"New",badgeCls:"bg-success",desc:"Health tracking and GPS."},
  {name:"Running Shoes",price:2199,old:3499,img:"../images/products/product3.jpg",cat:"Sports",badge:"Sale",badgeCls:"bg-danger",desc:"Lightweight daily trainers."},
  {name:"Travel Backpack",price:1599,img:"../images/products/product4.jpg",cat:"Accessories",badge:"Popular",badgeCls:"bg-info",desc:"Water-resistant with laptop slot."},
  {name:"Bluetooth Speaker",price:899,img:"../images/products/product5.jpg",cat:"Electronics",desc:"360-degree surround sound."},
  {name:"Denim Jacket",price:1899,old:2599,img:"../images/products/product6.jpg",cat:"Fashion",badge:"Sale",badgeCls:"bg-danger",desc:"Classic modern fit."},
  {name:"Polarized Sunglasses",price:799,img:"../images/products/product7.jpg",cat:"Accessories",desc:"UV400 protection."},
  {name:"Wireless Mouse",price:599,img:"../images/products/product8.jpg",cat:"Electronics",badge:"New",badgeCls:"bg-success",desc:"Ergonomic adjustable DPI."},
  {name:"Canvas Sneakers",price:1199,img:"../images/products/product9.jpg",cat:"Fashion",desc:"Multiple colors available."},
  {name:"Mechanical Keyboard",price:1799,old:2299,img:"../images/products/product10.jpg",cat:"Electronics",badge:"Sale",badgeCls:"bg-danger",desc:"RGB blue switches."},
  {name:"Sports Water Bottle",price:449,img:"../images/products/product11.jpg",cat:"Sports",desc:"24hr cold insulation."},
  {name:"Leather Wallet",price:699,img:"../images/products/product12.jpg",cat:"Accessories",badge:"Popular",badgeCls:"bg-info",desc:"RFID blocking bifold."}
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
  var c=JSON.parse(localStorage.getItem('jimshop_cart')||'[]');
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

// addToCart from localStorage cart system
function addToCart(name,price,image){
  var cart=JSON.parse(localStorage.getItem('jimshop_cart')||'[]');
  var found=false;
  for(var i=0;i<cart.length;i++){if(cart[i].name===name){cart[i].quantity++;found=true;break;}}
  if(!found)cart.push({name:name,price:price,image:image,quantity:1});
  localStorage.setItem('jimshop_cart',JSON.stringify(cart));
  alert('Added to cart: '+name);
}

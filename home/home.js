/* HOME - home.js
   Featured products + cart count + scroll top */
var featuredProducts = [
  {name:"French Baguette",price:85,old:120,img:"../images/products/product1.jpg",cat:"Loaf Breads",badge:"Sale",badgeCls:"bg-danger",desc:"Classic French baguette, crispy outside, soft inside."},
  {name:"White Loaf Bread",price:65,img:"../images/products/product2.jpg",cat:"Loaf Breads",badge:"New",badgeCls:"bg-success",desc:"Soft and fluffy white loaf for sandwiches."},
  {name:"Wheat Loaf Bread",price:75,old:110,img:"../images/products/product3.jpg",cat:"Loaf Breads",badge:"Sale",badgeCls:"bg-danger",desc:"Healthy whole wheat loaf, high fiber."},
  {name:"Cheese Loaf Bread",price:95,img:"../images/products/product4.jpg",cat:"Loaf Breads",badge:"Popular",badgeCls:"bg-info",desc:"Rich cheese-flavored loaf, a family favorite."},
  {name:"Butter Loaf Bread",price:85,img:"../images/products/product5.jpg",cat:"Loaf Breads",desc:"Buttery and soft, great for breakfast."},
  {name:"Ube Qeso Pandesal",price:75,img:"../images/products/product10.jpg",cat:"Pandesal & Rolls",badge:"New",badgeCls:"bg-success",desc:"Purple yam and cheese pandesal, sweet & savory."}
];

function renderFeatured(list){
  var g=document.getElementById('featuredGrid');
  if(!g)return;
  g.innerHTML=list.map(function(p){
    return '<div class="col-lg-2 col-md-4 col-6"><div class="card product-card h-100"><div class="overflow-hidden position-relative">'+
      (p.badge?'<span class="badge '+p.badgeCls+' position-absolute top-0 start-0 m-2">'+p.badge+'</span>':'')+
      '<img src="'+p.img+'" class="card-img-top" alt="'+p.name+'"></div><div class="card-body pb-3">'+
      '<span class="badge bg-secondary-subtle text-secondary mb-1 small">'+p.cat+'</span>'+
      '<h6 class="card-title fw-bold mt-1 mb-1" style="font-size:.9rem;">'+p.name+'</h6>'+
      '<div class="mb-1"><i class="bi bi-star-fill text-warning" style="font-size:.7rem;"></i><i class="bi bi-star-fill text-warning" style="font-size:.7rem;"></i><i class="bi bi-star-fill text-warning" style="font-size:.7rem;"></i><i class="bi bi-star-fill text-warning" style="font-size:.7rem;"></i><i class="bi bi-star text-warning" style="font-size:.7rem;"></i></div>'+
      '<p class="fw-bold text-danger mb-1" style="font-size:.95rem;">&#8369;'+p.price+(p.old?' <small class="text-decoration-line-through text-muted" style="font-size:.75rem;">&#8369;'+p.old+'</small>':'')+'</p>'+
      '<button class="btn btn-sm btn-custom w-100 mt-1" onclick="addToCart(\''+p.name+'\','+p.price+',\''+p.img+'\')"><i class="bi bi-cart-plus me-1"></i>Add</button>'+
      '</div></div></div>';
  }).join('');
}

document.addEventListener('DOMContentLoaded',function(){
  renderFeatured(featuredProducts);
  var c=JSON.parse(localStorage.getItem('unclegorg_cart')||'[]');
  var n=c.reduce(function(s,i){return s+i.quantity},0);
  var el=document.getElementById('navCartCount');
  if(el&&n>0){el.textContent=n;el.classList.add('badge','bg-danger','position-absolute','top-0','start-100','translate-middle');}
  var b=document.getElementById('scrollTopBtn');
  if(b){window.addEventListener('scroll',function(){b.classList.toggle('show',window.scrollY>300)});b.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'})});}
});

function addToCart(name,price,image){
  var cart=JSON.parse(localStorage.getItem('unclegorg_cart')||'[]');
  var found=false;
  for(var i=0;i<cart.length;i++){if(cart[i].name===name){cart[i].quantity++;found=true;break;}}
  if(!found)cart.push({name:name,price:price,image:image,quantity:1});
  localStorage.setItem('unclegorg_cart',JSON.stringify(cart));
  alert('Added to cart: '+name);
}
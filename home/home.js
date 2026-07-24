// Home page - featured products + nav cart count
var featuredProducts = [
  {name:"French Baguette",price:85,img:"../images/products/frenchBaguette.jpg",cat:"Loaf Breads"},
  {name:"Cheese Bread",price:95,img:"../images/products/cheeseLoafBread.jpg",cat:"Loaf Breads"},
  {name:"Pinoy Pandesal",price:22,img:"../images/products/wholeWheatPandesal.jpg",cat:"Pastries"},
  {name:"Ensaymada",price:45,img:"../images/products/mamonRolls.jpg",cat:"Pastries"},
  {name:"Chocolate Cake",price:65,img:"../images/products/chocolateCake.jpg",cat:"Pastries"},
  {name:"Ube Pandan",price:50,img:"../images/products/ubePandan.jpg",cat:"Pastries"}
];

function renderFeatured(list){
  var g=document.getElementById('featuredGrid');
  if(!g)return;
  g.innerHTML=list.map(function(p){
    return '<div class="col-lg-2 col-md-4 col-6"><div class="card product-card h-100"><a href="../product-details/index.html?product='+encodeURIComponent(p.name)+'" class="text-decoration-none"><div class="overflow-hidden">'+
      '<img src="'+p.img+'" class="card-img-top" alt="'+p.name+'"></div></a><div class="card-body pb-3">'+
      '<span class="badge bg-secondary-subtle text-secondary mb-1 small">'+p.cat+'</span>'+
      '<h6 class="card-title fw-bold mt-1 mb-1" style="font-size:.9rem;">'+p.name+'</h6>'+
      '<p class="fw-bold text-danger mb-1" style="font-size:.95rem;">&#8369;'+p.price+'</p>'+
      '<button class="btn btn-sm btn-custom w-100 mt-1" onclick="addToCart(\''+p.name+'\','+p.price+',\''+p.img+'\')"><i class="bi bi-cart-plus me-1"></i>Add</button>'+
      '</div></div></div>';
  }).join('');
}

document.addEventListener('DOMContentLoaded',function(){
  renderFeatured(featuredProducts);
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
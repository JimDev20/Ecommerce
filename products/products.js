// Products page - product grid, pagination, filters, add to cart
var products=[
  {name:"French Baguette",price:85,img:"../images/products/p1-baguette.jpg",cat:"Loaf Breads",desc:"Classic French baguette. Crispy crust, soft inside. 500g."},
  {name:"White Bread",price:65,img:"../images/products/p2-white-bread.jpg",cat:"Loaf Breads",desc:"Soft and fluffy white loaf. Perfect for sandwiches. 550g."},
  {name:"Whole Wheat Bread",price:75,img:"../images/products/p3-wheat-bread.jpg",cat:"Loaf Breads",desc:"Healthy whole wheat loaf. High fiber, great taste. 550g."},
  {name:"Butter Bread",price:85,img:"../images/products/p4-butter-bread.jpg",cat:"Loaf Breads",desc:"Buttery and soft. Great for toast and breakfast. 550g."},
  {name:"Cheese Bread",price:95,img:"../images/products/p5-cheese-bread.jpg",cat:"Loaf Breads",desc:"Rich cheese-flavored loaf. A family favorite. 550g."},
  {name:"Butter Milk Bread",price:90,img:"../images/products/p12-butter-milk.jpg",cat:"Loaf Breads",desc:"Creamy milk-infused loaf. Extra soft texture. 550g."},
  {name:"Pinoy Pandesal",price:22,img:"../images/products/p6-pandesal.jpg",cat:"Pastries",desc:"Classic Filipino pandesal. Soft, warm, and affordable. 250g."},
  {name:"Chicken Pastel",price:55,img:"../images/products/p7-chicken-pastel.jpg",cat:"Pastries",desc:"Savory chicken-filled pastry. Flaky and delicious."},
  {name:"Chocolate Pandesal",price:35,img:"../images/products/p8-chocolate-pandesal.jpg",cat:"Pastries",desc:"Sweet chocolate pandesal. A twist on the classic."},
  {name:"Ensaymada",price:45,img:"../images/products/p9-ensaymada.jpg",cat:"Pastries",desc:"Soft brioche topped with butter, sugar, and cheese."},
  {name:"Spanish Bread",price:35,img:"../images/products/p10-spanish-bread.jpg",cat:"Pastries",desc:"Sweet Filipino-style Spanish bread rolls. 180g pack."},
  {name:"Pan De Coco",price:40,img:"../images/products/p11-pan-de-coco.jpg",cat:"Pastries",desc:"Sweet coconut-filled bread bun. Classic Filipino treat."}
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
    return '<div class="col-lg-3 col-md-4 col-6 mb-4"><div class="card product-card h-100"><div class="overflow-hidden">'+
      '<img src="'+p.img+'" class="card-img-top" alt="'+p.name+'"></div><div class="card-body">'+
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
  var n=c.reduce(function(s,i){return s+i.qty},0);
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
  for(var i=0;i<cart.length;i++){if(cart[i].name===name){cart[i].qty++;found=true;break;}}
  if(!found)cart.push({name:name,price:price,img:image,qty:1});
  localStorage.setItem('unclegorg_cart',JSON.stringify(cart));
  alert('Added to cart: '+name);
}
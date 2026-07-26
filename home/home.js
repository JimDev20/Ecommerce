// Home page - featured products + nav cart count + scroll animations
var featuredProducts = [
  {name:"French Baguette",price:45,img:"../images/products/frenchBaguette.jpg"},
  {name:"Whole Wheat Pandesal",price:102,img:"../images/products/wholeWheatPandesal.jpg"},
  {name:"Sourdough Artisan Bread",price:120,img:"../images/products/sourdoughArtisanBread.jpg"},
  {name:"Chocolate Cake",price:280,img:"../images/products/chocolateCake.jpg"},
  {name:"Ciabatta Cheese",price:95,img:"../images/products/ciabattaCheese.jpg"},
  {name:"Ube Pandan",price:130,img:"../images/products/cheesyubepandandelight.jpg"}
];

function renderFeatured(list){
  var g=document.getElementById('featuredGrid');
  if(!g)return;
  g.innerHTML=list.map(function(p,i){
    return '<div class="col-lg-2 col-md-4 col-6 mb-4 scroll-animate stagger-'+(i+1)+'"><div class="card product-card h-100"><a href="../product-details/index.html?product='+encodeURIComponent(p.name)+'" class="text-decoration-none"><div class="overflow-hidden">'+
      '<img src="'+p.img+'" class="card-img-top" alt="'+p.name+'"></div></a><div class="card-body pb-3">'+
      '<h6 class="card-title fw-bold mt-1 mb-1" style="font-size:.9rem;">'+p.name+'</h6>'+
      '<p class="fw-bold text-danger mb-1" style="font-size:.95rem;">&#8369;'+p.price+'</p>'+
      '<button class="btn btn-sm btn-custom w-100 mt-auto add-to-cart-btn" data-name="'+p.name.replace(/"/g,'&quot;')+'" data-price="'+p.price+'" data-img="'+p.img.replace(/"/g,'&quot;')+'"><i class="bi bi-cart-plus me-1"></i>Add</button>'+
      '</div></div></div>';
  }).join('');
}

document.addEventListener('DOMContentLoaded',function(){
  renderFeatured(featuredProducts);
  var c=JSON.parse(localStorage.getItem('unclegorg_cart')||'[]');
  var n=c.reduce(function(s,i){return s+i.qty},0);
  var el=document.getElementById('navCartCount');
  if(el&&n>0){el.textContent=n;el.classList.add('badge','bg-danger');}

  document.addEventListener('click',function(e){
    var btn=e.target.closest('.add-to-cart-btn');
    if(!btn)return;
    var name=btn.getAttribute('data-name');
    var price=Number(btn.getAttribute('data-price'));
    var image=btn.getAttribute('data-img');
    var cart=JSON.parse(localStorage.getItem('unclegorg_cart')||'[]');
    var found=false;
    for(var i=0;i<cart.length;i++){if(cart[i].name===name){cart[i].qty++;found=true;break;}}
    if(!found)cart.push({name:name,price:price,img:image,qty:1});
    localStorage.setItem('unclegorg_cart',JSON.stringify(cart));
    showToast('Added to cart: '+name,'success');
    var nn=cart.reduce(function(s,i){return s+i.qty},0);
    var el2=document.getElementById('navCartCount');
    if(el2){el2.textContent=nn;el2.classList.add('badge','bg-danger');}
  });

  // Parallax hero background
  window.addEventListener('scroll',function(){
    var hero=document.querySelector('.hero-section');
    if(!hero)return;
    var scroll=window.pageYOffset;
    hero.style.backgroundPositionY=scroll*0.3+'px';
  });

  // Scroll animations with IntersectionObserver
  var observer=new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
      }
    });
  },{threshold:0.15,rootMargin:'0px 0px -40px 0px'});

  document.querySelectorAll('.scroll-animate').forEach(function(el){
    observer.observe(el);
  });
});

function showToast(message,type){
  var t=document.getElementById('appToast'),b=document.getElementById('appToastBody');
  if(!t||!b)return;
  b.textContent=message;
  t.className='toast align-items-center text-bg-'+(type||'success')+' border-0';
  new bootstrap.Toast(t,{delay:3000}).show();
}

/* DETAILS - details.js
   Cart count + scroll top. Bootstrap handles carousel/accordion/modal.
   ERROR: If cart count or scroll top broken -> check here */
document.addEventListener('DOMContentLoaded',function(){
  var c=JSON.parse(localStorage.getItem('jimshop_cart')||'[]');
  var n=c.reduce(function(s,i){return s+i.quantity},0);
  var el=document.getElementById('navCartCount');
  if(el&&n>0){el.textContent=n;el.classList.add('badge','bg-danger');}
  var b=document.getElementById('scrollTopBtn');
  if(b){window.addEventListener('scroll',function(){b.classList.toggle('show',window.scrollY>300)});b.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'})});}
});
function addToCart(name,price,image){
  var cart=JSON.parse(localStorage.getItem('jimshop_cart')||'[]');
  var found=false;
  for(var i=0;i<cart.length;i++){if(cart[i].name===name){cart[i].quantity++;found=true;break;}}
  if(!found)cart.push({name:name,price:price,image:image,quantity:1});
  localStorage.setItem('jimshop_cart',JSON.stringify(cart));
  alert('Added to cart: '+name);
}

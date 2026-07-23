/* ABOUT - about.js
   Cart count + scroll top only.
   ERROR: If scroll top broken -> check here */
document.addEventListener('DOMContentLoaded',function(){
  var c=JSON.parse(localStorage.getItem('jimshop_cart')||'[]');
  var n=c.reduce(function(s,i){return s+i.quantity},0);
  var el=document.getElementById('navCartCount');
  if(el&&n>0){el.textContent=n;el.classList.add('badge','bg-danger');}
  var b=document.getElementById('scrollTopBtn');
  if(b){window.addEventListener('scroll',function(){b.classList.toggle('show',window.scrollY>300)});b.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'})});}
});

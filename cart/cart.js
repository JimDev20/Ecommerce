/* CART - cart.js
   Full cart system: add/remove/update/render/save.
   ERROR: If cart doesn't work at all -> check this file */
var cart=JSON.parse(localStorage.getItem('unclegorg_cart')||'[]');

function saveCart(){localStorage.setItem('unclegorg_cart',JSON.stringify(cart));}

function updateCartCount(){
  var n=cart.reduce(function(s,i){return s+i.quantity},0);
  var el=document.getElementById('navCartCount');
  if(el){el.textContent=n;if(n>0){el.classList.add('badge','bg-danger')}else{el.classList.remove('badge','bg-danger')}}
}

function renderCart(){
  var body=document.getElementById('cartBody');
  var table=document.getElementById('cartTable');
  var empty=document.getElementById('emptyCart');
  var actions=document.getElementById('cartActions');
  if(!body)return;
  if(cart.length===0){body.innerHTML='';table.classList.add('d-none');empty.classList.remove('d-none');actions.classList.add('d-none');updateTotals();return;}
  table.classList.remove('d-none');empty.classList.add('d-none');actions.classList.remove('d-none');
  body.innerHTML=cart.map(function(item,i){
    return '<tr><td><div class="d-flex align-items-center"><img src="'+item.image+'" class="cart-item-img me-3"><span>'+item.name+'</span></div></td>'+
    '<td>₱'+item.price.toFixed(2)+'</td>'+
    '<td><div class="d-flex align-items-center"><button class="btn btn-sm btn-outline-secondary" onclick="changeQty('+i+',-1)">-</button>'+
    '<input type="number" class="form-control form-control-sm text-center mx-1" value="'+item.quantity+'" readonly style="width:60px;">'+
    '<button class="btn btn-sm btn-outline-secondary" onclick="changeQty('+i+',1)">+</button></div></td>'+
    '<td class="fw-bold">₱'+(item.price*item.quantity).toFixed(2)+'</td>'+
    '<td><button class="btn btn-sm btn-outline-danger" onclick="removeItem('+i+')"><i class="bi bi-trash"></i></button></td></tr>';
  }).join('');
  updateTotals();
}

function updateTotals(){
  var sub=cart.reduce(function(s,i){return s+i.price*i.quantity},0);
  var tax=sub*0.12;
  var total=sub+tax;
  document.getElementById('cartTotal').textContent='₱'+sub.toFixed(2);
  document.getElementById('taxAmount').textContent='₱'+tax.toFixed(2);
  document.getElementById('grandTotal').textContent='₱'+total.toFixed(2);
}

function changeQty(i,d){cart[i].quantity+=d;if(cart[i].quantity<=0)cart.splice(i,1);saveCart();renderCart();updateCartCount();}
function removeItem(i){cart.splice(i,1);saveCart();renderCart();updateCartCount();}
function clearCart(){cart=[];saveCart();renderCart();updateCartCount();showAlert('Cart cleared.');}

function showAlert(msg){
  var a=document.getElementById('cartAlert');
  if(a){a.classList.remove('d-none');a.innerHTML='<i class="bi bi-check-circle-fill me-2"></i>'+msg+'<button type="button" class="btn-close" data-bs-dismiss="alert"></button>';
    setTimeout(function(){a.classList.add('d-none')},3000);}
}

function applyPromo(){
  var code=document.getElementById('promoInput').value.trim();
  if(code){showAlert('Promo "'+code+'" applied! (Demo)');}
  else{showAlert('Enter a promo code.');}
}

function checkout(){
  if(cart.length===0){showAlert('Your cart is empty!');return;}
  showAlert('Proceeding to checkout... (Demo)');
}

document.addEventListener('DOMContentLoaded',function(){
  renderCart();updateCartCount();
  var b=document.getElementById('scrollTopBtn');
  if(b){window.addEventListener('scroll',function(){b.classList.toggle('show',window.scrollY>300)});b.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'})});}
});
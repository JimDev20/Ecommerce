/* DETAILS - details.js */
function addToCart(name, price, img) {
  var qty = parseInt(document.getElementById('qty').value) || 1;
  var cart = JSON.parse(localStorage.getItem('unclegorg_cart') || '[]');
  var existing = cart.find(function(item){ return item.name === name; });
  if (existing) { existing.qty += qty; }
  else { cart.push({ name: name, price: price, img: img, qty: qty }); }
  localStorage.setItem('unclegorg_cart', JSON.stringify(cart));
  updateNavBadge();
  var btn = document.querySelector('.btn-custom');
  var orig = btn.innerHTML;
  btn.innerHTML = '<i class="bi bi-check-circle me-2"></i>Added!';
  btn.classList.add('btn-success');
  setTimeout(function(){ btn.innerHTML = orig; btn.classList.remove('btn-success'); }, 1500);
}

function updateNavBadge() {
  var cart = JSON.parse(localStorage.getItem('unclegorg_cart') || '[]');
  var count = cart.reduce(function(s, i){ return s + i.qty; }, 0);
  var el = document.getElementById('navCartCount');
  if (el) { el.textContent = count > 0 ? ' (' + count + ')' : ''; }
}

document.addEventListener('DOMContentLoaded', function(){
  updateNavBadge();
  var scrollTopBtn = document.getElementById('scrollTopBtn');
  window.addEventListener('scroll', function(){ scrollTopBtn.classList.toggle('show', window.scrollY > 300); });
  scrollTopBtn.addEventListener('click', function(){ window.scrollTo({ top: 0, behavior: 'smooth' }); });
});
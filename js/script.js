/* ========================================
   Uncle George - Unified JavaScript
   ======================================== */

/* ========================================
   PRODUCT DATA
   ======================================== */
var allProducts = [];
var dataLoaded = false;

/* ========================================
   HELPER: detect base path
   ======================================== */
function getBase() {
  return window.location.pathname !== '/' ? '../' : '';
}

function productLink(name) {
  return '/product-details/?product=' + encodeURIComponent(name);
}

function pageLink(page) {
  return page === 'index' ? '/' : '/' + page + '/';
}

/* ========================================
   UTILITY FUNCTIONS
   ======================================== */
function setMeta(property, content) {
  var el = document.querySelector('meta[property="' + property + '"], meta[name="' + property + '"]');
  if (el) { el.setAttribute('content', content); }
}

function showToast(message, type) {
  var t = document.getElementById('appToast'), b = document.getElementById('appToastBody');
  if (!t || !b) return;
  b.textContent = message;
  t.className = 'toast align-items-center text-bg-' + (type || 'success') + ' border-0';
  new bootstrap.Toast(t, {delay: 3000}).show();
}

function getCart() {
  return JSON.parse(localStorage.getItem('unclegorg_cart') || '[]');
}

function saveCart(cart) {
  localStorage.setItem('unclegorg_cart', JSON.stringify(cart));
}

function updateNavBadge() {
  var cart = getCart();
  var n = cart.reduce(function(s, i) { return s + i.qty; }, 0);
  var el = document.getElementById('navCartCount');
  if (el) {
    if (n > 0) { el.textContent = n; el.classList.add('badge', 'bg-danger'); }
    else { el.textContent = ''; el.classList.remove('badge', 'bg-danger'); }
  }
}

function addToCart(name, price, image) {
  var cart = getCart();
  var found = false;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].name === name) { cart[i].qty++; found = true; break; }
  }
  if (!found) cart.push({name: name, price: price, img: image, qty: 1});
  saveCart(cart);
  showToast('Added to cart: ' + name, 'success');
  updateNavBadge();
}

/* ========================================
   SCROLL ANIMATIONS
   ======================================== */
var animObserver;
function observeAnimations() {
  if (!animObserver) {
    animObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) { entry.target.classList.add('visible'); }
      });
    }, {threshold: 0.1, rootMargin: '0px 0px -20px 0px'});
  }
  document.querySelectorAll('.scroll-animate').forEach(function(el) { animObserver.observe(el); });
}

/* ========================================
   HOME PAGE
   ======================================== */
function initHome() {
  var g = document.getElementById('featuredGrid');
  if (!g) return;
  var featured = allProducts.filter(function(p) { return p.featured; });
  g.innerHTML = featured.map(function(p, i) {
    return '<div class="col-lg-2 col-md-4 col-6 mb-4 scroll-animate stagger-' + (i + 1) + '"><div class="card product-card h-100"><a href="' + productLink(p.name) + '" class="text-decoration-none"><div class="overflow-hidden">' +
      '<img src="' + p.img + '" class="card-img-top" alt="' + p.name + '"></div></a><div class="card-body pb-3">' +
      '<h6 class="card-title fw-bold mt-1 mb-1" style="font-size:.9rem;">' + p.name + '</h6>' +
      '<p class="fw-bold text-danger mb-1" style="font-size:.95rem;">&#8369;' + p.price + '</p>' +
      '<button class="btn btn-sm btn-custom w-100 mt-auto add-to-cart-btn" data-name="' + p.name.replace(/"/g, '&quot;') + '" data-price="' + p.price + '" data-img="' + p.img.replace(/"/g, '&quot;') + '"><i class="bi bi-cart-plus me-1"></i>Add</button>' +
      '</div></div></div>';
  }).join('');
  setTimeout(function() { observeAnimations(); }, 100);
}

/* ========================================
   PRODUCTS PAGE
   ======================================== */
var prodCurrentPage = 1;
var prodPerPage = 8;
var prodCurrentCategory = 'all';
var prodSearchTerm = '';
var prodSortBy = 'default';

function initProducts() {
  prodCurrentPage = 1;
  var params = new URLSearchParams(window.location.search);
  var cat = params.get('cat');
  prodCurrentCategory = cat || 'all';
  renderProducts();
  renderPagination();
  setTimeout(function() { observeAnimations(); }, 100);
}

function onSearch() {
  prodSearchTerm = document.getElementById('searchInput').value.trim().toLowerCase();
  prodCurrentPage = 1;
  renderProducts();
  renderPagination();
  setTimeout(function() { observeAnimations(); }, 100);
}

function onSort() {
  prodSortBy = document.getElementById('sortSelect').value;
  prodCurrentPage = 1;
  renderProducts();
  renderPagination();
  setTimeout(function() { observeAnimations(); }, 100);
}

function filterCategory(cat) {
  prodCurrentCategory = cat;
  prodCurrentPage = 1;
  var btns = document.querySelectorAll('#categoryFilter .btn');
  btns.forEach(function(b) { b.className = 'btn btn-sm btn-outline-secondary'; });
  var idx = {'all': 0, 'Loaf Breads': 1, 'Bread Rolls': 2, 'Pies & Pastries': 3, 'Cakes': 4};
  if (idx[cat] !== undefined) { btns[idx[cat]].className = 'btn btn-sm btn-custom'; }
  renderProducts();
  renderPagination();
  setTimeout(function() { observeAnimations(); }, 100);
}

function getFilteredProducts() {
  var list = allProducts;
  if (prodCurrentCategory !== 'all') {
    list = list.filter(function(p) { return p.cat === prodCurrentCategory; });
  }
  if (prodSearchTerm) {
    list = list.filter(function(p) {
      return p.name.toLowerCase().indexOf(prodSearchTerm) !== -1 ||
             p.desc.toLowerCase().indexOf(prodSearchTerm) !== -1;
    });
  }
  if (prodSortBy === 'name-asc') {
    list.sort(function(a, b) { return a.name.localeCompare(b.name); });
  } else if (prodSortBy === 'name-desc') {
    list.sort(function(a, b) { return b.name.localeCompare(a.name); });
  } else if (prodSortBy === 'price-asc') {
    list.sort(function(a, b) { return a.price - b.price; });
  } else if (prodSortBy === 'price-desc') {
    list.sort(function(a, b) { return b.price - a.price; });
  }
  return list;
}

function renderProducts() {
  var g = document.getElementById('productsGrid');
  if (!g) return;
  var filtered = getFilteredProducts();
  var countEl = document.getElementById('resultCount');
  if (countEl) {
    countEl.textContent = filtered.length + ' product' + (filtered.length !== 1 ? 's' : '') + ' found';
  }
  var start = (prodCurrentPage - 1) * prodPerPage;
  var page = filtered.slice(start, start + prodPerPage);
  g.innerHTML = page.map(function(p, i) {
    var cat = p.cat.replace(/&/g, '&amp;');
    return '<div class="col-lg-3 col-md-4 col-6 mb-4 scroll-animate stagger-' + ((i % 8) + 1) + '"><div class="card product-card h-100"><a href="' + productLink(p.name) + '" class="text-decoration-none"><div class="overflow-hidden">' +
      '<img src="' + p.img + '" class="card-img-top" alt="' + p.name + '"></div></a><div class="card-body">' +
      '<span class="badge bg-secondary-subtle text-secondary mb-1 small">' + cat + '</span>' +
      '<h6 class="card-title fw-bold mt-1">' + p.name + '</h6>' +
      '<p class="text-muted small mb-1" style="font-size:.8rem;">' + p.desc + '</p>' +
      '<p class="fw-bold text-danger mb-2">&#8369;' + p.price + '</p>' +
      '<div class="d-flex gap-2 mt-auto">' +
      '<a href="' + productLink(p.name) + '" class="btn btn-sm btn-outline-secondary flex-grow-1"><i class="bi bi-eye me-1"></i>View Details</a>' +
      '<button class="btn btn-sm btn-custom add-to-cart-btn" data-name="' + p.name.replace(/"/g, '&quot;') + '" data-price="' + p.price + '" data-img="' + p.img.replace(/"/g, '&quot;') + '"><i class="bi bi-cart-plus"></i></button>' +
      '</div></div></div></div>';
  }).join('');
}

function renderPagination() {
  var filtered = getFilteredProducts();
  var pages = Math.ceil(filtered.length / prodPerPage);
  var pag = document.getElementById('pagination');
  if (!pag) return;
  var html = '<li class="page-item ' + (prodCurrentPage === 1 ? 'disabled' : '') + '"><a class="page-link" href="#" onclick="goPage(' + (prodCurrentPage - 1) + ');return false;"><i class="bi bi-chevron-left"></i></a></li>';
  for (var i = 1; i <= pages; i++) {
    html += '<li class="page-item ' + (prodCurrentPage === i ? 'active' : '') + '"><a class="page-link" href="#" onclick="goPage(' + i + ');return false;">' + i + '</a></li>';
  }
  html += '<li class="page-item ' + (prodCurrentPage === pages ? 'disabled' : '') + '"><a class="page-link" href="#" onclick="goPage(' + (prodCurrentPage + 1) + ');return false;"><i class="bi bi-chevron-right"></i></a></li>';
  pag.innerHTML = html;
}

function goPage(p) {
  var filtered = getFilteredProducts();
  var maxPage = Math.ceil(filtered.length / prodPerPage);
  if (p < 1 || p > maxPage) return;
  prodCurrentPage = p;
  renderProducts();
  renderPagination();
  setTimeout(function() { observeAnimations(); }, 100);
  window.scrollTo({top: 200, behavior: 'smooth'});
}

/* ========================================
   PRODUCT DETAILS PAGE
   ======================================== */
function initProductDetails() {
  var params = new URLSearchParams(window.location.search);
  var name = params.get('product');
  if (!name) { hideLoading(); showProductError(); return; }
  var product = null;
  for (var i = 0; i < allProducts.length; i++) {
    if (allProducts[i].name.toLowerCase() === name.toLowerCase()) { product = allProducts[i]; break; }
  }
  if (!product) { hideLoading(); showProductError(); return; }
  hideLoading();
  renderProductDetails(product);
  renderRelatedProducts(product);
}

function hideLoading() {
  var el = document.getElementById('productLoading');
  if (el) { el.classList.add('d-none'); }
}

function showProductError() {
  var content = document.getElementById('productContent');
  var related = document.getElementById('relatedSection');
  var error = document.getElementById('productError');
  if (content) content.classList.add('d-none');
  if (related) related.classList.add('d-none');
  if (error) error.classList.remove('d-none');
  hideLoading();
}

function renderProductDetails(p) {
  var content = document.getElementById('productContent');
  var inner = document.getElementById('productCarouselInner');
  var thumbs = document.getElementById('productThumbs');
  var imgs = p.images || [p.img, p.img, p.img];
  if (content) content.classList.remove('d-none');

  // Update dynamic SEO meta tags
  var desc = p.name + ' - ' + p.desc;
  document.title = p.name + ' - Uncle George';
  setMeta('description', desc);
  setMeta('og:title', p.name + ' - Uncle George');
  setMeta('og:description', desc);
  setMeta('twitter:title', p.name + ' - Uncle George');
  setMeta('twitter:description', desc);
  setMeta('og:url', 'https://unclegeorgebakedgoods.vercel.app/product-details/?product=' + encodeURIComponent(p.name));
  setMeta('og:image', 'https://unclegeorgebakedgoods.vercel.app' + p.img);

  if (inner) {
    inner.innerHTML = '<div class="carousel-item active"><img src="' + imgs[0] + '" class="d-block w-100" alt="' + p.name + '" style="height:500px;object-fit:cover;"></div>' +
      '<div class="carousel-item"><img src="' + imgs[1] + '" class="d-block w-100" alt="' + p.name + '" style="height:500px;object-fit:cover;"></div>' +
      '<div class="carousel-item"><img src="' + imgs[2] + '" class="d-block w-100" alt="' + p.name + '" style="height:500px;object-fit:cover;"></div>';
  }
  if (thumbs) {
    thumbs.innerHTML = '<img src="' + imgs[0] + '" class="product-thumb active" alt="' + p.name + '" data-bs-target="#productCarousel" data-bs-slide-to="0" style="width:80px;height:80px;object-fit:cover;border-radius:8px;cursor:pointer;border:3px solid #D2691E;">' +
      '<img src="' + imgs[1] + '" class="product-thumb" alt="' + p.name + '" data-bs-target="#productCarousel" data-bs-slide-to="1" style="width:80px;height:80px;object-fit:cover;border-radius:8px;cursor:pointer;border:3px solid transparent;">' +
      '<img src="' + imgs[2] + '" class="product-thumb" alt="' + p.name + '" data-bs-target="#productCarousel" data-bs-slide-to="2" style="width:80px;height:80px;object-fit:cover;border-radius:8px;cursor:pointer;border:3px solid transparent;">';
    thumbs.querySelectorAll('.product-thumb').forEach(function(th) {
      th.addEventListener('click', function() {
        thumbs.querySelectorAll('.product-thumb').forEach(function(t) { t.style.borderColor = 'transparent'; });
        this.style.borderColor = '#D2691E';
      });
    });
    var carousel = document.getElementById('productCarousel');
    if (carousel) {
      carousel.addEventListener('slid.bs.carousel', function(e) {
        var idx = e.to;
        thumbs.querySelectorAll('.product-thumb').forEach(function(t, i) {
          t.style.borderColor = (i === idx) ? '#D2691E' : 'transparent';
        });
      });
    }
  }
  document.getElementById('productCategory').textContent = p.cat;
  document.getElementById('productName').textContent = p.name;
  if (p.discount) {
    var salePrice = Math.round(p.price * (1 - p.discount / 100));
    document.getElementById('productPrice').innerHTML = '<span style="text-decoration:line-through;color:#999;margin-right:8px;">&#8369;' + p.price + '</span><span style="color:#c0392b;font-size:1.3rem;">&#8369;' + salePrice + '</span> <span class="badge bg-danger">-' + p.discount + '%</span>';
  } else {
    document.getElementById('productPrice').innerHTML = '&#8369;' + p.price;
  }
  document.getElementById('productDesc').textContent = p.desc;

  var specsHtml = '';
  for (var key in p.specs) {
    specsHtml += '<tr><td class="text-muted fw-bold" style="width:40%">' + key + '</td><td>' + p.specs[key] + '</td></tr>';
  }
  document.getElementById('specsTable').innerHTML = specsHtml;
  document.getElementById('descBody').innerHTML = '<p>' + p.desc.replace(/&/g, '&amp;') + '</p>';

  document.getElementById('addToCartBtn').onclick = function() {
    var finalPrice = p.discount ? Math.round(p.price * (1 - p.discount / 100)) : p.price;
    addToCart(p.name, finalPrice, p.img);
  };
}

function renderRelatedProducts(current) {
  var related = allProducts.filter(function(p) { return p.cat === current.cat && p.name !== current.name; });
  if (related.length === 0) return;
  for (var i = related.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var tmp = related[i]; related[i] = related[j]; related[j] = tmp; }
  related = related.slice(0, 3);
  var g = document.getElementById('relatedGrid');
  if (!g) return;
  g.innerHTML = related.map(function(p) {
    var cat = p.cat.replace(/&/g, '&amp;');
    return '<div class="col-lg-4 col-md-6"><div class="card product-card h-100"><a href="' + productLink(p.name) + '" class="text-decoration-none"><div class="overflow-hidden"><img src="' + p.img + '" class="card-img-top" alt="' + p.name + '" loading="lazy"></div></a><div class="card-body"><span class="badge bg-secondary-subtle text-secondary mb-1 small">' + cat + '</span><h6 class="card-title fw-bold mt-1">' + p.name + '</h6><p class="fw-bold text-danger mb-2">&#8369;' + p.price + '</p><button class="btn btn-sm btn-custom w-100 mt-auto add-to-cart-related" data-name="' + p.name.replace(/"/g, '&quot;') + '" data-price="' + p.price + '" data-img="' + p.img.replace(/"/g, '&quot;') + '"><i class="bi bi-cart-plus me-1"></i>Add to Cart</button></div></div></div>';
  }).join('');
}

/* ========================================
   CART PAGE
   ======================================== */
function initCart() {
  var cart = getCart();
  cart.forEach(function(item) {
    if (item.image && !item.img) { item.img = item.image; delete item.image; }
  });
  saveCart(cart);
  renderCart();
}

function renderCart() {
  var cart = getCart();
  var body = document.getElementById('cartBody');
  var table = document.getElementById('cartTable');
  var empty = document.getElementById('emptyCart');
  var actions = document.getElementById('cartActions');
  if (!body) return;
  if (cart.length === 0) {
    body.innerHTML = '';
    table.classList.add('d-none');
    empty.classList.remove('d-none');
    actions.classList.add('d-none');
    updateCartTotals();
    return;
  }
  table.classList.remove('d-none');
  empty.classList.add('d-none');
  actions.classList.remove('d-none');
  body.innerHTML = cart.map(function(item, i) {
    return '<tr><td><div class="d-flex align-items-center"><img src="' + item.img + '" class="cart-item-img me-3"><span>' + item.name + '</span></div></td>' +
    '<td>&#8369;' + item.price.toFixed(2) + '</td>' +
    '<td><div class="d-flex align-items-center"><button class="btn btn-sm btn-outline-secondary" onclick="changeQty(' + i + ',-1)">-</button>' +
    '<input type="number" class="form-control form-control-sm text-center mx-1" value="' + item.qty + '" readonly style="width:60px;">' +
    '<button class="btn btn-sm btn-outline-secondary" onclick="changeQty(' + i + ',1)">+</button></div></td>' +
    '<td class="fw-bold">&#8369;' + (item.price * item.qty).toFixed(2) + '</td>' +
    '<td><button class="btn btn-sm btn-outline-danger" onclick="removeItem(' + i + ')"><i class="bi bi-trash"></i></button></td></tr>';
  }).join('');
  updateCartTotals();
}

function updateCartTotals() {
  var cart = getCart();
  var sub = cart.reduce(function(s, i) { return s + i.price * i.qty; }, 0);
  var delivery = sub >= 200 ? 0 : 50;
  var tax = sub * 0.12;
  var total = sub + delivery + tax;
  document.getElementById('cartTotal').textContent = '₱' + sub.toFixed(2);
  var delEl = document.getElementById('deliveryFee');
  if (delivery === 0) { delEl.textContent = 'Free'; delEl.className = 'text-success'; }
  else { delEl.textContent = '₱' + delivery.toFixed(2); delEl.className = ''; }
  document.getElementById('taxAmount').textContent = '₱' + tax.toFixed(2);
  document.getElementById('grandTotal').textContent = '₱' + total.toFixed(2);
}

function changeQty(i, d) {
  var cart = getCart();
  cart[i].qty += d;
  if (cart[i].qty <= 0) cart.splice(i, 1);
  saveCart(cart);
  renderCart();
  updateNavBadge();
}

function removeItem(i) {
  var cart = getCart();
  cart.splice(i, 1);
  saveCart(cart);
  renderCart();
  updateNavBadge();
}

function clearCart() {
  saveCart([]);
  renderCart();
  updateNavBadge();
  showCartAlert('Cart cleared.');
}

function showCartAlert(msg) {
  var a = document.getElementById('cartAlert');
  if (a) {
    a.classList.remove('d-none');
    a.innerHTML = '<i class="bi bi-check-circle-fill me-2"></i>' + msg + '<button type="button" class="btn-close" data-bs-dismiss="alert"></button>';
    setTimeout(function() { a.classList.add('d-none'); }, 3000);
  }
}

function checkout() {
  var cart = getCart();
  if (cart.length === 0) { showCartAlert('Your cart is empty!'); return; }
  showCartAlert('Proceeding to checkout... (Demo)');
}

/* ========================================
   CONTACT PAGE
   ======================================== */
function initContact() {
  var form = document.getElementById('contactForm');
  if (form) {
    form.onsubmit = function(e) {
      e.preventDefault();
      var name = document.getElementById('fullName').value.trim();
      var email = document.getElementById('email').value.trim();
      var subject = document.getElementById('subject').value;
      var message = document.getElementById('message').value.trim();
      if (!name || !email || !subject || !message) { showToast('Please fill in all fields.', 'warning'); return; }
      showToast('Thank you! Your message has been sent.', 'success');
      form.reset();
    };
  }
}

/* ========================================
   PAGE DETECTION & INIT
   ======================================== */
document.addEventListener('DOMContentLoaded', function() {
  // Fix old data format
  var cart = getCart();
  cart.forEach(function(item) {
    if (item.image && !item.img) { item.img = item.image; delete item.image; }
  });
  saveCart(cart);
  updateNavBadge();

  // Sync cart across browser tabs
  window.addEventListener('storage', function(e) {
    if (e.key === 'unclegorg_cart') {
      updateNavBadge();
      if (document.getElementById('cartBody')) { initCart(); }
    }
  });

  // Delegated add-to-cart clicks
  document.addEventListener('click', function(e) {
    var btn = e.target.closest('.add-to-cart-btn');
    if (btn) {
      addToCart(btn.getAttribute('data-name'), Number(btn.getAttribute('data-price')), btn.getAttribute('data-img'));
      return;
    }
    var btn2 = e.target.closest('.add-to-cart-related');
    if (btn2) {
      addToCart(btn2.getAttribute('data-name'), Number(btn2.getAttribute('data-price')), btn2.getAttribute('data-img'));
    }
  });

  // Scroll-to-top button
  var scrollBtn = document.createElement('button');
  scrollBtn.className = 'scroll-top';
  scrollBtn.innerHTML = '<i class="bi bi-arrow-up"></i>';
  scrollBtn.onclick = function() { window.scrollTo({top: 0, behavior: 'smooth'}); };
  document.body.appendChild(scrollBtn);
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) scrollBtn.classList.add('show');
    else scrollBtn.classList.remove('show');
  });

  // Parallax hero background
  window.addEventListener('scroll', function() {
    var hero = document.querySelector('.hero-section');
    if (!hero) return;
    hero.style.backgroundPositionY = window.pageYOffset * 0.3 + 'px';
  });

  // Load products from JSON and initialize
  loadProducts();
});

function loadProducts() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', getBase() + 'data/products.json', true);
  xhr.onload = function() {
    if (xhr.status === 200) {
      allProducts = JSON.parse(xhr.responseText);
      dataLoaded = true;
    }
    initCurrentPage();
  };
  xhr.onerror = function() {
    dataLoaded = true;
    initCurrentPage();
  };
  xhr.send();
}

function initCurrentPage() {
  if (document.getElementById('featuredGrid')) { initHome(); }
  else if (document.getElementById('productsGrid')) { initProducts(); }
  else if (document.getElementById('productCarouselInner')) { initProductDetails(); }
  else if (document.getElementById('cartBody')) { initCart(); }
  else if (document.getElementById('contactForm')) { initContact(); }
}

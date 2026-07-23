let cart = JSON.parse(localStorage.getItem('cart')) || [];

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(name, price, image) {
  const existing = cart.find(item => item.name === name);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ name, price, image, quantity: 1 });
  }
  saveCart();
  updateCartCount();
  showToast('Item successfully added to cart!');
}

function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
  updateCartCount();
  renderCart();
}

function updateQuantity(index, change) {
  cart[index].quantity += change;
  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }
  saveCart();
  renderCart();
}

function getCartTotal() {
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function getCartCount() {
  return cart.reduce((count, item) => count + item.quantity, 0);
}

function updateCartCount() {
  const countElements = document.querySelectorAll('.cart-count');
  const count = getCartCount();
  countElements.forEach(el => {
    el.textContent = count;
    if (count > 0) {
      el.classList.add('badge', 'bg-danger');
    } else {
      el.classList.remove('badge', 'bg-danger');
    }
  });
}

function renderCart() {
  const cartBody = document.getElementById('cartBody');
  const cartTotal = document.getElementById('cartTotal');
  const emptyCart = document.getElementById('emptyCart');

  if (!cartBody) return;

  if (cart.length === 0) {
    cartBody.innerHTML = '';
    if (emptyCart) emptyCart.style.display = 'block';
    if (cartTotal) cartTotal.textContent = '₱0.00';
    return;
  }

  if (emptyCart) emptyCart.style.display = 'none';

  cartBody.innerHTML = cart.map((item, index) => `
    <tr>
      <td>
        <div class="d-flex align-items-center">
          <img src="${item.image}" alt="${item.name}" class="cart-item-img me-3">
          <span>${item.name}</span>
        </div>
      </td>
      <td>₱${item.price.toFixed(2)}</td>
      <td>
        <div class="d-flex align-items-center">
          <button class="btn btn-sm btn-outline-secondary" onclick="updateQuantity(${index}, -1)">
            <i class="bi bi-dash"></i>
          </button>
          <input type="number" class="form-control form-control-sm quantity-input mx-2" value="${item.quantity}" readonly>
          <button class="btn btn-sm btn-outline-secondary" onclick="updateQuantity(${index}, 1)">
            <i class="bi bi-plus"></i>
          </button>
        </div>
      </td>
      <td class="fw-bold">₱${(item.price * item.quantity).toFixed(2)}</td>
      <td>
        <button class="btn btn-sm btn-outline-danger" onclick="removeFromCart(${index})">
          <i class="bi bi-trash"></i>
        </button>
      </td>
    </tr>
  `).join('');

  if (cartTotal) {
    cartTotal.textContent = '₱' + getCartTotal().toFixed(2);
  }
}

function showToast(message) {
  const toastContainer = document.getElementById('toastContainer') || createToastContainer();
  const toastId = 'toast-' + Date.now();

  const toastHTML = `
    <div id="${toastId}" class="toast align-items-center text-bg-success border-0" role="alert">
      <div class="d-flex">
        <div class="toast-body">
          <i class="bi bi-check-circle-fill me-2"></i>${message}
        </div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
      </div>
    </div>
  `;

  toastContainer.insertAdjacentHTML('beforeend', toastHTML);
  const toastElement = document.getElementById(toastId);
  const toast = new bootstrap.Toast(toastElement, { delay: 3000 });
  toast.show();

  toastElement.addEventListener('hidden.bs.toast', () => toastElement.remove());
}

function createToastContainer() {
  const container = document.createElement('div');
  container.id = 'toastContainer';
  container.className = 'toast-container position-fixed bottom-0 end-0 p-3';
  document.body.appendChild(container);
  return container;
}

document.addEventListener('DOMContentLoaded', function() {
  updateCartCount();
  renderCart();

  const scrollTopBtn = document.getElementById('scrollTopBtn');
  if (scrollTopBtn) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        scrollTopBtn.classList.add('show');
      } else {
        scrollTopBtn.classList.remove('show');
      }
    });

    scrollTopBtn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      showToast('Thank you! Your message has been sent successfully.');
      contactForm.reset();
    });
  }

  const checkoutBtn = document.getElementById('checkoutBtn');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', function() {
      if (cart.length === 0) {
        showToast('Your cart is empty!');
        return;
      }
      showToast('Proceeding to checkout...');
    });
  }
});

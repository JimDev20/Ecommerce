# Uncle George Bread & Pastries - E-commerce Frontend

A responsive e-commerce frontend for **Uncle George Bread & Pastries**, a Filipino bakery brand. Built as a system integration frontend project for Cavite State University.

## Project Structure

```
Ecommerce/
├── index.html                 # Home page
├── pages/
│   ├── about.html             # About page
│   ├── products.html          # Product listing
│   ├── product-details.html   # Single product view
│   ├── cart.html              # Shopping cart
│   └── contact.html           # Contact form
├── css/
│   ├── bootstrap.min.css      # Bootstrap 5.3
│   ├── bootstrap-icons.min.css
│   ├── fonts/                 # Bootstrap Icons font files
│   └── style.css              # All custom styles (merged)
├── js/
│   ├── bootstrap.bundle.min.js
│   └── script.js              # All custom scripts (merged)
├── images/                    # All images
│   ├── brand/
│   ├── products/
│   ├── carousel/
│   ├── decoration/
│   └── team/
└── README.md
```

## Pages & Features

### Home (`/`)
- Responsive navbar with logo and cart badge
- Hero section with parallax background and animations
- Featured products (6 bestsellers) with add-to-cart
- Product categories (Loaf Breads, Bread Rolls, Pies & Pastries, Cakes)
- Promotional carousel

### Products (`/pages/products`)
- Product grid with 30+ items
- Category filter (All, Loaf Breads, Bread Rolls, Pies & Pastries, Cakes)
- Pagination (8 items per page)
- Add to cart on each card

### Product Details (`/pages/product-details`)
- Image carousel with thumbnail navigation
- Product specs, description, delivery info in accordions
- Size guide modal
- Related products section

### Cart (`/pages/cart`)
- Quantity controls (+/-)
- Remove items / clear cart
- Order summary with subtotal, delivery, tax (12%)
- localStorage persistence

### About (`/pages/about`)
- Company story and background
- Mission & Vision
- Team members with photos
- Core values accordion

### Contact (`/pages/contact`)
- Contact info (address, phone, email, hours)
- Contact form with validation

## Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom styles with Bootstrap 5.3 overrides
- **JavaScript (ES5)** - Vanilla JS, no frameworks
- **Bootstrap 5.3** - Offline (bundled in `css/` and `js/`)
- **Bootstrap Icons** - Offline icon font
- **localStorage** - Cart data persistence
- **Vercel** - Deployment with clean URL rewrites

## Clean URLs (Vercel)

| URL | Page |
|-----|------|
| `/` | Home |
| `/pages/products` | Products |
| `/pages/product-details?product=X` | Product Details |
| `/pages/cart` | Cart |
| `/pages/about` | About |
| `/pages/contact` | Contact |

## Cart Data Format

Cart uses `localStorage` with key `unclegorg_cart`:

```json
[
  {"name": "French Baguette", "price": 45, "img": "images/products/frenchBaguette.jpg", "qty": 2}
]
```

## How to Run

1. Clone the repository
2. Open `index.html` in a browser
3. No server required - all files are local

## Deployment

Push to GitHub and connect to Vercel for automatic deployment.

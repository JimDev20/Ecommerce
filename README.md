# Uncle George Bread & Pastries - E-commerce Website

A responsive e-commerce website for **Uncle George Bread & Pastries**, a Filipino bakery brand. Built as a school project for Cavite State University using Bootstrap 5.3 (offline).

## Project Structure

Each feature is in its own folder with HTML + CSS + JS files together for easy debugging.

```
Ecommerce/
├── home/              # Landing page with hero, featured products, categories
│   ├── index.html
│   ├── home.css
│   └── home.js
├── products/          # Product listing with filters and pagination
│   ├── index.html
│   ├── products.css
│   └── products.js
├── product-details/   # Single product view with carousel and add to cart
│   ├── index.html
│   ├── details.css
│   └── details.js
├── cart/              # Shopping cart with quantity controls and checkout
│   ├── index.html
│   ├── cart.css
│   └── cart.js
├── about/             # About page with mission/vision and team
│   ├── index.html
│   ├── about.css
│   └── about.js
├── contact/           # Contact form with validation
│   ├── index.html
│   ├── contact.css
│   └── contact.js
├── images/            # All images (products, brand logo, decoration)
│   ├── brand/         # logoUncle.jpg (main logo)
│   ├── products/      # 12 real Uncle George product images
│   ├── decoration/    # Banner images
│   └── team/          # Team member photos
├── lib/               # Bootstrap 5.3 (offline) + Bootstrap Icons
│   └── bootstrap/
├── README.md
└── .gitignore
```

## Pages & Features

### 1. Home Page (`home/`)
- **Hero Section**: Full-width banner with call-to-action buttons ("Shop Now" and "Our Story")
- **Why Choose Us**: 4 feature cards (Premium Ingredients, Baked Fresh Daily, Fast Delivery, Made with Love)
- **Featured Products**: 6 bestseller products rendered from JavaScript array
- **Category Cards**: Two clickable category sections (Loaf Breads, Pastries)
- **Promo Banner**: Sale announcement with link to products
- **Testimonials**: 3 customer review cards
- **Newsletter**: Email subscription form (UI only)

### 2. Products Page (`products/`)
- **Product Grid**: Displays all 12 Uncle George products in card layout
- **Category Filters**: Filter buttons for "All", "Loaf Breads", and "Pastries"
- **Client-side Pagination**: Shows 8 products per page with prev/next navigation
- **Add to Cart**: Each product card has an "Add to Cart" button
- **Product Count**: Shows total filtered products

### 3. Product Details Page (`product-details/`)
- **Image Carousel**: 4-image Bootstrap carousel with thumbnail navigation
- **Product Info**: Name, price, description, weight selector
- **Quantity Selector**: Increment/decrement buttons (1-20)
- **Add to Cart**: Adds selected quantity to localStorage cart
- **Accordion Sections**: Specifications, Description, Delivery & Returns
- **Related Products**: 4 product cards at bottom

### 4. Cart Page (`cart/`)
- **Cart Table**: Shows all items with image, name, price, quantity controls, subtotal
- **Quantity Controls**: +/- buttons to adjust item quantity
- **Remove Items**: Delete individual items from cart
- **Order Summary**: Subtotal, tax (12%), grand total
- **Promo Code**: Input field with apply button (UI only)
- **Checkout Button**: Shows confirmation alert
- **Empty State**: Message and "Start Shopping" link when cart is empty
- **Payment Badges**: Visa, Mastercard, GCash, Maya icons
- **localStorage**: Cart persists across page reloads using `unclegorg_cart` key

### 5. About Page (`about/`)
- **Hero Section**: Page header with gradient background
- **Our Story**: Brand story with stats (12+ variants, 5K+ customers, 99% satisfaction)
- **Mission & Vision**: Cavite State University mission and vision statements
- **Team Section**: 3 team member cards with roles
- **Core Values**: Accordion with 4 values (Customer First, Quality, Innovation, Integrity)

### 6. Contact Page (`contact/`)
- **Contact Info Card**: Address, phone, email, hours, social media links
- **Contact Form**: Full name, email, subject dropdown, message textarea
- **Form Validation**: Required fields with HTML5 validation + JavaScript checks
- **Google Maps**: Embedded map showing CvSU location
- **Success Alert**: Shows confirmation on form submit

## Bootstrap Components Used

| Component | Where Used |
|-----------|-----------|
| Navbar | All pages (fixed-top, dark theme) |
| Offcanvas | Mobile navigation menu |
| Cards | Products, team, testimonials, categories |
| Carousel | Product details image gallery |
| Accordion | About page values, product details specs |
| Modal | Cart checkout confirmation |
| Pagination | Products page (client-side) |
| Forms | Contact form, cart quantity inputs |
| Alerts | Cart add/remove feedback, contact success |
| Badges | Product tags, cart count, category labels |
| Buttons | Custom gradient buttons throughout |
| Breadcrumbs | Products and contact page headers |
| Input Groups | Contact form with icons |
| Table | Cart items display |

## Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom styles with Bootstrap 5.3 overrides
- **JavaScript (ES5)** - Vanilla JS, no frameworks
- **Bootstrap 5.3** - Offline (downloaded to `/lib/`)
- **Bootstrap Icons** - Offline icon font
- **localStorage** - Cart data persistence

## Cart System (localStorage)

The cart uses `localStorage` with key `unclegorg_cart`. Data format:

```json
[
  {"name": "French Baguette", "price": 85, "img": "../images/products/p1-baguette.jpg", "qty": 2},
  {"name": "Ensaymada", "price": 45, "img": "../images/products/p9-ensaymada.jpg", "qty": 1}
]
```

**How it works:**
- `products.js` and `home.js` have `addToCart()` that pushes items to the array
- `cart.js` reads the array and renders the table
- Each page's navbar shows cart item count
- Changes are saved back to localStorage after every action

## How to Run

1. Clone the repository
2. Open any `index.html` file in a browser (e.g., `home/index.html`)
3. No server required - all files are local

## Development Notes

- Each folder is self-contained (HTML + CSS + JS) for easy debugging
- Bootstrap is loaded offline from `/lib/` (no internet needed)
- Product data is defined in JavaScript arrays (not from a database)
- All product images are real Uncle George brand photos
- The `logoUncle.jpg` is the official brand logo used across all pages

---

## Debugging Scenarios (Teacher Modifications)

These are common scenarios that may change if the teacher modifies features during evaluation. Each scenario explains what breaks, why, and how to fix it.

### Scenario 1: Adding or Removing Products

**What changes:** Teacher adds a new product or removes one from the list.

**What breaks:** Products page shows wrong count, pagination breaks, or product doesn't appear.

**How to fix:**
- Open `products/products.js`
- Find the `products` array at the top
- Add or remove an object following the same format:
  ```javascript
  {name:"Product Name",price:50,img:"../images/products/filename.jpg",cat:"Loaf Breads",desc:"Short description."}
  ```
- Categories must be exactly `"Loaf Breads"` or `"Pastries"` to match the filter buttons
- If adding a new product, also add a matching image to `images/products/`
- The `perPage` variable (default 8) controls how many products show per page

### Scenario 2: Changing Product Prices

**What changes:** Teacher updates a product price.

**What breaks:** Cart total, tax calculation, or displayed price may be inconsistent.

**How to fix:**
- Prices are in three places that must match:
  1. `products/products.js` - the `products` array `price` field
  2. `home/home.js` - the `featuredProducts` array `price` field
  3. `product-details/index.html` - the hardcoded price in the HTML
- Update all three places to keep them consistent
- The cart reads price from the `products` array when "Add to Cart" is clicked

### Scenario 3: Modifying the Cart (localStorage)

**What changes:** Teacher clears browser data, switches browsers, or asks to reset the cart.

**What breaks:** Cart appears empty, or items show wrong quantities.

**How to fix:**
- Cart data is stored in `localStorage` under key `unclegorg_cart`
- To manually clear: open browser DevTools > Application > Local Storage > delete `unclegorg_cart`
- If cart shows wrong items, the JSON format must be:
  ```json
  [{"name":"French Baguette","price":85,"img":"../images/products/p1-baguette.jpg","qty":2}]
  ```
- Every cart operation (add, remove, update quantity) calls `localStorage.setItem('unclegorg_cart', JSON.stringify(cart))`
- The navbar cart count reads from the same localStorage key on every page

### Scenario 4: Changing the Logo

**What changes:** Teacher replaces the logo image file.

**What breaks:** Logo doesn't appear, shows broken image icon, or appears wrong size.

**How to fix:**
- The logo file is `images/brand/logoUncle.jpg`
- Replace this file with the new image (keep the same filename)
- All 6 pages reference `../images/brand/logoUncle.jpg` in the navbar and footer
- If the new image is a different size, adjust the `style="height:40px;width:40px;"` in the `<img>` tags
- Logo appears in 3 places per page: navbar brand, offcanvas header, and footer

### Scenario 5: Modifying the Contact Form

**What changes:** Teacher adds a new form field or changes validation rules.

**What breaks:** Form doesn't submit, validation fails unexpectedly, or data is lost.

**How to fix:**
- Contact form is in `contact/index.html`
- Validation uses HTML5 `required` attribute on inputs
- Form submission is handled by `contact/contact.js`
- The `submit` event listener calls `e.preventDefault()` to stop actual submission
- A success alert is shown using Bootstrap's alert component
- If adding a new field, add it inside the `<form id="contactForm">` with proper `required` attribute
- The subject dropdown options are hardcoded in the HTML `<select>` element

### Scenario 6: Changing Bootstrap Theme/Colors

**What changes:** Teacher asks to change the color scheme or theme.

**What breaks:** Buttons, backgrounds, or text colors look inconsistent.

**How to fix:**
- Main brand colors are defined in CSS files as:
  - Primary brown: `#D2691E`
  - Dark brown: `#8B4513`
  - Footer dark: `#2c1810`
  - Text light: `#c4a882`
- Custom button class `.btn-custom` uses gradient: `linear-gradient(135deg, #D2691E, #8B4513)`
- Page headers use: `background: linear-gradient(135deg, #5D4037, #D2691E)`
- Footer background: `style="background:#2c1810;"`
- To change colors, update these values in the respective CSS files

### Scenario 7: Adding a New Page

**What changes:** Teacher asks to add a new page (e.g., Checkout, FAQ).

**What breaks:** Navigation links are broken, or new page doesn't match the site design.

**How to fix:**
1. Create a new folder (e.g., `checkout/`)
2. Create `index.html`, `styles.css`, and `script.js` inside it
3. Copy the navbar and footer HTML from any existing page
4. Update all nav links to point to the new page
5. Add a link to the new page in the navbar of ALL 6 existing pages
6. The navbar is duplicated in each HTML file (not shared), so update all of them
7. Use the same CSS classes (`.btn-custom`, `.page-header`, `.scroll-top`) for consistency

### Scenario 8: Product Images Not Loading

**What breaks:** Product cards show broken image icons.

**How to fix:**
- Check that the image file exists in `images/products/`
- Verify the filename matches exactly what's in `products/products.js` (case-sensitive)
- Image paths in `products.js` use `../images/products/filename.jpg`
- Image paths in `product-details/index.html` use `../images/products/filename.jpg`
- If moving files, update ALL references in both JS and HTML files

### Scenario 9: Mobile Navigation Not Working

**What breaks:** Hamburger menu doesn't open on mobile.

**How to fix:**
- The offcanvas menu uses Bootstrap's offcanvas component
- Check that `data-bs-toggle="offcanvas"` and `data-bs-target="#nav"` are on the toggler button
- Check that the offcanvas div has `id="nav"` and matching `data-bs-target`
- Bootstrap JS must be loaded: `<script src="../lib/bootstrap/js/bootstrap.bundle.min.js"></script>`
- If Bootstrap JS is missing, the offcanvas won't work

### Scenario 10: Pagination Shows Wrong Products

**What breaks:** Clicking page 2 shows wrong products or no products.

**How to fix:**
- Pagination is in `products/products.js`
- `perPage` variable controls items per page (default 8)
- `currentPage` tracks which page is active
- `goPage(p)` function handles page navigation
- If products are added/removed, pagination auto-adjusts based on array length
- The `#pagination` element must exist in `products/index.html`

### Scenario 11: Fonts or Icons Not Loading

**What breaks:** Bootstrap Icons show as empty squares, or fonts look wrong.

**How to fix:**
- Bootstrap Icons font files are in `lib/bootstrap-icons/css/fonts/`
- The CSS file `lib/bootstrap-icons/css/bootstrap-icons.min.css` references fonts with relative path `fonts/`
- If icons don't show, check that the `fonts/` folder exists inside `css/` directory
- Bootstrap CSS is in `lib/bootstrap/css/bootstrap.min.css`
- Both CSS files must be linked in the HTML `<head>` section

### Scenario 12: Changing the Number of Featured Products on Home

**What changes:** Teacher wants more or fewer products on the home page.

**How to fix:**
- Featured products are in `home/home.js` in the `featuredProducts` array
- Add or remove objects from this array
- The grid uses `col-lg-2 col-md-4 col-6` classes (6 products per row on large screens)
- If changing count, consider updating the grid column classes for better layout

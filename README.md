# Uncle George Bread & Pastries - E-commerce Website

A responsive e-commerce website for **Uncle George Bread & Pastries**, a Filipino bakery brand. Built as a school project for Cavite State University using Bootstrap 5.3 (offline).

## Project Structure

Each feature is in its own folder with HTML + CSS + JS files together for easy debugging.

```
Ecommerce/
├── home/              # Landing page with hero, featured products, categories
├── products/          # Product listing with pagination
├── product-details/   # Single product view with carousel and modal
├── cart/              # Shopping cart with quantity controls and checkout
├── about/             # About page with mission/vision and team
├── contact/           # Contact form with validation
├── images/            # All images (products, brand logo, decoration)
├── lib/               # Bootstrap 5.3 (offline) + Bootstrap Icons
├── README.md
└── .gitignore
```

## Pages & Features

### 1. Home Page (`home/`)
- Responsive Navbar with logo and cart
- Hero Banner with call-to-action buttons
- Featured Products section (6 bestseller products)
- Product Categories section (Loaf Breads, Pastries)
- Promotional Banner with sale announcement
- Footer with contact info and links

### 2. Products Page (`products/`)
- Product Grid displaying 12 products
- Each product: Image, Name, Price, Description, View Details button
- Pagination (8 products per page)
- Add to Cart button on each card

### 3. Product Details Page (`product-details/`)
- Large Product Image with Carousel (4 images + thumbnails)
- Product Name, Price, Description
- Product Specifications in Accordion
- Description and Delivery & Returns in Accordion
- Size Guide Modal
- Add to Cart button

### 4. Shopping Cart Page (`cart/`)
- Product Table with image, name, price, quantity controls, subtotal
- Quantity Controls (+/- buttons)
- Remove individual items
- Order Summary with subtotal, tax (12%), grand total
- Checkout Button
- Empty state message when cart is empty
- Alert notification on cart actions
- localStorage persistence

### 5. About Page (`about/`)
- Company Logo and brand story
- Company Background section
- Mission & Vision (Cavite State University)
- Team Members (3 cards with photos and roles)
- Core Values in Accordion

### 6. Contact Page (`contact/`)
- Company Contact Information (address, phone, email, hours)
- Contact Form with Full Name, Email, Subject, Message
- Form validation with HTML5 and JavaScript
- Success alert on form submit

## Bootstrap Components Used

| Component | Where Used |
|-----------|-----------|
| Navbar | All pages (fixed-top, dark theme) |
| Offcanvas | Mobile navigation menu |
| Cards | Products, team, testimonials, categories |
| Carousel | Product details image gallery |
| Accordion | About page values, product details specs |
| Modal | Product details size guide |
| Pagination | Products page |
| Forms | Contact form |
| Alerts | Cart feedback, contact success |
| Badges | Product tags, cart count |
| Buttons | Custom gradient buttons |
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
  {"name": "French Baguette", "price": 85, "img": "../images/products/p1-baguette.jpg", "qty": 2}
]
```

- Products page and home page have `addToCart()` that pushes items
- Cart page reads the array and renders the table
- Each page navbar shows cart item count

## How to Run

1. Clone the repository
2. Open any `index.html` file in a browser
3. No server required - all files are local

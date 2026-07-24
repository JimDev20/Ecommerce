# DEBUG GUIDE - Simple Structure
# ==============================
# Each folder = ONE feature. Each folder has its own HTML + CSS + JS.
# Bootstrap is shared in /lib/ (don't touch unless Bootstrap breaks).

# FOLDER STRUCTURE
# ================
# /lib/bootstrap/          <- Bootstrap CSS+JS (OFFLINE, shared by all)
# /lib/bootstrap-icons/    <- Bootstrap Icons (OFFLINE, shared by all)
#
# /home/                   <- HOME PAGE
#   index.html             <- Page structure (hero, featured products, promo carousel, category cards)
#   home.css               <- Home-specific styles (hero, carousel, parallax)
#   home.js                <- Featured products array, addToCart, parallax scroll
#
# /products/               <- PRODUCTS PAGE
#   index.html             <- Page structure (category filter buttons, product grid)
#   products.css           <- Products-specific styles (grid, filters)
#   products.js            <- 32 products, filterCategory(), addToCart, pagination
#
# /product-details/        <- PRODUCT DETAILS PAGE
#   index.html             <- Page structure (single image, specs, size guide modal, back button)
#   details.css            <- Details-specific styles
#   details.js             <- 32 products with specs, discount system, dynamic URL-based rendering
#
# /cart/                   <- CART PAGE
#   index.html             <- Page structure (table, order summary, back button)
#   cart.css               <- Cart-specific styles (table, summary)
#   cart.js                <- Cart functions (add/remove/clear/count/render/checkout)
#
# /about/                  <- ABOUT PAGE
#   index.html             <- Page structure (story, mission/vision, team, core values)
#   about.css              <- About-specific styles (team cards, mission section)
#
# /contact/                <- CONTACT PAGE
#   index.html             <- Page structure (info card with social icons, contact form)
#   contact.css            <- Contact-specific styles (form, info card)
#   contact.js             <- Form validation and submit handler
#
# /images/                 <- All images organized by type
#   /brand/                <- Logo (logoUncle.jpg)
#   /products/             <- 32 product photos
#   /carousel/             <- Carousel background + 4 promo images
#   /categories/           <- Category images
#   /team/                 <- Team member photos (jimrie.jpg, zyrus.jpg, chezel.jpg)
#   /decoration/           <- Banners

# PRODUCT CATEGORIES
# ==================
# Loaf Breads (11): French Baguette, Whole Wheat Loaf, Whole Wheat Multigrain,
#   Butter Bread, Cheese Bread, Sandwich Pullman Loaf, Sourdough Focaccia,
#   Cranberry Walnut Bread, Hamburger Buns, Raisin Bread, Sourdough Artisan Bread
#
# Bread Rolls (11): Whole Wheat Pandesal, Egg Pandesal, Qeso Pandesal,
#   Walnut Cinnamon Ring, Mochi Bread, Mamon Rolls, Ciabatta Cheese,
#   Raisin Pan De Rosa, Ube Pandan, Mini Monay, Hotdog Rolls
#
# Pies & Pastries (4): Chicken Pie, Chunky Chicken Pie, Egg Pie, Hopia Baboy
#
# Cakes (6): Banana Cake, Banana Carrot Cake, Chocolate Cake,
#   Caramel Cake, Mango Cake, Red Velvet Chocolate Cake

# PROMO PRODUCTS (12% discount on carousel)
# ==========================================
# French Baguette, Whole Wheat Multigrain, Walnut Cinnamon Ring, Banana Cake

# PRODUCT IMAGE ASSIGNMENTS
# =========================
# Butter Bread          -> ciabattaBread.jpg
# Cheese Bread          -> cheeseLoafBread.jpg
# Sourdough Artisan     -> sourdoughArtisanBread.jpg
# Ciabatta Cheese       -> ciabattaCheese.jpg
# Mammon Rolls (₱30)    -> mamonRolls.jpg
# Walnut Cinnamon Ring  -> cinnamonRolls.jpg

# TECH NOTES
# ==========
# Cart: localStorage key = "unclegorg_cart" (no backend)
# Product details: URL param ?product=ProductName (exact match required)
# Nav cart badge: updates on addToCart in home.js, products.js, details.js
# Back button: only on Product Details and Cart pages (sub-pages)

# ERROR TRACKING
# ==============
# Problem: "Bootstrap looks wrong"     -> Check /lib/bootstrap/ (file missing?)
# Problem: "Icons missing"             -> Check /lib/bootstrap-icons/
# Problem: "Hero banner wrong"         -> Check /home/home.css
# Problem: "Product cards wrong"       -> Check /products/products.css
# Problem: "Cart doesn't work"         -> Check /cart/cart.js
# Problem: "Contact form broken"       -> Check /contact/contact.js
# Problem: "Mobile layout broken"      -> Check the page's own .css file
# Problem: "A page completely broken"  -> Check that page's folder only
# Problem: "All pages broken"          -> Check /lib/ folder (Bootstrap moved?)
# Problem: "Product details not found" -> Check ?product= URL matches name exactly
# Problem: "Image not showing"         -> Check /images/products/ filename

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
#   index.html             <- Page structure
#   home.css               <- Home-specific styles (hero, banner)
#   home.js                <- Home-specific scripts
#
# /products/               <- PRODUCTS PAGE
#   index.html             <- Page structure
#   products.css           <- Products-specific styles (grid, filters)
#   products.js            <- Product listing script
#
# /product-details/        <- PRODUCT DETAILS PAGE
#   index.html             <- Page structure
#   details.css            <- Details-specific styles (carousel, specs)
#   details.js             <- Quantity buttons, carousel logic
#
# /cart/                   <- CART PAGE
#   index.html             <- Page structure
#   cart.css               <- Cart-specific styles (table, summary)
#   cart.js                <- Cart functions (add/remove/count/render)
#
# /about/                  <- ABOUT PAGE
#   index.html             <- Page structure
#   about.css              <- About-specific styles (team, mission)
#
# /contact/                <- CONTACT PAGE
#   index.html             <- Page structure
#   contact.css            <- Contact-specific styles (form, info card)
#   contact.js             <- Form validation and submit handler
#
# /images/                 <- All images organized by type
#   /brand/                <- Logo
#   /products/             <- Product photos
#   /categories/           <- Category images
#   /team/                 <- Team member photos
#   /decoration/           <- Banners

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

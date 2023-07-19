const express = require('express')
// const path = require('path')
const router = express.Router();

const shopController = require("../controllers/shop")
const adminController = require("../controllers/admin")


router.get('/',adminController.getIndexPage)


// Product List (User) => GET
router.get('/products-list', shopController.getUserProductList);

// Product Detail => GET
router.get('/products-list/:productId',shopController.getSingleProduct)

// CART => GET
router.get('/cart', shopController.getCart);

// CART => POST
router.post('/cart', shopController.postCart);

router.post('/cart-delete-item', shopController.postCartDeleteProduct);

// ORDER => GET
router.get('/order', shopController.getOrder);



// CHECKOUT => GET
router.get('/checkout', shopController.getCheckout);

module.exports = router;

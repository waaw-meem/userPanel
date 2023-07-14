const express = require('express')
// const path = require('path')
const router = express.Router();

const shopController = require("../controllers/shop")
const adminController = require("../controllers/admin")


router.get('/',adminController.getIndexPage)


// CART => GET
router.get('/cart', shopController.getCart);

// ORDER => GET
router.get('/order', shopController.getOrder);

// CHECKOUT => GET
router.get('/checkout', shopController.getCheckout);

// Product List (User) => GET
router.get('/product-list', shopController.getUserProductList);

// Product List (admin) => GET
router.get('/admin/admin-product', shopController.getAdminProductList);

module.exports = router;

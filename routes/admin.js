const express = require('express')
// const path = require('path')
// const rootDir = require('../util/path')

const adminController = require("../controllers/admin")

const router = express.Router();

// User => GET
router.get('/add-users',adminController.getAddUsers)

// User => POST
router.post('/add-users',adminController.postAddUsers)

// Product List (admin) => GET
router.get('/admin-products', adminController.getAdminProductList);

// PRODUCTS => GET
router.get('/add-products',adminController.getAddProducts)

// PRODUCTS => POST
router.post('/add-products',adminController.postAddProducts)

// Edit => GET
router.get('/edit-product/:productId',adminController.getEditProducts)

// Edit => POST
router.post('/edit-product',adminController.postEditProduct)

// DELETE => POST
router.post('/delete-product',adminController.postDeleteProduct)

// Home => GET
router.get('/admin/add-products',adminController.getIndexPage)


module.exports = router;

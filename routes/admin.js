const express = require('express')
// const path = require('path')
// const rootDir = require('../util/path')

const adminController = require("../controllers/admin")

const router = express.Router();

// User => GET
router.get('/add-users',adminController.getAddUsers)

// User => POST
router.post('/add-users',adminController.postAddUsers)

// PRODUCTS => GET
router.get('/add-products',adminController.getAddProducts)

// PRODUCTS => POST
router.post('/add-products',adminController.postAddProducts)

// Home => GET
router.get('/admin/products',adminController.getIndexPage)





module.exports = router;

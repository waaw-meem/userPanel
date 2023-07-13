const express = require('express')
// const path = require('path')
// const rootDir = require('../util/path')

const adminController = require("../controllers/product")

const router = express.Router();

router.get('/add-users',adminController.getAddUsers)

router.post('/add-users',adminController.postAddUsers)

router.get('/add-products',adminController.getAddProducts)

router.post('/add-products',adminController.postAddProducts)

module.exports = router;

const express = require('express')
// const path = require('path')
const router = express.Router();


const adminController = require("../controllers/product")

router.get('/',userInterfaceController.getIndexPage)

module.exports = router;

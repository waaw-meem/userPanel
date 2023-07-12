const express = require('express')
const path = require('path')
const rootDir = require('../util/path')

const router = express.Router();


router.get('/add-users',(req,res,next) => {
    console.log("First Middleware")
    // res.sendFile(path.join(rootDir, 'views', 'add-users.html'))
    res.render('add-users',{
        pageTitle:'Add Users',
        path:'/admin/add-users'
    })
})

router.get('/',(req,res,next) => {
    console.log("Second Middleware")
    res.send("This is the Home Page")
})

router.get('/add-products',(req,res,next) => {
    console.log("First Middleware")
    // res.sendFile(path.join(rootDir, 'views', 'add-products.html'))
    res.render('add-products',{
        pageTitle:'Add Products',
        path:'/admin/add-products',
    })
})

router.post('/product',(req,res,next) => {
    console.log(req.body)
    res.redirect('/')
})

module.exports = router;
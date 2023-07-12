const express = require('express')
const path = require('path')
const router = express.Router();

router.get('/',(req,res,next) => {
    console.log("Second Middleware")
    // res.sendFile(path.join(__dirname, '../', 'views', 'index.html'))
    res.render('index',{
        pageTitle:'Home Page',
        path:'/',
    })
})

module.exports = router;

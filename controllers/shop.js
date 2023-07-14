const Product = require("../models/product")

// Cart Page
exports.getCart = (req,res,next) => {
    res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart'
      });
}

// Order Page
exports.getOrder = (req,res,next) => {
    res.render('shop/order', {
        path: '/order',
        pageTitle: 'Your Order'
      });
}

// Checkout Page
exports.getCheckout = (req,res,next) => {
    res.render('shop/checkout', {
        path: '/checkout',
        pageTitle: 'Your Checkout'
      });
}

// Product User List
exports.getUserProductList = (req,res,next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list',{
        prods:products,
        pageTitle:'User Products',
        path:'/product-list',
    })
})
}

// ADMIN LIST PRODUCTS
exports.getAdminProductList = (req,res,next) => {
    res.render('admin/admin-list', {
        path: '/admin/admin-product',
        pageTitle: 'Admin List'
      });
}
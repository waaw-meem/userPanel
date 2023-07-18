const Product = require("../models/product")
const Cart = require("../models/cart")

// Product User List
exports.getUserProductList = (req,res,next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list',{
        prods:products,
        pageTitle:'User Products',
        path:'/products-list',
    })
})
}

// Get single Product
exports.getSingleProduct = (req,res,next) => {
  const prodID = req.params.productId;
  Product.findByID(prodID,product => {
    res.render('shop/product-detail',{
      product:product,
      pageTitle:'User Products',
      path:'/products-list',
  })
  })
}


// Cart Page
exports.getCart = (req,res,next) => {
    res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart'
      });
}


exports.postCart = (req,res,next) => {
  const prodID = req.body.productId;
  Product.findByID(prodID, product => {
    Cart.addProduct(prodID,product.price)
  })
  res.redirect('/cart')
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

// ADMIN LIST PRODUCTS
exports.getAdminProductList = (req,res,next) => {
    res.render('admin/admin-list', {
        path: '/admin/admin-product',
        pageTitle: 'Admin List'
      });
}
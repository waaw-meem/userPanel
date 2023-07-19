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


exports.getCart = (req, res, next) => {
  Cart.getCart(cart => {
    Product.fetchAll(products => {
      const cartProducts = [];
      for (singleProduct of products) {
        const cartProductData = cart.products.find(
          prod => prod.id === singleProduct.id
        );
        if (cartProductData) {
          cartProducts.push({ productData: singleProduct, qty: cartProductData.qty });
        }
      }
      res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart',
        products: cartProducts
      });
    });
  });
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findByID(prodId, singleProduct => {
    Cart.addProduct(prodId, singleProduct.totalPrice);
  });
  res.redirect('/cart');
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findByID(prodId, product => {
    Cart.deleteProduct(prodId, product.totalPrice);
    res.redirect('/cart');
  });
};



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
const Product = require("../models/product")

// Add User Page Form
exports.getAddUsers = (req,res,next) => {
    res.render('admin/add-users',{
        pageTitle:'Add Users',
        path:'/admin/add-users'
    })
}

// Post Add User
exports.postAddUsers = (req,res,next) => {
    res.send("This is the Home Page")
}

// POST ADD PRODUCT
exports.postAddProducts = (req,res,next) => {
    // fs.writeFileSync('message.txt',productsList)
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;

    const product = new Product(title,imageUrl,price,description);
    product.save()
    res.redirect('/')
}

// Get Add Products
exports.getAddProducts = (req,res,next) => {
    // res.sendFile(path.join(rootDir, 'views', 'add-products.html'))
    res.render('admin/edit-product',{
        pageTitle:'Add Products',
        path:'/admin/add-products',
        editing:false
    })
}

exports.getEditProducts = (req,res,next) => {
    const editMode = req.query.edit;
    if (!editMode) {
      return res.redirect('/');
    }
    const prodId = req.params.productId;
    Product.findByID(prodId, product => {
      if (!product) {
        return res.redirect('/');
      }
      res.render('admin/edit-product', {
        pageTitle: 'Edit Product',
        path: '/admin/edit-product',
        editing: editMode,
        product: product
      });
    });
}


// ADMIN PRODUCT LIST
exports.getAdminProductList = (req,res,next) => {
    Product.fetchAll(products => {
              res.render('admin/admin-list', {
                  path: '/admin/admin-products',
                  pageTitle: 'Admin List',
                  prods:products,
                });
          })
  }


// HOME PAGE
exports.getIndexPage = (req,res,next) => {
    // res.sendFile(path.join(__dirname, '../', 'views', 'index.html'))
    Product.fetchAll(products => {
        res.render('shop/index',{
            prods:products,
            pageTitle:'Home Page',
            path:'/',
        })
    })
}

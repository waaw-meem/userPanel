const Product = require("../models/product")

// Add User Page Form
exports.getAddUsers = (req,res,next) => {
    // res.sendFile(path.join(rootDir, 'views', 'add-users.html'))
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
    })
}

exports.getEditProducts = (req,res,next) => {
    const prodId = req.params.productId
    Product.findByID(prodId,product => {
        res.render('admin/edit-product',{
            pageTitle:'Add Products',
            path:'/admin/add-products',
            product:product
        })
    })
}

// Home Page
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

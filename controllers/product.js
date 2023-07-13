const products = [];

exports.getAddUsers = (req,res,next) => {
    // res.sendFile(path.join(rootDir, 'views', 'add-users.html'))
    res.render('add-users',{
        pageTitle:'Add Users',
        path:'/admin/add-users'
    })
}

exports.postAddUsers = (req,res,next) => {
    res.send("This is the Home Page")
}

exports.getAddProducts = (req,res,next) => {
    // res.sendFile(path.join(rootDir, 'views', 'add-products.html'))
    res.render('add-products',{
        pageTitle:'Add Products',
        path:'/admin/add-products',
        hasProducts: products.length > 0,
    })
}

exports.postAddProducts = (req,res,next) => {
    // fs.writeFileSync('message.txt',productsList)
    products.push({title: req.body.title})

    res.redirect('/')
}

exports.getIndexPage = (req,res,next) => {
    // const products = productController.products;
    // res.sendFile(path.join(__dirname, '../', 'views', 'index.html'))
    res.render('index',{
        prods:products,
        pageTitle:'Home Page',
        path:'/',

    })
}
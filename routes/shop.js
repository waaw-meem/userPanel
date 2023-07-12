app.post('/product',(req,res,next) => {
    console.log(req.body)
    res.redirect('/')
})
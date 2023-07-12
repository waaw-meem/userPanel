app.post('/users',(req,res,next) => {
    console.log(req.body)
    res.redirect('/')
})
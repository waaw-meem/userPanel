exports.getError = (req,res,next) => {
    res.status(404).render('404page',{
        pageTitle:'404 page',
        path:req.path,
    })
}
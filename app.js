const express = require('express');
const bodyParser = require('body-parser');
const adminPanel = require("./routes/admin")
const userPanel = require("./routes/user")
const path = require('path')
const rootDir = require('./util/path')

const app = express();

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')))

app.set('view engine','ejs')
app.set('views','views')

app.use('/admin',adminPanel)
app.use(userPanel)

app.use((req,res,next) => {
    res.status(404).render('404page',{
        pageTitle:'404 page'
    })
})

app.listen(3000)


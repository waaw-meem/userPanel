const express = require('express');
const bodyParser = require('body-parser');
const adminPanel = require("./routes/admin")
const userPanel = require("./routes/user")
const path = require('path')
const rootDir = require('./util/path')
const errorController = require("./controllers/error")

const app = express();

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')))

app.set('view engine','ejs')
app.set('views','views')

app.use('/admin',adminPanel)
app.use(userPanel)

app.use(errorController.getError)

app.listen(3000)


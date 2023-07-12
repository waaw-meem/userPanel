const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded())




app.get('/',(req,res,next) => {
    console.log("Second Middleware")
    res.send("This is the Home Page")
})

app.listen(3000)


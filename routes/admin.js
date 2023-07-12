app.get('/add-users',(req,res,next) => {
    console.log("First Middleware")
    res.send("<form action='/users' method='POST'><input type='text' name='uname'/><button>Submit</button</form>")
})

app.get('/add-products',(req,res,next) => {
    console.log("First Middleware")
    res.send("<form action='/product' method='POST'><input type='text' name='title'/><button>Submit</button</form>")
})
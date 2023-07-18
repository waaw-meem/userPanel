const fs = require('fs');
const path = require('path')

// We are attach a path where our data save
const p = 
path.join(path.dirname(process.mainModule.filename),
'data',
'product.json')

const getProductFromFile = cb => {
    fs.readFile(p, (err,fileContent) => {
        if(err){
           return cb([])
        }
        cb(JSON.parse(fileContent))
       })
}

// Class Product
module.exports = class Product {
    constructor(title,imageUrl,price,description,){
        // this.id = id,
        this.title = title,
        this.imageUrl = imageUrl,
        this.price = price,
        this.description = description
    }
    // save method for data
    save(){
       this.id = Math.random().toString();
       getProductFromFile(products => {
        products.push(this)
        fs.writeFile(p, JSON.stringify(products), (err) => {
            console.log(err)
        });
       })
       // Now read old content we use readFile method here
       // Either we get a error or FileContent
    //    fs.readFile(p, (err,fileContent) => {
    //     let products = [];
    //     if(!err){
    //         products = JSON.parse(fileContent)
    //     }
    //    })
    }

     // See All method for data
    static fetchAll(cb){
      getProductFromFile(cb)

    }

    static findByID(id,cb){
        getProductFromFile(products =>{
            const product = products.find(p => p.id === id);
            cb(product)
        })
    }
}
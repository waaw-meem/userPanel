const fs = require('fs');
const path = require('path')

const Cart = require('./cart')

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
    constructor(id,title,imageUrl,price,description,){
        this.id = id,
        this.title = title,
        this.imageUrl = imageUrl,
        this.price = price,
        this.description = description
    }
    // save method for data
    save(){
       getProductFromFile(products => {
        if(this.id){
            const existingProductIndex = products.findIndex(p => p.id === this.id)
            const updatedProduct = [...products]
            updatedProduct[existingProductIndex] = this;
            fs.writeFile(p, JSON.stringify(updatedProduct), (err) => {
                console.log(err)
            });
        }else{
        this.id = Math.random().toString();
        products.push(this)
        fs.writeFile(p, JSON.stringify(products), (err) => {
            console.log(err)
        });
    }
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


    static deleteById(id) {
        getProductFromFile(products => {
          const product = products.find(prod => prod.id === id);
          const updatedProducts = products.filter(prod => prod.id !== id);
          fs.writeFile(p, JSON.stringify(updatedProducts), err => {
            if (!err) {
              Cart.deleteProduct(id, product.price);
            }
          });
        });
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
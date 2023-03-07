const fs = require('fs');
const { get } = require('http');
const path = ('./info.json');
class ProductManager {
    productArr = []
    constructor(){
        this.path = path

    }
    addProduct(title,description,price,thumbnail,code,stock){
        const product = {
            id: this.productArr.length,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }
        const data = JSON.stringify(product)
        this.productArr.push(data);
        console.log("===============");
        
    const addData = async() =>{
    try {
        const data = await fs.promises.writeFile('./info.json',this.productArr); 

    } catch (error) {
        console.log(error);
    }
        }
        addData();
        console.log("Se agregó el producto");
}
    getProducts(){
        const getData = async() =>{
            try {
                const data = await fs.promises.readFile('./info.json');
                const objData = JSON.parse(data);
                this.productArr.push(data);
                console.log(objData);
            } catch (error) {
                
            }
        }
       getData();
    }
}

const newProduct = new ProductManager();
newProduct.addProduct('Orange','An orange fruit',50,'Default','ABC123',50)
newProduct.addProduct('Banana','A banana',75,"Default",'ABC124',15)
newProduct.getProducts();

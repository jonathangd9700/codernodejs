const fs = require('fs');
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
        return console.log("Funciona");
    } catch (error) {
        console.log(error);
    }
        }
        addData();
}
}

const newProduct = new ProductManager();
newProduct.addProduct('Orange','An orange fruit',50,'Default','ABC123',50)
newProduct.addProduct('Banana','A banana',75,"Default",'ABC124',15)
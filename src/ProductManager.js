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
        this.productArr.push(product);
        console.log("===============");
        
    const addData = async() =>
        {
        const dataStr = JSON.stringify(this.productArr)
        const data = await fs.promises.writeFile(this.path,dataStr); 
        }
        addData();
        console.log("Se agregó el producto");
}
    getProducts()
    {
        const getData = async() =>
            {
                const data = await fs.promises.readFile(this.path,'utf-8');
                const dataParse = JSON.parse(data);
                console.log("Trayendo los productos en formato arreglo");
                console.log(dataParse);
            }
        getData();
    }
    getProductById(id)
    {
        const getDataId = async() =>{
            const data = await fs.promises.readFile(this.path,'utf-8');
            const dataParse = JSON.parse(data);
            const idFind = dataParse.find(element=>element.id == id)
            console.log(idFind);
        }
        getDataId()
    }


}



const newProduct = new ProductManager();
// newProduct.addProduct('Orange','An orange fruit',50,'Default','ABC123',50)
// newProduct.addProduct('Banana','A banana',75,"Default",'ABC124',15)
// newProduct.getProducts();
newProduct.getProductById(1);




module.exports= ProductManager;
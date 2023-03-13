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
    async getProducts()
    {
        const data = await fs.promises.readFile(this.path,'utf-8');
        const dataParse = JSON.parse(data);
        return dataParse;
    }
    async getProductById(pid)
    {
        const data = await fs.promises.readFile(this.path,'utf-8');
        const dataParse = JSON.parse(data);
        const idFind = dataParse.find(element=>element.id == pid)
        return idFind;
        const getDataId = async() =>{

        }
        console.log("Producto encontrado por id \n");
        getDataId()
    }
    deleteProduct(id)
    {
        const getDataId = async() =>{
            const data = await fs.promises.readFile(this.path,'utf-8');
            const dataParse = JSON.parse(data);
            const idIndex = dataParse.findIndex(e => e.id == id);
            if(idIndex!= -1){
                dataParse.splice(idIndex);
                const dataDeleted = JSON.stringify(dataParse);
                console.log('Producto eliminado');
                return await fs.promises.writeFile(this.path,dataDeleted);
            }
            else
            {
                console.log("No se encuentra");
            }


        }
        getDataId()
    }

}



const newProduct = new ProductManager();
// First you need to add products
//=========================================================

// newProduct.addProduct('Orange','An orange fruit',50,'Default','ABC123',50)
// newProduct.addProduct('Banana','A banana',75,"Default",'ABC124',15)
// newProduct.addProduct('Apple','An apple fruit',25,'Default','ABC125',50)
// newProduct.addProduct('Lemon','A lemon',15,"Default",'ABC126',15)

//Then you can use methods getProducts, getProductsById and deleteProduct

// newProduct.getProducts();



// newProduct.deleteProduct(1);

//After you delete a product, now you can check with getProducts

// newProduct.getProducts();




module.exports= ProductManager;
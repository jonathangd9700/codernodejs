const fs = require('fs');
const path = ('./products.json');
class ProductManager {
    constructor(){
        this.path = path
    }
    addProduct(product){
        // const product = {
        //     id: idProduct,
        //     title,
        //     description,
        //     price,
        //     thumbnail,
        //     code,
        //     stock
        // }
        const products = fs.readFileSync('./products.json');
        const dataProduct = JSON.parse(products)
        dataProduct.push(product);

        console.log("===============");
        const dataStr = JSON.stringify(dataProduct);
        const dataWrite = fs.writeFileSync(this.path,dataStr);
    // const addData = async() =>
    //     {
    //     const dataStr = JSON.stringify(this.productArr)
    //     const data = await fs.promises.writeFile(this.path,dataStr); 
    //     }
    //     addData();
    //     console.log("Se agregó el producto");
}
    getProducts(limit)
    {
        const data = fs.readFileSync(this.path,'utf-8');
        const dataParse = JSON.parse(data);
        if (limit != "") {
            const resultQueries = dataParse.slice(0,limit);
//         res.json({limitList : resultQueries});
            console.log(`Mostrando limite de ${limit} productos`);
            return resultQueries;
        }
        if (limit== " ") {
            console.log("Mostrando todos los productos");
            return dataParse;
        }

    }
    getProductById(pid)
    {
        const data = fs.readFileSync(this.path,'utf-8');
        const dataParse = JSON.parse(data);
        const idFind = dataParse.find(element=>element.id == pid)
        if (idFind != undefined) {
            console.log(`Producto con id: ${pid} encontrado`);
            return idFind;
        }
        else{
            console.log((`El producto no se encuentra`));
        }
        
        // const getDataId = async() =>{

        // }
        // console.log("Producto encontrado por id \n");
        // getDataId()
    }
    deleteProduct(id)
    {
        // const getDataId = async() =>{
            const data = fs.readFileSync(this.path,'utf-8');
            const dataParse = JSON.parse(data);
            const idIndex = dataParse.findIndex(e => e.id == id);
            if(idIndex!= -1){
                dataParse.splice(idIndex);
                const dataDeleted = JSON.stringify(dataParse);
                console.log('Producto eliminado');
                return fs.writeFileSync(this.path,dataDeleted);
            }
            else
            {
                console.log("No se encuentra");
            }


        // }
        // getDataId()
    }

}



// const newProduct = new ProductManager();
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
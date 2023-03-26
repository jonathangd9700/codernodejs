const fs = require('fs');
const path = ('./products.json');
class ProductManager {
    constructor(){
        this.path = path
    }
    addProduct(product){
        const products = fs.readFileSync('./products.json');
        const dataProduct = JSON.parse(products);
        const id = dataProduct.length;
        const newProduct = product;
        const newProductId = id > 0 ? dataProduct[id - 1].id : 0;
        newProduct.id = newProductId + 1;
        dataProduct.push(newProduct);

        console.log("===============");
        const dataStr = JSON.stringify(dataProduct);
        const dataWrite = fs.writeFileSync(this.path,dataStr);

}
    getProducts(limit)
    {
        const data = fs.readFileSync(this.path,'utf-8');
        const dataParse = JSON.parse(data);
        if (limit != "") {
            const resultQueries = dataParse.slice(0,limit);
            console.log(`Mostrando limite de ${limit} productos`);
            return resultQueries;
        }
        if (limit== "") {
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
        
    }
    deleteProduct(id)
    {
            const data = fs.readFileSync(this.path,'utf-8');
            const dataParse = JSON.parse(data);
            const idIndex = dataParse.findIndex(e => e.id == id);
            if(idIndex!= -1){
                dataParse.splice(idIndex,1);
                const dataDeleted = JSON.stringify(dataParse);
                console.log('Producto eliminado');
                return fs.writeFileSync(this.path,dataDeleted);
            }
            else
            {
                console.log("No se encuentra");
            }

    }

}


module.exports= ProductManager;
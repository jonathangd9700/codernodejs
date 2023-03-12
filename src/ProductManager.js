// const express = require('express');
// const app = express();
// app.use(express.urlencoded({extended: true}));

// const port = 8080;
// const users = [
//     {
//     id: 1,
//     nombre: "Juan",
//     edad: 20,
//     genero: "M"
//     },
//     {
//         id: 2,
//         nombre: "Jorge",
//         edad: 50,
//         genero: "M"
//     },
//     {
//         id: 3,
//         nombre: "Romualdo",
//         edad: 20,
//         genero: "M"
//     },
//     {
//         id: 4,
//         nombre: "Mochito",
//         edad: 22,
//         genero: "F"
//     }
// ]



// // app.get('/',(req,res)=>{
// //     res.json({message: users})
// // }
// // )

// // app.get('/:userid',(req,res)=>{

// //     const valorParam = req.params.userid;
// //     const encontrado = users.find(element => element.id == valorParam)
// //     if (encontrado == undefined) 
// //     {
// //         res.send("No se encontro")

// //     }

// //     else{
// //         res.json(encontrado)
// //         res.send(valorParam)
// //     }

// // })

// app.get('/genero',(req,res)=>{
// const {gen} = req.query
// const queries = {
//     gen
// }
// if(queries.gen == 'm' || queries.gen== 'M'){
//     const result = users.filter(element => element.genero == 'M')
//         console.log(result);
//         res.json({message: result})
// }
// else if (queries.gen == 'f' || queries.gen == 'F') {
//     const result = users.filter(element => element.genero == 'F')
//     console.log(result);
//     res.json({message: result})
// } else {
//     res.json({message: 'No se encuentra'})
// }
// // else{
// //     res.json({message: 'no se encuentra'})
// // }
// console.log(queries);

// })

// app.listen(port,()=>{
//     console.log(`Servidor escuchando en el puerto ${port}`);
// })

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
    // getProducts()
    // {
    //     const getData = async() =>
    //         {
    //             const data = await fs.promises.readFile(this.path,'utf-8');
    //             const dataParse = JSON.parse(data);
    //             console.log("Trayendo los productos en formato arreglo");
    //             console.log(dataParse);
    //         }
    //     getData();
    // }
    getProductById(id){
        const getDataId = async() =>{
            const data = await fs.promises.readFile(this.path,'utf-8');
            const dataParse = JSON.parse(data);
            this.productArr.push(dataParse);
            const idFind = this.productArr[0].find(element => element.id == id)
            console.log(idFind);
        }
        getDataId();
    }
}

const newProduct = new ProductManager();
// newProduct.addProduct('Orange','An orange fruit',50,'Default','ABC123',50)
// newProduct.addProduct('Banana','A banana',75,"Default",'ABC124',15)
// newProduct.getProducts();

newProduct.getProductById(0);



module.exports= ProductManager;
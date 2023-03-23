const {Router} = require('express');
const router = Router();
const productManager = require('../ProductManager')
const newProduct = new productManager();


router.get('/', (req, res) => {
    const {limit} = req.query;
    const queries = {
        limit
    }
    const showProducts = newProduct.getProducts(limit);
    // if (limit == "") {
    //    return res.json({product: products})
    // }
    // if (limit != "") {
    //     const resultQueries = products.slice(0,queries.limit);
    //     res.json({limitList : resultQueries});
    // }
    res.status(200).json({message: showProducts})
  })

  router.get('/:pid',(req,res)=>{
    const {pid} = req.params;
    const pidFind = newProduct.getProductById(pid);
    // const idFind = products.find(element=>element.id == pid)
    res.json({message: pidFind});
})

router.post('/',(req,res)=>{
    const {
        title,
        description,
        code,
        price,
        status,
        stock,
        category,
        thumbnail} = req.body;
        const product = {title,description,code,price,status: true,stock,category,thumbnail
        }
        try{
            newProduct.addProduct(product);
            res.status(200).json({message: `producto agregado con exito`,products:product});
        }
        catch{
            console.log("error");
        }

})
router.delete('/:pid',(req,res)=>{

    const {pid} = req.params;
    newProduct.deleteProduct(pid);
    // const idIndex = products.findIndex(element =>element.id == pid);
    try {
        res.status(200).json({message: `producto con id: ${pid} eliminado con exito`});
    } catch (error) {
        res.status(400).json({message: `producto con id: ${pid} no se encuentra`});
        console.log(error);
    }
    // if (idIndex!= -1) {
    //     products.splice(idIndex,1);
    //    res.json({message: 'Producto eliminado'});
    // }
    // else{
    //     res.json({message: 'Producto no encontrado'})
    // }
})



module.exports = router;
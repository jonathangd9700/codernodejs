const {Router} = require('express');
const router = Router();
const productManager = require('../ProductManager')
const newProduct = new productManager();
const fs = require('fs');

const PathCss = 'home.css'

router.get('/', (req, res) => {
    const {limit} = req.query;
    const showProducts = newProduct.getProducts(limit);
    // const showProductsStr = JSON.stringify(showProducts)
    res.status(200).render('home.handlebars', {showProducts, path:PathCss});
    // res.status(200).json({message: showProducts})
  })

  router.get('/:pid',(req,res)=>{
    const {pid} = req.params;
    const pidFind = newProduct.getProductById(pid);
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
    try {
            res.status(200).json({message: `producto con id: ${pid} eliminado con exito`}); 

    } catch (error) {
        res.status(404).json({message: `producto con id: ${pid} no se encuentra`});
        console.log(error);
    }
})



module.exports = router;
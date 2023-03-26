const {Router} = require('express');
const router = Router();
const cartManager = require('../CartManager');
const newCartManager = new cartManager();

router.post('/',(req,res)=>{
    const carts = newCartManager.createCart();
    res.status(200).json({message: "Creado con exito"})
})

router.get('/:cid',(req,res)=>{
    const cid = req.params.cid;
    const showCart = newCartManager.getCart(cid);

    res.status(200).json({message: showCart});
})

router.post('/:cid/product/:pid', (req, res) => {
    const cid = req.params.cid
    const pid = req.params.pid
  
    try {
      newCartManager.addProductToCart(cid, pid)
      res.status(200).send({message: `producto agregado al carrito `})
    } catch (error) {
      console.error(error)
      res.status(404).send({message: `error al agregar el producto`})
    }
  })

module.exports = router;
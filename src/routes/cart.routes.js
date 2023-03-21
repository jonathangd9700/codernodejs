const {Router} = require('express');
const router = Router();
const carts = [];
let idCart = 0;

router.post('/',(req,res)=>{
    const newCart = {cid: idCart, products: []};
    newCart.id = idCart++;
    carts.push(newCart);
})

router.get('/:cid',(req,res)=>{
    const {cid} = req.params;
    const cartFind = carts.find(cart => cart.id == cid);
    res.json({message: cartFind});
})

router.post('/:cid:/product/:pid',(req,res)=>{
    
})

module.exports = router;
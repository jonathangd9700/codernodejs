const {Router} = require('express');
const router = Router();
const productManager = require('../ProductManager');
const newProduct = new productManager();


    router.get('/', (req,res)=>{
        res.render('realTimeProducts.handlebars')
    })




module.exports = router;
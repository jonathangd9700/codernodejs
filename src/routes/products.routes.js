const {Router} = require('express');
const router = Router();
const products = [];
let idProduct = 0;

router.get('/', (req, res) => {
    const {limit} = req.query;
    const queries = {
        limit
    }

    if (limit == "") {
       return res.json({product: products})
    }
    if (limit != "") {
        const resultQueries = products.slice(0,queries.limit);
        res.json({limitList : resultQueries});
    }

  })

  router.get('/:pid',(req,res)=>{
    const {pid} = req.params;
    const idFind = products.find(element=>element.id == pid)
    res.send({message: idFind});
})

router.post('/',(req,res)=>{
    const {title, description,code,price,status,stock,category,thumbnails}=req.body
    const newProduct = {id: idProduct, title,description,code,price,status: true,stock,category,thumbnails};
    newProduct.id = idProduct++;
    products.push(newProduct);
    res.json({message: "producto agregado"});
})
router.delete('/:pid',(req,res)=>{
    const {pid} = req.params;
    const idIndex = products.findIndex(element =>element.id == pid);
    if (idIndex!= -1) {
        products.splice(idIndex,1);
       res.json({message: 'Producto eliminado'});
    }
    else{
        res.json({message: 'Producto no encontrado'})
    }
})



module.exports = router;
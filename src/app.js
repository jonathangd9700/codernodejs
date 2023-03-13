const ProductManager = require("./ProductManager");
const newProduct = new ProductManager();
const express = require('express');
const app = express();
app.use(express.urlencoded({extended: true}));

const port = 8080;

app.get('/products', async (req, res) => {

    const products = await newProduct.getProducts();
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

app.get('/products/:pid',async(req,res)=>{
    const {pid} = req.params;
    const products = await newProduct.getProductById(pid);
    res.send({productos: products});
})

app.listen(port,()=>{
    console.log(`Server listening at port ${port}`);
})
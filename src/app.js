const ProductManager = require("./ProductManager");
const express = require('express');
const app = express();
app.use(express.urlencoded({extended: true}));

const port = 8080;

app.listen(port,()=>{
    console.log(`Server listening at port ${port}`);
})
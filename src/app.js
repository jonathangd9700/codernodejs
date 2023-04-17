const ProductManager = require("./ProductManager");
const newProduct = new ProductManager();
const express = require('express');
const handlebars = require('express-handlebars');
const app = express();
const cartRouter = require('./routes/cart.routes');
const realtimeproductsRouter = require('./routes/realtimeproducts.routes');
const productsRouter = require('./routes/products.routes')
const { Server } = require('socket.io');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'))

app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('views handlebars', 'handlebars');





const port = 8080;

app.use('/api/carts',cartRouter);

app.use('/api/products',productsRouter);

app.use('/realtimeproducts',realtimeproductsRouter)

// app.listen(port,()=>{
//     console.log(`Server listening at port ${port}`);
// })

const httpServer = app.listen(port,()=>{
    console.log(`Server running at por ${port}`);
})

const io = new Server(httpServer);

io.on('connection', socket=>{
    console.log('Cliente conectado');
    io.emit('mensajeServidor',"Cliente conectado")

    io.emit('productos', newProduct.getProducts())
})

const fs = require('fs');
const path = ('./carts.json');
const data = fs.readFileSync(path);
class CartManager {
    createCart(){
        const dataObj = JSON.parse(data);
        console.log("agregado");
        console.log(dataObj);
        const newCart = { products: []};
        const id = dataObj.length;
        const newCartId = id > 0 ? dataObj[id - 1].cid : 0;
        newCart.cid = newCartId + 1;
        dataObj.push(newCart);
        const dataStr = JSON.stringify(dataObj);
        fs.writeFileSync(path,dataStr);
        
    }
    getCart(cid){
        const dataObj = JSON.parse(data);
        const cartFind = dataObj.find(cart => cart.cid == cid);
        if (cartFind != undefined) {
            console.log("Carrito encontrado");
            return cartFind
        }
        console.log("Carrito no encontrado");
    }

    addProductToCart(cid,pid){
        const dataProduct = fs.readFileSync('./products.json','utf-8');
        const dataCartObj = JSON.parse(data);
        const dataProductObj = JSON.parse(dataProduct);
        const cartFind = dataCartObj.find(cart => cart.cid == cid);
        const prodFind = dataProductObj.find(prod => prod.id == pid)
        const cartProductIndex = cartFind.products.findIndex(prod => prod.product == pid)
        //Obtengo el index del array products, el elemento product que es el array, donde contiene el ID del producto, sea igual al PID que le paso por parametro. Si no devuelve -1 (Es decir que lo encuentra), incrementa el campo quantity, pero si no lo encuentra envia el id del producto encontrado y crea el key quantity con value 1 para luego ir incrementandolo
        if(cartProductIndex !== -1){
            cartFind.products[cartProductIndex].quantity++
          }else{
            cartFind.products.push({
                product: prodFind.id,
                quantity: 1
            })
          }

        fs.writeFileSync(path,JSON.stringify(dataCartObj));

        // Porque al hacer push en cartFind.Products, me está afectando al dataCartObj? Es decir, al hacer el fs.write se envía actualizado no entiendo como. No debería hacerle un push directamente al dataCartObj? Lo probé y no entiendo porqué no funciona. 
        //Me falta agregar el quantity y el updateProducts. Y que al agregar el producto al carrito solo se agregue el id

    }

}

module.exports= CartManager;
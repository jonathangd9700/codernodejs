const socket = io();

socket.on('mensajeServidor',message =>{
    console.log(message);
}) 

socket.on('productos',productos=>{
    console.log(productos);
})
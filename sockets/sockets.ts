import { Socket } from "socket.io";
import socketIo from 'socket.io';


export const desconectar= (cliente:Socket)=>{
    cliente.on('disconnect',()=>{
        console.log('cliente desconectado');
    })
}
//Escuchar Mensajes
export const mensaje = (cliente:Socket,io:socketIo.Server)=>{
    cliente.on('mensaje',(payload:{de:string, cuerpo:string})=>{
        console.log('mensaje recibido', payload);

        io.emit('mensaje-nuevo', payload)
    });
}
import { EventEmitter } from "node:events"

class MyEventEmitter extends EventEmitter{}

const myEmiter = new MyEventEmitter()

//Crear un listener
myEmiter.on("new_user", (data)=>{
    console.log("Hemos recibido el evento " + data)
} )

myEmiter.once("new_user", (data)=>{
    console.log("Esto se ejecutara una sola vez, datos: " + data)
})

myEmiter.emit("new_user",  "Juanito se ha registrado")
myEmiter.emit("new_user",  "Jose se ha registrado")

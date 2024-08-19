

//variables
function variables(){
    //var 
    var edad = 10;
    if (edad <= 10){
        let edad = 5;
        console.log(edad); 
    }
    console.log(edad)
    // const
    const IVA = 0.12;
    //IVA = 0.15;
}
try{
    variables()
}catch(err){
    console.error(err)
}
function condicionales(){
    let edad = 17;
    if (edad < 18){
        console.log("Es menor de edad")
    }
    else{
        console.log("Es mayor de edad")
    }
    switch(edad){
        case 17: 
            console.log("Tienes 17 anios")
            break;
        case 18:
            console.log("Tienes 18 anios")
            break;
        default:
            console.log("No pude determinar tu edad")
            break;
    }
}
//condicionales()

function loops(){
 //for
 for (let i=0; i<10; i++){
    console.log(i)
 }
 let continueLoop = true;
 let count = 0;
 while(continueLoop){
    console.log("Dentro del while")
    count ++;
    if (count === 10){
        continueLoop = false
    }
 }

 //foreach
 let numbers = [1, 3, 5, 6, '5', '6']
 numbers.forEach(function (element){
    console.log(element)
 })
 let por_cada_iteracion_hacer= function(element){
    console.log("Esto se ejecuta")
 }
 numbers.forEach(por_cada_iteracion_hacer)
 //for in 
 let car = {
    color: "Azul",
    marca: "Nissan",
    modelo: "2020"
 }
 for (key in car){
    console.log(key + ": " + car[key])
 }

}
//loops()

function objects(){
    let car = {
        color: "Azul",
        marca: "Nissan",
        modelo: "2020",
        "cantidad-de-puertas": 5,
        array: [
            1, 2, 5, 6
        ],
        otras_caracteristicas: {
            "Estereo": "Dolby Surround",
            "Polarizado": "Oscuro"
        },
        function: function(datos){
            console.log(datos)
        },
        name: "Carro de Marco Tulio"
     }
     //Deconstructores
     console.log(car.color);
     console.log(car["color"])
     let {marca, modelo} = car;
     console.log(car.otras_caracteristicas.Estereo)
     //Spread operators
     let mi_otro_carro = {
        ...car,
        array: [...car.array],
        otras_caracteristicas: {
            ...car.otras_caracteristicas
        }
     };
     mi_otro_carro.name = "Carro de Kevin";
     console.log(car.name)
     console.log(mi_otro_carro.name)
     let micadena ="mi cadena";
     let micadena2 = micadena;
     micadena2 = "cadena cambiadas";
     console.log(micadena, micadena2);
}

//objects()

function arreglos (){
    let miArreglo = [1,2,3,4,5, 6, 7]
    let miOtroArreglo = [1,'2','5',{demo:2}]
    let matriz = [[1,2,3], [1,4,3], [1,5,6]]
    let matriz3Dimensiones = [[[1,3,2], [1,3,4]], [[1,2,4], [4,2,1]]]
    
    for (let i=0; i<miArreglo.length; i++){
        console.log(miArreglo[i])
    }
    //filter basado en una condicion nos devulve un array 
    //con los valores filtrados
    let filtrados = miArreglo.filter(function(elemento){
        return elemento > 5
    })
    //index of 
    let indexOf2 = miOtroArreglo.indexOf(5)
    console.log(filtrados)
    console.log(indexOf2)

    //map convierte uno por uno y devuelve el resultado
    let al_cuadrado = miArreglo.map((elemento)=>{
        return Math.pow(elemento, 2);
    })
    console.log(al_cuadrado)
}

//arreglos()

let form = document.getElementById('form-send')

form.addEventListener('submit', function(event){
  event.preventDefault();
  let formValues = new FormData(event.target);
  console.log(formValues.get("name"))
  console.log(formValues.get("dob"))
  if (formValues.get("name").length === 0){
    alert("El nombre no puede estar vacio");
    return;
  }

  console.log('el formulario se ha enviado')
  alert("Los datos son correctos")

})

let manejarClickDeCargarScript = (e)=>{
    console.log("Hola desde script externo")
    let script = document.createElement("script")
    script.src = "script_dynamic.js"
    document.body.appendChild(script)
}

document.getElementById('cargar-script').addEventListener('click', manejarClickDeCargarScript)
document.getElementById('cargar-script-2').addEventListener('click', manejarClickDeCargarScript)

//callbacks o funciones como parametro

let miFuncion = function(){
    alert("Hola desde mi funcion")
}

//miFuncion()

function peticionAsincrona(){
    let xhr = new XMLHttpRequest()
    let resultado = {}
    let callbackResultadoXHR =function(){
        if (xhr.readyState === 4 && xhr.status === 200){
            //Transformamos el texto a objetos de javascript
            //resultado = JSON.parse(xhr.responseText)
            console.log(xhr.responseText)  
        }
    }
    xhr.onreadystatechange = callbackResultadoXHR 
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts')
    xhr.send()
}

//peticionAsincrona()

function peticionAsincronaFetchConPromises(){
    let fetchResult = fetch('https://jsonplaceholder.typicode.com/posts')

    fetchResult.then((response)=>{
        return response.json()
    })
    .then((data)=>{
        console.log(data)
        return fetch('https://jsonplaceholder.typicode.com/posts/1')
    })
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        console.log(data)
    })
    .catch((error)=>{
        console.error(error)
    })
}

//peticionAsincronaFetchConPromises()

async function peticionAsincronaFetchConAsyncAwait(){
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/posts")
        let data = await response.json()
        console.log(data)
        let response2 = await fetch("https://jsonplaceholder.typicode.com/posts/1")
        let data2 = await response2.json()
        console.log(data2)
    }
    catch(err){
        console.error(err)
    }
}

function almacenamientoDelNavegador(){
    //Session storage dura mientras esta activa la pestaña, cuando se cierra se borra.
    sessionStorage.setItem("nombre", "Kevin")
}

function crearElementoHTML(){
    let href = document.createElement('a')
    href.href = "https://www.google.com"
    href.innerText = "Ir a google"
    href.className = "red-color"
    href.style.fontSize = "20px"
    document.body.appendChild(href)
}
crearElementoHTML()

//Cuidado con esto puede ser inseguro
//CSS Injection
function crearElementoHTMLComoTexto(){
    let elemento = '<a href="https://www.google.com" class="red-color" style="font-size:23px">Ir a google</a>'
    document.body.innerHTML += elemento
}

// function crearElementoHTMLComoTextoConSetHTML(){
//     let inyectar = document.getElementById("inyectar-datos")
//     let elemento = '<a href="https://www.google.com" class="red-color" style="font-size:23px">Ir a google</a>'
//     inyectar.setHTML(elemento)
    
// }
//crearElementoHTMLComoTexto()
//crearElementoHTMLComoTextoConSetHTML()

function usoDeSetTimeout(){
    setTimeout(()=>{
        alert("He tardado 2 segundos en mostrar este mensaje")
    }, 2000)
}
usoDeSetTimeout()

function usoDeSetInterval(){
    let interval = setInterval(()=>{console.log("Esto se escribe cada 3 segundos")}, 3000)

    setTimeout(()=>{
        clearInterval(interval)
    }, 15000)
}
usoDeSetInterval()
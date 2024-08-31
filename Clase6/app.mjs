//ECMA Script Modules se usa import y el archivo debe ser .mjs
import os from 'node:os';

//modulos Common JS se usa require y el archivo debe ser .js
//const os = require('node:os')

//console.log("Hola mundo")

console.log(os.cpus().length)
console.log(os.arch())
console.log(os.EOL) // Windows usa /l/r
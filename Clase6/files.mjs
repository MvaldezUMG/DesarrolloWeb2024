import {unlink, readFile, writeFile, access, constants} from 'node:fs/promises';

try{
    await writeFile("hello.txt", "Esto lo escribi desde node js")
    let readedData = await readFile("hello.txt", {encoding: "utf-8"})
    console.log(readedData)
    await unlink("hello.txt")
    //let fileExists = await access("hello.txt", constants.F_OK)
    console.log("Existe el archivo hello.txt " + fileExists)
}
catch(err){
    console.log(err)
}
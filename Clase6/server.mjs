import http from 'node:http'

const server = http.createServer((req, res)=>{
    console.log(req.url)
    console.log(req.method)
    console.log(req.headers)

    res.write("<h1>Hola mundo</h1>")
    
    res.end()
})

server.on('clientError', (err,socket)=>{
    socket.end("HTTP/1.1 400 Bad Request\r\n\r\n")
})

server.listen(8000)
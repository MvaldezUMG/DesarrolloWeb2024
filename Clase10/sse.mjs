import http from 'node:http';
import url from 'node:url';
import fs from 'node:fs';
const port = 8084;


let sseResponse = null

http.createServer((req, res)=>{
    const uri = url.parse(req.url).pathname;

    if (uri === "/"){
        let html = fs.readFileSync("index.html")
        res.write(html)
        res.end()
    }

    if (uri === "/sse"){
        res.writeHead(200, {
            "Content-Type": "text/event-stream",
            "Cache-Control": "no-cache",
            "Connection": "keep-alive"
        })
        sseResponse = res
    }

    if (uri === "/send-sse"){
        const query = url.parse(req.url).query;
        sseResponse.write(`data: ${query} \n\n`)
    }


    //res.write("Hola");
    //res.end();
}).listen(port);

console.log("Server running on port " + port)

const http = require('http')

function handleRequest(request, response){
    if("GET" === request.method &&
        "/product/" === request.url){
        response.setHeader("Content-Type", "text/json");

        response.setHeader(`Access-Control-Allow-Origin`, `*`) // *Wildcard
        response.setHeader(`Access-Control-Allow-Methods`, `GET,PUT,PUSH,DELETE`);
        response.setHeader(`Access-Control-Allow-Headers`, `Content-Type`);

        response.write(`
        [
            {
                "name": "Pencil",
                "desc": "Wood lead pencil #2 with eraser.",
                "price": 0.25,
                "images": [
                    {
                        "name" : "default",
                        "path" : "./images/pencil.png"
                    },
                    {
                    "name" : "side",
                    "path" : "./images/pencil_side.png"
                     }
                ]
            },
            {       
                "name": "Paper",
                "desc": "8.5x11 recycled stock.",
                "price": 2.50,
                "images": [
                    {
                        "name" : "default",
                        "path" : "./images/paper.png"
                    },
                    {
                        "name" : "top",
                        "path" : "./images/paper_side.png"
                    }
                ]
            }
        ]
        `);
    }else{
       response.write(`Your url was: ` ); //Built It
       response.write(request.url); //Build It More 
    }

    
    return response.end(); //Send It
}
const server = http.createServer(handleRequest);
server.listen(9090)
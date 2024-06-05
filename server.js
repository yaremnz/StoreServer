const http = require('http')
function handleRequest(request, response){
    response.write(`Your url was: ` ); //Built It
    response.write(request.url); //Build It More
    returnresponse.end(); //Send It
}
const server = http.createServer(handleRequest);
server.listen(9090)
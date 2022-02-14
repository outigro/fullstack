var http = require("http");

server = http.createServer(function(request, response){
   
    if (request.url === "/"){
        response.writeHead(200,{'Content-Type': 'text/plain'});
        response.end('Hello from first homepage again');
    }
    if (request.url === "/own"){
        response.writeHead(200,{'Content-Type': 'text/html'});
        responce.write("<h1>Own page heading</h1>");
        responce.write("<html> <style> table, th, td {border:1px solid black;} </style>");
        responce.write("<table style=width:100%> ");
        responce.write("<tr> <th>Name</th> <th>Address</th> <th>City</th> </tr>");
        responce.write("<tr> <td>Matti Meikäläinen</td> <td>Timotie 1, as 10</td> <td>Tampere</td> </tr>");
        responce.write("<tr> <td>Maija Virtanen</td> <td>Asematie 12</td> <td>Kiljava</td>");
        responce.write(" </tr> </table>");

        response.end('<h2>Hello from Outi</h2>');
    }
    
});

var port = process.env.port || 3000;
server.listen(port);
console.log('Server is running in http://localhost:%d', port);
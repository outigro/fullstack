const http = require('http');
const request = require("request");
const hostname = '127.0.0.2';
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {   
    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/HTML; charset=utf-8');
    res.write("<h1> Web-architecture </h1>");
    res.write("<h2> Perhaps something like this? </h2>");
    
    res.write(
        "<img src='https://www.cs.helsinki.fi/u/laine/tikas/material/web_sovellus.png'>"
    );

    var data = "<table border='5'><tr><td>First try</td></tr> <tr><td>Second try</td></tr> <tr><td>Third try</td></tr> </table>";
    res.write(data);

    res.end('<h2>The end</h2>');    
    
});

server.listen(PORT,hostname,() => {
    console.log('Server is running at http://$hostname:$PORT)/');
});
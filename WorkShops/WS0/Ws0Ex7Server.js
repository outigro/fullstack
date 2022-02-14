var http = require("http");

http.createServer(function(request, response){
       
        response.writeHead(200,{"Content-Type": "text/plain; charset=utf-8"});
        responce.write("Good afternoon!!");
        response.end("Beautiful winter - eh?\n"); 
        
})
//.listen(3000);
//console.log("Server is running in http://127.0.0.1:3000");
.listen(8081);
console.log("Server is running in http://127.0.0.1:8081");
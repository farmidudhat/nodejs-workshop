var http = require("http")
var a = 10
var b = 20
var c = a + b
var msg
if(c==30){
    msg = "The sum of a and b is 30"
}else{
    msg = "The sum of a and b is not 30"
}

http.createServer((req,res)=>{
    
    res.writeHead(150,{'Content-type':'text/html'})
    res.write("A Value is "+a)
    res.write("B Value is "+b)
    res.write(`<br>
    <b>sum is ${a+b}</b>`)
    res.end("<br/>"+msg+"done")
}).listen(4001)

console.log("Server is started on http://127.0.0.1:4001")
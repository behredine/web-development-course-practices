// var http = require("http")
// const { listen } = require("node:quic")

// http.createServer(function(req,res){
//     res.write("welcome to my website Alien!!")
//     res.end()
// }).listen(8080)

var fs = require('fs')
// fs.writeFile("message.txt","hello behredin!", (err)=>{
//     if (err) throw err
//     console.log("the file is succesfully created!")
// })
fs.readFile("./message.txt","utf8",(err,data)=>{
    if (err) throw err
    console.log(data)
})
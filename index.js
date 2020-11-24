const express = require("express")
const exServer = express()
const webServer = require('http').createServer(exServer)
const io = require('socket.io')(webServer)

exServer.get("/", function(req, res){
	res.sendFile(__dirname + "/static/index.html")
})
exServer.get("/main.css", function(req,res){
    res.sendFile(__dirname + "/static/main.css")
})
exServer.get("/main.js", function(req,res){
    res.sendFile(__dirname + "/static/main.js")
})

var number = 0
io.on('connection', function(socket){
	console.log(`Novo user conectado: ${socket.id}`)
	io.emit('numb', number)
	
	socket.on('opNumb', function(n){
		number += n
		io.emit('numb', number)
		
	})
	
})
webServer.listen(8080)
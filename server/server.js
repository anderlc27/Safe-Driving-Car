const express = require('express')
const app = express()
const http = require('http').createServer(app)
http.listen(3000, () => console.log('Listening Port 3000'))
const SerialPort = require('serialport')
const port = new SerialPort('COM5', 9600)
// Setting up socket
var io = require('socket.io')(http)


port.on('open', () => console.log("Opened"))

//port.on('data', () => console.log("Data"))

// port.write('1', (err) => {
//     (err) ? console.log('Error: ', err.message) : console.log("Success")
// })


io.sockets.on('connection' , (socket) => {
    console.log('User Connected!!')
    socket.on('KeyDown', (keyData)=> {
        console.log(keyData.key)
        switch (keyData.key) {
            case 'KeyW':
                port.write('1')
                break
            case 'KeyA':
                port.write('2')
                break
            case 'KeyS':
                port.write('3')
                break
            case 'KeyD':
                port.write('4')
                break
            case 'Space':
                port.write('0')
                break
        }
    })
    socket.on('KeyUp', (keyData)=> {
        console.log(keyData.action)
        port.write('5')
    })
  })
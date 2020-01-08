const SerialPort = require('serialport')
const port = new SerialPort('COM5', 9600)
console.log("hello")

port.on('open', () => console.log("Opened"))

port.on('data', () => console.log("Data"))

port.write('1', (err) => {
    (err) ? console.log('Error: ', err.message) : console.log("Success")
})
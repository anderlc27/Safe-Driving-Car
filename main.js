const { app, BrowserWindow } = require('electron')
//const express = require('express')
//const server = express()
//const backend = server.listen(3000, () => console.log('Listening Port 3001'))
// // Setting up socket
// var io = require('socket.io')(backend)


// Setting up Electron App
let win

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({
    width: 513,
    height: 437,
    maximizable: false,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // and load the index.html of the app.
  win.loadFile('index.html')

  win.setMenu(null)

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

//console.log(app)

// io.sockets.on('connection' , (socket) => {
//   console.log('User Connected!!')
//   socket.on('KeyDown', (keyData)=> console.log(keyData.key))
//   socket.on('KeyUp', (keyData)=> console.log(keyData.action))
// })

const {BrowserWindow, app} = require("electron")
const path = require("path")

function createWindow() {
    var win = new BrowserWindow({width: 1280, height: 720})
    win.loadURL(path.join(__dirname, "index.html"))
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    app.quit()
  })

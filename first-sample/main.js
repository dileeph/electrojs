const {app, BrowserWindow} = require('electron')

//include nodejs 'path' module
const path = require('node:path')
//since main process doesnt have access to document object in renderer process,
//use a preload script to pass values to renderer process ahead of time.
const createWindow = () => {
	const win = new BrowserWindow({
		width:800,
		height: 600,
		webPreferences: {
			preload: path.join(__dirname, 'preload.js')
		}
	})
	win.loadFile('index.html')
}
//launch app on "ready" event
app.whenReady().then(
	() => {
		createWindow()

		//macos apps continue running even when no wndows exist - activating app should open new one
		//listen to activate event.
		app.on('activate', () => {
			if(BrowserWindow.getAllWindows().length === 0) createWindow()
		})
	}
)

//handle window close event on linux and windows - exiting all windows quits an application
app.on('window-all-closed', () => {
	if(process.platform != 'darwin') app.quit()
})




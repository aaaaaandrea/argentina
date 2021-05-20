const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')


const app = express()
const server = http.createServer(app)
const io = socketio(server)

//set static folder
app.use(express.static(path.join(__dirname, 'publick')))

io.on('connection', socket => {
    
})

const PORT = 3030 || process.env.PORT

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))
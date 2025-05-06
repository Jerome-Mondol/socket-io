// Express and Socket.io Server Setup
const express = require('express');
const { Server } = require('socket.io');
const { createServer } = require('http');

// Port Initialization
const port = 3000;

// App Initialization
const app = express();
const server = createServer(app);

const io = new Server(server)

app.get("/", (req, res) => {
    res.send("Hello World!")
})

io.on("connection", (socket) => {

    console.log("User Connected")
    console.log(`ID: ${socket.id}`)

})


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})

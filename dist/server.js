"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
const io = new socket_io_1.Server(server);
// Set up server port
const port = process.env.PORT || 3000;
// Define a route
app.get('/', (req, res) => {
    res.send('Backend is running!');
});
// Handle socket connections
io.on('connection', (socket) => {
    console.log('A user connected');
    // Handle card selection event
    socket.on('cardSelection', (data) => {
        console.log('Card selected:', data);
        // Emit the card selection event to all connected clients
        io.emit('cardSelection', data);
    });
    // Handle disconnection event
    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});
// Start the server
server.listen(port, () => { 
    console.log(`Server is running on port ${port}`);
});

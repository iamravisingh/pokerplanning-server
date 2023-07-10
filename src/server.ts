const cors = require('cors');
// import cors from 'cors';
import express from 'express';
import http from 'http';
import socketHandler from "./socketHandler";

const app = express();
const server = http.createServer(app);

// Enable CORS middleware
app.use(cors({ origin: "*"}));

// Set up server port
const port = process.env.PORT || 3000;

// Define a route
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

//setup socket connection
socketHandler(server);

// Start the server
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const express = require("express");
// const itemRoutes = require('./routes/item.routes')
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io")
// TODO: Update this
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
const db = require('./database-mysql');
const doctorRouter = require('./routes/doctor.router');
const messagesRouter = require('./routes/messages.router')
const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*", 
    methods: ["GET", "POST"]
  }
});


const PORT = 3000

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));

app.use('/api/doctors', doctorRouter);
app.use('/api/messages', messagesRouter);

io.on("connection", (socket) => {
  console.log("A user connected with id:", socket.id);

  
  socket.on("send_message", (data) => {
      
      console.log(data);
      
      io.emit("new_message", data); 
  });

  socket.on("disconnect", () => {
      console.log("User disconnected", socket.id);
  });
});
app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
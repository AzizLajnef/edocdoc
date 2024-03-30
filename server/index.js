const express = require("express");
// const itemRoutes = require('./routes/item.routes')
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io")
// TODO: Update this
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
const db = require('./database-mysql');
const doctorRouter = require('./routes/doctor.router');
// const server = http.createServer(app);
// const io = new Server(server, {
//   cors: {
//     origin: "*", 
//     methods: ["GET", "POST"]
//   }
// });

const app = express();
const PORT = 3000

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));
app.use('/api/doctors', doctorRouter);
// app.use("/api/items", itemRoutes);
// io.on("connection", (socket) => {
//   console.log("A user connected with id:", socket.id);

//   // Example event
//   socket.on("example_event", (data) => {
//     console.log(data);
//     // Emit an event to all connected clients
//     io.emit("example_response", { message: "Response from server" });
//   });

//   // Handle disconnection
//   socket.on("disconnect", () => {
//     console.log("User disconnected", socket.id);
//   });
// });
app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
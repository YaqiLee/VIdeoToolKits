const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server, { cors: true });
const probeRoutes = require("./routes/probe");
const ffmpegRoutes = require("./routes/ffmpeg");
const withSocket = require("./lib/withSocket");
const {states, clear } = require("./state");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

var options = {};

io.on("connection", (socket) => {
  socket.on("disconnect", () => {
    // 清除未完成的进程
    clear();
  });
});

app.use(withSocket(io));

app.use("/probe", probeRoutes);
app.use("/video", ffmpegRoutes);

server.listen(8888, () => {
  console.log("listening at 8888");
});

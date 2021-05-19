const { spawn, spawnSync } = require("child_process");
const { states } = require("../state");

var ffmpeg = {
  transferToMp4(input, io) {
    return new Promise((resolve, reject) => {
      try {
        this.exit().then();
        console.log("-----------start----------");
        states.transform = spawn("ffmpeg", [
          "-i",
          input,
          `${Date.now()}.mp4`,
          "-v",
          "quiet",
          "-stats",
        ]);
        const ls = states.transform;
        ls.stderr.on("data", (data) => {
          console.log(data.toString("utf-8"));
          io.emit("transform", data.toString("utf-8"));
        });

        ls.on("close", function () {
          console.log("close---------------------");
        });

        resolve("");
      } catch (error) {
        reject(error);
      }
    });
  },
  exit() {
    return new Promise((resolve, reject) => {
      try {
        if (states.transform) {
          states.transform.kill("SIGTERM");
          states.transform = null;
        }
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  },
};

module.exports = ffmpeg;

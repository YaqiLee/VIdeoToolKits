const { spawn } = require("child_process");
var ls;

var probe = {
  showStreams(input) {
    return new Promise((resolve, reject) => {
      ls = spawn("ffprobe", [
        "-i",
        input,
        "-show_streams",
        "-v",
        "quiet",
        "-of",
        "json",
      ]);
      ls.stdout.on("data", (data) => {
        resolve(data.toString());
      });
      ls.stderr.on("data", (data) => {
        console.error(`stderr: ${data}`);
      });
      ls.on("close", (code) => {
        console.log(`子进程退出，退出码 ${code}`);
      });
    });
  },
};

module.exports = probe;

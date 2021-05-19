const { spawn, spawnSync } = require("child_process");
var ls;

var probe = {
  showStreams(input) {
    return new Promise((resolve, reject) => {
      try {
        ls = spawnSync("ffprobe", [
          "-i",
          input,
          "-show_format",
          "-v",
          "quiet",
          "-of",
          "json",
        ]);
        resolve(ls.stdout.toString());
      } catch (error) {
        reject(error)
      }
    });
  },
};

module.exports = probe;

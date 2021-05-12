const express = require("express");
const app = express();
const probe = require("../lib/ffprobe");

app.get("/streams", function (req, res) {
  const { url } = req.query;

  if (!url) {
    res.send({ code: 404, message: "url 不能为空！" });
    return;
  }

  probe
    .showStreams(url)
    .then((data) => {
      res.header({"content-type": "text/html"})
      res.send(data)
    })
    .catch((err) => {
      res.send({ code: 500 });
    });
});

module.exports = app;

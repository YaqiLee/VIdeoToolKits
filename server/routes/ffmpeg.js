const express = require("express");
const app = express();
const probe = require("../lib/ffmpeg");
const uuid = require("uuid");

app.get("/transform", function (req, res) {
  const { url } = req.query;

  if (!url) {
    res.send({ code: 404, message: "url 不能为空！" });
    return;
  }

  probe
    .transferToMp4(url, req.io)
    .then((d) => res.send({ code: 200, done: true }))
    .catch((d) => {
      code: 500;
    });
});

app.get("/transformend", function (req, res) {
  probe.exit().then(() => {
    res.send({ code: 200 });
  });
});

module.exports = app;

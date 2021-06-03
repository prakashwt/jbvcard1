"use strict";
const express = require("express");
const fs = require("fs");

const app = express();
const path = require("path");
let port = 3000;

app.use(express.static("./frontend/public"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./frontend/public/index.html"));
});

if (process.env.NODE_ENV === "production") {
  app.use(function (req, res, next) {
    var protocol = req.get("x-forwarded-proto");
    protocol == "https"
      ? next()
      : res.redirect("https://" + req.hostname + req.url);
  });
}

app
  .listen(port, () => {
    console.log(`🚀 Server on http://localhost:${port}`);
  })
  .on("error", () => console.log(`error in listening at ${port}`));

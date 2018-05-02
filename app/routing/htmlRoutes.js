var bodyParser = require("body-parser");
var express = require("express");
var app = express();
var mysql = require("mysql");
var path = require("path");

// var PORT = process.env.PORT || 8080




module.exports = function (app) {
    // take the url /survey and get the survey.html page, if not survey, then default to home.html}

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"))
    });


    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"))
    });

};
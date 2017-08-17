var sessions = [
    {id:0 , title:"Introduction to Ionic", speaker:"CHRISTOPHE COENRAETS", time:"9:40am", room:"Ballroom A", description: "In this session, you'll learn how to build a native-like mobile application using the Ionic Framework, AngularJS, and Cordova."},
    {id:1 , title:"AngularJS in 50 Minutes", speaker:"LISA SMITH", time:"10:10am", room:"Ballroom B", description: "In this session, you'll learn everything you need to know to start building next-gen JavaScript applications using AngularJS."},
    {id:2 , title:"Contributing to Apache Cordova", speaker:"JOHN SMITH", time:"11:10am", room:"Ballroom A", description: "In this session, John will tell you all you need to know to start contributing to Apache Cordova and become an Open Source Rock Star."},
    {id:3 , title:"Mobile Performance Techniques", speaker:"JESSICA WONG", time:"3:10Pm", room:"Ballroom B", description: "In this session, you will learn performance techniques to speed up your mobile application."},
    {id:4 , title:"Building Modular Applications", speaker:"LAURA TAYLOR", time:"2:00pm", room:"Ballroom A", description: "Join Laura to learn different approaches to build modular JavaScript applications."}
];
var http = require('http');
var unirest = require('unirest');

exports.findAll = function (req, res, next) {
    res.send(sessions);
};

exports.findById = function (req, res, next) {
  console.log('1st sjashj');
  console.log(req.params);
    var id = req.params.id;
    res.send(sessions[id]);
};
exports.findbyword = function (req, res, next) {
  // sys.puts("Hello World");
  // sys.puts(word);
  // sys.puts('1st word');
  console.log('1st ksjkks');
  console.log(req.params);
  unirest.get('https://wordsapiv1.p.mashape.com/words/'+ req.params.word).header("X-Mashape-Key", "Q5GacyJJeQmshWGBDdzMSTdTmQLTp19OAkBjsndmLtEVruCsG8").header("Accept", "application/json").end(function (result) {
    console.log(result.status, result.headers, result.body);
    res.send(result.body);
  });
};
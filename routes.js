var title = ['Mobby','Mobby-News','Mobby-Contact'];
//var AWS = require('aws-sdk');
//var uuid = require('node-uuid');
//var request = require('request');
//var fs = require('fs'); 
//AWS.config.loadFromPath('./config.json');

exports.index = function(req, res) {
    res.render('home', {title: title[0], content:''});
};

exports.News = function(req, res) {
    res.render('layout', {title: title[1], content:'News'});
};

exports.Contact = function(req, res) {
    res.render('layout', {title: title[2], content:'Contact'});
};
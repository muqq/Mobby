var title = 'Muqq Platform';
//var AWS = require('aws-sdk');
//var uuid = require('node-uuid');
//var request = require('request');
//var fs = require('fs'); 
//AWS.config.loadFromPath('./config.json');

exports.index = function(req, res) {
    res.render('layout', {title: title, content:'home'});
};

exports.News = function(req, res) {
    res.render('layout', {title: title, content:'News'});
};
exports.Contact = function(req, res) {
    res.render('layout', {title: title, content:'Contact'});
};
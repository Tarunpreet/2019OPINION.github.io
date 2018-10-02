var express=require('express');
var app=express();
var port=3001;
app.use(express.static(__dirname+'/'));
app.listen(port);
console.log(' Server Started by Tarunpreet singh At '+port);
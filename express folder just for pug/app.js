const express = require('express')
 const path = require('path');




const app=express()

app.set('view engine', 'pug');
app.set('views','./views');


app.get('/', function(req, res){
    res.render('first_view');
 });

//  app.get('/page2.html',function(req,res){
//     res.sendFile(path.join(__dirname, 'page2.html'))
//  })
//  app.get('page2.html', function(req, res) {
//     res.sendFile(path.join(__dirname, '/page2.html'));
//   });
  app.get('/page2.html', function(req, res){
    res.render('page2');
 });
  app.get('/page3.html', function(req, res){
    res.render('page3');
 });
 
app.listen('80', function(req,res){
    console.log('time to get started on port 80npm')
})
var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/',function(req,res){
   res.sendFile(path.join(__dirname,'E-commerce','main.html'));
});
app.get('/E-commerce/main-style.css',function(req,res){
   res.sendFile(path.join(__dirname,'E-commerce','main-style.css'));
});
app.get('/E-commerce/images/im1.jpg',function(req,res){
   res.sendFile(path.join(__dirname,'E-commerce/Images','im1.jpg'));
});
app.get('/E-commerce/images/im2.jpg',function(req,res){
   res.sendFile(path.join(__dirname,'E-commerce/Images','im2.jpg'));
});
app.get('/E-commerce/images/im3.jpg',function(req,res){
   res.sendFile(path.join(__dirname,'E-commerce/Images','im3.jpg'));
});
app.get('/E-commerce/images/im4.jpg',function(req,res){
   res.sendFile(path.join(__dirname,'E-commerce/Images','im4.jpg'));
});
app.get('/index.html',function(req,res){
    res.send('Article-one is requested and is served here');
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/',function(req,res){
   res.sendFile(path.join(__dirname,'E-commerce','main.html'));
});
app.get('/E-commerce/main.html',function(req,res){
   res.sendFile(path.join(__dirname,'E-commerce','main.html'));
   console.alert('Hi');
});
app.get('/E-commerce/main-style.css',function(req,res){
   res.sendFile(path.join(__dirname,'E-commerce','main-style.css'));
});
app.get('/E-commerce/lookbook.html',function(req,res){
   res.sendFile(path.join(__dirname,'E-commerce','lookbook.html'));
});
app.get('/E-commerce/lookbook.css',function(req,res){
   res.sendFile(path.join(__dirname,'E-commerce','lookbook.css'));
});
app.get('/E-commerce/images/im1.jpg',function(req,res){
   res.sendFile(path.join(__dirname,'E-commerce/Images','im1.jpg'));
});
app.get('/E-commerce/images/im2.jpg',function(req,res){
   res.sendFile(path.join(__dirname,'E-commerce/Images','im2.jpg'));
});
app.get('/E-commerce/images/girlshome1.png',function(req,res){
   res.sendFile(path.join(__dirname,'E-commerce/Images','girlshome1.png'));
});
app.get('/E-commerce/images/boyshome1.png',function(req,res){
   res.sendFile(path.join(__dirname,'E-commerce/Images','boyshome1.png'));
});
app.get('/E-commerce/images/girlshome2.png',function(req,res){
   res.sendFile(path.join(__dirname,'E-commerce/Images','girlshome2.png'));
});
app.get('/E-commerce/images/im3.jpg',function(req,res){
   res.sendFile(path.join(__dirname,'E-commerce/Images','im3.jpg'));
});
app.get('/E-commerce/images/im4.jpg',function(req,res){
   res.sendFile(path.join(__dirname,'E-commerce/Images','im4.jpg'));
});

app.get('/E-commerce/images/lookbook/:id',function(req,res){
    var id = req.params.id;
   res.sendFile(path.join(__dirname,'E-commerce/Images/lookbook',id));
});
app.get('/E-commerce/individual/',function(req,res){
    var que = req.query.image;
    res.send(createTemp(que));
});
app.get('/E-commerce/individual-images/:id',function(req,res){
    var id = req.query.image;
   res.sendFile(path.join(__dirname,'E-commerce/individual-images',id)); 
});
function createTemp(data){
    var address = '/E-commerce/lookbook/'+data;
    var HtmlTemp = `
        <!DOCTYPE html>
        <html>
        <head>
        	<title></title>
        	<meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
        	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        	<!--<link rel="stylesheet" type="text/css" href="../index-style.css">-->
        	<link rel="stylesheet" type="text/css" href="/E-commerce/individual-style.css">
        	<link rel="preconnect" type="text/css" href="//fonts.googleapis.com">
        	<script type = "text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        	<script src="./easyzoom.js"></script>
        </head>
        <body>
        <script type="text/javascript">
        $(document).ready(function() {
        	$('.dropdown').hover(function() {
        		$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
        		}, function() {
          		$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
        	});
        	$('.easyzoom').easyZoom({
        		loadingNotice: 'Loading image',
        		errorNotice: 'The image could not be loaded',
        		preventClicks: true,
        	});
        	
        
        });
        </script>
        <div class="panel panel-default">
        	<div class="panel-heading">
        		<div class="cart-panel">
        		</div>
        		<div class="tab-panel">
        			<ul>
        				<li style="float: left;position: absolute;left: 50px;top: 20px;"><span id="veste"> VESTE</span></li>
        				<ul class="nav nav-pills" style="position: absolute;left: 250px;top: 15px;">
        					<li ><a href="#" onclick="location.reload();location.href='index.html'"><span id="home"> HOME</span></a></li>
        					<li class="dropdown">
        						<a href="#" class="dropdown-toggle"><span id="collection">COLLECTION</span></a>
        						<ul class="dropdown-menu" style="background-color: black;color: white;">
        							<li id="women"><a href="#" onclick="location.reload();location.href='women.html'"><span > WOMEN</span></a></li>
        							<li id="men"><a href="#" onclick="location.reload();location.href='men.html'"><span > MEN</span></a></li>
        							<li id="accessories"><a href="#" onclick="location.reload();location.href='accessories.html'"><span >ACCESSORIES</span></a></li>
        							<li id="sale"><a href="#" onclick="location.reload();location.href='sale.html'"><span > SALE</span></a></li>
        						</ul>
        					</li>				
        					<li ><a href="#" onclick="location.reload();location.href='lookbook.html'"><span id="lookback"> LOOKBOOK</span></a></li>
        					<li ><a href="#"><span id="customercare"> CUSTOMER CARE</span></a></li>
        					<li ><a href="#"><span id="visitus"> VISIT US</span></a></li>
        				</ul>
        			</ul>
        		</div>
        	</div>
        	<div class="container panel-content">
        		<div style="margin-top: 3%;float: left;">
        			<div class="easyzoom easyzoom--overlay easyzoom--with-thumbnails is-ready">
        				<a href="${address}" class="im" style="overflow: hidden;width: 640px;height: 620px;">
        					<img src="${address}" alt="im" width="640" height="620" />
        				</a>
        			</div>
        			<ul class="thumbnails" style="list-style-type: none;">
        				<li >
        					<a href="${address}" class="im1">
        						<img src="${address}" alt="im1" width="80" height="78" />
        					</a>	
        				</li>
        			</ul>
        		</div>
        		<div class="details" style="margin-top:3%;float: right;position: relative;width: 40%;left: 0">
        			<div class="product-name" style="font-size: 25px;" > Name of the product</div>
        			<div class="amount" style="margin-top: 20px;font-size: 20px; ">$19.99</div>
        			<div style="margin-top: 20px;font-size: 17px;">
        				<div style="clear: right;font-size: 17px;margin-bottom:5px;color: #626262;">Size</div>
        				<select name="sizeofdress" style="width: 200px;height: 40px;">
        					<option value="0" style="color: #626262">Select</option>
        					<option value="XS">XS</option>
        					<option value="S">S</option>
        					<option value="M">M</option>
        					<option value="L">L</option>
        				</select> 
        			</div>
        			 <div style="margin-top: 20px;font-size: 17px;">
        				<div style="clear: right;font-size: 17px;margin-bottom:5px;color: #626262;">Quantity</div>
        				<select name="quantity" style="width: 75px;height: 40px;">
        					<option value="1">1</option>
        					<option value="2">2</option>
        					<option value="3">3</option>
        					<option value="4">4</option>
        					<option value="5">5</option>
        				</select> 
        			</div>
        		</div>
        	</div>
        	
        </div>
        </body>
        </html>
    `;
    return HtmlTemp;
}

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

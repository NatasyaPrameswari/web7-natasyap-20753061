//use path module
const path = require('path');
//use express module
const express = require('express');
//use hbs view engine
const hbs = require('hbs');
//use bodyParser middleware
const bodyParser = require('body-parser');

const app = express();
//set view engine
app.set('view engine', 'hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//set views file
app.set('views',path.join(__dirname,'views'));

//set folder public sebagai static folder untuk static file
app.use('/assets',express.static(__dirname + '/public'));
//homepage
app.get('/index',(req,res)=>{
	res.render('index.hbs');
});
//contact
app.get('/contact',(req,res)=>{
	res.render('contact.hbs');
});
//about
app.get('/about',(req,res)=>{
	res.render('about.hbs');
});
//server listening
app.listen(8000, () => {
console.log('Server is running at port 8000');
});
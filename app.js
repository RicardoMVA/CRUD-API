const express 		 = require('express'),
	  app 			 = express(),
	  bodyParser 	 = require('body-parser'),
	  mongoose		 = require('mongoose'),
	  methodOverride = require('method-override');


// APP config:
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.use(mehtodOverride('_method'));


// Routes:

app.get('/', (req, res) => {
	res.send('Index page');
});


app.get('/api', (req, res) =>{
	res.json('JSON page');
});


app.listen(process.env.PORT || 3000, () => {
	console.log('Server running on localhost:3000');
});

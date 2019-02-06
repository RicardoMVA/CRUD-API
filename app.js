const express 		 = require('express'),
	  app 			 = express(),
	  bodyParser 	 = require('body-parser'),
	  mongoose		 = require('mongoose'),
	  methodOverride = require('method-override');


// APP config:
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.use(methodOverride('_method'));


// Routes:

// Index
app.get('/', (req, res) => {
	res.send('Index page');
});


// Create:
app.post('/users', (req, res) => {
	res.send('Create new user');
});


// Read all:
app.get('/users', (req, res) => {
	res.send('Read all users');
});


// Read one:
app.get('/users/:id', (req, res) => {
	res.send('Read one user');
});


// Read all (API):
app.get('/api/users', (req, res) => {
	res.json('All users JSON page');
});


// Read one (API):
app.get('/api/users/:id', (req, res) => {
	res.json('One user JSON page');
});


// Update:
app.put('/users/:id', (req, res) => {
	res.send('Update user');
});


// Destroy:
app.delete('/users/:id', (req, res) => {
	res.send('Delete user');
});


app.listen(process.env.PORT || 3000, () => {
	console.log('Server running on localhost:3000');
});

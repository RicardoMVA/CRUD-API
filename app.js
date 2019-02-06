const express 		 = require('express'),
	  app 			 = express(),
	  bodyParser 	 = require('body-parser'),
	  mongoose		 = require('mongoose'),
	  methodOverride = require('method-override');


// APP config:
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.use(methodOverride('_method'));

let url = process.env.DATABASEURL || 'mongodb://localhost/user';

mongoose.connect(url);

User = require('./models/user');

// Routes:

// Index
app.get('/', (req, res) => {
	res.render('index');
});


// Create:
app.post('/users', (req, res) => {
	User.create(req.body.user, (err, newUser) => {
		if (err){
			console.log("Something went wrong when creating the user");
			console.log(err);
		} else {
			res.redirect('/users');
		}
	});
});


// Read all:
app.get('/users', (req, res) => {
	User.find({}, (err, users) => {
		if (err){
			console.log("Something went wrong when reading the database");
			console.log(err);
		} else {
			res.send(users);
		}
	});
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

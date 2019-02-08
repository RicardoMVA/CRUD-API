const express 		 = require('express'),
	  app 			 = express(),
	  bodyParser 	 = require('body-parser'),
	  mongoose		 = require('mongoose'),
	  methodOverride = require('method-override');


// APP config:
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.use(methodOverride('_method'));

mongoose.set('useCreateIndex', true);

let url = process.env.DATABASEURL || 'mongodb://localhost/user';

mongoose.connect(url, {useNewUrlParser:true});

User = require('./models/user');

// Routes:

// Index
app.get('/', (req, res) => {
	res.render('index');
});


// Create form:
app.get('/users/new', (req, res) => {
	res.render('new');
});


// Create request:
app.post('/users', (req, res) => {
	User.create(req.body.user, (err, newUser) => {
		if (err){
			console.log('Something went wrong when creating the user');
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
			console.log('Something went wrong when reading the database');
			console.log(err);
		} else {
			res.render('read', {users: users});
		}
	});
});


// Read one:
app.get('/users/:id', (req, res) => {
	User.findById(req.params.id, (err, foundUser) => {
		if (err){
			console.log('Something went wrong when reading the database');
			console.log(err);
		} else {
			res.render('show', {user: foundUser});
		}
	});
});


// Read all (API):
app.get('/api/users', (req, res) => {
	User.find({}, (err, users) => {
		if (err){
			console.log('Something went wrong when reading the database');
			console.log(err);
		} else {
			res.json(users);
		}
	});
});


// Read one (API):
app.get('/api/users/:id', (req, res) => {
	User.findById(req.params.id, (err, foundUser) => {
		if (err){
			console.log('Something went wrong when reading the database');
			console.log(err);
		} else {
			res.json(foundUser);
		}
	});
});


// Update form:
app.get('/users/:id/edit', (req, res) => {
	User.findById(req.params.id, (err, foundUser) => {
		if (err) {
			console.log('Something went wrong when finding the user');
			console.log(err);
		} else {
			res.render('edit', {user: foundUser});
		}
	});
});


// Update request:
app.put('/users/:id', (req, res) => {
	User.findByIdAndUpdate(req.params.id, req.body.user, (err, updatedUser) => {
		if(err) {
			console.log('Something went wrong when updating the user');
			console.log(err);
		} else {
			res.redirect('/users/' + req.params.id);
		}
	});
});


// Destroy:
app.delete('/users/:id', (req, res) => {
	User.findByIdAndRemove(req.params.id, (err) => {
		if (err){
			console.log('Could not delete the user');
		} else {
			res.redirect('/users')
		}
	});
});


app.listen(process.env.PORT || 3000, () => {
	console.log('Server running on localhost:3000');
});

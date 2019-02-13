import express from 'express';
import User from '../models/user';
import {checkErrorType} from '../controller/functions';

const router  = express.Router();


// Routes:

// Index
router.get('/', (req, res) => {
	res.render('index');
});


// Create form:
router.get('/users/new', (req, res) => {
	res.render('new');
});


// Create request:
router.post('/users', (req, res) => {
	User.create(req.body.user, (err, newUser) => {
		if (err){
			checkErrorType(res, err);
		} else {
			res.redirect('/users');
		}
	});
});


// Read all:
router.get('/users', (req, res) => {
	User.find({}, (err, users) => {
		if (err){
			checkErrorType(res, err);
		} else {
			res.render('read', {users: users});
		}
	});
});


// Read one:
router.get('/users/:id', (req, res) => {
	User.findById(req.params.id, (err, foundUser) => {
		if (err){
			checkErrorType(res, err);
		} else {
			res.render('show', {user: foundUser});
		}
	});
});


// Read all (API):
router.get('/api/users', (req, res) => {
	User.find({}, (err, users) => {
		if (err){
			console.log(err);
			res.json(err);
		} else {
			res.json(users);
		}
	});
});


// Read one (API):
router.get('/api/users/:id', (req, res) => {
	User.findById(req.params.id, (err, foundUser) => {
		if (err){
			console.log(err);
			res.json(err);
		} else {
			res.json(foundUser);
		}
	});
});


// Update form:
router.get('/users/:id/edit', (req, res) => {
	User.findById(req.params.id, (err, foundUser) => {
		if (err) {
			checkErrorType(res, err);
		} else {
			res.render('edit', {user: foundUser});
		}
	});
});


// Update request:
router.put('/users/:id', (req, res) => {
	User.findByIdAndUpdate(req.params.id, req.body.user, (err, updatedUser) => {
		if(err) {
			checkErrorType(res, err);
		} else {
			res.redirect('/users/' + req.params.id);
		}
	});
});


// Destroy:
router.delete('/users/:id', (req, res) => {
	User.findByIdAndRemove(req.params.id, (err) => {
		if (err){
			checkErrorType(res, err);
		} else {
			res.redirect('/users')
		}
	});
});


module.exports = router;

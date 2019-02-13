import express from 'express';
import User from '../models/user';
import * as controller from '../controller/controller';

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
	controller.createUser(req, res);
});


// Read all:
router.get('/users', (req, res) => {
	controller.readAll(req, res);
});


// Read one:
router.get('/users/:id', (req, res) => {
	controller.readOne(req, res);
});


// Read all (API):
router.get('/api/users', (req, res) => {
	controller.readAllApi(req, res);
});


// Read one (API):
router.get('/api/users/:id', (req, res) => {
	controller.readOneApi(req, res);
});


// Update form:
router.get('/users/:id/edit', (req, res) => {
	controller.editUserForm(req, res);
});


// Update request:
router.put('/users/:id', (req, res) => {
	controller.editUser(req, res);
});


// Destroy:
router.delete('/users/:id', (req, res) => {
	controller.deleteUser(req, res);
});


module.exports = router;

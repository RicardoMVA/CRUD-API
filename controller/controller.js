import express from 'express';
import User from '../models/user';
import {checkErrorType} from '../controller/functions';


const createUser = (req, res) => {
	User.create(req.body.user, (err, newUser) => {
		if (err){
			checkErrorType(res, err);
		} else {
			res.redirect('/users');
		}
	});
}


const readAll = (req, res) => {
	User.find({}, (err, users) => {
		if (err){
			checkErrorType(res, err);
		} else {
			res.render('read', {users: users});
		}
	});
}


const readOne = (req, res) => {
	User.findById(req.params.id, (err, foundUser) => {
		if (err){
			checkErrorType(res, err);
		} else {
			res.render('show', {user: foundUser});
		}
	});
}


const readAllApi = (req, res) => {
	User.find({}, (err, users) => {
		if (err){
			console.log(err);
			res.json(err);
		} else {
			res.json(users);
		}
	});
}


const readOneApi = (req, res) => {
	User.findById(req.params.id, (err, foundUser) => {
		if (err){
			console.log(err);
			res.json(err);
		} else {
			res.json(foundUser);
		}
	});
}


const editUserForm = (req, res) => {
	User.findById(req.params.id, (err, foundUser) => {
		if (err) {
			checkErrorType(res, err);
		} else {
			res.render('edit', {user: foundUser});
		}
	});
}


const editUser = (req, res) => {
	User.findByIdAndUpdate(req.params.id, req.body.user, (err, updatedUser) => {
		if(err) {
			checkErrorType(res, err);
		} else {
			res.redirect('/users/' + req.params.id);
		}
	});
}


const deleteUser = (req, res) => {
	User.findByIdAndRemove(req.params.id, (err) => {
		if (err){
			checkErrorType(res, err);
		} else {
			res.redirect('/users')
		}
	});
}


export {
	createUser,
	readAll,
	readOne,
	readAllApi,
	readOneApi,
	editUserForm,
	editUser,
	deleteUser
}

import express from 'express';
import User from '../models/user';
import {checkErrorType} from '../controller/functions';


function createUser(req, res){
	User.create(req.body.user, (err, newUser) => {
		if (err){
			checkErrorType(res, err);
		} else {
			res.redirect('/users');
		}
	});
}


function readAll(req, res){
	User.find({}, (err, users) => {
		if (err){
			checkErrorType(res, err);
		} else {
			res.render('read', {users: users});
		}
	});
}


function readOne(req, res){
	User.findById(req.params.id, (err, foundUser) => {
		if (err){
			checkErrorType(res, err);
		} else {
			res.render('show', {user: foundUser});
		}
	});
}


function readAllApi(req, res){
	User.find({}, (err, users) => {
		if (err){
			console.log(err);
			res.json(err);
		} else {
			res.json(users);
		}
	});
}


function readOneApi(req, res){
	User.findById(req.params.id, (err, foundUser) => {
		if (err){
			console.log(err);
			res.json(err);
		} else {
			res.json(foundUser);
		}
	});
}


function editUserForm(req, res){
	User.findById(req.params.id, (err, foundUser) => {
		if (err) {
			checkErrorType(res, err);
		} else {
			res.render('edit', {user: foundUser});
		}
	});
}


function editUser(req, res){
	User.findByIdAndUpdate(req.params.id, req.body.user, (err, updatedUser) => {
		if(err) {
			checkErrorType(res, err);
		} else {
			res.redirect('/users/' + req.params.id);
		}
	});
}


function deleteUser(req, res){
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

const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
	name: {type: String, unique: true, required: true},
	email: {type: String, unique: true, required: true},
	memberSince: {type: Date, default: Date.now}
});

module.exports = mongoose.model('User', userSchema);

import mongoose, {Schema} from 'mongoose';

const userSchema = new Schema({
	name: {
		type: String,
		unique: true,
		required: [true, 'is required']
	},
	email: {
		type: String,
		unique: true,
		required: [true, 'is required'],
		validate: {
			validator: (info) => {
				// basic email validation with regular expression suggested by MDN in
				// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email#Validation
				return /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(info);
			},
			message: 'Invalid email'
		},
	},
	memberSince: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('User', userSchema);

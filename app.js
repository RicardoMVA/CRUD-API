const express 		 = require('express');
const app 			 = express();
const bodyParser 	 = require('body-parser');
const mongoose		 = require('mongoose');
const methodOverride = require('method-override');


// APP config:
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.use(methodOverride('_method'));

app.use(express.static(__dirname + '/public'));


// Mongoose config:
// Deprecation fixes done as suggested in the docs
// https://mongoosejs.com/docs/deprecations.html
mongoose.set('useCreateIndex', true);

mongoose.set('useFindAndModify', false);

let url = process.env.DATABASEURL || 'mongodb://localhost/user';

mongoose.connect(url, {useNewUrlParser:true});


// routes file
app.use(require('./routes/index'));


app.listen(process.env.PORT || 3000, () => {
	console.log('Server running on localhost:3000');
});

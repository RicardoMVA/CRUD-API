import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import methodOverride from 'method-override';
import env from 'dotenv';


// APP config:
const app = express();

env.config();

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

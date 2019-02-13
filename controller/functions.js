// Error messages:
function checkErrorType(res, err) {
	console.log(err);
	if(err.code === 11000){
		let error = 'User validation failed: email and user must be unique';
		res.render('error', {error: error});
	} else {
		let error = err.message;
		res.render('error', {error: error});
	}
}

export {checkErrorType};

const notFound = (req, res, next) => {
	const error = new Error(`Not found - ${req.originalUrl}`);
	res.status(404);
	next(error);
};

const errorHandler = (err, req, res, next) => {
	let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
	let message = err.message;

	if (res.headersSent) {
    return next(err);
  }

	//check for mongoos bad obj.id
	if (err.name === 'CastError' && err.kind === 'ObjectId') {
		message = 'Resouce not found';
		statusCode = 404;
	}

	res.status(statusCode).json({
		message,
		stack: process.env.NODE_ENV === 'production' ? 'prod' : err.stack,
	});
};

export { notFound, errorHandler };

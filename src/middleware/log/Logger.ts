import { format } from 'date-fns';
import { NextFunction, Request, Response } from "express";

function logHandler(req: Request, res: Response, next: NextFunction) {
	console.log(`[\x1b[36mINFO\x1b[0m]\t${format(new Date(), 'dd/MM/yyyy HH:mm:ss')} ${req.method} request from ${req.headers.origin ? req.headers.origin : 'localhost:3333'} on ${req.url}`);
	next();
};

function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
	console.log(`[\x1b[31mERROR\x1b[0m]\t${format(new Date(), 'dd/MM/yyyy HH:mm:ss')} Error on handling ${req.method} request from ${req.headers.origin} on ${req.url}: ${err.message}`);
	res.status(500).json({ status: 500, message: err.message });
	next();
};

export {
	logHandler,
	errorHandler
};

import { NextFunction, Request, Response } from "express";
import { format } from 'date-fns';

const logHandler = (req: Request, res: Response, next: NextFunction) => {
	console.log(`[\x1b[36mINFO\x1b[0m]\t${format(new Date(), 'dd/MM/yyyy HH:mm:ss')} ${req.method} request from ${req.headers.origin ? req.headers.origin : 'localhost:3333'} on ${req.url}`);
	next();
};

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
	console.log(`[\x1b[31mError\x1b[0m]\t${format(new Date(), 'dd/MM/yyyy HH:mm:ss')} Error on handling ${req.method} request from ${req.headers.origin} on ${req.url}: ${err.message}`);
	res.status(500).send(err.message);
	next();
};

export {
	logHandler,
	errorHandler
};
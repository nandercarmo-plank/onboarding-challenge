import { Request, Response } from "express";

interface IController {
	getAll(req: Request, res: Response): void;
	get(req: Request, res: Response): void;
	create(req: Request, res: Response): void;
	update(req: Request, res: Response): void;
	delete(req: Request, res: Response): void;
};

export {
	IController
};

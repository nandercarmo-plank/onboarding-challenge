import { Request, Response } from "express";
import { ICreateRocketDto, IUpdateRocketDto } from "../dto/RocketDto";
//import { errorHandler } from "../middleware/log/logger";
import { RocketRepository } from "../repository/RocketRepository";
import { RocketService } from "../service/RocketService";

const rocketRepository = new RocketRepository();
const rocketService = new RocketService(rocketRepository);

const getRockets = async (req: Request, res: Response) => {
	try {
		res.json(await rocketService.getRockets());
	} catch (error) {
		//errorHandler(error as Error, req, res, () => { });
	}
}

const getRocket = async (req: Request, res: Response) => {
	try {
		res.json(await rocketService.getRocket(parseInt(req.params.id)));
	} catch (error) {
		//errorHandler(error as Error, req, res, () => { });
	}
}

const createRocket = async (req: Request, res: Response) => {
	try {
		const body: ICreateRocketDto = req.body
		res.json(await rocketService.createRocket(body));
	} catch (error) {
		//errorHandler(error as Error, req, res, () => { });
	}
}

const updateRocket = async (req: Request, res: Response) => {
	try {
		const body: IUpdateRocketDto = req.body
		res.json(await rocketService.updateRocket(parseInt(req.params.id), body));
	} catch (error) {
		//errorHandler(error as Error, req, res, () => { });
	}
}

const deleteRocket = async (req: Request, res: Response) => {
	try {
		res.json(await rocketService.deleteRocket(parseInt(req.params.id)));
	} catch (error) {
		//errorHandler(error as Error, req, res, () => { });
	}
}

export {
	getRockets,
	getRocket,
	createRocket,
	updateRocket,
	deleteRocket
};

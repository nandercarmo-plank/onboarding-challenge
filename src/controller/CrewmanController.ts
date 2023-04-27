import { Request, Response } from "express";
import { ICreateCrewmanDto, IUpdateCrewmanDto } from "../dto/CrewmanDto";
//import { errorHandler } from "../middleware/log/logger";
import { CrewmanRepository } from "../repository/CrewmanRepository";
import { CrewmanService } from "../service/CrewmanService";

const crewmanRepository = new CrewmanRepository();
const crewmanService = new CrewmanService(crewmanRepository);

const getCrewmans = async (req: Request, res: Response) => {
	try {
		res.json(await crewmanService.getCrewmans());
	} catch (error) {
		//errorHandler(error as Error, req, res, () => { });
	}
}

const getCrewman = async (req: Request, res: Response) => {
	try {
		res.json(await crewmanService.getCrewman(parseInt(req.params.id)));
	} catch (error) {
		//errorHandler(error as Error, req, res, () => { });
	}
}

const createCrewman = async (req: Request, res: Response) => {
	try {
		const body: ICreateCrewmanDto = req.body
		res.json(await crewmanService.createCrewman(body));
	} catch (error) {
		//errorHandler(error as Error, req, res, () => { });
	}
}

const updateCrewman = async (req: Request, res: Response) => {
	try {
		const body: IUpdateCrewmanDto = req.body
		res.json(await crewmanService.updateCrewman(parseInt(req.params.id), body));
	} catch (error) {
		//errorHandler(error as Error, req, res, () => { });
	}
}

const deleteCrewman = async (req: Request, res: Response) => {
	try {
		res.json(await crewmanService.deleteCrewman(parseInt(req.params.id)));
	} catch (error) {
		//errorHandler(error as Error, req, res, () => { });
	}
}

export {
	getCrewmans,
	getCrewman,
	createCrewman,
	updateCrewman,
	deleteCrewman
};

import { Request, Response } from "express";
import { ICreateCrewDto, IUpdateCrewDto } from "../dto/CrewDto";
import { errorHandler } from "../middleware/log/logger";
import { CrewRepository } from "../repository/CrewRepository";
import { CrewmanRepository } from "../repository/CrewmanRepository";
import { CrewService } from "../service/CrewService";
import { CrewmanService } from "../service/CrewmanService";

const crewRepository = new CrewRepository();
const crewmanRepository = new CrewmanRepository();

const crewmanService = new CrewmanService(crewmanRepository);
const crewService = new CrewService(crewRepository, crewmanService);

const getCrews = async (req: Request, res: Response) => {
	try {
		res.json(await crewService.getCrews());
	} catch (error) {
		errorHandler(error as Error, req, res, () => { });
	}
}

const getCrew = async (req: Request, res: Response) => {
	try {
		res.json(await crewService.getCrew(parseInt(req.params.id)));
	} catch (error) {
		errorHandler(error as Error, req, res, () => { });
	}
}

const createCrew = async (req: Request, res: Response) => {
	try {
		const body: ICreateCrewDto = req.body
		res.json(await crewService.createCrew(body));
	} catch (error) {
		errorHandler(error as Error, req, res, () => { });
	}
}

const updateCrew = async (req: Request, res: Response) => {
	try {
		const body: IUpdateCrewDto = req.body
		res.json(await crewService.updateCrew(parseInt(req.params.id), body));
	} catch (error) {
		errorHandler(error as Error, req, res, () => { });
	}
}

const deleteCrew = async (req: Request, res: Response) => {
	try {
		res.json(await crewService.deleteCrew(parseInt(req.params.id)));
	} catch (error) {
		errorHandler(error as Error, req, res, () => { });
	}
}

export {
	getCrews,
	getCrew,
	createCrew,
	updateCrew,
	deleteCrew
};

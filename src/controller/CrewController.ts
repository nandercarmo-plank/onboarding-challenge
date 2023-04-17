import { Request, Response } from "express";
import { ICreateCrewDto, ICrewDto, IUpdateCrewDto } from "../dto/CrewDto";
import { CrewService } from "../service/CrewService";
import JsonServerRepository from "../repository/JsonServerRepository";
import { ICrewmanDto } from "../dto/CrewmanDto";
import { ICrewmanCrewDto } from "../dto/CrewmanCrewDto";
import { errorHandler } from "../middleware/log/Logger";
import { CrewmanService } from "../service/CrewmanService";
import { CrewmanCrewService } from "../service/CrewmanCrewService";

const crewRepository = new JsonServerRepository<ICrewDto>('/crew');
const crewmanRepository = new JsonServerRepository<ICrewmanDto>('/crewman');
const crewmanCrewRepository = new JsonServerRepository<ICrewmanCrewDto>('/crewmanCrew');

const crewmanService = new CrewmanService(crewmanRepository);
const crewmanCrewService = new CrewmanCrewService(crewmanCrewRepository);
const crewService = new CrewService(crewRepository, crewmanService, crewmanCrewService);

const getCrews = async (req: Request, res: Response) => {
	res.json(await crewService.getCrews());
}

const createCrew = async (req: Request, res: Response) => {
	const body: ICreateCrewDto = req.body
	res.json(await crewService.createCrew(body));
}

const updateCrew = async (req: Request, res: Response) => {
	const body: IUpdateCrewDto = req.body
	res.json(await crewService.updateCrew(parseInt(req.params.id), body));
}

const deleteCrew = async (req: Request, res: Response) => {
	try {
		res.json(await crewService.deleteCrew(parseInt(req.params.id)));
	} catch(err: any) {
		errorHandler(err, req, res, () => {});
	}
}

export {
	getCrews,
	createCrew,
	updateCrew,
	deleteCrew
}
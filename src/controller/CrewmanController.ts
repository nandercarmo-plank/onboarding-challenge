import { Request, Response } from "express";
import { ICreateCrewmanDto, ICrewmanDto, IUpdateCrewmanDto } from "../dto/CrewmanDto";
import { CrewmanService } from "../service/CrewmanService";
import JsonServerRepository from "../repository/JsonServerRepository";

const crewmanRepository = new JsonServerRepository<ICrewmanDto>('/crewman');
const crewmanService = new CrewmanService(crewmanRepository);

const getCrewmans = async (req: Request, res: Response) => {
	res.json(await crewmanService.getCrewmans());
}

const createCrewman = async (req: Request, res: Response) => {
	const body: ICreateCrewmanDto = req.body
	res.json(await crewmanService.createCrewman(body));
}

const updateCrewman = async (req: Request, res: Response) => {
	const body: IUpdateCrewmanDto = req.body
	res.json(await crewmanService.updateCrewman(parseInt(req.params.id), body));
}

const deleteCrewman = async (req: Request, res: Response) => {
	res.json(await crewmanService.deleteCrewman(parseInt(req.params.id)));
}

export {
	getCrewmans,
	createCrewman,
	updateCrewman,
	deleteCrewman
}
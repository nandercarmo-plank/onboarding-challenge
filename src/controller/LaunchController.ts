import { Request, Response } from "express";
import { ICreateLaunchDto, ILaunchDto, IUpdateLaunchDto } from "../dto/LaunchDto";
import { LaunchService } from "../service/LaunchService";
import JsonServerRepository from "../repository/JsonServerRepository";
import { ICrewDto } from "../dto/CrewDto";
import { IRocketDto } from "../dto/RocketDto";
import { RocketService } from "../service/RocketService";
import { CrewService } from "../service/CrewService";
import { ICrewmanDto } from "../dto/CrewmanDto";
import { ICrewmanCrewDto } from "../dto/CrewmanCrewDto";
import { CrewmanService } from "../service/CrewmanService";
import { CrewmanCrewService } from "../service/CrewmanCrewService";

const launchRepository = new JsonServerRepository<ILaunchDto>('/launch');
const rocketRepository = new JsonServerRepository<IRocketDto>('/rocket');
const crewRepository = new JsonServerRepository<ICrewDto>('/crew');
const crewmanRepository = new JsonServerRepository<ICrewmanDto>('/crewman');
const crewmanCrewRepository = new JsonServerRepository<ICrewmanCrewDto>('/crewmanCrew');

const rocketService = new RocketService(rocketRepository);
const crewmanService = new CrewmanService(crewmanRepository);
const crewmanCrewService = new CrewmanCrewService(crewmanCrewRepository);
const crewService = new CrewService(crewRepository, crewmanService, crewmanCrewService);

const launchService = new LaunchService(launchRepository, rocketService, crewService);

const getLaunchs = async (req: Request, res: Response) => {
	res.json(await launchService.getLaunchs());
}

const createLaunch = async (req: Request, res: Response) => {
	const body: ICreateLaunchDto = req.body
	res.json(await launchService.createLaunch(body));
}

const updateLaunch = async (req: Request, res: Response) => {
	const body: IUpdateLaunchDto = req.body
	res.json(await launchService.updateLaunch(parseInt(req.params.id), body));
}

const deleteLaunch = async (req: Request, res: Response) => {
	res.json(await launchService.deleteLaunch(parseInt(req.params.id)));
}

export {
	getLaunchs,
	createLaunch,
	updateLaunch,
	deleteLaunch
}
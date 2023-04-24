import { Request, Response } from "express";
import { ICreateLaunchDto, IUpdateLaunchDto } from "../dto/LaunchDto";
import { errorHandler } from "../middleware/log/logger";
import { CrewRepository } from "../repository/CrewRepository";
import { CrewmanRepository } from "../repository/CrewmanRepository";
import { LaunchRepository } from "../repository/LaunchRepository";
import { RocketRepository } from "../repository/RocketRepository";
import { CrewService } from "../service/CrewService";
import { CrewmanService } from "../service/CrewmanService";
import { LaunchService } from "../service/LaunchService";
import { RocketService } from "../service/RocketService";

const launchRepository = new LaunchRepository();
const rocketRepository = new RocketRepository();
const crewRepository = new CrewRepository();
const crewmanRepository = new CrewmanRepository();

const rocketService = new RocketService(rocketRepository);
const crewmanService = new CrewmanService(crewmanRepository);
const crewService = new CrewService(crewRepository, crewmanService);

const launchService = new LaunchService(launchRepository, rocketService, crewService);

const getLaunchs = async (req: Request, res: Response) => {
	try {
		res.json(await launchService.getLaunchs());
	} catch (error) {
		errorHandler(error as Error, req, res, () => { });
	}
}

const getLaunch = async (req: Request, res: Response) => {
	try {
		res.json(await launchService.getLaunch(parseInt(req.params.id)));
	} catch (error) {
		errorHandler(error as Error, req, res, () => { });
	}
}

const createLaunch = async (req: Request, res: Response) => {
	try {
		const body: ICreateLaunchDto = req.body
		res.json(await launchService.createLaunch(body));
	} catch (error) {
		errorHandler(error as Error, req, res, () => { });
	}
}

const updateLaunch = async (req: Request, res: Response) => {
	try {
		const body: IUpdateLaunchDto = req.body
		res.json(await launchService.updateLaunch(parseInt(req.params.id), body));
	} catch (error) {
		errorHandler(error as Error, req, res, () => { });
	}
}

const deleteLaunch = async (req: Request, res: Response) => {
	try {
		res.json(await launchService.deleteLaunch(parseInt(req.params.id)));
	} catch (error) {
		errorHandler(error as Error, req, res, () => { });
	}
}

export {
	getLaunchs,
	getLaunch,
	createLaunch,
	updateLaunch,
	deleteLaunch
};

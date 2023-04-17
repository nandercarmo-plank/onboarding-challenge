import { Request, Response } from "express";
import { ICreateRocketDto, IRocketDto, IUpdateRocketDto } from "../dto/RocketDto";
import { RocketService } from "../service/RocketService";
import JsonServerRepository from "../repository/JsonServerRepository";

const rocketRepository = new JsonServerRepository<IRocketDto>('/rocket');
const rocketService = new RocketService(rocketRepository);

const getRockets = async (req: Request, res: Response) => {
	res.json(await rocketService.getRockets());
}

const createRocket = async (req: Request, res: Response) => {
	const body: ICreateRocketDto = req.body
	res.json(await rocketService.createRocket(body));
}

const updateRocket = async (req: Request, res: Response) => {
	const body: IUpdateRocketDto = req.body
	res.json(await rocketService.updateRocket(parseInt(req.params.id), body));
}

const deleteRocket = async (req: Request, res: Response) => {
	res.json(await rocketService.deleteRocket(parseInt(req.params.id)));
}

export {
	getRockets,
	createRocket,
	updateRocket,
	deleteRocket
}
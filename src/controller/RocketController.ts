import { Request, Response } from "express";
import { ICreateRocketDto, IUpdateRocketDto } from "../dto/RocketDto";
import { RequestErrorHandler } from "../middleware/log/Logger";
import { IRocketService } from "../service/RocketService";
import { IController } from "./Controller";

class RocketController implements IController {

	private rocketService: IRocketService;

	constructor(service: IRocketService) {
		console.log('RocketController');
		this.rocketService = service;
	}

	async getAll(req: Request, res: Response) {
		try {
			console.log('Shazam coroi');
			res.json(await this.rocketService.getRockets());
		} catch (error) {
			RequestErrorHandler(error as Error, req, res, () => { });
		}
	}

	async get(req: Request, res: Response) {
		try {
			res.json(await this.rocketService.getRocket(parseInt(req.params.id)));
		} catch (error) {
			RequestErrorHandler(error as Error, req, res, () => { });
		}
	}

	async create(req: Request, res: Response) {
		try {
			const body: ICreateRocketDto = req.body
			res.json(await this.rocketService.createRocket(body));
		} catch (error) {
			RequestErrorHandler(error as Error, req, res, () => { });
		}
	}

	async update(req: Request, res: Response) {
		try {
			const body: IUpdateRocketDto = req.body
			res.json(await this.rocketService.updateRocket(parseInt(req.params.id), body));
		} catch (error) {
			RequestErrorHandler(error as Error, req, res, () => { });
		}
	}

	async delete(req: Request, res: Response) {
		try {
			res.json(await this.rocketService.deleteRocket(parseInt(req.params.id)));
		} catch (error) {
			RequestErrorHandler(error as Error, req, res, () => { });
		}
	}
}

export {
	RocketController
};

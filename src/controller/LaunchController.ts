import { Request, Response } from "express";
import { ICreateLaunchDto, IUpdateLaunchDto } from "../dto/LaunchDto";
import { RequestErrorHandler } from "../middleware/log/Logger";
import { ILaunchService } from "../service/LaunchService";
import { IController } from "./Controller";

class LaunchController implements IController {

	private launchService: ILaunchService;

	constructor(launchService: ILaunchService) {
		this.launchService = launchService;
	}

	async getAll(req: Request, res: Response): Promise<void> {
		try {
			res.json(await this.launchService.getLaunchs());
		} catch (error) {
			RequestErrorHandler(error as Error, req, res, () => { });
		}
	}

	async get(req: Request, res: Response): Promise<void> {
		try {
			res.json(await this.launchService.getLaunch(parseInt(req.params.id)));
		} catch (error) {
			RequestErrorHandler(error as Error, req, res, () => { });
		}
	}

	async create(req: Request, res: Response): Promise<void> {
		try {
			const body: ICreateLaunchDto = req.body
			res.json(await this.launchService.createLaunch(body));
		} catch (error) {
			RequestErrorHandler(error as Error, req, res, () => { });
		}
	}

	async update(req: Request, res: Response): Promise<void> {
		try {
			const body: IUpdateLaunchDto = req.body
			res.json(await this.launchService.updateLaunch(parseInt(req.params.id), body));
		} catch (error) {
			RequestErrorHandler(error as Error, req, res, () => { });
		}
	}

	async delete(req: Request, res: Response): Promise<void> {
		try {
			res.json(await this.launchService.deleteLaunch(parseInt(req.params.id)));
		} catch (error) {
			RequestErrorHandler(error as Error, req, res, () => { });
		}
	}
}

export {
	LaunchController
};

import { Request, Response } from "express";
import { ICreateCrewDto, IUpdateCrewDto } from "../dto/CrewDto";
import { RequestErrorHandler } from "../middleware/log/Logger";
import { ICrewService } from "../service/CrewService";
import { IController } from "./Controller";

class CrewController implements IController {

	private crewService: ICrewService;

	constructor(crewService: ICrewService) {
		this.crewService = crewService;
	}

	async getAll(req: Request, res: Response): Promise<void> {
		try {
			res.json(await this.crewService.getCrews());
		} catch (error) {
			RequestErrorHandler(error as Error, req, res, () => { });
		}
	}

	async get(req: Request, res: Response): Promise<void> {
		try {
			res.json(await this.crewService.getCrew(parseInt(req.params.id)));
		} catch (error) {
			RequestErrorHandler(error as Error, req, res, () => { });
		}
	}

	async create(req: Request, res: Response): Promise<void> {
		try {
			const body: ICreateCrewDto = req.body
			res.json(await this.crewService.createCrew(body));
		} catch (error) {
			RequestErrorHandler(error as Error, req, res, () => { });
		}
	}

	async update(req: Request, res: Response): Promise<void> {
		try {
			const body: IUpdateCrewDto = req.body
			res.json(await this.crewService.updateCrew(parseInt(req.params.id), body));
		} catch (error) {
			RequestErrorHandler(error as Error, req, res, () => { });
		}
	}

	async delete(req: Request, res: Response): Promise<void> {
		try {
			res.json(await this.crewService.deleteCrew(parseInt(req.params.id)));
		} catch (error) {
			RequestErrorHandler(error as Error, req, res, () => { });
		}
	}
}

export {
	CrewController
};

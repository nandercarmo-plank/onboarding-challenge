import { Request, Response } from "express";
import { ICreateCrewmanDto, IUpdateCrewmanDto } from "../dto/CrewmanDto";
import { RequestErrorHandler } from "../middleware/log/Logger";
import { ICrewmanService } from "../service/CrewmanService";
import { IController } from "./Controller";

class CrewmanController implements IController {

	private crewmanService: ICrewmanService;

	constructor(crewmanService: ICrewmanService) {
		this.crewmanService = crewmanService;
	}

	async getAll(req: Request, res: Response): Promise<void> {
		try {
			res.json(await this.crewmanService.getCrewmans());
		} catch (error) {
			RequestErrorHandler(error as Error, req, res, () => { });
		}
	}

	async get(req: Request, res: Response): Promise<void> {
		try {
			res.json(await this.crewmanService.getCrewman(parseInt(req.params.id)));
		} catch (error) {
			RequestErrorHandler(error as Error, req, res, () => { });
		}
	}

	async create(req: Request, res: Response): Promise<void> {
		try {
			const body: ICreateCrewmanDto = req.body
			res.json(await this.crewmanService.createCrewman(body));
		} catch (error) {
			RequestErrorHandler(error as Error, req, res, () => { });
		}
	}

	async update(req: Request, res: Response): Promise<void> {
		try {
			const body: IUpdateCrewmanDto = req.body
			res.json(await this.crewmanService.updateCrewman(parseInt(req.params.id), body));
		} catch (error) {
			RequestErrorHandler(error as Error, req, res, () => { });
		}
	}

	async delete(req: Request, res: Response): Promise<void> {
		try {
			res.json(await this.crewmanService.deleteCrewman(parseInt(req.params.id)));
		} catch (error) {
			RequestErrorHandler(error as Error, req, res, () => { });
		}
	}
}

export {
	CrewmanController
};

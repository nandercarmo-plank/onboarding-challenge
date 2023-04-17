import { ICreateCrewDto, ICrewDto, IUpdateCrewDto } from "../dto/CrewDto";
import { ICrewmanCrewDto } from "../dto/CrewmanCrewDto";
import { ICrewmanDto } from "../dto/CrewmanDto";
import IRepository from "../repository/Repository";
import { CrewmanCrewService } from "./CrewmanCrewService";
import { CrewmanService } from "./CrewmanService";

interface ICrewService {
	getCrews(): Promise<ICrewDto[]>;
	getCrew(crewId?: number): Promise<ICrewDto | undefined>;
	createCrew(crew: ICreateCrewDto): Promise<ICrewDto>;
	updateCrew(id: number, crew: IUpdateCrewDto): Promise<ICrewDto>;
	deleteCrew(id: number): Promise<void>;
}

class CrewService implements ICrewService {

	private crewRepository: IRepository<ICrewDto>;
	private crewmanService: CrewmanService;
	private crewmanCrewService: CrewmanCrewService;

	constructor(
		crewRepository: IRepository<ICrewDto>, 
		crewmanService: CrewmanService,
		crewmanCrewService: CrewmanCrewService
	) {
		this.crewRepository = crewRepository;
		this.crewmanService = crewmanService;
		this.crewmanCrewService = crewmanCrewService;
	}

	async getCrews(): Promise<ICrewDto[]> {
		
		const crews = await this.crewRepository.findAll();

		for(const crew of crews) {
			crew.crewmans = await this.getCrewCrewmans(crew);
		}

		return crews;
	}

	async getCrew(crewId?: number): Promise<ICrewDto | undefined> {
		
		if(crewId === undefined) return undefined;

		const crew = await this.crewRepository.findById(crewId);
		crew.crewmans = await this.getCrewCrewmans(crew);

		return crew;
	}

	async createCrew(crewDto: ICreateCrewDto): Promise<ICrewDto> {

		const crew = await this.crewRepository.create({ name: crewDto.name });

		if(crewDto.crewmans !== undefined) {

			for (const crewmanId of crewDto.crewmans) {
				await this.crewmanCrewService.createCrewmanCrew({ crewId: crew?.id ?? 0, crewmanId: crewmanId });
			}

			crew.crewmans = await this.getCrewCrewmans(crew);
		}

		return crew;
	}

	async updateCrew(id: number, crewDto: IUpdateCrewDto): Promise<ICrewDto> {
		
		const crew = await this.crewRepository.findById(id);
		
		crew.name = crewDto.name;

		if(crewDto.crewmans !== undefined) {

			const crewmanCrews = await this.crewmanCrewService.getCrewmanCrews();

			for(const crewmanCrew of crewmanCrews) {
				if (crewmanCrew.crewId === crew.id) {
					await this.crewmanCrewService.deleteCrewmanCrew(crewmanCrew.id);
				}
			}
				
			for (const crewmanId of crewDto.crewmans) {
				await this.crewmanCrewService.createCrewmanCrew({ crewId: crew?.id ?? 0, crewmanId: crewmanId });
			}

			crew.crewmans = await this.getCrewCrewmans(crew);
		}

		return await this.crewRepository.update(id, crew);
	}

	async deleteCrew(id: number): Promise<void> {

		const crewmanCrews = await this.crewmanCrewService.getCrewmanCrews();

		for(const crewmanCrew of crewmanCrews) {
			if (crewmanCrew.crewId === id) {
				await this.crewmanCrewService.deleteCrewmanCrew(crewmanCrew.id);
			}
		}

		await this.crewRepository.delete(id);
	}

	private async getCrewCrewmans(crew: ICrewDto): Promise<ICrewmanDto[]> {

		const crewmans = await this.crewmanService.getCrewmans();
		const crewmanCrews = await this.crewmanCrewService.getCrewmanCrews();

		return crewmans.filter(crewman => crewmanCrews
			.filter(crewmanCrew => crewmanCrew.crewId === crew.id)
			.some(crewmanCrew => crewmanCrew.crewmanId === crewman.id)
		);
	}
}

export {
	ICrewService,
	CrewService
}
import { ICreateLaunchDto, ILaunchDto, IUpdateLaunchDto } from "../dto/LaunchDto";
import IRepository from "../repository/Repository";
import { CrewService } from "./CrewService";
import { RocketService } from "./RocketService";

interface ILaunchService {
	getLaunchs(): Promise<ILaunchDto[]>;
	createLaunch(launch: ICreateLaunchDto): Promise<ILaunchDto>;
	updateLaunch(id: number, launch: IUpdateLaunchDto): Promise<ILaunchDto>;
	deleteLaunch(id: number): Promise<void>;
}

class LaunchService implements ILaunchService {

	private launchRepository: IRepository<ILaunchDto>;
	
	private rocketService: RocketService;
	private crewService: CrewService;

	constructor(
		launchRepository: IRepository<ILaunchDto>, 
		rocketService: RocketService, 
		crewService: CrewService
	) {
		this.launchRepository = launchRepository;
		this.rocketService = rocketService;
		this.crewService = crewService;
	}

	async getLaunchs(): Promise<ILaunchDto[]> {

		const launchs = await this.launchRepository.findAll();
		const resultLaunchs: ILaunchDto[] = [];

		for(const launch of launchs) {
			resultLaunchs.push(await this.getLaunchRocketAndCrewInfo(launch));
		}

		return resultLaunchs;
	}

	async createLaunch(launchDto: ICreateLaunchDto): Promise<ILaunchDto> {
		const launch = await this.launchRepository.create(launchDto);
		return await this.getLaunchRocketAndCrewInfo(launch);
	}

	async updateLaunch(id: number, launchDto: IUpdateLaunchDto): Promise<ILaunchDto> {
		
		const launch = await this.launchRepository.findById(id);
		
		launch.launchCode = launchDto.launchCode;
		launch.date = launchDto.date;
		launch.success = launchDto.success;
		launch.rocketId = launchDto.rocketId;
		launch.crewId = launchDto.crewId;

		const updatedLaunch = await this.launchRepository.update(id, launch);
		return await this.getLaunchRocketAndCrewInfo(updatedLaunch);
	}

	async deleteLaunch(id: number): Promise<void> {
		await this.launchRepository.delete(id);
	}
	
	private async getLaunchRocketAndCrewInfo(launch: ILaunchDto): Promise<ILaunchDto> {
		launch.rocket = await this.rocketService.getRocket(launch.rocketId);
		launch.crew = await this.crewService.getCrew(launch.crewId);
		launch.rocketId = undefined;
		launch.crewId = undefined;
		return launch;
	}
}

export {
	ILaunchService,
	LaunchService
}
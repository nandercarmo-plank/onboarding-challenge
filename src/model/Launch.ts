import Crew from "./Crew";
import Rocket from "./Rocket";

interface ILaunch {
	getId(): number;
	setId(id: number): Launch;
	getLaunchCode(): string;
	setLaunchCode(launchCode: string): Launch;
	getDate(): string;
	setDate(date: string): Launch;
	isSuccess(): boolean;
	setSuccess(isSuccess: boolean): Launch;
	getRocket(): Rocket;
	setRocket(rocket: Rocket): Launch;
	getCrew(): Crew | undefined;
	setCrew(crew: Crew): Launch;
};

interface ILaunchParams { 
	id: number; 
	launchCode: string; 
	date: string; 
	success: boolean; 
	rocket: Rocket; 
	crew: Crew; 
};

export default class Launch implements ILaunch {

	private id: number;
	private launchCode: string;
	private date: string;
	private success: boolean;
	private rocket: Rocket;
	private crew: Crew;

	constructor({ id, launchCode, date, success, rocket, crew }: ILaunchParams) {
		this.id = id;
		this.launchCode = launchCode;
		this.date = date;
		this.success = success;
		this.rocket = rocket;
		this.crew = crew;
	}

	getId(): number {
		return this.id;
	}

	setId(id: number): Launch {
		this.id = id;
		return this;
	}

	getLaunchCode(): string {
		return this.launchCode;
	}

	setLaunchCode(launchCode: string): Launch {
		this.launchCode = launchCode;
		return this;
	}

	getDate(): string {
		return this.date;
	}

	setDate(date: string): Launch {
		this.date = date;
		return this;
	}

	isSuccess(): boolean {
		return this.success;
	}

	setSuccess(success: boolean) {
		this.success = success;
		return this;
	}

	getRocket(): Rocket {
		return this.rocket;
	}

	setRocket(rocket: Rocket): Launch {
		this.rocket = rocket;
		return this;
	}

	getCrew(): Crew | undefined {
		return this.crew;
	}

	setCrew(crew: Crew): Launch {
		this.crew = crew;
		return this;
	}
}
import Crewman from "./Crewman";

interface ICrew {
	getId(): number;
	setId(id: number): Crew;
	getName(): string;
	setName(name: string): Crew;
	getLaunch(): string;
	setLaunch(launch: string): Crew;
	getCrewman(): Crewman[];
	setCrewman(crewman: Crewman[]): Crew;
};

export default class Crew implements ICrew {

	private id: number;
	private name: string;
	private launch: string;
	private crewman: Crewman[];
	
	getId(): number {
		return this.id;
	}
	
	setId(id: number): Crew {
		this.id = id;
		return this;
	}
	
	getName(): string {
		return this.name;
	}
	
	setName(name: string): Crew {
		this.name = name;
		return this;
	}
	
	getLaunch(): string {
		return this.launch;
	}
	
	setLaunch(launch: string): Crew {
		this.launch = launch;
		return this;
	}
	
	getCrewman(): Crewman[] {
		return this.crewman;
	}
	
	setCrewman(crewman: Crewman[]): Crew {
		this.crewman = crewman;
		return this;
	}
}
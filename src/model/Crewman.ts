import Crew from "./Crew";

interface ICrewman {
	getId(): number;
	setId(id: number): Crewman;
	getName(): string;
	setName(name: string): Crewman;
	getPatent(): string;
	setPatent(patent: string): Crewman;
};

export default class Crewman implements ICrewman {

	private id: number;
	private name: string;
	private patent: string;

	getId(): number {
		return this.id;
	}

	setId(id: number): Crewman {
		this.id = id;
		return this;
	}

	getName(): string {
		return this.name;
	}

	setName(name: string): Crewman {
		this.name = name;
		return this;
	}

	getPatent(): string {
		return this.patent;
	}

	setPatent(patent: string): Crewman {
		this.patent = patent;
		return this;
	}
}
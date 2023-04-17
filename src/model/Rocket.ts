import Launch from "./Launch";

interface IRocket {
	getName(): string;
	setName(name: string): Rocket;
	getId(): number;
	setId(id: number): Rocket;
}

interface IRocketParams { 
	name: string; 
	id: number; 
}

export default class Rocket implements IRocket {

	private name: string;
	private id: number;

	constructor({ name, id }: IRocketParams) {
		this.name = name;
		this.id = id;
	}

	getName(): string {
		return this.name;
	}

	setName(name: string): Rocket {
		this.name = name;
		return this;			
	}

	getId(): number {
		return this.id;
	}

	setId(id: number): Rocket {
		this.id = id;
		return this;		
	}
}
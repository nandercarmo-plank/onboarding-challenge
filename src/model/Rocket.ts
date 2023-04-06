import Launch from "./Launch";

interface IRocket {
	getName(): string;
	setName(name: string): Rocket;
	getId(): number;
	setId(id: number): Rocket;
}

export default class Rocket implements IRocket {

	private name: string;
	private id: number;

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
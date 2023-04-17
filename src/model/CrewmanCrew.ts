interface ICrewmanCrew {
	getId(): number;
	setId(id: number): CrewmanCrew;
	getCrewmanId(): number;
	setCrewmanId(crewmanId: number): CrewmanCrew;
	getCrewId(): number;
	setCrewId(crewId: number): CrewmanCrew;
}

interface ICrewmanCrewParams { 
	id: number; 
	crewmanId: number; 
	crewId: number; 
};

export default class CrewmanCrew implements ICrewmanCrew {
	
	private id: number;
	private crewmanId: number;
	private crewId: number;

	constructor({ id, crewmanId, crewId }: ICrewmanCrewParams) {
		this.id = id;
		this.crewmanId = crewmanId;
		this.crewId = crewId;
	}

	getId(): number {
		return this.id;
	}

	setId(id: number): CrewmanCrew {
		this.id = id;
		return this;
	}

	getCrewmanId(): number {
		return this.crewmanId;
	}

	setCrewmanId(crewmanId: number): CrewmanCrew {
		this.crewmanId = crewmanId;
		return this;
	}

	getCrewId(): number {
		return this.crewId;
	}

	setCrewId(crewId: number): CrewmanCrew {
		this.crewId = crewId;
		return this;
	}	
}
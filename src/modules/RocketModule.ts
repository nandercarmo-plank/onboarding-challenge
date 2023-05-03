import { RocketController } from "../controller/RocketController";
import { RocketRepository } from "../repository/RocketRepository";
import { RocketService } from "../service/RocketService";

console.log('RocketModule');

const rocketRepository = new RocketRepository();
const rocketService = new RocketService(rocketRepository);
const rocketController = new RocketController(rocketService);

export {
	rocketRepository,
	rocketService,
	rocketController
};

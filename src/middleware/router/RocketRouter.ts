import { Router } from "express";

import { createRocket, deleteRocket, getRockets, updateRocket } from "../../controller/RocketController";

const router = Router();

router.get('/', getRockets);
router.post('/', createRocket);
router.put('/:id', updateRocket);
router.delete('/:id', deleteRocket);

export {
	router as RocketRouter
};
import { Router } from "express";

import { createCrew, deleteCrew, getCrews, updateCrew } from "../../controller/CrewController";

const router = Router();

router.get('/', getCrews);
router.post('/', createCrew);
router.put('/:id', updateCrew);
router.delete('/:id', deleteCrew);

export {
	router as CrewRouter
};
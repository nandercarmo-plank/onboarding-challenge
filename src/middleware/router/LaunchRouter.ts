import { Router } from "express";

import { createLaunch, deleteLaunch, getLaunchs, updateLaunch } from "../../controller/LaunchController";

const router = Router();

router.get('/', getLaunchs);
router.post('/', createLaunch);
router.put('/:id', updateLaunch);
router.delete('/:id', deleteLaunch);

export {
	router as LaunchRouter
};
import { Router } from "express";

import authRouter from "./authRouter.js";
import charactersRouter from "./charactersRouter.js";

const router = Router();

router.use(authRouter);
router.use(charactersRouter);

export default router;
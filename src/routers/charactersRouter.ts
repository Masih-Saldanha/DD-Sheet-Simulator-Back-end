import { Router } from "express";

import { validateToken } from "../middlewares/tokenMiddleware.js";
import charactersController from "../controllers/charactersController.js";

const charactersRouter = Router();

charactersRouter.get("/characters/", validateToken, charactersController.getUserCharactersList);

export default charactersRouter;
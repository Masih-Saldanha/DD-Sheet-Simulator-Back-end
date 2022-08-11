import { Router } from "express";

import { validateToken } from "../middlewares/tokenMiddleware.js";
import charactersController from "../controllers/charactersController.js";
import { validateSchema } from "../middlewares/schemaValidationMiddleware.js";
import characterSchema from "../schemas/characterSchema.js";

const charactersRouter = Router();

charactersRouter.get("/characters/", validateToken, charactersController.getUserCharactersList);
charactersRouter.post("/characters/", validateToken, validateSchema(characterSchema.character), charactersController.createCharacter);

export default charactersRouter;
import { Router } from "express";

import { validateSchema } from "../middlewares/schemaValidationMiddleware.js";
import authSchema from "../schemas/authSchema.js";
import authController from "../controllers/authController.js";

const authRouter = Router();

authRouter.post("/signup", validateSchema(authSchema.signUp), authController.signUp);
authRouter.post("/signin", validateSchema(authSchema.signIn), authController.signIn);

export default authRouter;
import { Request, Response } from "express";

import { SignInUser, SignUpUser } from "../schemas/authSchema.js";
import authService from "../services/authService.js";

async function signUp(req: Request, res: Response) {
    const signUpData: SignUpUser = req.body;

    await authService.signUp(signUpData);

    res.sendStatus(201);
};

async function signIn(req: Request, res: Response) {
    const signInData: SignInUser = req.body;

    const token = await authService.signIn(signInData);

    res.status(201).send(token);
};

const authController = {
    signUp,
    signIn,
};

export default authController;
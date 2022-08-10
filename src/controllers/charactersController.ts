import { Request, Response } from "express";

import { TokenData } from "../middlewares/tokenMiddleware.js";
import charactersService from "../services/charactersService.js";

async function getUserCharactersList(req: Request, res: Response) {
    const userData: TokenData = res.locals.userDataFromToken;
    // const userId = req.params.userId;
    // const id = parseInt(userId);

    const charactersList = await charactersService.getUserCharactersList(userData.id);

    console.log(charactersList)

    res.status(200).send(charactersList);
};

const charactersController = {
    getUserCharactersList,
};

export default charactersController;
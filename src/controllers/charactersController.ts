import { Request, Response } from "express";

import { TokenData } from "../middlewares/tokenMiddleware.js";
import { CharactersDataSchemaFinal } from "../schemas/characterSchema.js";
import charactersService from "../services/charactersService.js";

async function getUserCharactersList(req: Request, res: Response) {
    const userData: TokenData = res.locals.userDataFromToken;
    // const userId = req.params.userId;
    // const id = parseInt(userId);

    const charactersList = await charactersService.getUserCharactersList(userData.id);

    res.status(200).send(charactersList);
};

async function createCharacter(req: Request, res: Response) {
    const userData: TokenData = res.locals.userDataFromToken;
    const charData: CharactersDataSchemaFinal = req.body;
    
    const data = await charactersService.createCharacter(userData.id, charData);

    res.status(200).send(data);
};

const charactersController = {
    getUserCharactersList,
    createCharacter,
};

export default charactersController;
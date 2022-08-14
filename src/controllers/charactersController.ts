import { Request, Response } from "express";

import { TokenData } from "../middlewares/tokenMiddleware.js";
import { CharactersDataSchemaFinal } from "../schemas/characterSchema.js";
import charactersService from "../services/charactersService.js";

async function getUserCharactersList(req: Request, res: Response) {
    const userData: TokenData = res.locals.userDataFromToken;

    const charactersList = await charactersService.getUserCharactersList(userData.id);

    res.status(200).send(charactersList);
};

async function createCharacter(req: Request, res: Response) {
    const userData: TokenData = res.locals.userDataFromToken;
    const charData: CharactersDataSchemaFinal = req.body;

    const data = await charactersService.createCharacter(userData.id, charData);

    res.status(200).send(data);
};

async function getCharacterByCharId(req: Request, res: Response) {
    const userData: TokenData = res.locals.userDataFromToken;
    const charId = req.params.charId;
    const id = parseInt(charId);

    const charData = await charactersService.getCharacterByCharId(userData.id, id);

    res.status(200).send(charData);
};

const charactersController = {
    getUserCharactersList,
    createCharacter,
    getCharacterByCharId,
};

export default charactersController;
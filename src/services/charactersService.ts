import charactersRepository from "../repositories/charactersRepository.js";
import biosRepository from "../repositories/biosRepository.js";
import statsRepository from "../repositories/statsRepository.js";
import { CharactersDataSchemaFinal } from "../schemas/characterSchema.js";

async function getUserCharactersList(userId: number) {
    return await charactersRepository.getUserCharactersListByUserId(userId);
};

async function createCharacter(userId: number, characterData: CharactersDataSchemaFinal) {
    const { id: statsId } = await statsRepository.createStats(characterData.stats);

    const { id: biosId } = await biosRepository.createBios(characterData.bios);

    const charData = {
        charName: characterData.charName,
        charPicture: characterData.charPicture,
        userId,
        statsId,
        raceId: characterData.raceId,
        backgroundId: characterData.backgroundId,
        biosId,
        classList: characterData.charactersClasses
    };
    return await charactersRepository.createCharacter(charData)
};

const charactersService = {
    getUserCharactersList,
    createCharacter,
};

export default charactersService;
import charactersRepository from "../repositories/charactersRepository.js";

async function getUserCharactersList(userId: number) {
    return await charactersRepository.getUserCharactersListByUserId(userId);
};

const charactersService = {
    getUserCharactersList,
};

export default charactersService;
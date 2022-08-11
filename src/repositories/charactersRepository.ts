import { Characters } from "@prisma/client";

import { prisma } from "../config/database.js";
import { CharactersClassesDataSchema } from "../repositories/charactersClassesRepository.js"

export type CharactersData = Omit<Characters, "id">;

export type CharactersFullData = CharactersData & {
    classList: CharactersClassesDataSchema[];
};

async function getUserCharactersListByUserId(userId: number) {
    return prisma.characters.findMany({
        where: { userId },
        select: {
            id: true,
            charName: true,
        }
    });
};

async function createCharacter(charactersFullData: CharactersFullData) {
    await prisma.characters.create({
        data: {
            userId: charactersFullData.userId,              // PEGA DO TOKEN
            charName: charactersFullData.charName,
            charPicture: charactersFullData.charPicture,
            raceId: charactersFullData.raceId,              // PEGA DA REQUISIÇÃO ABAIXO
            backgroundId: charactersFullData.backgroundId,  // PEGA DA REQUISIÇÃO ABAIXO
            statsId: charactersFullData.statsId,            // CRIA E PEGA NA REQUISIÇÃO ABAIXO
            biosId: charactersFullData.biosId,                // CRIA E PEGA NA REQUISIÇÃO ABAIXO
            charactersClasses: {
                create: charactersFullData.classList.map((actualClass) => {
                    return {
                        classId: actualClass.classId,            // PEGA DA REQUISIÇÃO ABAIXO
                        classLevel: actualClass.classLevel,
                    };
                }),
            },
        },
    });
};

const charactersRepository = {
    getUserCharactersListByUserId,
    createCharacter,
};

export default charactersRepository;
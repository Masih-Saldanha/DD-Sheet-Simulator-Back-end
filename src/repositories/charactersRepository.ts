import { Characters } from "@prisma/client";

import { prisma } from "../config/database.js";

export type CharactersData = Omit<Characters, "id">;

async function getUserCharactersListByUserId(userId: number) {
    return prisma.characters.findMany({
        where: { userId },
        select: {
            id: true,
            charName: true,
        }
    });
}

const charactersRepository = {
    getUserCharactersListByUserId,
};

export default charactersRepository;
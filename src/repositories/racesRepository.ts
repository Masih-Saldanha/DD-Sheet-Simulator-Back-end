import { Races } from "@prisma/client";

import { prisma } from "../config/database.js";

export type RacesData = Omit<Races, "id">;

async function getRaceByName(raceName: string) {
    return prisma.races.findUnique({ where: { raceName } })
};

const racesRepository = {
    getRaceByName,
};

export default racesRepository;
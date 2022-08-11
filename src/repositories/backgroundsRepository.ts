import { Backgrounds } from "@prisma/client";

import { prisma } from "../config/database.js";

export type BackgroundsData = Omit<Backgrounds, "id">;

async function getBackgroundByName(backgroundName: string) {
    return prisma.backgrounds.findUnique({ where: { backgroundName } })
};

const backgroundsRepository = {
    getBackgroundByName,
};

export default backgroundsRepository;
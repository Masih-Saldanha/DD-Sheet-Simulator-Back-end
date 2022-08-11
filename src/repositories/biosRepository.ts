import { Bios } from "@prisma/client";

import { prisma } from "../config/database.js";

export type BiosData = Omit<Bios, "id">;

async function createBios(data: BiosData) {
    return prisma.bios.create({ data });
};

const biosRepository = {
    createBios,
};

export default biosRepository;
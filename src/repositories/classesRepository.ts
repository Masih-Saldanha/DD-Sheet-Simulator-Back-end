import { Classes } from "@prisma/client";

import { prisma } from "../config/database.js";

export type ClassesData = Omit<Classes, "id">;

async function getClassByName(className: string) {
    return prisma.classes.findUnique({ where: { className } })
};

const classesRepository = {
    getClassByName,
};

export default classesRepository;
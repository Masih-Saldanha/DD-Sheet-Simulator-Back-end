import { Stats } from "@prisma/client";

import { prisma } from "../config/database.js";

export type StatsData = Omit<Stats, "id">;

async function createStats(data: StatsData) {
    return prisma.stats.create({ data });
};

const statsRepository = {
    createStats,
};

export default statsRepository;
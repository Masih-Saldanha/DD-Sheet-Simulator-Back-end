import { Users } from "@prisma/client"

import { prisma } from "../config/database.js";

export type UserData = Omit<Users, "id">;

async function findUserByEmail(email: string) {
    return await prisma.users.findUnique({ where: { email } });
};

async function registerUser(data: UserData) {
    await prisma.users.create({ data });
};

const authRepository = {
    findUserByEmail,
    registerUser,
};

export default authRepository;
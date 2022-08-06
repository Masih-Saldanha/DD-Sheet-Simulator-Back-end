import Joi from "joi";

import { UserData } from "../repositories/authRepository.js";

export type SignInUser = Omit<UserData, "userPicture" | "userName">;

export type SignUpUser = UserData & {
    repeatPassword: string;
};

const signUp = Joi.object<SignUpUser>({
    userName: Joi.string().required(),
    userPicture: Joi.string().uri(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    repeatPassword: Joi.string().valid(Joi.ref("password")).required(),
});

const signIn = Joi.object<SignInUser>({
    email: Joi.string().required(),
    password: Joi.string().required(),
});

const authSchema = {
    signUp,
    signIn,
};

export default authSchema;
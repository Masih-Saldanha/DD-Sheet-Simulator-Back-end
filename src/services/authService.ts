import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { SignInUser, SignUpUser } from "../schemas/authSchema.js";
import { throwError } from "../utils/errorTypeUtils.js";
import authRepository from "../repositories/authRepository.js";

async function signUp(signUpData: SignUpUser) {
    const userExist = await authRepository.findUserByEmail(signUpData.email);
    throwError(!!userExist, "Conflict", `The email: "${signUpData.email}" is already registered, try another one`);

    delete signUpData.repeatPassword;
    signUpData.password = bcrypt.hashSync(signUpData.password, +process.env.BCRYPT_SALT);

    await authRepository.registerUser(signUpData);
};

async function signIn(signInData: SignInUser) {
    const userExist = await authRepository.findUserByEmail(signInData.email);
    throwError(!userExist, "Not Found", `The email: "${signInData.email}", isn't registered yet`);

    const isPasswordRight = bcrypt.compareSync(signInData.password, userExist.password);
    throwError(!isPasswordRight, "Not Acceptable", `The password sent doesn't match with the e-mail: "${signInData.email}", try again`);

    const tokenData = {
        id: userExist.id,
        email: userExist.email,
        userName: userExist.userName,
        userPicture: userExist.userPicture,
    };
    return jwt.sign(tokenData, process.env.JWT_TOKEN);
};

const authService = {
    signUp,
    signIn,
};

export default authService;
import Joi from "joi";

import { StatsData } from "../repositories/statsRepository.js";
import { CharactersData } from "../repositories/charactersRepository.js";
import { BiosData } from "../repositories/biosRepository.js";
import { CharactersClassesDataSchema } from "../repositories/charactersClassesRepository.js";

export type CharactersDataSchema = Omit<CharactersData, "userId" | "statsId" | "bioId">;

export type CharactersDataSchemaFinal = CharactersDataSchema & {
    stats: StatsData;
    bios: BiosData;
    charactersClasses: CharactersClassesDataSchema[]
}

const character = Joi.object<CharactersDataSchemaFinal>({
    charName: Joi.string().required(),
    charPicture: Joi.string().uri(),
    raceId: Joi.number().integer().min(1).required(),
    backgroundId: Joi.number().integer().min(1).required(),
    stats: Joi.object().keys({
        strength: Joi.number().integer().required(),
        dexterity: Joi.number().integer().required(),
        constitution: Joi.number().integer().required(),
        intelligence: Joi.number().integer().required(),
        wisdom: Joi.number().integer().required(),
        charisma: Joi.number().integer().required()
    }).required(),
    bios: Joi.object().keys({
        heigth: Joi.number().precision(2).min(0.01),
        weigth: Joi.number().precision(2).min(0.01),
        age: Joi.number().integer().min(1),
        description: Joi.string(),
    }),
    charactersClasses: Joi.array().items(Joi.object().keys({
        classId: Joi.number().integer().min(1).required(),
        classLevel: Joi.number().integer().min(1).max(20).required(),
    })).required(),
})

const characterSchema = {
    character,
};

export default characterSchema;
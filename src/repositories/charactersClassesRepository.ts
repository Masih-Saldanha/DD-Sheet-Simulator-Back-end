import { CharactersClasses } from "@prisma/client";

export type CharactersClassesData = Omit<CharactersClasses, "id">;

export type CharactersClassesDataSchema = Omit<CharactersClassesData, "characterId">;
import { prisma } from "../src/config/database.js";

const API_URL = "https://www.dnd5eapi.co/api";
const classAPI = "classes";
const raceAPI = "races";
const backgroundAPI = "backgrounds";

const classList = [
    {
        className: "Barbarian",
        classAPI: `${API_URL}/${classAPI}/barbarian`
    },
    {
        className: "Bard",
        classAPI: `${API_URL}/${classAPI}/bard`
    },
    {
        className: "Cleric",
        classAPI: `${API_URL}/${classAPI}/cleric`
    },
    {
        className: "Druid",
        classAPI: `${API_URL}/${classAPI}/druid`
    },
    {
        className: "Fighter",
        classAPI: `${API_URL}/${classAPI}/fighter`
    },
    {
        className: "Monk",
        classAPI: `${API_URL}/${classAPI}/monk`
    },
    {
        className: "Paladin",
        classAPI: `${API_URL}/${classAPI}/paladin`
    },
    {
        className: "Ranger",
        classAPI: `${API_URL}/${classAPI}/ranger`
    },
    {
        className: "Rogue",
        classAPI: `${API_URL}/${classAPI}/rogue`
    },
    {
        className: "Sorcerer",
        classAPI: `${API_URL}/${classAPI}/sorcerer`
    },
    {
        className: "Warlock",
        classAPI: `${API_URL}/${classAPI}/warlock`
    },
    {
        className: "Wizard",
        classAPI: `${API_URL}/${classAPI}/wizard`
    },
];
const raceList = [
    {
        raceName: "Dragonborn",
        raceAPI: `${API_URL}/${raceAPI}/dragonborn`
    },
    {
        raceName: "Dwarf",
        raceAPI: `${API_URL}/${raceAPI}/dwarf`
    },
    {
        raceName: "Elf",
        raceAPI: `${API_URL}/${raceAPI}/elf`
    },
    {
        raceName: "Gnome",
        raceAPI: `${API_URL}/${raceAPI}/gnome`
    },
    {
        raceName: "Half-elf",
        raceAPI: `${API_URL}/${raceAPI}/half-elf`
    },
    {
        raceName: "Half-orc",
        raceAPI: `${API_URL}/${raceAPI}/half-orc`
    },
    {
        raceName: "Halfling",
        raceAPI: `${API_URL}/${raceAPI}/halfling`
    },
    {
        raceName: "Human",
        raceAPI: `${API_URL}/${raceAPI}/human`
    },
    {
        raceName: "Tiefling",
        raceAPI: `${API_URL}/${raceAPI}/tiefling`
    },
];
const backgroundList = [
    {
        backgroundName: "Acolyte",
        backgroundAPI: `${API_URL}/${backgroundAPI}/acolyte`
    },
];

async function main() {
    await prisma.classes.createMany({
        data: classList,
        skipDuplicates: true
    });
    await prisma.races.createMany({
        data: raceList,
        skipDuplicates: true
    });
    await prisma.backgrounds.createMany({
        data: backgroundList,
        skipDuplicates: true
    });
};

main().catch(e => {
    console.log(e);
    process.exit(1);
}).finally(async () => {
    await prisma.$disconnect();
});
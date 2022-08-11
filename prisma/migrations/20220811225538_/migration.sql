-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "userPicture" TEXT,
    "userName" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stats" (
    "id" SERIAL NOT NULL,
    "strength" INTEGER NOT NULL,
    "dexterity" INTEGER NOT NULL,
    "constitution" INTEGER NOT NULL,
    "intelligence" INTEGER NOT NULL,
    "wisdom" INTEGER NOT NULL,
    "charisma" INTEGER NOT NULL,

    CONSTRAINT "stats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "races" (
    "id" SERIAL NOT NULL,
    "raceName" TEXT NOT NULL,
    "raceAPI" TEXT NOT NULL,

    CONSTRAINT "races_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "backgrounds" (
    "id" SERIAL NOT NULL,
    "backgroundName" TEXT NOT NULL,
    "backgroundAPI" TEXT NOT NULL,

    CONSTRAINT "backgrounds_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bios" (
    "id" SERIAL NOT NULL,
    "heigth" DOUBLE PRECISION,
    "weigth" DOUBLE PRECISION,
    "age" INTEGER,
    "description" TEXT,

    CONSTRAINT "bios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "characters" (
    "id" SERIAL NOT NULL,
    "charName" TEXT NOT NULL,
    "charPicture" TEXT,
    "userId" INTEGER NOT NULL,
    "statsId" INTEGER NOT NULL,
    "raceId" INTEGER NOT NULL,
    "backgroundId" INTEGER NOT NULL,
    "biosId" INTEGER NOT NULL,

    CONSTRAINT "characters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "classes" (
    "id" SERIAL NOT NULL,
    "className" TEXT NOT NULL,
    "classAPI" TEXT NOT NULL,

    CONSTRAINT "classes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "charactersClasses" (
    "id" SERIAL NOT NULL,
    "classLevel" INTEGER NOT NULL,
    "classId" INTEGER NOT NULL,
    "characterId" INTEGER NOT NULL,

    CONSTRAINT "charactersClasses_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "races_raceName_key" ON "races"("raceName");

-- CreateIndex
CREATE UNIQUE INDEX "races_raceAPI_key" ON "races"("raceAPI");

-- CreateIndex
CREATE UNIQUE INDEX "backgrounds_backgroundName_key" ON "backgrounds"("backgroundName");

-- CreateIndex
CREATE UNIQUE INDEX "backgrounds_backgroundAPI_key" ON "backgrounds"("backgroundAPI");

-- CreateIndex
CREATE UNIQUE INDEX "classes_className_key" ON "classes"("className");

-- CreateIndex
CREATE UNIQUE INDEX "classes_classAPI_key" ON "classes"("classAPI");

-- AddForeignKey
ALTER TABLE "characters" ADD CONSTRAINT "characters_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "characters" ADD CONSTRAINT "characters_statsId_fkey" FOREIGN KEY ("statsId") REFERENCES "stats"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "characters" ADD CONSTRAINT "characters_raceId_fkey" FOREIGN KEY ("raceId") REFERENCES "races"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "characters" ADD CONSTRAINT "characters_backgroundId_fkey" FOREIGN KEY ("backgroundId") REFERENCES "backgrounds"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "characters" ADD CONSTRAINT "characters_biosId_fkey" FOREIGN KEY ("biosId") REFERENCES "bios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "charactersClasses" ADD CONSTRAINT "charactersClasses_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "characters"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "charactersClasses" ADD CONSTRAINT "charactersClasses_classId_fkey" FOREIGN KEY ("classId") REFERENCES "classes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

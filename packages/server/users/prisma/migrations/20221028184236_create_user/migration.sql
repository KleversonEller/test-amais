-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "permision" TEXT NOT NULL DEFAULT 'user'
);

-- CreateTable
CREATE TABLE "Resume" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "cpf" INTEGER NOT NULL,
    "birthDate" INTEGER NOT NULL,
    "sex" TEXT NOT NULL,
    "civilState" TEXT NOT NULL,
    "schooling" TEXT NOT NULL,
    "specialization" TEXT,
    "company" TEXT,
    "office" TEXT,
    "wage" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Resume_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Resume_cpf_key" ON "Resume"("cpf");

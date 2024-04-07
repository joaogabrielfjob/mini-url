-- CreateTable
CREATE TABLE "url" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT NOT NULL,
    "identifier" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "url_identifier_key" ON "url"("identifier");

/*
  Warnings:

  - A unique constraint covering the columns `[url]` on the table `url` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "url_url_key" ON "url"("url");

-- CreateTable
CREATE TABLE "Participantes" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "curso" TEXT NOT NULL,
    "foto" TEXT NOT NULL,
    "idade" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Participantes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VideoAula" (
    "id" SERIAL NOT NULL,
    "conteudo" TEXT NOT NULL,
    "urlMidia" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "VideoAula_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dicas" (
    "id" SERIAL NOT NULL,
    "conteudo" TEXT NOT NULL,
    "dicas" TEXT NOT NULL,

    CONSTRAINT "Dicas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Simulado" (
    "id" SERIAL NOT NULL,
    "pergunta" TEXT NOT NULL,
    "opcaoA" TEXT NOT NULL,
    "opcaoB" TEXT NOT NULL,
    "opcaoC" TEXT NOT NULL,
    "opcaoD" TEXT NOT NULL,
    "opcaoE" TEXT NOT NULL,
    "respostaCorreta" TEXT NOT NULL,
    "explicacao" TEXT NOT NULL,
    "materia" TEXT NOT NULL,

    CONSTRAINT "Simulado_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Participantes_email_key" ON "Participantes"("email");

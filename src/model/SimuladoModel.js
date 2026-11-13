import prisma from '../lib/services/prismaClient.js';

export default class SimuladoModel {
    constructor({
        id = null,
        conteudo,
        pergunta,
        opcaoA,
        opcaoB,
        opcaoC,
        opcaoD,
        opcaoE,
        respostaCorreta,
        explicacao,
        materia
    } = {}) {
        this.id = id;
        this.conteudo = conteudo;
        this.pergunta = pergunta;
        this.opcaoA = opcaoA;
        this.opcaoB = opcaoB;
        this.opcaoC = opcaoC;
        this.opcaoD = opcaoD;
        this.opcaoE = opcaoE;
        this.respostaCorreta = respostaCorreta;
        this.explicacao = explicacao;
        this.materia = materia;
    }

    async criar() {
        return prisma.simulado.create({
            data: {
                conteudo: this.conteudo,
                pergunta: this.pergunta,
                opcaoA: this.opcaoA,
                opcaoB: this.opcaoB,
                opcaoC: this.opcaoC,
                opcaoD: this.opcaoD,
                opcaoE: this.opcaoE,
                respostaCorreta: this.respostaCorreta,
                explicacao: this.explicacao,
                materia: this.materia
            },
        });
    }

    async atualizar() {
        return prisma.simulado.update({
            where: { id: this.id },
            data: {
                conteudo: this.conteudo,
                pergunta: this.pergunta,
                opcaoA: this.opcaoA,
                opcaoB: this.opcaoB,
                opcaoC: this.opcaoC,
                opcaoD: this.opcaoD,
                opcaoE: this.opcaoE,
                respostaCorreta: this.respostaCorreta,
                explicacao: this.explicacao,
                materia: this.materia
            },
        });
    }

    async deletar() {
        return prisma.simulado.delete({ where: { id: this.id } });
    }

    static async buscarTodos(filtros = {}) {
        const where = {};

        if (filtros.pergunta) {
            where.pergunta = { contains: filtros.pergunta, mode: 'insensitive' };
        }

        if (filtros.materia) {
            where.materia = { contains: filtros.materia, mode: 'insensitive' };
        }

        return prisma.simulado.findMany({ where });
    }

    static async buscarPorId(id) {
        const data = await prisma.simulado.findUnique({ where: { id } });
        if (!data) {
            return null;
        }
        return new SimuladoModel(data);
    }
}
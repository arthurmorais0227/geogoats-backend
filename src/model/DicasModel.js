import prisma from '../lib/services/prismaClient.js';

export default class DicasModel {
    constructor({ id = null, conteudo, dicas } = {}) {
        this.id = id;
        this.conteudo = conteudo;
        this.dicas = dicas;
    }

    async criar() {
        return prisma.dicas.create({
            data: {
                conteudo: this.conteudo,
                dicas: this.dicas,
            },
        });
    }

    async atualizar() {
        return prisma.dicas.update({
            where: { id: this.id },
            data: {
                conteudo: this.conteudo,
                dicas: this.dicas,
            },
        });
    }

    async deletar() {
        return prisma.dicas.delete({ where: { id: this.id } });
    }

    static async buscarTodos() {
        return prisma.dicas.findMany();
    }

    static async buscarPorId(id) {
        const data = await prisma.dicas.findUnique({ where: { id } });
        return data ? new DicasModel(data) : null;
    }
}
import prisma from '../lib/services/prismaClient.js';

export default class VideoAulaModel {
    constructor({ id = null, conteudo, urlMidia, descricao } = {}) {
        this.id = id;
        this.conteudo = conteudo;
        this.urlMidia = urlMidia;
        this.descricao = descricao;
    }

    async criar() {
        return prisma.videoAula.create({
            data: {
                conteudo: this.conteudo,
                urlMidia: this.urlMidia,
                descricao: this.descricao,
            },
        });
    }

    async atualizar() {
        return prisma.videoAula.update({
            where: { id: this.id },
            data: {
                conteudo: this.conteudo,
                urlMidia: this.urlMidia,
                descricao: this.descricao,
            },
        });
    }

    async deletar() {
        return prisma.videoAula.delete({ where: { id: this.id } });
    }

    static async buscarTodos(filtros = {}) {
        const where = {};

        if (filtros.conteudo) {
            where.conteudo = { contains: filtros.conteudo, mode: 'insensitive' };
        }

        return prisma.videoAula.findMany({ where });
    }

    static async buscarPorId(id) {
        const data = await prisma.videoAula.findUnique({ where: { id } });
        return data ? new VideoAulaModel(data) : null;
    }
}

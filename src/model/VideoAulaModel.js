import prisma from '../lib/services/prismaClient.js';

export default class VideoAulaModel {
    constructor({ id = null, titulo, descricao, urlMidia, temaId } = {}) {
        this.id = id;
        this.titulo = titulo;
        this.descricao = descricao;
        this.urlMidia = urlMidia;
        this.temaId = temaId;
    }

    async criar() {
        return prisma.videoAula.create({
            data: {
                titulo: this.titulo,
                descricao: this.descricao,
                urlMidia: this.urlMidia,
                temaId: this.temaId,
            },
        });
    }

    async atualizar() {
        return prisma.videoAula.update({
            where: { id: this.id },
            data: {
                titulo: this.titulo,
                descricao: this.descricao,
                urlMidia: this.urlMidia,
                temaId: this.temaId,
            },
        });
    }

    async deletar() {
        return prisma.videoAula.delete({ where: { id: this.id } });
    }

    static async buscarTodos(filtros = {}) {
        const where = {};

        if (filtros.titulo) {
            where.titulo = { contains: filtros.titulo, mode: 'insensitive' };
        }

        if (filtros.temaId !== undefined) {
            where.temaId = Number(filtros.temaId);
        }

        return prisma.videoAula.findMany({ where });
    }

    static async buscarPorId(id) {
        const data = await prisma.videoAula.findUnique({ where: { id } });
        return data ? new VideoAulaModel(data) : null;
    }
}

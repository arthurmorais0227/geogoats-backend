import prisma from '../lib/services/prismaClient.js';

export default class DicasModel {
    constructor({ id = null, titulo, conteudo, foto, temaId } = {}) {
        this.id = id;
        this.titulo = titulo;
        this.conteudo = conteudo;
        this.foto = foto;
        this.temaId = temaId;
    }

    async criar() {
        return prisma.dica.create({
            data: {
                titulo: this.titulo,
                conteudo: this.conteudo,
                foto: this.foto,
                temaId: this.temaId,
            },
        });
    }

    async atualizar() {
        return prisma.dica.update({
            where: { id: this.id },
            data: {
                titulo: this.titulo,
                conteudo: this.conteudo,
                foto: this.foto,
                temaId: this.temaId,
            },
        });
    }

    async deletar() {
        return prisma.dica.delete({ where: { id: this.id } });
    }

    static async buscarTodos(filtros = {}) {
        const where = {};

        if (filtros.titulo) {
            where.titulo = { contains: filtros.titulo, mode: 'insensitive' };
        }

        if (filtros.temaId !== undefined) {
            where.temaId = Number(filtros.temaId);
        }

        return prisma.dica.findMany({ where });
    }

    static async buscarPorId(id) {
        const data = await prisma.dica.findUnique({ where: { id } });
        return data ? new DicasModel(data) : null;
    }
}

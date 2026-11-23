import prisma from '../lib/services/prismaClient.js';

export default class TemaModel {
    constructor({ id = null, nome, descricao, slug, codigoApi } = {}) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.slug = slug;
        this.codigoApi = codigoApi;
    }

    async criar() {
        return prisma.tema.create({
            data: {
                nome: this.nome,
                descricao: this.descricao,
                slug: this.slug,
                codigoApi: this.codigoApi,
            },
        });
    }

    async atualizar() {
        return prisma.tema.update({
            where: { id: this.id },
            data: {
                nome: this.nome,
                descricao: this.descricao,
                slug: this.slug,
                codigoApi: this.codigoApi,
            },
        });
    }

    async deletar() {
        return prisma.tema.delete({ where: { id: this.id } });
    }

    static async buscarTodos(filtros = {}) {
        const where = {};

        if (filtros.nome) {
            where.nome = { contains: filtros.nome, mode: 'insensitive' };
        }

        if (filtros.slug) {
            where.slug = { contains: filtros.slug, mode: 'insensitive' };
        }

        return prisma.tema.findMany({ where });
    }

    static async buscarPorId(id) {
        const data = await prisma.tema.findUnique({ where: { id } });
        return data ? new TemaModel(data) : null;
    }
}

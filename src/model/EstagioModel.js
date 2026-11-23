import prisma from '../lib/services/prismaClient.js';

export default class EstagioModel {
    constructor({
        id = null,
        titulo,
        descricao,
        cursosRelacionados,
        empresa,
        requisitos,
        urlInscricao,
        dataPublicacao,
    } = {}) {
        this.id = id;
        this.titulo = titulo;
        this.descricao = descricao;
        this.cursosRelacionados = cursosRelacionados;
        this.empresa = empresa;
        this.requisitos = requisitos;
        this.urlInscricao = urlInscricao;
        this.dataPublicacao = dataPublicacao;
    }

    async criar() {
        return prisma.estagio.create({
            data: {
                titulo: this.titulo,
                descricao: this.descricao,
                cursosRelacionados: this.cursosRelacionados,
                empresa: this.empresa,
                requisitos: this.requisitos,
                urlInscricao: this.urlInscricao,
                dataPublicacao: this.dataPublicacao,
            },
        });
    }

    async atualizar() {
        return prisma.estagio.update({
            where: { id: this.id },
            data: {
                titulo: this.titulo,
                descricao: this.descricao,
                cursosRelacionados: this.cursosRelacionados,
                empresa: this.empresa,
                requisitos: this.requisitos,
                urlInscricao: this.urlInscricao,
                dataPublicacao: this.dataPublicacao,
            },
        });
    }

    async deletar() {
        return prisma.estagio.delete({ where: { id: this.id } });
    }

    static async buscarTodos(filtros = {}) {
        const where = {};

        if (filtros.titulo) {
            where.titulo = { contains: filtros.titulo, mode: 'insensitive' };
        }

        if (filtros.empresa) {
            where.empresa = { contains: filtros.empresa, mode: 'insensitive' };
        }

        if (filtros.curso) {
            where.cursosRelacionados = { has: filtros.curso };
        }

        return prisma.estagio.findMany({ where });
    }

    static async buscarPorId(id) {
        const data = await prisma.estagio.findUnique({ where: { id } });
        return data ? new EstagioModel(data) : null;
    }
}

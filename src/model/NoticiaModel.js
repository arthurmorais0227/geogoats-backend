import prisma from '../lib/services/prismaClient.js';

export default class NoticiaModel {
    constructor({ id = null, titulo, resumo, conteudo, urlImagem, dataPublicacao } = {}) {
        this.id = id;
        this.titulo = titulo;
        this.resumo = resumo;
        this.conteudo = conteudo;
        this.urlImagem = urlImagem;
        this.dataPublicacao = dataPublicacao;
    }

    async criar() {
        return prisma.noticia.create({
            data: {
                titulo: this.titulo,
                resumo: this.resumo,
                conteudo: this.conteudo,
                urlImagem: this.urlImagem,
                dataPublicacao: this.dataPublicacao,
            },
        });
    }

    async atualizar() {
        return prisma.noticia.update({
            where: { id: this.id },
            data: {
                titulo: this.titulo,
                resumo: this.resumo,
                conteudo: this.conteudo,
                urlImagem: this.urlImagem,
                dataPublicacao: this.dataPublicacao,
            },
        });
    }

    async deletar() {
        return prisma.noticia.delete({ where: { id: this.id } });
    }

    static async buscarTodos(filtros = {}) {
        const where = {};

        if (filtros.titulo) {
            where.titulo = { contains: filtros.titulo, mode: 'insensitive' };
        }

        // mais recentes primeiro
        return prisma.noticia.findMany({ where, orderBy: { dataPublicacao: 'desc' } });
    }

    static async buscarPorId(id) {
        const data = await prisma.noticia.findUnique({ where: { id } });
        return data ? new NoticiaModel(data) : null;
    }
}
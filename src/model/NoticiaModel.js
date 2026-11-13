import prisma from '../lib/services/prismaClient.js';

export default class NoticiaModel {
    constructor({ id = null, titulo, resumo, conteudo, url_imagem, data_publicacao } = {}) {
        this.id = id;
        this.titulo = titulo;
        this.resumo = resumo;
        this.conteudo = conteudo;
        this.url_imagem = url_imagem;
        this.data_publicacao = data_publicacao;
    }

    async criar() {
        return prisma.noticia.create({
            data: {
                titulo: this.titulo,
                resumo: this.resumo,
                conteudo: this.conteudo,
                url_imagem: this.url_imagem,
                data_publicacao: this.data_publicacao,
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
                url_imagem: this.url_imagem,
                data_publicacao: this.data_publicacao,
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

        return prisma.noticia.findMany({ where });
    }

    static async buscarPorId(id) {
        const data = await prisma.noticia.findUnique({ where: { id } });
        return data ? new NoticiaModel(data) : null;
    }
}

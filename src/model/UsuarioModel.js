import prisma from '../lib/services/prismaClient.js';

export default class UsuarioModel {
    constructor({ id = null, nome, email, senha, criado_em } = {}) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.criado_em = criado_em;
    }

    async criar() {
        return prisma.usuario.create({
            data: {
                nome: this.nome,
                email: this.email,
                senha: this.senha,
            },
        });
    }

    async atualizar() {
        return prisma.usuario.update({
            where: { id: this.id },
            data: {
                nome: this.nome,
                email: this.email,
                senha: this.senha,
            },
        });
    }

    async deletar() {
        return prisma.usuario.delete({ where: { id: this.id } });
    }

    static async buscarTodos(filtros = {}) {
        const where = {};

        if (filtros.nome) {
            where.nome = { contains: filtros.nome, mode: 'insensitive' };
        }

        if (filtros.email) {
            where.email = { contains: filtros.email, mode: 'insensitive' };
        }

        return prisma.usuario.findMany({ where });
    }

    static async buscarPorId(id) {
        const data = await prisma.usuario.findUnique({ where: { id } });
        return data ? new UsuarioModel(data) : null;
    }
}

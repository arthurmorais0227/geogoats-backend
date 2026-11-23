import prisma from '../lib/services/prismaClient.js';

export default class CarreiraModel {
    constructor({
        id = null,
        nome,
        descricao,
        cursosRelacionados,
        habilidades,
        img,
        salarioMedio,
        criadoEm,
        atualizadoEm,
    } = {}) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.cursosRelacionados = cursosRelacionados;
        this.habilidades = habilidades;
        this.img = img;
        this.salarioMedio = salarioMedio;
        this.criadoEm = criadoEm;
        this.atualizadoEm = atualizadoEm;
    }

    async criar() {
        return prisma.carreira.create({
            data: {
                nome: this.nome,
                descricao: this.descricao,
                cursosRelacionados: this.cursosRelacionados,
                habilidades: this.habilidades,
                img: this.img,
                salarioMedio: this.salarioMedio,
            },
        });
    }

    async atualizar() {
        return prisma.carreira.update({
            where: { id: this.id },
            data: {
                nome: this.nome,
                descricao: this.descricao,
                cursosRelacionados: this.cursosRelacionados,
                habilidades: this.habilidades,
                img: this.img,
                salarioMedio: this.salarioMedio,
            },
        });
    }

    async deletar() {
        return prisma.carreira.delete({ where: { id: this.id } });
    }

    static async buscarTodos(filtros = {}) {
        const where = {};

        if (filtros.nome) {
            where.nome = { contains: filtros.nome, mode: 'insensitive' };
        }

        if (filtros.curso) {
            where.cursosRelacionados = { has: filtros.curso };
        }

        return prisma.carreira.findMany({ where });
    }

    static async buscarPorId(id) {
        const data = await prisma.carreira.findUnique({ where: { id } });
        return data ? new CarreiraModel(data) : null;
    }
}

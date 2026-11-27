import EstagioModel from '../model/EstagioModel.js';
import { tratarErroPrisma } from '../utils/prismaErrors.js';

const textoValido = (valor) => typeof valor === 'string' && valor.trim().length > 0;
const textoOpcionalValido = (valor) => valor === null || typeof valor === 'string';
const listaDeTextosValida = (valor) =>
    Array.isArray(valor) && valor.every((item) => typeof item === 'string');

export const criar = async (req, res) => {
    try {
        const {
            titulo,
            descricao,
            cursosRelacionados,
            empresa,
            requisitos,
            urlInscricao,
            dataPublicacao,
        } = req.body ?? {};

        if (!textoValido(titulo)) {
            return res.status(400).json({ error: 'O campo "titulo" é obrigatório.' });
        }

        if (!textoValido(descricao)) {
            return res.status(400).json({ error: 'O campo "descricao" é obrigatório.' });
        }

        if (!listaDeTextosValida(cursosRelacionados)) {
            return res.status(400).json({ error: 'O campo "cursosRelacionados" deve ser uma lista de textos.' });
        }

        for (const [campo, valor] of Object.entries({ empresa, requisitos, urlInscricao })) {
            if (valor !== undefined && !textoOpcionalValido(valor)) {
                return res.status(400).json({ error: `O campo "${campo}" deve ser um texto ou null.` });
            }
        }

        const publicacao = dataPublicacao === undefined ? undefined : new Date(dataPublicacao);
        if (dataPublicacao !== undefined
            && (dataPublicacao === null || Number.isNaN(publicacao.getTime()))) {
            return res.status(400).json({ error: 'O campo "dataPublicacao" deve ser uma data válida.' });
        }

        const estagio = new EstagioModel({
            titulo,
            descricao,
            cursosRelacionados,
            empresa,
            requisitos,
            urlInscricao,
            dataPublicacao: publicacao,
        });
        const data = await estagio.criar();
        return res.status(201).json({ message: 'Estágio criado com sucesso!', data });
    } catch (error) {
        if (tratarErroPrisma(error, res)) return;
        console.error('Erro ao criar estágio:', error);
        return res.status(500).json({ error: 'Erro interno ao salvar o registro.' });
    }
};

export const buscarTodos = async (req, res) => {
    try {
        const registros = await EstagioModel.buscarTodos(req.query);
        return res.status(200).json(registros);
    } catch (error) {
        console.error('Erro ao buscar estágios:', error);
        return res.status(500).json({ error: 'Erro ao buscar registros.' });
    }
};

export const buscarPorId = async (req, res) => {
    try {
        const id = Number(req.params.id);
        if (!Number.isInteger(id) || id <= 0) {
            return res.status(400).json({ error: 'O ID enviado não é um número válido.' });
        }

        const estagio = await EstagioModel.buscarPorId(id);
        if (!estagio) {
            return res.status(404).json({ error: 'Estágio não encontrado.' });
        }

        return res.status(200).json({ data: estagio });
    } catch (error) {
        console.error('Erro ao buscar estágio:', error);
        return res.status(500).json({ error: 'Erro ao buscar registro.' });
    }
};

export const atualizar = async (req, res) => {
    try {
        const id = Number(req.params.id);
        if (!Number.isInteger(id) || id <= 0) {
            return res.status(400).json({ error: 'ID inválido.' });
        }

        if (!req.body) {
            return res.status(400).json({ error: 'Corpo da requisição vazio. Envie os dados!' });
        }

        const estagio = await EstagioModel.buscarPorId(id);
        if (!estagio) {
            return res.status(404).json({ error: 'Estágio não encontrado para atualizar.' });
        }

        for (const campo of ['titulo', 'descricao']) {
            if (req.body[campo] !== undefined) {
                if (!textoValido(req.body[campo])) {
                    return res.status(400).json({ error: `O campo "${campo}" não pode ficar vazio.` });
                }
                estagio[campo] = req.body[campo];
            }
        }

        if (req.body.cursosRelacionados !== undefined) {
            if (!listaDeTextosValida(req.body.cursosRelacionados)) {
                return res.status(400).json({ error: 'O campo "cursosRelacionados" deve ser uma lista de textos.' });
            }
            estagio.cursosRelacionados = req.body.cursosRelacionados;
        }

        for (const campo of ['empresa', 'requisitos', 'urlInscricao']) {
            if (req.body[campo] !== undefined) {
                if (!textoOpcionalValido(req.body[campo])) {
                    return res.status(400).json({ error: `O campo "${campo}" deve ser um texto ou null.` });
                }
                estagio[campo] = req.body[campo];
            }
        }

        if (req.body.dataPublicacao !== undefined) {
            const publicacao = new Date(req.body.dataPublicacao);
            if (req.body.dataPublicacao === null || Number.isNaN(publicacao.getTime())) {
                return res.status(400).json({ error: 'O campo "dataPublicacao" deve ser uma data válida.' });
            }
            estagio.dataPublicacao = publicacao;
        }

        const data = await estagio.atualizar();
        return res.status(200).json({
            message: `O estágio "${data.titulo}" foi atualizado com sucesso!`,
            data,
        });
    } catch (error) {
        if (tratarErroPrisma(error, res)) return;
        console.error('Erro ao atualizar estágio:', error);
        return res.status(500).json({ error: 'Erro ao atualizar registro.' });
    }
};

export const deletar = async (req, res) => {
    try {
        const id = Number(req.params.id);
        if (!Number.isInteger(id) || id <= 0) {
            return res.status(400).json({ error: 'ID inválido.' });
        }

        const estagio = await EstagioModel.buscarPorId(id);
        if (!estagio) {
            return res.status(404).json({ error: 'Estágio não encontrado para deletar.' });
        }

        await estagio.deletar();
        return res.status(200).json({
            message: `O estágio "${estagio.titulo}" foi deletado com sucesso!`,
            deletado: estagio,
        });
    } catch (error) {
        console.error('Erro ao deletar estágio:', error);
        return res.status(500).json({ error: 'Erro ao deletar registro.' });
    }
};

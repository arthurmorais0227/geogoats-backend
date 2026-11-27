import CarreiraModel from '../model/CarreiraModel.js';
import { tratarErroPrisma } from '../utils/prismaErrors.js';

const textoValido = (valor) => typeof valor === 'string' && valor.trim().length > 0;
const textoOpcionalValido = (valor) => valor === null || typeof valor === 'string';
const listaDeTextosValida = (valor) =>
    Array.isArray(valor) && valor.every((item) => typeof item === 'string');

export const criar = async (req, res) => {
    try {
        const {
            nome,
            descricao,
            cursosRelacionados,
            habilidades,
            img,
            salarioMedio,
        } = req.body ?? {};

        if (!textoValido(nome)) {
            return res.status(400).json({ error: 'O campo "nome" é obrigatório.' });
        }

        if (!listaDeTextosValida(cursosRelacionados)) {
            return res.status(400).json({ error: 'O campo "cursosRelacionados" deve ser uma lista de textos.' });
        }

        if (!listaDeTextosValida(habilidades)) {
            return res.status(400).json({ error: 'O campo "habilidades" deve ser uma lista de textos.' });
        }

        for (const [campo, valor] of Object.entries({ descricao, img, salarioMedio })) {
            if (valor !== undefined && !textoOpcionalValido(valor)) {
                return res.status(400).json({ error: `O campo "${campo}" deve ser um texto ou null.` });
            }
        }

        const carreira = new CarreiraModel({
            nome,
            descricao,
            cursosRelacionados,
            habilidades,
            img,
            salarioMedio,
        });
        const data = await carreira.criar();
        return res.status(201).json({ message: 'Carreira criada com sucesso!', data });
    } catch (error) {
        if (tratarErroPrisma(error, res)) return;
        console.error('Erro ao criar carreira:', error);
        return res.status(500).json({ error: 'Erro interno ao salvar o registro.' });
    }
};

export const buscarTodos = async (req, res) => {
    try {
        const registros = await CarreiraModel.buscarTodos(req.query);
        return res.status(200).json(registros);
    } catch (error) {
        console.error('Erro ao buscar carreiras:', error);
        return res.status(500).json({ error: 'Erro ao buscar registros.' });
    }
};

export const buscarPorId = async (req, res) => {
    try {
        const id = Number(req.params.id);
        if (!Number.isInteger(id) || id <= 0) {
            return res.status(400).json({ error: 'O ID enviado não é um número válido.' });
        }

        const carreira = await CarreiraModel.buscarPorId(id);
        if (!carreira) {
            return res.status(404).json({ error: 'Carreira não encontrada.' });
        }

        return res.status(200).json({ data: carreira });
    } catch (error) {
        console.error('Erro ao buscar carreira:', error);
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

        const carreira = await CarreiraModel.buscarPorId(id);
        if (!carreira) {
            return res.status(404).json({ error: 'Carreira não encontrada para atualizar.' });
        }

        if (req.body.nome !== undefined) {
            if (!textoValido(req.body.nome)) {
                return res.status(400).json({ error: 'O campo "nome" não pode ficar vazio.' });
            }
            carreira.nome = req.body.nome;
        }

        for (const campo of ['cursosRelacionados', 'habilidades']) {
            if (req.body[campo] !== undefined) {
                if (!listaDeTextosValida(req.body[campo])) {
                    return res.status(400).json({ error: `O campo "${campo}" deve ser uma lista de textos.` });
                }
                carreira[campo] = req.body[campo];
            }
        }

        for (const campo of ['descricao', 'img', 'salarioMedio']) {
            if (req.body[campo] !== undefined) {
                if (!textoOpcionalValido(req.body[campo])) {
                    return res.status(400).json({ error: `O campo "${campo}" deve ser um texto ou null.` });
                }
                carreira[campo] = req.body[campo];
            }
        }

        const data = await carreira.atualizar();
        return res.status(200).json({
            message: `A carreira "${data.nome}" foi atualizada com sucesso!`,
            data,
        });
    } catch (error) {
        if (tratarErroPrisma(error, res)) return;
        console.error('Erro ao atualizar carreira:', error);
        return res.status(500).json({ error: 'Erro ao atualizar registro.' });
    }
};

export const deletar = async (req, res) => {
    try {
        const id = Number(req.params.id);
        if (!Number.isInteger(id) || id <= 0) {
            return res.status(400).json({ error: 'ID inválido.' });
        }

        const carreira = await CarreiraModel.buscarPorId(id);
        if (!carreira) {
            return res.status(404).json({ error: 'Carreira não encontrada para deletar.' });
        }

        await carreira.deletar();
        return res.status(200).json({
            message: `A carreira "${carreira.nome}" foi deletada com sucesso!`,
            deletado: carreira,
        });
    } catch (error) {
        console.error('Erro ao deletar carreira:', error);
        return res.status(500).json({ error: 'Erro ao deletar registro.' });
    }
};

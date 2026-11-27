import DicasModel from '../model/DicasModel.js';
import { tratarErroPrisma } from '../utils/prismaErrors.js';

const temaIdValido = (temaId) =>
    temaId === null || (Number.isInteger(Number(temaId)) && Number(temaId) > 0);

export const criar = async (req, res) => {
    try {
        const { titulo, conteudo, foto, temaId } = req.body ?? {};

        if (!titulo) {
            return res.status(400).json({ error: 'O campo "titulo" é obrigatório!' });
        }

        if (!conteudo) {
            return res.status(400).json({ error: 'O campo "conteudo" é obrigatório!' });
        }

        if (temaId !== undefined && !temaIdValido(temaId)) {
            return res.status(400).json({ error: 'O campo "temaId" deve ser um ID válido ou null.' });
        }

        const dica = new DicasModel({
            titulo,
            conteudo,
            foto,
            temaId: temaId == null ? temaId : Number(temaId),
        });
        const data = await dica.criar();
        return res.status(201).json({ message: 'Dica criada com sucesso!', data });
    } catch (error) {
        if (tratarErroPrisma(error, res)) return;
        console.error('Erro ao criar dica:', error);
        return res.status(500).json({ error: 'Erro interno ao salvar o registro.' });
    }
};

export const buscarTodos = async (req, res) => {
    try {
        if (req.query.temaId !== undefined
            && (!Number.isInteger(Number(req.query.temaId)) || Number(req.query.temaId) <= 0)) {
            return res.status(400).json({ error: 'O filtro "temaId" deve ser um ID válido.' });
        }

        const registros = await DicasModel.buscarTodos(req.query);

        return res.status(200).json(registros);
    } catch (error) {
        console.error('Erro ao buscar dicas:', error);
        return res.status(500).json({ error: 'Erro ao buscar registros.' });
    }
};

export const buscarPorId = async (req, res) => {
    try {
        const id = Number(req.params.id);
        if (!Number.isInteger(id) || id <= 0) {
            return res.status(400).json({ error: 'O ID enviado não é um número válido.' });
        }

        const dica = await DicasModel.buscarPorId(id);
        if (!dica) {
            return res.status(404).json({ error: 'Registro não encontrado.' });
        }

        return res.status(200).json({ data: dica });
    } catch (error) {
        console.error('Erro ao buscar dica:', error);
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

        const dica = await DicasModel.buscarPorId(id);
        if (!dica) {
            return res.status(404).json({ error: 'Registro não encontrado para atualizar.' });
        }

        for (const campo of ['titulo', 'conteudo', 'foto']) {
            if (req.body[campo] !== undefined) {
                dica[campo] = req.body[campo];
            }
        }

        if (req.body.temaId !== undefined) {
            if (!temaIdValido(req.body.temaId)) {
                return res.status(400).json({ error: 'O campo "temaId" deve ser um ID válido ou null.' });
            }
            dica.temaId = req.body.temaId === null ? null : Number(req.body.temaId);
        }

        const data = await dica.atualizar();
        return res.status(200).json({
            message: `A dica "${data.titulo}" foi atualizada com sucesso!`,
            data,
        });
    } catch (error) {
        if (tratarErroPrisma(error, res)) return;
        console.error('Erro ao atualizar dica:', error);
        return res.status(500).json({ error: 'Erro ao atualizar registro.' });
    }
};

export const deletar = async (req, res) => {
    try {
        const id = Number(req.params.id);
        if (!Number.isInteger(id) || id <= 0) {
            return res.status(400).json({ error: 'ID inválido.' });
        }

        const dica = await DicasModel.buscarPorId(id);
        if (!dica) {
            return res.status(404).json({ error: 'Registro não encontrado para deletar.' });
        }

        await dica.deletar();
        return res.status(200).json({
            message: `A dica "${dica.titulo}" foi deletada com sucesso!`,
            deletado: dica,
        });
    } catch (error) {
        console.error('Erro ao deletar dica:', error);
        return res.status(500).json({ error: 'Erro ao deletar registro.' });
    }
};

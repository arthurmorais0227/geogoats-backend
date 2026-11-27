import VideoAulaModel from '../model/VideoAulaModel.js';
import { tratarErroPrisma } from '../utils/prismaErrors.js';

const temaIdValido = (temaId) =>
    temaId === null || (Number.isInteger(Number(temaId)) && Number(temaId) > 0);

export const criar = async (req, res) => {
    try {
        const { titulo, descricao, urlMidia, temaId } = req.body ?? {};

        if (!titulo) {
            return res.status(400).json({ error: 'O campo "titulo" é obrigatório!' });
        }

        if (!descricao) {
            return res.status(400).json({ error: 'O campo "descricao" é obrigatório!' });
        }

        if (!urlMidia) {
            return res.status(400).json({ error: 'O campo "urlMidia" é obrigatório!' });
        }

        if (temaId !== undefined && !temaIdValido(temaId)) {
            return res.status(400).json({ error: 'O campo "temaId" deve ser um ID válido ou null.' });
        }

        const videoAula = new VideoAulaModel({
            titulo,
            descricao,
            urlMidia,
            temaId: temaId == null ? temaId : Number(temaId),
        });
        const data = await videoAula.criar();
        return res.status(201).json({ message: 'Videoaula criada com sucesso!', data });
    } catch (error) {
        if (tratarErroPrisma(error, res)) return;
        console.error('Erro ao criar videoaula:', error);
        return res.status(500).json({ error: 'Erro interno ao salvar o registro.' });
    }
};

export const buscarTodos = async (req, res) => {
    try {
        if (req.query.temaId !== undefined
            && (!Number.isInteger(Number(req.query.temaId)) || Number(req.query.temaId) <= 0)) {
            return res.status(400).json({ error: 'O filtro "temaId" deve ser um ID válido.' });
        }

        const registros = await VideoAulaModel.buscarTodos(req.query);
        return res.status(200).json(registros);
    } catch (error) {
        console.error('Erro ao buscar videoaulas:', error);
        return res.status(500).json({ error: 'Erro ao buscar registros.' });
    }
};

export const buscarPorId = async (req, res) => {
    try {
        const id = Number(req.params.id);
        if (!Number.isInteger(id) || id <= 0) {
            return res.status(400).json({ error: 'O ID enviado não é um número válido.' });
        }

        const videoAula = await VideoAulaModel.buscarPorId(id);
        if (!videoAula) {
            return res.status(404).json({ error: 'Registro não encontrado.' });
        }

        return res.status(200).json({ data: videoAula });
    } catch (error) {
        console.error('Erro ao buscar videoaula:', error);
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

        const videoAula = await VideoAulaModel.buscarPorId(id);
        if (!videoAula) {
            return res.status(404).json({ error: 'Registro não encontrado para atualizar.' });
        }

        for (const campo of ['titulo', 'descricao', 'urlMidia']) {
            if (req.body[campo] !== undefined) {
                videoAula[campo] = req.body[campo];
            }
        }

        if (req.body.temaId !== undefined) {
            if (!temaIdValido(req.body.temaId)) {
                return res.status(400).json({ error: 'O campo "temaId" deve ser um ID válido ou null.' });
            }
            videoAula.temaId = req.body.temaId === null ? null : Number(req.body.temaId);
        }

        const data = await videoAula.atualizar();
        return res.status(200).json({
            message: `A videoaula "${data.titulo}" foi atualizada com sucesso!`,
            data,
        });
    } catch (error) {
        if (tratarErroPrisma(error, res)) return;
        console.error('Erro ao atualizar videoaula:', error);
        return res.status(500).json({ error: 'Erro ao atualizar registro.' });
    }
};

export const deletar = async (req, res) => {
    try {
        const id = Number(req.params.id);
        if (!Number.isInteger(id) || id <= 0) {
            return res.status(400).json({ error: 'ID inválido.' });
        }

        const videoAula = await VideoAulaModel.buscarPorId(id);
        if (!videoAula) {
            return res.status(404).json({ error: 'Registro não encontrado para deletar.' });
        }

        await videoAula.deletar();
        return res.status(200).json({
            message: `A videoaula "${videoAula.titulo}" foi deletada com sucesso!`,
            deletado: videoAula,
        });
    } catch (error) {
        console.error('Erro ao deletar videoaula:', error);
        return res.status(500).json({ error: 'Erro ao deletar registro.' });
    }
};

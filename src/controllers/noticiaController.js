import NoticiaModel from '../model/NoticiaModel.js';
import { tratarErroPrisma } from '../utils/prismaErrors.js';

export const criar = async (req, res) => {
    try {
        const { titulo, resumo, conteudo, urlImagem, dataPublicacao } = req.body ?? {};

        if (!titulo) {
            return res.status(400).json({ error: 'O campo "titulo" é obrigatório!' });
        }

        if (!resumo) {
            return res.status(400).json({ error: 'O campo "resumo" é obrigatório!' });
        }

        if (!conteudo) {
            return res.status(400).json({ error: 'O campo "conteudo" é obrigatório!' });
        }

        const publicacao = dataPublicacao === undefined ? undefined : new Date(dataPublicacao);
        if (dataPublicacao !== undefined && (dataPublicacao === null || Number.isNaN(publicacao.getTime()))) {
            return res.status(400).json({ error: 'O campo "dataPublicacao" deve ser uma data válida.' });
        }

        const noticia = new NoticiaModel({
            titulo,
            resumo,
            conteudo,
            urlImagem,
            dataPublicacao: publicacao,
        });
        const data = await noticia.criar();
        return res.status(201).json({ message: 'Notícia criada com sucesso!', data });
    } catch (error) {
        if (tratarErroPrisma(error, res)) return;
        console.error('Erro ao criar notícia:', error);
        return res.status(500).json({ error: 'Erro interno ao salvar o registro.' });
    }
};

export const buscarTodos = async (req, res) => {
    try {
        const registros = await NoticiaModel.buscarTodos(req.query);
        return res.status(200).json(registros);
    } catch (error) {
        console.error('Erro ao buscar notícias:', error);
        return res.status(500).json({ error: 'Erro ao buscar registros.' });
    }
};

export const buscarPorId = async (req, res) => {
    try {
        const id = Number(req.params.id);
        if (!Number.isInteger(id) || id <= 0) {
            return res.status(400).json({ error: 'O ID enviado não é um número válido.' });
        }

        const noticia = await NoticiaModel.buscarPorId(id);
        if (!noticia) {
            return res.status(404).json({ error: 'Registro não encontrado.' });
        }

        return res.status(200).json({ data: noticia });
    } catch (error) {
        console.error('Erro ao buscar notícia:', error);
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

        const noticia = await NoticiaModel.buscarPorId(id);
        if (!noticia) {
            return res.status(404).json({ error: 'Registro não encontrado para atualizar.' });
        }

        for (const campo of ['titulo', 'resumo', 'conteudo', 'urlImagem']) {
            if (req.body[campo] !== undefined) {
                noticia[campo] = req.body[campo];
            }
        }

        if (req.body.dataPublicacao !== undefined) {
            const publicacao = new Date(req.body.dataPublicacao);
            if (req.body.dataPublicacao === null || Number.isNaN(publicacao.getTime())) {
                return res.status(400).json({ error: 'O campo "dataPublicacao" deve ser uma data válida.' });
            }
            noticia.dataPublicacao = publicacao;
        }

        const data = await noticia.atualizar();
        return res.status(200).json({
            message: `A notícia "${data.titulo}" foi atualizada com sucesso!`,
            data,
        });
    } catch (error) {
        if (tratarErroPrisma(error, res)) return;
        console.error('Erro ao atualizar notícia:', error);
        return res.status(500).json({ error: 'Erro ao atualizar registro.' });
    }
};

export const deletar = async (req, res) => {
    try {
        const id = Number(req.params.id);
        if (!Number.isInteger(id) || id <= 0) {
            return res.status(400).json({ error: 'ID inválido.' });
        }

        const noticia = await NoticiaModel.buscarPorId(id);
        if (!noticia) {
            return res.status(404).json({ error: 'Registro não encontrado para deletar.' });
        }

        await noticia.deletar();
        return res.status(200).json({
            message: `A notícia "${noticia.titulo}" foi deletada com sucesso!`,
            deletado: noticia,
        });
    } catch (error) {
        console.error('Erro ao deletar notícia:', error);
        return res.status(500).json({ error: 'Erro ao deletar registro.' });
    }
};

import NoticiaModel from '../model/NoticiaModel.js';

export const criar = async (req, res) => {
    try {
        if (!req.body) {
            return res.status(400).json({ error: 'Corpo da requisição vazio. Envie os dados!' });
        }

        const { titulo, resumo, conteudo, url_imagem, data_publicacao } = req.body;

        if (!titulo) {
            return res.status(400).json({ error: 'O campo "titulo" é obrigatório!' });
        }

        if (!resumo) {
            return res.status(400).json({ error: 'O campo "resumo" é obrigatório!' });
        }

        if (!conteudo) {
            return res.status(400).json({ error: 'O campo "conteudo" é obrigatório!' });
        }

        if (!url_imagem) {
            return res.status(400).json({ error: 'O campo "url_imagem" é obrigatório!' });
        }

        const dataPublicacao = data_publicacao === undefined ? undefined : new Date(data_publicacao);
        if (dataPublicacao && Number.isNaN(dataPublicacao.getTime())) {
            return res.status(400).json({ error: 'O campo "data_publicacao" deve ser uma data válida.' });
        }

        const noticia = new NoticiaModel({
            titulo,
            resumo,
            conteudo,
            url_imagem,
            data_publicacao: dataPublicacao,
        });
        const data = await noticia.criar();
        return res.status(201).json({ message: 'Notícia criada com sucesso!', data });
    } catch (error) {
        console.error('Erro ao criar:', error);
        return res.status(500).json({ error: 'Erro interno ao salvar o registro.' });
    }
};

export const buscarTodos = async (req, res) => {
    try {
        const registros = await NoticiaModel.buscarTodos(req.query);

        if (!registros || registros.length === 0) {
            return res.status(400).json({ message: 'Nenhum registro encontrado.' });
        }

        return res.status(200).json(registros);
    } catch (error) {
        console.error('Erro ao buscar:', error);
        return res.status(500).json({ error: 'Erro ao buscar registros.' });
    }
};

export const buscarPorId = async (req, res) => {
    try {
        const { id } = req.params;

        if (isNaN(id)) {
            return res.status(400).json({ error: 'O ID enviado não é um número válido.' });
        }

        const noticia = await NoticiaModel.buscarPorId(parseInt(id));

        if (!noticia) {
            return res.status(404).json({ error: 'Registro não encontrado.' });
        }

        return res.status(200).json({ data: noticia });
    } catch (error) {
        console.error('Erro ao buscar:', error);
        return res.status(500).json({ error: 'Erro ao buscar registro.' });
    }
};

export const atualizar = async (req, res) => {
    try {
        const { id } = req.params;

        if (isNaN(id)) {
            return res.status(400).json({ error: 'ID inválido.' });
        }

        if (!req.body) {
            return res.status(400).json({ error: 'Corpo da requisição vazio. Envie os dados!' });
        }

        const noticia = await NoticiaModel.buscarPorId(parseInt(id));

        if (!noticia) {
            return res.status(404).json({ error: 'Registro não encontrado para atualizar.' });
        }

        if (req.body.titulo !== undefined) {
            noticia.titulo = req.body.titulo;
        }
        if (req.body.resumo !== undefined) {
            noticia.resumo = req.body.resumo;
        }
        if (req.body.conteudo !== undefined) {
            noticia.conteudo = req.body.conteudo;
        }
        if (req.body.url_imagem !== undefined) {
            noticia.url_imagem = req.body.url_imagem;
        }
        if (req.body.data_publicacao !== undefined) {
            const dataPublicacao = new Date(req.body.data_publicacao);
            if (Number.isNaN(dataPublicacao.getTime())) {
                return res.status(400).json({ error: 'O campo "data_publicacao" deve ser uma data válida.' });
            }
            noticia.data_publicacao = dataPublicacao;
        }

        const data = await noticia.atualizar();
        return res.status(200).json({
            message: `A notícia "${data.titulo}" foi atualizada com sucesso!`,
            data,
        });
    } catch (error) {
        console.error('Erro ao atualizar:', error);
        return res.status(500).json({ error: 'Erro ao atualizar registro.' });
    }
};

export const deletar = async (req, res) => {
    try {
        const { id } = req.params;

        if (isNaN(id)) {
            return res.status(400).json({ error: 'ID inválido.' });
        }

        const noticia = await NoticiaModel.buscarPorId(parseInt(id));

        if (!noticia) {
            return res.status(404).json({ error: 'Registro não encontrado para deletar.' });
        }

        await noticia.deletar();
        return res.status(200).json({
            message: `A notícia "${noticia.titulo}" foi deletada com sucesso!`,
            deletado: noticia,
        });
    } catch (error) {
        console.error('Erro ao deletar:', error);
        return res.status(500).json({ error: 'Erro ao deletar registro.' });
    }
};

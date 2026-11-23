import TemaModel from '../model/TemaModel.js';

const textoValido = (valor) => typeof valor === 'string' && valor.trim().length > 0;
const textoOpcionalValido = (valor) => valor === null || typeof valor === 'string';

export const criar = async (req, res) => {
    try {
        const { nome, descricao, slug, codigoApi } = req.body ?? {};

        if (!textoValido(nome)) {
            return res.status(400).json({ error: 'O campo "nome" é obrigatório.' });
        }

        if (!textoValido(slug)) {
            return res.status(400).json({ error: 'O campo "slug" é obrigatório.' });
        }

        if (descricao !== undefined && !textoOpcionalValido(descricao)) {
            return res.status(400).json({ error: 'O campo "descricao" deve ser um texto ou null.' });
        }

        if (codigoApi !== undefined && !textoOpcionalValido(codigoApi)) {
            return res.status(400).json({ error: 'O campo "codigoApi" deve ser um texto ou null.' });
        }

        const tema = new TemaModel({ nome, descricao, slug, codigoApi });
        const data = await tema.criar();
        return res.status(201).json({ message: 'Tema criado com sucesso!', data });
    } catch (error) {
        console.error('Erro ao criar tema:', error);
        return res.status(500).json({ error: 'Erro interno ao salvar o registro.' });
    }
};

export const buscarTodos = async (req, res) => {
    try {
        const registros = await TemaModel.buscarTodos(req.query);
        if (registros.length === 0) {
            return res.status(400).json({ message: 'Nenhum registro encontrado.' });
        }

        return res.status(200).json(registros);
    } catch (error) {
        console.error('Erro ao buscar temas:', error);
        return res.status(500).json({ error: 'Erro ao buscar registros.' });
    }
};

export const buscarPorId = async (req, res) => {
    try {
        const id = Number(req.params.id);
        if (!Number.isInteger(id) || id <= 0) {
            return res.status(400).json({ error: 'O ID enviado não é um número válido.' });
        }

        const tema = await TemaModel.buscarPorId(id);
        if (!tema) {
            return res.status(404).json({ error: 'Tema não encontrado.' });
        }

        return res.status(200).json({ data: tema });
    } catch (error) {
        console.error('Erro ao buscar tema:', error);
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

        const tema = await TemaModel.buscarPorId(id);
        if (!tema) {
            return res.status(404).json({ error: 'Tema não encontrado para atualizar.' });
        }

        for (const campo of ['nome', 'slug']) {
            if (req.body[campo] !== undefined) {
                if (!textoValido(req.body[campo])) {
                    return res.status(400).json({ error: `O campo "${campo}" não pode ficar vazio.` });
                }
                tema[campo] = req.body[campo];
            }
        }

        for (const campo of ['descricao', 'codigoApi']) {
            if (req.body[campo] !== undefined) {
                if (!textoOpcionalValido(req.body[campo])) {
                    return res.status(400).json({ error: `O campo "${campo}" deve ser um texto ou null.` });
                }
                tema[campo] = req.body[campo];
            }
        }

        const data = await tema.atualizar();
        return res.status(200).json({
            message: `O tema "${data.nome}" foi atualizado com sucesso!`,
            data,
        });
    } catch (error) {
        console.error('Erro ao atualizar tema:', error);
        return res.status(500).json({ error: 'Erro ao atualizar registro.' });
    }
};

export const deletar = async (req, res) => {
    try {
        const id = Number(req.params.id);
        if (!Number.isInteger(id) || id <= 0) {
            return res.status(400).json({ error: 'ID inválido.' });
        }

        const tema = await TemaModel.buscarPorId(id);
        if (!tema) {
            return res.status(404).json({ error: 'Tema não encontrado para deletar.' });
        }

        await tema.deletar();
        return res.status(200).json({
            message: `O tema "${tema.nome}" foi deletado com sucesso!`,
            deletado: tema,
        });
    } catch (error) {
        console.error('Erro ao deletar tema:', error);
        return res.status(500).json({ error: 'Erro ao deletar registro.' });
    }
};

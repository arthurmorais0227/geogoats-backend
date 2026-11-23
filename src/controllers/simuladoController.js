import SimuladoModel from '../model/SimuladoModel.js';

export const criar = async (req, res) => {
    try {
        if (!req.body) {
            return res.status(400).json({ error: 'Corpo da requisição vazio. Envie os dados!' });
        }

        const {
            pergunta,
            conteudo,
            opcaoA,
            opcaoB,
            opcaoC,
            opcaoD,
            opcaoE,
            respostaCorreta,
            explicacao,
            materia,
            urlImagem,
            temaId,
        } = req.body;

        if (!conteudo) {
            return res.status(400).json({ error: 'O campo "conteudo" é obrigatório!' });
        }

        if (!pergunta) {
            return res.status(400).json({ error: 'O campo "pergunta" é obrigatório!' });
        }

        if (!opcaoA) {
            return res.status(400).json({ error: 'O campo "opcaoA" é obrigatório!' });
        }

        if (!opcaoB) {
            return res.status(400).json({ error: 'O campo "opcaoB" é obrigatório!' });
        }

        if (!opcaoC) {
            return res.status(400).json({ error: 'O campo "opcaoC" é obrigatório!' });
        }

        if (!opcaoD) {
            return res.status(400).json({ error: 'O campo "opcaoD" é obrigatório!' });
        }

        if (!opcaoE) {
            return res.status(400).json({ error: 'O campo "opcaoE" é obrigatório!' });
        }

        if (!respostaCorreta) {
            return res.status(400).json({ error: 'O campo "respostaCorreta" é obrigatório!' });
        }

        if (!explicacao) {
            return res.status(400).json({ error: 'O campo "explicacao" é obrigatório!' });
        }

        if (!materia) {
            return res.status(400).json({ error: 'O campo "materia" é obrigatório!' });
        }

        if (typeof respostaCorreta !== 'string' || respostaCorreta.length !== 1) {
            return res.status(400).json({ error: 'O campo "respostaCorreta" deve conter uma letra.' });
        }

        if (temaId !== undefined && temaId !== null
            && (!Number.isInteger(Number(temaId)) || Number(temaId) <= 0)) {
            return res.status(400).json({ error: 'O campo "temaId" deve ser um ID válido ou null.' });
        }

        const simulado = new SimuladoModel({
            pergunta,
            conteudo,
            opcaoA,
            opcaoB,
            opcaoC,
            opcaoD,
            opcaoE,
            respostaCorreta,
            explicacao,
            materia,
            urlImagem,
            temaId: temaId == null ? temaId : Number(temaId),
        });
        
        const data = await simulado.criar();
        return res.status(201).json({ message: 'Registro criado com sucesso!', data });
    } catch (error) {
        console.error('Erro ao criar:', error);
        return res.status(500).json({ error: 'Erro interno ao salvar o registro.' });
    }
};

export const buscarTodos = async (req, res) => {
    try {
        if (req.query.temaId !== undefined
            && (!Number.isInteger(Number(req.query.temaId)) || Number(req.query.temaId) <= 0)) {
            return res.status(400).json({ error: 'O filtro "temaId" deve ser um ID válido.' });
        }

        const registros = await SimuladoModel.buscarTodos(req.query);

        if (!registros || registros.length === 0) {
            return res.status(404).json({ message: 'Nenhum registro encontrado.' });
        }

        return res.status(200).json(registros);
    } catch (error) {
        console.error('Erro ao buscar:', error);

        return res.status(500).json({
            error: 'Erro ao buscar registros.',
        });
    }
};

export const buscarPorId = async (req, res) => {
    try {
        const { id } = req.params;

        if (isNaN(id)) {
            return res.status(400).json({ error: 'O ID enviado não é um número válido.' });
        }

        const simulado = await SimuladoModel.buscarPorId(parseInt(id));

        if (!simulado) {
            return res.status(404).json({ error: 'Registro não encontrado.' });
        }

        return res.status(200).json({ data: simulado });
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

        const simulado = await SimuladoModel.buscarPorId(parseInt(id));

        if (!simulado) {
            return res.status(404).json({ error: 'Registro não encontrado para atualizar.' });
        }

        if (req.body.pergunta !== undefined) {
            simulado.pergunta = req.body.pergunta;
        }
        if (req.body.conteudo !== undefined) {
            simulado.conteudo = req.body.conteudo;
        }
        if (req.body.opcaoA !== undefined) {
            simulado.opcaoA = req.body.opcaoA;
        }
        if (req.body.opcaoB !== undefined) {
            simulado.opcaoB = req.body.opcaoB;
        }
        if (req.body.opcaoC !== undefined) {
            simulado.opcaoC = req.body.opcaoC;
        }
        if (req.body.opcaoD !== undefined) {
            simulado.opcaoD = req.body.opcaoD;
        }
        if (req.body.opcaoE !== undefined) {
            simulado.opcaoE = req.body.opcaoE;
        }
        if (req.body.respostaCorreta !== undefined) {
            if (typeof req.body.respostaCorreta !== 'string' || req.body.respostaCorreta.length !== 1) {
                return res.status(400).json({ error: 'O campo "respostaCorreta" deve conter uma letra.' });
            }
            simulado.respostaCorreta = req.body.respostaCorreta;
        }
        if (req.body.explicacao !== undefined) {
            simulado.explicacao = req.body.explicacao;
        }
        if (req.body.materia !== undefined) {
            simulado.materia = req.body.materia;
        }
        if (req.body.urlImagem !== undefined) {
            simulado.urlImagem = req.body.urlImagem;
        }
        if (req.body.temaId !== undefined) {
            const temaId = req.body.temaId;
            if (temaId !== null && (!Number.isInteger(Number(temaId)) || Number(temaId) <= 0)) {
                return res.status(400).json({ error: 'O campo "temaId" deve ser um ID válido ou null.' });
            }
            simulado.temaId = temaId === null ? null : Number(temaId);
        }

        const data = await simulado.atualizar();

        return res.status(200).json({
            message: `O registro "${data.pergunta}" foi atualizado com sucesso!`,
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

        const simulado = await SimuladoModel.buscarPorId(parseInt(id));

        if (!simulado) {
            return res.status(404).json({ error: 'Registro não encontrado para deletar.' });
        }

        await simulado.deletar();
        return res.status(200).json({
            message: `O registro "${simulado.pergunta}" foi deletado com sucesso!`,
            deletado: simulado,
        });
    } catch (error) {
        console.error('Erro ao deletar:', error);
        return res.status(500).json({ error: 'Erro ao deletar registro.' });
    }
};
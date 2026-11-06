import SimuladoModel from '../models/SimuladoModel.js';

export const criar = async (req, res) => {
    try {
        if (!req.body) {
            return res.status(400).json({ error: 'Corpo da requisição vazio. Envie os dados!' });
        }

        const {
            pergunta,
            opcaoA,
            opcaoB,
            opcaoC,
            opcaoD,
            opcaoE,
            respostaCorreta,
            explicacao,
        } = req.body;

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

        const simulado = new SimuladoModel({
            pergunta: req.body.pergunta,
            opcaoA: req.body.opcaoA,
            opcaoB: req.body.opcaoB,
            opcaoC: req.body.opcaoC,
            opcaoD: req.body.opcaoD,
            opcaoE: req.body.opcaoE,
            respostaCorreta: req.body.respostaCorreta,
            explicacao: req.body.explicacao,
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
        const {
            pergunta,
            opcaoA,
            opcaoB,
            opcaoC,
            opcaoD,
            opcaoE,
            respostaCorreta,
            explicacao,
        } = req.body;

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
            simulado.respostaCorreta = req.body.respostaCorreta;
        }
        if (req.body.explicacao !== undefined) {
            simulado.explicacao = req.body.explicacao;
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
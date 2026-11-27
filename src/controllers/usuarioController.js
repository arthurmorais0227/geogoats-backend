import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import UsuarioModel from '../model/UsuarioModel.js';

const semSenha = ({ senha, ...usuario }) => usuario;

export const criar = async (req, res) => {
    try {
        if (!req.body) {
            return res.status(400).json({ error: 'Corpo da requisição vazio. Envie os dados!' });
        }

        const { nome, email, senha, isAdmin } = req.body;

        if (isAdmin !== undefined && typeof isAdmin !== 'boolean') {
            return res.status(400).json({ error: 'O campo "isAdmin" deve ser booleano.' });
        }

        if (!nome) {
            return res.status(400).json({ error: 'O campo "nome" é obrigatório!' });
        }

        if (!email) {
            return res.status(400).json({ error: 'O campo "email" é obrigatório!' });
        }

        if (!senha) {
            return res.status(400).json({ error: 'O campo "senha" é obrigatório!' });
        }

        const usuario = new UsuarioModel({
            nome,
            email,
            senha: await bcrypt.hash(senha, 10),
            isAdmin,
        });
        const data = await usuario.criar();
        return res.status(201).json({
            message: 'Usuário criado com sucesso!',
            data: semSenha(data),
        });
    } catch (error) {
        console.error('Erro ao criar:', error);
        return res.status(500).json({ error: 'Erro interno ao salvar o registro.' });
    }
};

export const buscarTodos = async (req, res) => {
    try {
        const registros = await UsuarioModel.buscarTodos(req.query);

        if (!registros || registros.length === 0) {
            return res.status(400).json({ message: 'Nenhum registro encontrado.' });
        }

        return res.status(200).json(registros.map(semSenha));
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

        const usuario = await UsuarioModel.buscarPorId(parseInt(id));

        if (!usuario) {
            return res.status(404).json({ error: 'Registro não encontrado.' });
        }

        return res.status(200).json({ data: semSenha(usuario) });
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

        const usuario = await UsuarioModel.buscarPorId(parseInt(id));

        if (!usuario) {
            return res.status(404).json({ error: 'Registro não encontrado para atualizar.' });
        }

        if (req.body.nome !== undefined) {
            usuario.nome = req.body.nome;
        }
        if (req.body.email !== undefined) {
            usuario.email = req.body.email;
        }
        if (req.body.senha !== undefined) {
            usuario.senha = await bcrypt.hash(req.body.senha, 10);
        }
        if (req.body.isAdmin !== undefined) {
            if (typeof req.body.isAdmin !== 'boolean') {
                return res.status(400).json({ error: 'O campo "isAdmin" deve ser booleano.' });
            }
            usuario.isAdmin = req.body.isAdmin;
        }

        const data = await usuario.atualizar();
        return res.status(200).json({
            message: `O usuário "${data.nome}" foi atualizado com sucesso!`,
            data: semSenha(data),
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

        const usuario = await UsuarioModel.buscarPorId(parseInt(id));

        if (!usuario) {
            return res.status(404).json({ error: 'Registro não encontrado para deletar.' });
        }

        await usuario.deletar();
        return res.status(200).json({
            message: `O usuário "${usuario.nome}" foi deletado com sucesso!`,
            deletado: semSenha(usuario),
        });
    } catch (error) {
        console.error('Erro ao deletar:', error);
        return res.status(500).json({ error: 'Erro ao deletar registro.' });
    }
};

export const login = async (req, res) => {
    try {
        const { email, senha } = req.body ?? {};
        if (!email || !senha) {
            return res.status(400).json({ error: 'Informe email e senha.' });
        }

        const usuario = await UsuarioModel.buscarPorEmail(email);
        if (!usuario || !(await bcrypt.compare(senha, usuario.senha))) {
            return res.status(401).json({ error: 'Email ou senha incorretos.' });
        }

        const token = jwt.sign(
            { id: usuario.id, nome: usuario.nome, isAdmin: usuario.isAdmin },
            process.env.JWT_SECRET,
            { expiresIn: '1h' },
        );

        return res.status(200).json({ token, usuario: semSenha(usuario) });
    } catch (error) {
        console.error('Erro no login:', error);
        return res.status(500).json({ error: 'Erro interno no login.' });
    }
};

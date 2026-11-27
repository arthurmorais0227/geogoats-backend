import { clerkClient, getAuth } from '@clerk/express';

// Só deixa passar quem está logado no Clerk E tem publicMetadata.role = "admin".
// O frontend manda o token da sessão no header: Authorization: Bearer <token>
export const exigirAdmin = async (req, res, next) => {
    try {
        const { userId } = getAuth(req);

        if (!userId) {
            return res.status(401).json({ error: 'Faça login para continuar.' });
        }

        const usuario = await clerkClient.users.getUser(userId);

        if (usuario.publicMetadata?.role !== 'admin') {
            return res.status(403).json({ error: 'Apenas administradores podem fazer isso.' });
        }

        req.usuarioAdmin = usuario;
        return next();
    } catch (error) {
        console.error('Erro ao verificar o usuário no Clerk:', error);
        return res.status(500).json({ error: 'Não foi possível verificar o usuário.' });
    }
};
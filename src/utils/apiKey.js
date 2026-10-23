const createAuthMiddleware = (environmentVariable) => (req, res, next) => {
    const expectedKey = process.env[environmentVariable];

    if (!expectedKey) {
        return res.status(503).json({ error: 'Autenticação não configurada no servidor.' });
    }

    if (req.get('x-api-key') !== expectedKey) {
        return res.status(401).json({ error: 'Chave de API inválida ou ausente.' });
    }

    return next();
};

export const authAdmin = createAuthMiddleware('ADMIN_API_KEY');
export const authPublic = createAuthMiddleware('PUBLIC_API_KEY');
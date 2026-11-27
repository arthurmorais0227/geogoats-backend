export const tratarErroPrisma = (error, res) => {
    if (error?.code === 'P2002') {
        res.status(409).json({
            error: 'Já existe um registro com este valor em um campo único (ex.: email, nome ou slug).',
        });
        return true;
    }

    if (error?.code === 'P2003') {
        res.status(400).json({
            error: 'Referência inválida: o registro relacionado (ex.: temaId) não existe.',
        });
        return true;
    }

    return false;
};

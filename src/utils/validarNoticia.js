// Valida os dados de uma notícia.
// Devolve { erro } com a mensagem para o usuário, ou { dados } já limpos.
// parcial = true no PUT: só valida os campos que vieram.
const LIMITES = { titulo: 200, resumo: 255, urlImagem: 500 };

const NOMES = {
    titulo: 'Título',
    resumo: 'Resumo',
    conteudo: 'Conteúdo',
    urlImagem: 'URL da imagem',
    dataPublicacao: 'Data de publicação',
};

export function validarNoticia(body, { parcial = false } = {}) {
    if (!body || typeof body !== 'object') {
        return { erro: 'Envie os dados da notícia.' };
    }

    const dados = {};

    for (const campo of ['titulo', 'resumo', 'conteudo', 'urlImagem']) {
        const valor = body[campo];

        if (valor === undefined && parcial) continue;

        if (typeof valor !== 'string' || valor.trim() === '') {
            return { erro: `O campo "${NOMES[campo]}" é obrigatório.` };
        }

        const texto = valor.trim();

        if (LIMITES[campo] && texto.length > LIMITES[campo]) {
            return {
                erro: `O campo "${NOMES[campo]}" pode ter no máximo ${LIMITES[campo]} caracteres.`,
            };
        }

        dados[campo] = texto;
    }

    if (dados.urlImagem !== undefined) {
        let url;
        try {
            url = new URL(dados.urlImagem);
        } catch {
            return { erro: 'A URL da imagem não é válida.' };
        }
        if (url.protocol !== 'http:' && url.protocol !== 'https:') {
            return { erro: 'A URL da imagem deve começar com http:// ou https://.' };
        }
    }

    if (body.dataPublicacao !== undefined || !parcial) {
        const data = new Date(body.dataPublicacao);
        if (!body.dataPublicacao || Number.isNaN(data.getTime())) {
            return { erro: `O campo "${NOMES.dataPublicacao}" deve ser uma data válida.` };
        }
        dados.dataPublicacao = data;
    }

    if (parcial && Object.keys(dados).length === 0) {
        return { erro: 'Envie pelo menos um campo para atualizar.' };
    }

    return { dados };
}
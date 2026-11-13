import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌎 Iniciando seed do geoGoats...');

  // ATENÇÃO: apaga os dados existentes antes de inserir os exemplos.
  await prisma.noticia.deleteMany();
  await prisma.usuario.deleteMany();
  await prisma.simulado.deleteMany();
  await prisma.dicas.deleteMany();
  await prisma.videoAula.deleteMany();
  await prisma.participantes.deleteMany();

  // PARTICIPANTES
  await prisma.participantes.createMany({
    data: [
      { nome: 'Arthur Morais', curso: 'Desenvolvimento de Sistemas', foto: 'https://avatars.githubusercontent.com/u/201222799?s=400&u=090d45c9e4e5bd0bbe9ff6e7f891b905ac8744b7&v=4', idade: '17 anos', email: 'arthur.m.santos20@aluno.senai.br' },
      { nome: 'Gustavo Lisboa', curso: 'Desenvolvimento de Sistemas', foto: 'https://avatars.githubusercontent.com/u/155676204?v=4', idade: '17 anos', email: 'gustavo.t.lisboa@aluno.senai.br' },
      { nome: 'Fábio Henrique', curso: 'Desenvolvimento de Sistemas', foto: 'https://avatars.githubusercontent.com/u/201291219?v=4', idade: '17 anos', email: 'fabio.trevizolli@aluno.senai.br' },
      { nome: 'João Gomes', curso: 'Desenvolvimento de Sistemas', foto: 'https://avatars.githubusercontent.com/u/203624805?v=4', idade: '18 anos', email: 'joao.v.gomes50@aluno.senai.br' },
      { nome: 'Rafael Santos', curso: 'Desenvolvimento de Sistemas', foto: 'https://avatars.githubusercontent.com/u/202285790?v=4', idade: '18 anos', email: 'rafael.s.mendes6@aluno.senai.br' },
      { nome: 'João Strupicio', curso: 'Desenvolvimento de Sistemas', foto: 'https://avatars.githubusercontent.com/u/197295392?v=4', idade: '18 anos', email: 'joao.stopiglia@aluno.senai.br' },
    ],
  });

  // VIDEOAULAS
  await prisma.videoAula.createMany({
    data: [
      {
        conteudo: 'Geografia Agrária e Estrutura Fundiária',
        urlMidia: 'https://www.youtube.com/results?search_query=geografia+agraria+estrutura+fundiaria',
        descricao: 'Estude a concentração de terras, a estrutura fundiária brasileira, a agricultura familiar, o agronegócio e os conflitos no campo.',
      },
      {
        conteudo: 'Questões Ambientais e Sustentabilidade',
        urlMidia: 'https://www.youtube.com/results?search_query=questoes+ambientais+sustentabilidade+geografia',
        descricao: 'Conheça os principais problemas ambientais, as mudanças climáticas, a poluição, o desmatamento e as práticas de conservação.',
      },
      {
        conteudo: 'Biomas Brasileiros',
        urlMidia: 'https://www.youtube.com/results?search_query=biomas+brasileiros+geografia',
        descricao: 'Explore características de clima, vegetação, fauna, relevo e ameaças aos seis biomas brasileiros.',
      },
      {
        conteudo: 'Urbanização e Dinâmicas Urbanas',
        urlMidia: 'https://www.youtube.com/results?search_query=urbanizacao+dinamicas+urbanas+geografia',
        descricao: 'Compreenda o crescimento das cidades, a rede urbana, a metropolização, a segregação socioespacial e os desafios urbanos.',
      },
      {
        conteudo: 'Globalização e Geografia Econômica',
        urlMidia: 'https://www.youtube.com/results?search_query=globalizacao+geografia+economica',
        descricao: 'Analise os fluxos de mercadorias, capitais e informações, as empresas transnacionais e a divisão internacional do trabalho.',
      },
      {
        conteudo: 'Demografia e Migrações',
        urlMidia: 'https://www.youtube.com/results?search_query=demografia+migracoes+geografia',
        descricao: 'Aprenda sobre crescimento populacional, pirâmides etárias, transição demográfica, migrações e distribuição da população.',
      },
      {
        conteudo: 'Cartografia: Escalas e Projeções',
        urlMidia: 'https://www.youtube.com/results?search_query=cartografia+escalas+projecoes+geografia',
        descricao: 'Revise leitura de mapas, escalas numéricas e gráficas, coordenadas e distorções das projeções cartográficas.',
      },
      {
        conteudo: 'Clima, Tempo e Massas de Ar',
        urlMidia: 'https://www.youtube.com/results?search_query=clima+tempo+massas+de+ar+brasil',
        descricao: 'Diferencie tempo e clima e entenda os elementos climáticos, os fatores do clima e a atuação das massas de ar.',
      },
      {
        conteudo: 'Relevo e Agentes Modeladores',
        urlMidia: 'https://www.youtube.com/results?search_query=relevo+agentes+modeladores+geografia',
        descricao: 'Estude as formas de relevo e a ação de agentes internos e externos, como tectonismo, intemperismo e erosão.',
      },
      {
        conteudo: 'Geopolítica e Organização Mundial',
        urlMidia: 'https://www.youtube.com/results?search_query=geopolitica+organizacao+mundial+geografia',
        descricao: 'Entenda as relações de poder, os conflitos territoriais, os blocos econômicos e o papel das organizações internacionais.',
      },
    ],
  });

  // DICAS DE GEOGRAFIA
  await prisma.dicas.createMany({
    data: [
      {
        conteudo: 'Diferencie tempo atmosférico e clima.',
        dicas: 'Tempo é o estado momentâneo da atmosfera. Clima é o comportamento médio das condições atmosféricas observado durante longos períodos, geralmente de pelo menos 30 anos.',
      },
      {
        conteudo: 'Lembre-se de como a escala cartográfica funciona.',
        dicas: 'A escala 1:100.000 indica que 1 cm no mapa representa 100.000 cm na realidade, ou seja, 1 km. Quanto menor o denominador, maior o nível de detalhe.',
      },
      {
        conteudo: 'Use a rosa dos ventos para interpretar direções.',
        dicas: 'Os pontos cardeais são norte, sul, leste e oeste. Nordeste, sudeste, sudoeste e noroeste são pontos colaterais que ajudam a indicar direções intermediárias.',
      },
      {
        conteudo: 'Não confunda latitude com longitude.',
        dicas: 'Latitude é a distância angular em relação à Linha do Equador, ao norte ou ao sul. Longitude é a distância angular em relação ao Meridiano de Greenwich, a leste ou a oeste.',
      },
      {
        conteudo: 'Entenda a concentração fundiária brasileira.',
        dicas: 'A concentração fundiária ocorre quando uma parcela reduzida de proprietários controla grande parte das terras. Relacione o tema à formação histórica do território, à estrutura agrária e aos conflitos no campo.',
      },
      {
        conteudo: 'Compare agricultura familiar e agronegócio.',
        dicas: 'A agricultura familiar tem gestão e trabalho predominantemente ligados à família. O agronegócio reúne atividades articuladas de produção, insumos, processamento, logística e comercialização em diferentes escalas.',
      },
      {
        conteudo: 'Estude a modernização do campo sem esquecer seus efeitos.',
        dicas: 'A mecanização e o uso de tecnologias podem elevar a produtividade, mas também podem ampliar a concentração de renda e terra, reduzir postos de trabalho e intensificar impactos ambientais.',
      },
      {
        conteudo: 'Relacione a expansão da fronteira agrícola ao desmatamento.',
        dicas: 'A abertura de novas áreas para lavouras e pastagens pode pressionar ecossistemas. Observe especialmente a dinâmica do Cerrado e da Amazônia e a importância do planejamento territorial.',
      },
      {
        conteudo: 'Conheça os seis biomas brasileiros.',
        dicas: 'Amazônia, Mata Atlântica, Cerrado, Caatinga, Pantanal e Pampa possuem condições naturais e biodiversidade próprias. Saiba localizar cada um e relacionar clima, vegetação e ameaças.',
      },
      {
        conteudo: 'Associe a Caatinga ao clima semiárido.',
        dicas: 'A Caatinga apresenta espécies adaptadas à irregularidade das chuvas e aos períodos de seca, como plantas com folhas reduzidas, espinhos e armazenamento de água.',
      },
      {
        conteudo: 'Entenda a importância do Cerrado.',
        dicas: 'O Cerrado é uma savana tropical com grande biodiversidade e nascentes importantes para bacias hidrográficas. A conversão da vegetação nativa ameaça habitats e recursos hídricos.',
      },
      {
        conteudo: 'Relacione desmatamento e mudanças climáticas.',
        dicas: 'A remoção e a queima da vegetação liberam gases de efeito estufa e reduzem a capacidade de armazenamento de carbono dos ecossistemas, além de alterar ciclos locais de água.',
      },
      {
        conteudo: 'Diferencie efeito estufa de aquecimento global.',
        dicas: 'O efeito estufa é um fenômeno natural que mantém a Terra aquecida. O aquecimento global atual está associado à intensificação desse efeito pelo aumento de gases de efeito estufa causado principalmente por atividades humanas.',
      },
      {
        conteudo: 'Observe a relação entre impermeabilização do solo e enchentes.',
        dicas: 'A pavimentação reduz a infiltração da água da chuva e aumenta o escoamento superficial. Drenagem adequada, áreas verdes e proteção de várzeas ajudam a reduzir riscos.',
      },
      {
        conteudo: 'Estude as ilhas de calor urbanas.',
        dicas: 'As ilhas de calor são áreas urbanas mais quentes que seus arredores, devido à concentração de construções, asfalto, pouca vegetação, tráfego e retenção de calor pelos materiais.',
      },
      {
        conteudo: 'Compreenda a segregação socioespacial.',
        dicas: 'A segregação socioespacial é a distribuição desigual de grupos sociais no espaço urbano, frequentemente relacionada à renda, ao preço da terra e ao acesso desigual a serviços e infraestrutura.',
      },
      {
        conteudo: 'Diferencie crescimento urbano de urbanização.',
        dicas: 'Crescimento urbano é o aumento da população ou da área construída das cidades. Urbanização é o aumento da proporção da população que vive em áreas urbanas.',
      },
      {
        conteudo: 'Entenda o processo de metropolização.',
        dicas: 'A metropolização envolve a concentração de população, atividades econômicas e serviços em grandes centros e a integração desses centros com municípios vizinhos por fluxos diários.',
      },
      {
        conteudo: 'Revise o conceito de rede urbana.',
        dicas: 'A rede urbana é formada por cidades conectadas por fluxos de pessoas, mercadorias, serviços, capitais e informações, com diferentes níveis de influência e funções.',
      },
      {
        conteudo: 'Relacione globalização e avanços tecnológicos.',
        dicas: 'Transportes, telecomunicações e tecnologias digitais aceleram fluxos globais, mas seus benefícios não são distribuídos igualmente entre países, regiões e grupos sociais.',
      },
      {
        conteudo: 'Conheça a divisão internacional do trabalho.',
        dicas: 'A divisão internacional do trabalho descreve a distribuição das atividades produtivas entre países. Considere diferenças de tecnologia, especialização, salários e posição nas cadeias globais.',
      },
      {
        conteudo: 'Não confunda PIB com qualidade de vida.',
        dicas: 'O Produto Interno Bruto mede o valor dos bens e serviços finais produzidos. Ele não revela sozinho a distribuição de renda, as condições ambientais ou o acesso a saúde e educação.',
      },
      {
        conteudo: 'Interprete corretamente uma pirâmide etária.',
        dicas: 'A base representa grupos mais jovens, o meio representa adultos e o topo representa idosos. Mudanças no formato ajudam a identificar natalidade, envelhecimento e transição demográfica.',
      },
      {
        conteudo: 'Diferencie migração, imigração e emigração.',
        dicas: 'Migração é o deslocamento populacional. Imigração é a entrada de pessoas em um território; emigração é a saída de pessoas de seu território de origem.',
      },
      {
        conteudo: 'Analise as causas dos deslocamentos populacionais.',
        dicas: 'Migrações podem ocorrer por motivos econômicos, familiares, políticos, conflitos, perseguições, desastres e mudanças ambientais. Muitas vezes, vários fatores atuam juntos.',
      },
    ],
  });

  // SIMULADOS: 5 questões para cada conteúdo.
  await prisma.simulado.createMany({
    data: [
      // GEOGRAFIA AGRÁRIA
      {
        conteudo: 'Geografia Agrária',
        pergunta: 'O que caracteriza a concentração fundiária?',
        opcaoA: 'A distribuição igualitária das propriedades rurais',
        opcaoB: 'O controle de grande parte das terras por um número reduzido de proprietários',
        opcaoC: 'A substituição de toda atividade agrícola por serviços',
        opcaoD: 'A ausência de propriedades privadas no campo',
        opcaoE: 'A divisão das terras exclusivamente em pequenas parcelas',
        respostaCorreta: 'B',
        explicacao: 'A concentração fundiária ocorre quando poucas propriedades, geralmente grandes, reúnem parcela expressiva das terras de um território.',
        materia: 'Geografia Agrária',
      },
      {
        conteudo: 'Geografia Agrária',
        pergunta: 'Qual alternativa descreve corretamente a agricultura familiar?',
        opcaoA: 'Produção realizada exclusivamente por empresas multinacionais',
        opcaoB: 'Atividade sem participação do núcleo familiar',
        opcaoC: 'Unidade produtiva cuja gestão e trabalho são predominantemente familiares',
        opcaoD: 'Produção voltada somente à exportação de commodities',
        opcaoE: 'Atividade que não utiliza tecnologias',
        respostaCorreta: 'C',
        explicacao: 'Na agricultura familiar, a gestão do estabelecimento e a mão de obra são predominantemente vinculadas à família, conforme critérios legais específicos.',
        materia: 'Geografia Agrária',
      },
      {
        conteudo: 'Geografia Agrária',
        pergunta: 'O que é êxodo rural?',
        opcaoA: 'Deslocamento da população do campo para as cidades',
        opcaoB: 'Migração entre países industrializados',
        opcaoC: 'Retorno de turistas ao campo',
        opcaoD: 'Expansão de florestas sobre áreas agrícolas',
        opcaoE: 'Deslocamento diário entre bairros urbanos',
        respostaCorreta: 'A',
        explicacao: 'Êxodo rural é a saída de pessoas de áreas rurais, frequentemente em direção às cidades, motivada por fatores econômicos e sociais.',
        materia: 'Geografia Agrária',
      },
      {
        conteudo: 'Geografia Agrária',
        pergunta: 'Qual é uma consequência possível da mecanização agrícola?',
        opcaoA: 'Fim da produção de alimentos',
        opcaoB: 'Eliminação de toda desigualdade no campo',
        opcaoC: 'Redução obrigatória da produtividade',
        opcaoD: 'Aumento da produtividade e redução de determinadas ocupações rurais',
        opcaoE: 'Impossibilidade de produzir em larga escala',
        respostaCorreta: 'D',
        explicacao: 'Máquinas podem elevar a produtividade e reduzir a necessidade de mão de obra em determinadas etapas, transformando as relações de trabalho no campo.',
        materia: 'Geografia Agrária',
      },
      {
        conteudo: 'Geografia Agrária',
        pergunta: 'O que representa a fronteira agrícola?',
        opcaoA: 'Limite internacional entre dois países',
        opcaoB: 'Área onde termina a rede de transportes',
        opcaoC: 'Limite entre municípios exclusivamente urbanos',
        opcaoD: 'Região sem possibilidade de uso econômico',
        opcaoE: 'Avanço das atividades agropecuárias sobre novas áreas',
        respostaCorreta: 'E',
        explicacao: 'A fronteira agrícola é a área de expansão da produção agropecuária, podendo gerar mudanças econômicas, sociais e ambientais.',
        materia: 'Geografia Agrária',
      },

      // QUESTÕES AMBIENTAIS E BIOMAS BRASILEIROS
      {
        conteudo: 'Questões Ambientais e Biomas Brasileiros',
        pergunta: 'Qual bioma brasileiro ocupa a maior extensão territorial?',
        opcaoA: 'Pampa',
        opcaoB: 'Caatinga',
        opcaoC: 'Amazônia',
        opcaoD: 'Pantanal',
        opcaoE: 'Mata Atlântica',
        respostaCorreta: 'C',
        explicacao: 'A Amazônia é o maior bioma brasileiro em extensão e apresenta enorme diversidade de espécies e ecossistemas.',
        materia: 'Questões Ambientais e Biomas Brasileiros',
      },
      {
        conteudo: 'Questões Ambientais e Biomas Brasileiros',
        pergunta: 'Qual bioma possui vegetação adaptada à irregularidade das chuvas e ao clima semiárido?',
        opcaoA: 'Mata Atlântica',
        opcaoB: 'Caatinga',
        opcaoC: 'Pampa',
        opcaoD: 'Pantanal',
        opcaoE: 'Amazônia',
        respostaCorreta: 'B',
        explicacao: 'A Caatinga possui espécies adaptadas à escassez hídrica e à irregularidade das precipitações.',
        materia: 'Questões Ambientais e Biomas Brasileiros',
      },
      {
        conteudo: 'Questões Ambientais e Biomas Brasileiros',
        pergunta: 'Qual atividade está entre as principais pressões sobre a vegetação nativa do Cerrado?',
        opcaoA: 'Expansão agropecuária e conversão do uso da terra',
        opcaoB: 'Aumento das geleiras',
        opcaoC: 'Pesca oceânica',
        opcaoD: 'Construção de plataformas marítimas',
        opcaoE: 'Expansão de recifes de coral',
        respostaCorreta: 'A',
        explicacao: 'A expansão de lavouras e pastagens está entre os fatores que pressionam a vegetação nativa do Cerrado.',
        materia: 'Questões Ambientais e Biomas Brasileiros',
      },
      {
        conteudo: 'Questões Ambientais e Biomas Brasileiros',
        pergunta: 'O que é biodiversidade?',
        opcaoA: 'Apenas o número de árvores de uma floresta',
        opcaoB: 'Somente a variedade de animais domésticos',
        opcaoC: 'A quantidade de chuva de uma região',
        opcaoD: 'A variedade de formas de vida, genes e ecossistemas',
        opcaoE: 'A extensão territorial de um país',
        respostaCorreta: 'D',
        explicacao: 'Biodiversidade inclui a variedade de espécies, a diversidade genética e a diversidade de ecossistemas.',
        materia: 'Questões Ambientais e Biomas Brasileiros',
      },
      {
        conteudo: 'Questões Ambientais e Biomas Brasileiros',
        pergunta: 'Qual processo contribui diretamente para a intensificação do aquecimento global?',
        opcaoA: 'Aumento da cobertura vegetal nativa',
        opcaoB: 'Proteção de nascentes',
        opcaoC: 'Recuperação de áreas degradadas',
        opcaoD: 'Ampliação de corredores ecológicos',
        opcaoE: 'Emissão de gases de efeito estufa pela queima de combustíveis fósseis',
        respostaCorreta: 'E',
        explicacao: 'A queima de combustíveis fósseis libera dióxido de carbono e outros gases que intensificam o efeito estufa.',
        materia: 'Questões Ambientais e Biomas Brasileiros',
      },

      // URBANIZAÇÃO E DINÂMICAS URBANAS
      {
        conteudo: 'Urbanização e Dinâmicas Urbanas',
        pergunta: 'O que caracteriza o processo de urbanização?',
        opcaoA: 'A redução da população urbana em todos os países',
        opcaoB: 'O aumento da proporção da população que vive nas cidades',
        opcaoC: 'O desaparecimento das atividades industriais',
        opcaoD: 'A substituição de cidades por áreas rurais',
        opcaoE: 'A interrupção dos deslocamentos populacionais',
        respostaCorreta: 'B',
        explicacao: 'Urbanização é o aumento da proporção da população que reside em áreas urbanas em relação à população total.',
        materia: 'Urbanização e Dinâmicas Urbanas',
      },
      {
        conteudo: 'Urbanização e Dinâmicas Urbanas',
        pergunta: 'O que é conurbação?',
        opcaoA: 'Separação de áreas rurais por rios',
        opcaoB: 'Redução da densidade populacional',
        opcaoC: 'Encontro e continuidade física das manchas urbanas de municípios vizinhos',
        opcaoD: 'Criação de uma área exclusivamente agrícola',
        opcaoE: 'Deslocamento internacional de trabalhadores',
        respostaCorreta: 'C',
        explicacao: 'A conurbação ocorre quando áreas urbanizadas de municípios vizinhos crescem e se unem fisicamente.',
        materia: 'Urbanização e Dinâmicas Urbanas',
      },
      {
        conteudo: 'Urbanização e Dinâmicas Urbanas',
        pergunta: 'Qual situação é um exemplo de segregação socioespacial?',
        opcaoA: 'Distribuição igualitária de serviços em toda a cidade',
        opcaoB: 'Acesso universal à moradia adequada',
        opcaoC: 'Redução das diferenças entre bairros',
        opcaoD: 'Concentração de grupos de renda distinta em áreas com infraestrutura muito desigual',
        opcaoE: 'Ampliação de parques públicos em todos os bairros',
        respostaCorreta: 'D',
        explicacao: 'A segregação socioespacial expressa desigualdades na localização dos grupos sociais e no acesso à infraestrutura e aos serviços urbanos.',
        materia: 'Urbanização e Dinâmicas Urbanas',
      },
      {
        conteudo: 'Urbanização e Dinâmicas Urbanas',
        pergunta: 'Qual medida pode ajudar a reduzir enchentes em áreas urbanas?',
        opcaoA: 'Ampliar a impermeabilização de todas as superfícies',
        opcaoB: 'Ocupar várzeas e margens de rios',
        opcaoC: 'Eliminar áreas verdes',
        opcaoD: 'Canalizar todos os cursos d’água sem planejamento',
        opcaoE: 'Ampliar áreas permeáveis e sistemas de drenagem sustentável',
        respostaCorreta: 'E',
        explicacao: 'Áreas permeáveis favorecem a infiltração da água, enquanto sistemas de drenagem bem planejados reduzem o escoamento superficial.',
        materia: 'Urbanização e Dinâmicas Urbanas',
      },
      {
        conteudo: 'Urbanização e Dinâmicas Urbanas',
        pergunta: 'O que é uma região metropolitana?',
        opcaoA: 'Conjunto de municípios integrados por funções e fluxos urbanos em torno de uma metrópole',
        opcaoB: 'Área rural sem relações com cidades',
        opcaoC: 'Município com população obrigatoriamente inferior a mil habitantes',
        opcaoD: 'Território formado apenas por parques nacionais',
        opcaoE: 'Conjunto de países que compartilham a mesma moeda',
        respostaCorreta: 'A',
        explicacao: 'Regiões metropolitanas reúnem municípios integrados por relações socioeconômicas e funções urbanas, geralmente articulados por uma metrópole.',
        materia: 'Urbanização e Dinâmicas Urbanas',
      },

      // GLOBALIZAÇÃO E GEOGRAFIA ECONÔMICA
      {
        conteudo: 'Globalização e Geografia Econômica',
        pergunta: 'Qual característica está associada à globalização econômica?',
        opcaoA: 'Fim das relações comerciais entre países',
        opcaoB: 'Isolamento completo dos mercados nacionais',
        opcaoC: 'Integração crescente de mercados, produção e fluxos financeiros',
        opcaoD: 'Desaparecimento das redes de transporte',
        opcaoE: 'Proibição dos investimentos internacionais',
        respostaCorreta: 'C',
        explicacao: 'A globalização econômica amplia a integração entre economias por meio do comércio, dos investimentos e das cadeias produtivas.',
        materia: 'Globalização e Geografia Econômica',
      },
      {
        conteudo: 'Globalização e Geografia Econômica',
        pergunta: 'O que são empresas transnacionais?',
        opcaoA: 'Empresas que atuam somente em uma cidade',
        opcaoB: 'Empresas que possuem atividades ou operações em diferentes países',
        opcaoC: 'Organizações sem atividade econômica',
        opcaoD: 'Órgãos públicos municipais',
        opcaoE: 'Cooperativas restritas a um bairro',
        respostaCorreta: 'B',
        explicacao: 'Empresas transnacionais mantêm operações em mais de um país e articulam produção, serviços e mercados em escala internacional.',
        materia: 'Globalização e Geografia Econômica',
      },
      {
        conteudo: 'Globalização e Geografia Econômica',
        pergunta: 'O que representa a divisão internacional do trabalho?',
        opcaoA: 'A divisão dos bairros de uma cidade',
        opcaoB: 'A separação dos poderes políticos',
        opcaoC: 'A distribuição de rios por continentes',
        opcaoD: 'A distribuição de etapas e atividades produtivas entre países',
        opcaoE: 'A organização dos fusos horários',
        respostaCorreta: 'D',
        explicacao: 'A divisão internacional do trabalho expressa como diferentes países se especializam e participam das atividades produtivas mundiais.',
        materia: 'Globalização e Geografia Econômica',
      },
      {
        conteudo: 'Globalização e Geografia Econômica',
        pergunta: 'Qual fator contribuiu para acelerar os fluxos globais de informação?',
        opcaoA: 'Desenvolvimento das telecomunicações e da internet',
        opcaoB: 'Redução das redes digitais',
        opcaoC: 'Fim dos satélites de comunicação',
        opcaoD: 'Proibição do transporte aéreo',
        opcaoE: 'Desaparecimento dos cabos submarinos',
        respostaCorreta: 'A',
        explicacao: 'A expansão da internet, das telecomunicações e das tecnologias digitais tornou a circulação de informações muito mais rápida.',
        materia: 'Globalização e Geografia Econômica',
      },
      {
        conteudo: 'Globalização e Geografia Econômica',
        pergunta: 'O que é um bloco econômico?',
        opcaoA: 'Uma cadeia montanhosa',
        opcaoB: 'Uma divisão climática continental',
        opcaoC: 'Uma área de preservação ambiental',
        opcaoD: 'Um conjunto de cidades sem relações comerciais',
        opcaoE: 'Um acordo entre países para promover integração econômica e comercial',
        respostaCorreta: 'E',
        explicacao: 'Blocos econômicos são formas de integração entre países que estabelecem acordos para facilitar relações comerciais e, em alguns casos, aprofundar a integração.',
        materia: 'Globalização e Geografia Econômica',
      },

      // DEMOGRAFIA E MIGRAÇÕES
      {
        conteudo: 'Demografia e Migrações',
        pergunta: 'Como se calcula a densidade demográfica?',
        opcaoA: 'Dividindo a área pela altitude média',
        opcaoB: 'Multiplicando a população pela renda',
        opcaoC: 'Dividindo o número de habitantes pela área do território',
        opcaoD: 'Somando nascimentos e exportações',
        opcaoE: 'Dividindo o número de cidades pela população rural',
        respostaCorreta: 'C',
        explicacao: 'A densidade demográfica corresponde à população absoluta dividida pela área do território, geralmente expressa em habitantes por quilômetro quadrado.',
        materia: 'Demografia e Migrações',
      },
      {
        conteudo: 'Demografia e Migrações',
        pergunta: 'O que indica a taxa de natalidade?',
        opcaoA: 'O número de óbitos por mil habitantes',
        opcaoB: 'O número de nascidos vivos em relação à população em determinado período',
        opcaoC: 'A quantidade de pessoas que emigram',
        opcaoD: 'A proporção de idosos em uma cidade',
        opcaoE: 'A área ocupada por crianças',
        respostaCorreta: 'B',
        explicacao: 'A taxa bruta de natalidade relaciona o número de nascidos vivos em um ano à população total, normalmente por mil habitantes.',
        materia: 'Demografia e Migrações',
      },
      {
        conteudo: 'Demografia e Migrações',
        pergunta: 'O que é transição demográfica?',
        opcaoA: 'Mudança diária na distribuição dos bairros',
        opcaoB: 'Transferência de capitais entre países',
        opcaoC: 'Transformação de áreas rurais em desertos',
        opcaoD: 'Processo histórico de mudança dos padrões de natalidade e mortalidade',
        opcaoE: 'Substituição de fronteiras políticas',
        respostaCorreta: 'D',
        explicacao: 'A transição demográfica descreve a passagem de padrões de altas taxas de natalidade e mortalidade para taxas mais baixas, em diferentes etapas.',
        materia: 'Demografia e Migrações',
      },
      {
        conteudo: 'Demografia e Migrações',
        pergunta: 'Qual é a diferença entre imigração e emigração?',
        opcaoA: 'Imigração é entrada em um território; emigração é saída do território de origem',
        opcaoB: 'Ambas significam exclusivamente turismo',
        opcaoC: 'Imigração é deslocamento diário para o trabalho',
        opcaoD: 'Emigração ocorre apenas dentro de uma cidade',
        opcaoE: 'Não existe diferença entre os termos',
        respostaCorreta: 'A',
        explicacao: 'Imigrar significa entrar em um território para nele se estabelecer; emigrar significa sair do território de origem.',
        materia: 'Demografia e Migrações',
      },
      {
        conteudo: 'Demografia e Migrações',
        pergunta: 'O que significa envelhecimento populacional?',
        opcaoA: 'Aumento exclusivo da população infantil',
        opcaoB: 'Redução da expectativa de vida em todas as regiões',
        opcaoC: 'Aumento da taxa de natalidade',
        opcaoD: 'Desaparecimento da população adulta',
        opcaoE: 'Crescimento da participação de pessoas idosas na população',
        respostaCorreta: 'E',
        explicacao: 'O envelhecimento populacional ocorre quando aumenta a proporção de pessoas idosas, processo associado à queda da fecundidade e ao aumento da longevidade.',
        materia: 'Demografia e Migrações',
      },
    ],
  });

  // USUÁRIOS
  // As senhas são criptografadas antes de serem armazenadas no banco.
  // Altere as senhas pelas variáveis de ambiente antes de usar em produção.
  const senhaAdmin = process.env.SEED_ADMIN_PASSWORD || 'Admin@12345';
  const senhaArthur = process.env.SEED_ARTHUR_PASSWORD || 'Arthur@12345';

  await prisma.usuario.createMany({
    data: [
      {
        nome: 'Administrador',
        email: 'admin@gmail.com',
        senha: await bcrypt.hash(senhaAdmin, 10),
      },
      {
        nome: 'Arthur Morais',
        email: 'arthur.m.santos20@aluno.senai.br',
        senha: await bcrypt.hash(senhaArthur, 10),
      },
    ],
  });

  // NOTÍCIAS
  // Conteúdos resumidos para fins didáticos. Os links de referência estão no final.
  await prisma.noticia.createMany({
    data: [
      {
        titulo: 'Brasil aprova plano para combater o desmatamento até 2030',
        resumo: 'Governo federal aprovou um conjunto de medidas para interromper e reverter o desmatamento e a degradação florestal.',
        conteudo: 'Em novembro de 2026, o governo federal aprovou o Mapa do Caminho brasileiro para interromper e reverter o desmatamento e a degradação florestal até 2030. A proposta reúne ações de conservação e uso sustentável das florestas, restauração, combate ao desmatamento ilegal e prevenção de incêndios. O tema evidencia a relação entre políticas públicas, uso do território e conservação ambiental. Fonte: https://www.gov.br/mma/pt-br/noticias/governo-federal-aprova-mapa-do-caminho-brasileiro-para-interromper-e-reverter-o-desmatamento-e-a-degradacao-florestal-ate-2030/',
        url_imagem: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200',
        data_publicacao: new Date('2026-11-06T12:00:00-03:00'),
      },
      {
        titulo: 'Pesquisa aponta impactos ambientais em 74,3% dos municípios brasileiros',
        resumo: 'Levantamento do IBGE identificou ocorrências como secas, alagamentos e deslizamentos em grande parte das cidades.',
        conteudo: 'Dados divulgados pelo IBGE em novembro de 2026 indicaram que 4.140 dos 5.571 municípios brasileiros, equivalentes a 74,3%, registraram algum impacto ambiental nos dois anos anteriores à pesquisa. Entre os eventos considerados estão secas, alagamentos e deslizamentos. O levantamento reforça a importância do planejamento territorial, da prevenção de riscos e da adaptação das cidades às mudanças ambientais. Fonte: https://agenciabrasil.ebc.com.br/meio-ambiente/noticia/2026-11/tres-em-cada-quatro-municipios-sofreram-impacto-ambiental-em-dois-anos',
        url_imagem: 'https://images.unsplash.com/photo-1547683905-f686c993aae5?w=1200',
        data_publicacao: new Date('2026-11-11T10:00:00-03:00'),
      },
      {
        titulo: 'Desmatamento na Amazônia e no Cerrado registra queda em 2026',
        resumo: 'Monitoramento do INPE apontou redução nas áreas desmatadas dos dois biomas no período de agosto de 2025 a julho de 2026.',
        conteudo: 'Dados do Programa de Monitoramento dos Biomas Brasileiros, divulgados em outubro de 2026, apontaram redução de 41,8% do desmatamento na Amazônia e de 23,8% no Cerrado em comparação com o período anterior. Os números mostram a importância do monitoramento por satélite e permitem discutir políticas de conservação, fiscalização e mudanças no uso da terra. Fonte: https://www.gov.br/inpe/pt-br/assuntos/ultimas-noticias/brasil-alcanca-menores-taxas-de-desmatamento-da-serie-historica-na-amazonia-e-no-cerrado/',
        url_imagem: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=1200',
        data_publicacao: new Date('2026-10-16T15:17:00-03:00'),
      },
      {
        titulo: 'Relatório registra redução do desmatamento nos biomas brasileiros em 2025',
        resumo: 'O Relatório Anual do Desmatamento apontou queda de 20,6% na área desmatada em relação a 2024.',
        conteudo: 'O Relatório Anual do Desmatamento no Brasil, divulgado pelo MapBiomas em maio de 2026, registrou 984.794 hectares desmatados em 2025, uma redução de 20,6% em relação a 2024. Apesar da queda, o Cerrado concentrou a maior área desmatada no período. O dado permite discutir diferenças regionais, expansão agropecuária e políticas de proteção dos biomas. Fonte: https://agenciabrasil.ebc.com.br/meio-ambiente/noticia/2026-05/desmatamento-no-brasil-registra-queda-de-206-em-2025',
        url_imagem: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=1200',
        data_publicacao: new Date('2026-05-27T06:00:00-03:00'),
      },
      {
        titulo: 'Brasil apresenta dados de emprego e transformações no mercado de trabalho',
        resumo: 'PNAD Contínua divulgou indicadores de ocupação e desocupação referentes ao ano de 2025.',
        conteudo: 'Segundo divulgação do IBGE em janeiro de 2026, a taxa anual de desocupação no Brasil foi de 5,6% em 2025. O levantamento também apresentou mudanças na distribuição da ocupação entre setores econômicos, incluindo indústria, serviços e atividades agropecuárias. Os indicadores ajudam a compreender a organização econômica do território e as diferenças entre atividades urbanas e rurais. Fonte: https://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/45759-pnad-continua-em-2025-taxa-anual-de-desocupacao-foi-de-5-6-enquanto-taxa-de-subutilizacao-foi-14-5',
        url_imagem: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200',
        data_publicacao: new Date('2026-01-30T09:00:00-03:00'),
      },
      {
        titulo: 'COP30 coloca a Amazônia no centro do debate climático internacional',
        resumo: 'A conferência realizada em Belém ampliou a atenção global sobre florestas, financiamento climático e adaptação.',
        conteudo: 'A COP30, realizada em Belém, no Pará, em novembro de 2025, levou a discussão climática internacional para a Amazônia. A conferência reuniu governos, cientistas, organizações e representantes da sociedade civil para debater redução de emissões, adaptação, financiamento climático e proteção das florestas. O encontro também destacou a importância dos povos indígenas e das comunidades tradicionais na conservação dos territórios. Notícia de contexto sobre a conferência: https://unfccc.int/cop30',
        url_imagem: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1200',
        data_publicacao: new Date('2025-11-21T12:00:00-03:00'),
      },
      {
        titulo: 'Cidades brasileiras enfrentam o desafio de se adaptar a eventos extremos',
        resumo: 'Secas, ondas de calor, enchentes e deslizamentos reforçam a necessidade de planejamento urbano e prevenção.',
        conteudo: 'Eventos extremos representam desafios crescentes para cidades de diferentes regiões. A ocupação de áreas de risco, a impermeabilização do solo, a retirada de vegetação e a infraestrutura insuficiente podem ampliar os impactos de chuvas intensas e ondas de calor. Medidas como sistemas de alerta, drenagem, arborização e ordenamento territorial são importantes para reduzir vulnerabilidades. Contexto e dados municipais: https://agenciabrasil.ebc.com.br/meio-ambiente/noticia/2026-11/tres-em-cada-quatro-municipios-sofreram-impacto-ambiental-em-dois-anos',
        url_imagem: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1200',
        data_publicacao: new Date('2026-11-11T12:00:00-03:00'),
      },
      {
        titulo: 'Monitoramento por satélite fortalece a fiscalização ambiental no Brasil',
        resumo: 'Informações espaciais ajudam a identificar alterações na cobertura vegetal e orientar ações de fiscalização.',
        conteudo: 'O monitoramento por satélite é uma ferramenta importante para acompanhar mudanças na cobertura e no uso da terra. No Brasil, sistemas do INPE produzem informações que apoiam a identificação de alertas e o acompanhamento do desmatamento. Esses dados ajudam órgãos públicos, pesquisadores e a sociedade a compreender a dinâmica territorial e avaliar políticas ambientais. Referência: https://www.gov.br/inpe/pt-br/assuntos/ultimas-noticias/brasil-alcanca-menores-taxas-de-desmatamento-da-serie-historica-na-amazonia-e-no-cerrado/',
        url_imagem: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1200',
        data_publicacao: new Date('2026-10-20T12:00:00-03:00'),
      },
      {
        titulo: 'Expansão agropecuária mantém o debate sobre uso sustentável do Cerrado',
        resumo: 'O avanço de atividades produtivas na região do Matopiba evidencia a tensão entre produção, conservação e recursos hídricos.',
        conteudo: 'O Cerrado é estratégico para a biodiversidade e para a disponibilidade de água em diversas bacias hidrográficas brasileiras. A expansão agropecuária em áreas do Matopiba, região que abrange partes do Maranhão, Tocantins, Piauí e Bahia, exige atenção ao planejamento do uso da terra, à conservação da vegetação nativa e à proteção de nascentes. Dados recentes de monitoramento do desmatamento ajudam a acompanhar essas transformações. Fonte: https://www.gov.br/inpe/pt-br/assuntos/ultimas-noticias/brasil-alcanca-menores-taxas-de-desmatamento-da-serie-historica-na-amazonia-e-no-cerrado/',
        url_imagem: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200',
        data_publicacao: new Date('2026-10-22T12:00:00-03:00'),
      },
      {
        titulo: 'Envelhecimento populacional amplia desafios para as políticas públicas',
        resumo: 'Mudanças na estrutura etária exigem adaptações em saúde, previdência, mobilidade e planejamento das cidades.',
        conteudo: 'A transição demográfica altera a composição etária da população e aumenta a participação relativa de pessoas idosas em muitos países, inclusive no Brasil. Esse processo tem impactos sobre a organização dos serviços de saúde, a previdência, o mercado de trabalho, a acessibilidade e o planejamento urbano. A análise de pirâmides etárias e indicadores demográficos ajuda a compreender essas mudanças. Referência para indicadores populacionais: https://www.ibge.gov.br/estatisticas/sociais/populacao.html',
        url_imagem: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1200',
        data_publicacao: new Date('2026-09-15T12:00:00-03:00'),
      },
    ],
  });

  console.log('✅ Seed do geoGoats concluído!');
  console.log('👥 6 participantes cadastrados.');
  console.log('🎬 10 videoaulas cadastradas.');
  console.log('💡 25 dicas de Geografia cadastradas.');
  console.log('📝 25 questões cadastradas (5 por conteúdo).');
  console.log('🔐 2 usuários cadastrados.');
  console.log('📰 10 notícias cadastradas.');
}

main()
  .catch((erro) => {
    console.error('❌ Erro ao executar o seed:', erro);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌎 Iniciando seed do geoGoats...');

  // ATENÇÃO: apaga os dados existentes dessas tabelas.
  await prisma.simulado.deleteMany();
  await prisma.dicas.deleteMany();
  await prisma.videoAula.deleteMany();
  await prisma.participantes.deleteMany();

  // PARTICIPANTES
  await prisma.participantes.createMany({
    data: [
      {
        nome: 'Ana Silva',
        curso: 'Geografia',
        foto: 'https://i.pravatar.cc/300?img=47',
        idade: '17 anos',
        email: 'ana.silva@example.com',
      },
      {
        nome: 'Lucas Santos',
        curso: 'Geografia Física',
        foto: 'https://i.pravatar.cc/300?img=12',
        idade: '18 anos',
        email: 'lucas.santos@example.com',
      },
      {
        nome: 'Mariana Oliveira',
        curso: 'Geografia Humana',
        foto: 'https://i.pravatar.cc/300?img=44',
        idade: '16 anos',
        email: 'mariana.oliveira@example.com',
      },
      {
        nome: 'Pedro Costa',
        curso: 'Cartografia',
        foto: 'https://i.pravatar.cc/300?img=13',
        idade: '17 anos',
        email: 'pedro.costa@example.com',
      },
      {
        nome: 'Julia Mendes',
        curso: 'Geopolítica',
        foto: 'https://i.pravatar.cc/300?img=49',
        idade: '18 anos',
        email: 'julia.mendes@example.com',
      },
    ],
  });

  // VIDEOAULAS
  await prisma.videoAula.createMany({
    data: [
      {
        conteudo: 'Introdução à Cartografia',
        urlMidia: 'https://www.youtube.com/results?search_query=introducao+a+cartografia+geografia',
        descricao:
          'Aprenda sobre mapas, escalas cartográficas, legendas, coordenadas geográficas e orientação espacial.',
      },
      {
        conteudo: 'Climas e Massas de Ar',
        urlMidia: 'https://www.youtube.com/results?search_query=climas+do+brasil+massas+de+ar',
        descricao:
          'Entenda os elementos climáticos, os fatores do clima e a atuação das massas de ar no Brasil.',
      },
      {
        conteudo: 'Biomas Brasileiros',
        urlMidia: 'https://www.youtube.com/results?search_query=biomas+brasileiros+geografia',
        descricao:
          'Conheça Amazônia, Cerrado, Caatinga, Mata Atlântica, Pantanal e Pampa, suas características e biodiversidade.',
      },
      {
        conteudo: 'Placas Tectônicas e Relevo',
        urlMidia: 'https://www.youtube.com/results?search_query=placas+tectonicas+relevo+geografia',
        descricao:
          'Descubra como o movimento das placas tectônicas contribui para a formação de montanhas, terremotos e vulcões.',
      },
      {
        conteudo: 'Globalização e Economia Mundial',
        urlMidia: 'https://www.youtube.com/results?search_query=globalizacao+geografia+ensino+medio',
        descricao:
          'Estude os fluxos comerciais, as multinacionais, as redes de transporte e as relações econômicas entre países.',
      },
      {
        conteudo: 'Urbanização e Problemas Urbanos',
        urlMidia: 'https://www.youtube.com/results?search_query=urbanizacao+problemas+urbanos+geografia',
        descricao:
          'Compreenda o crescimento das cidades, a segregação socioespacial, a mobilidade urbana e a falta de moradia.',
      },
      {
        conteudo: 'População e Transição Demográfica',
        urlMidia: 'https://www.youtube.com/results?search_query=transicao+demografica+geografia',
        descricao:
          'Aprenda sobre natalidade, mortalidade, expectativa de vida, envelhecimento populacional e migrações.',
      },
      {
        conteudo: 'Fusos Horários e Coordenadas',
        urlMidia: 'https://www.youtube.com/results?search_query=fusos+horarios+coordenadas+geograficas',
        descricao:
          'Aprenda a interpretar latitude, longitude, paralelos, meridianos e diferenças de horário entre regiões.',
      },
      {
        conteudo: 'Geopolítica e Conflitos Mundiais',
        urlMidia: 'https://www.youtube.com/results?search_query=geopolitica+conflitos+mundiais+geografia',
        descricao:
          'Entenda as relações de poder entre países, as fronteiras, os recursos estratégicos e as organizações internacionais.',
      },
      {
        conteudo: 'Mudanças Climáticas e Sustentabilidade',
        urlMidia: 'https://www.youtube.com/results?search_query=mudancas+climaticas+sustentabilidade+geografia',
        descricao:
          'Explore as causas e consequências das mudanças climáticas e as estratégias de preservação ambiental.',
      },
    ],
  });

  // DICAS DE GEOGRAFIA
  await prisma.dicas.createMany({
    data: [
      {
        conteudo: 'Aprenda a interpretar escalas cartográficas.',
        dicas:
          'Em uma escala de 1:100.000, cada 1 cm no mapa representa 100.000 cm, ou 1 km, na realidade.',
      },
      {
        conteudo: 'Não confunda tempo atmosférico com clima.',
        dicas:
          'Tempo atmosférico descreve condições momentâneas. Clima corresponde aos padrões observados durante longos períodos.',
      },
      {
        conteudo: 'Use os pontos cardeais para se orientar.',
        dicas:
          'Os pontos cardeais são norte, sul, leste e oeste. A rosa dos ventos ajuda a identificá-los nos mapas.',
      },
      {
        conteudo: 'Associe latitude à distância do Equador.',
        dicas:
          'A latitude varia de 0° no Equador até 90° norte ou sul nos polos.',
      },
      {
        conteudo: 'Entenda a diferença entre latitude e longitude.',
        dicas:
          'A latitude é medida a partir do Equador. A longitude é medida a partir do meridiano de Greenwich.',
      },
      {
        conteudo: 'Relacione vegetação, clima e relevo.',
        dicas:
          'A vegetação de uma região está relacionada a fatores como disponibilidade de água, temperatura, solo e relevo.',
      },
      {
        conteudo: 'Observe os mapas temáticos.',
        dicas:
          'Mapas temáticos representam informações específicas, como densidade populacional, clima, vegetação ou economia.',
      },
      {
        conteudo: 'Estude os impactos da urbanização.',
        dicas:
          'Relacione o crescimento urbano a temas como saneamento, transporte, habitação, poluição e desigualdade socioespacial.',
      },
      {
        conteudo: 'Entenda os movimentos migratórios.',
        dicas:
          'Analise fatores econômicos, sociais, políticos e ambientais que influenciam os deslocamentos populacionais.',
      },
      {
        conteudo: 'Conecte globalização e desigualdade.',
        dicas:
          'Compare como os países participam do comércio mundial e como renda, tecnologia e infraestrutura se distribuem.',
      },
      {
        conteudo: 'Conheça os biomas do Brasil.',
        dicas:
          'Estude localização, clima, vegetação e biodiversidade da Amazônia, do Cerrado, da Caatinga, da Mata Atlântica, do Pantanal e do Pampa.',
      },
      {
        conteudo: 'Pratique cálculos de fusos horários.',
        dicas:
          'A cada 15° de longitude, há aproximadamente uma hora de diferença solar. Considere também os fusos oficiais e eventuais mudanças legais.',
      },
      {
        conteudo: 'Diferencie tempo e clima nas questões.',
        dicas:
          'Se a questão descreve chuva ou temperatura de hoje, trata do tempo. Se aborda padrões de décadas, trata do clima.',
      },
      {
        conteudo: 'Estude as formas de relevo.',
        dicas:
          'Revise planaltos, planícies e depressões, observando os processos de erosão e sedimentação que contribuem para sua formação.',
      },
      {
        conteudo: 'Analise as relações entre sociedade e natureza.',
        dicas:
          'Observe como atividades econômicas, ocupação do território e consumo de recursos transformam as paisagens.',
      },
    ],
  });

  // SIMULADOS DE GEOGRAFIA
  await prisma.simulado.createMany({
    data: [
      {
        pergunta: 'Qual linha imaginária divide a Terra em hemisférios Norte e Sul?',
        opcaoA: 'Trópico de Capricórnio',
        opcaoB: 'Meridiano de Greenwich',
        opcaoC: 'Linha do Equador',
        opcaoD: 'Trópico de Câncer',
        opcaoE: 'Círculo Polar Ártico',
        respostaCorreta: 'C',
        explicacao:
          'A Linha do Equador está na latitude 0° e divide o planeta nos hemisférios Norte e Sul.',
        materia: 'Cartografia',
      },
      {
        pergunta: 'Qual é o maior bioma brasileiro em extensão territorial?',
        opcaoA: 'Caatinga',
        opcaoB: 'Cerrado',
        opcaoC: 'Mata Atlântica',
        opcaoD: 'Amazônia',
        opcaoE: 'Pampa',
        respostaCorreta: 'D',
        explicacao:
          'A Amazônia é o maior bioma brasileiro e abriga enorme diversidade de espécies e ecossistemas.',
        materia: 'Biomas Brasileiros',
      },
      {
        pergunta: 'Qual é a diferença entre latitude e longitude?',
        opcaoA: 'Latitude mede altitude e longitude mede temperatura.',
        opcaoB: 'Latitude indica a posição norte-sul e longitude indica a posição leste-oeste.',
        opcaoC: 'Ambas medem somente altitude.',
        opcaoD: 'Longitude existe apenas no hemisfério Sul.',
        opcaoE: 'Latitude é usada apenas em mapas climáticos.',
        respostaCorreta: 'B',
        explicacao:
          'A latitude é medida em relação ao Equador; a longitude, em relação ao meridiano de Greenwich.',
        materia: 'Cartografia',
      },
      {
        pergunta: 'Qual processo está diretamente relacionado à formação de cadeias de montanhas?',
        opcaoA: 'Movimento e colisão de placas tectônicas',
        opcaoB: 'Evaporação dos oceanos',
        opcaoC: 'Rotação da Lua',
        opcaoD: 'Formação das marés',
        opcaoE: 'Condensação atmosférica',
        respostaCorreta: 'A',
        explicacao:
          'A convergência de placas tectônicas pode comprimir e elevar a crosta terrestre, formando cadeias montanhosas.',
        materia: 'Geomorfologia',
      },
      {
        pergunta: 'O que caracteriza o processo de urbanização?',
        opcaoA: 'Redução das áreas urbanas',
        opcaoB: 'Aumento da população rural em relação à urbana',
        opcaoC: 'Crescimento da proporção da população que vive em cidades',
        opcaoD: 'Desaparecimento das atividades industriais',
        opcaoE: 'Fim dos movimentos migratórios',
        respostaCorreta: 'C',
        explicacao:
          'A urbanização ocorre quando aumenta a proporção da população que reside em áreas urbanas.',
        materia: 'Geografia Humana',
      },
      {
        pergunta: 'Qual é a principal característica da globalização econômica?',
        opcaoA: 'Fim de todo comércio internacional',
        opcaoB: 'Isolamento econômico de todos os países',
        opcaoC: 'Desaparecimento das empresas multinacionais',
        opcaoD: 'Maior integração entre mercados e economias',
        opcaoE: 'Proibição da circulação de capitais',
        respostaCorreta: 'D',
        explicacao:
          'A globalização econômica amplia as conexões entre países por meio de comércio, investimentos, produção e fluxos financeiros.',
        materia: 'Geopolítica',
      },
      {
        pergunta: 'Qual fator influencia a distribuição dos diferentes tipos de clima na Terra?',
        opcaoA: 'Idioma predominante',
        opcaoB: 'Latitude',
        opcaoC: 'Moeda nacional',
        opcaoD: 'Sistema eleitoral',
        opcaoE: 'Alfabeto utilizado',
        respostaCorreta: 'B',
        explicacao:
          'A latitude influencia o ângulo de incidência solar e, consequentemente, a distribuição de energia e os padrões climáticos.',
        materia: 'Climatologia',
      },
      {
        pergunta: 'Qual alternativa apresenta uma fonte de energia renovável?',
        opcaoA: 'Carvão mineral',
        opcaoB: 'Petróleo',
        opcaoC: 'Gás natural',
        opcaoD: 'Energia solar',
        opcaoE: 'Diesel',
        respostaCorreta: 'D',
        explicacao:
          'A energia solar utiliza a radiação do Sol, que é continuamente disponibilizada em escala humana.',
        materia: 'Geografia Ambiental',
      },
      {
        pergunta: 'O que é densidade demográfica?',
        opcaoA: 'Número de nascimentos por ano',
        opcaoB: 'Total de cidades de um país',
        opcaoC: 'Número de habitantes por unidade de área',
        opcaoD: 'Quantidade de rios por região',
        opcaoE: 'Média anual de chuvas',
        respostaCorreta: 'C',
        explicacao:
          'A densidade demográfica é calculada dividindo a população de um território pela sua área.',
        materia: 'Demografia',
      },
      {
        pergunta: 'Qual projeção cartográfica é conhecida por preservar ângulos e formas locais, mas distorcer áreas em altas latitudes?',
        opcaoA: 'Projeção de Mercator',
        opcaoB: 'Projeção azimutal equidistante em todos os seus aspectos',
        opcaoC: 'Projeção cilíndrica equivalente',
        opcaoD: 'Projeção de Peters em todos os seus aspectos',
        opcaoE: 'Nenhuma projeção apresenta distorções',
        respostaCorreta: 'A',
        explicacao:
          'A projeção de Mercator é conforme: preserva ângulos locais, mas amplia bastante as áreas representadas próximas aos polos.',
        materia: 'Cartografia',
      },
      {
        pergunta: 'Qual bioma brasileiro é adaptado a condições de clima semiárido?',
        opcaoA: 'Amazônia',
        opcaoB: 'Caatinga',
        opcaoC: 'Mata Atlântica',
        opcaoD: 'Pampa',
        opcaoE: 'Pantanal',
        respostaCorreta: 'B',
        explicacao:
          'A Caatinga apresenta espécies adaptadas à irregularidade das chuvas e aos períodos de seca.',
        materia: 'Biomas Brasileiros',
      },
      {
        pergunta: 'O que são migrações populacionais?',
        opcaoA: 'Mudanças diárias de temperatura',
        opcaoB: 'Movimentos das placas tectônicas',
        opcaoC: 'Deslocamentos de pessoas entre lugares para residir temporária ou permanentemente',
        opcaoD: 'Variações de altitude',
        opcaoE: 'Movimentos de rotação da Terra',
        respostaCorreta: 'C',
        explicacao:
          'As migrações envolvem deslocamentos populacionais motivados por fatores econômicos, sociais, políticos, familiares ou ambientais.',
        materia: 'Demografia',
      },
      {
        pergunta: 'Qual é a função das curvas de nível em um mapa topográfico?',
        opcaoA: 'Indicar idiomas locais',
        opcaoB: 'Representar diferenças de altitude',
        opcaoC: 'Mostrar fronteiras linguísticas exclusivamente',
        opcaoD: 'Indicar fusos horários',
        opcaoE: 'Representar taxas de natalidade',
        respostaCorreta: 'B',
        explicacao:
          'Curvas de nível unem pontos de mesma altitude e ajudam a representar o relevo.',
        materia: 'Cartografia',
      },
      {
        pergunta: 'Qual fenômeno está associado ao encontro de placas tectônicas em zonas de subducção?',
        opcaoA: 'Ausência total de atividade geológica',
        opcaoB: 'Formação exclusiva de dunas',
        opcaoC: 'Desaparecimento do relevo',
        opcaoD: 'Terremotos e atividade vulcânica em muitas dessas zonas',
        opcaoE: 'Mudança imediata de todas as estações',
        respostaCorreta: 'D',
        explicacao:
          'Na subducção, uma placa mergulha sob outra, processo associado a terremotos e, em muitos contextos, ao vulcanismo.',
        materia: 'Geologia',
      },
      {
        pergunta: 'Qual é um dos principais objetivos do desenvolvimento sustentável?',
        opcaoA: 'Esgotar todos os recursos naturais',
        opcaoB: 'Impedir qualquer atividade econômica',
        opcaoC: 'Conciliar necessidades atuais, proteção ambiental e bem-estar das futuras gerações',
        opcaoD: 'Eliminar todas as cidades',
        opcaoE: 'Substituir todos os ecossistemas por áreas industriais',
        respostaCorreta: 'C',
        explicacao:
          'O desenvolvimento sustentável busca atender às necessidades presentes sem comprometer a capacidade das futuras gerações de atender às próprias necessidades.',
        materia: 'Geografia Ambiental',
      },
    ],
  });

  console.log('✅ Seed do geoGoats concluído!');
  console.log('👥 5 participantes cadastrados.');
  console.log('🎬 10 videoaulas cadastradas.');
  console.log('💡 15 dicas cadastradas.');
  console.log('📝 15 questões de Geografia cadastradas.');
}

main()
  .catch((erro) => {
    console.error('❌ Erro ao executar o seed:', erro);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

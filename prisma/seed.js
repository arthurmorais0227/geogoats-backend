
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  console.log('🌎 Iniciando seed do geoGoats...');

  // ATENÇÃO: apaga os dados existentes dessas tabelas.
  await prisma.Simulado.deleteMany();
  await prisma.Dicas.deleteMany();
  await prisma.VideoAula.deleteMany();
  await prisma.Participantes.deleteMany();

  // PARTICIPANTES
  await prisma.Participantes.createMany({
    data: [
      {
        nome: 'Ana Silva',
        curso: 'Geografia',
        curse: 'Geography',
        foto: 'https://i.pravatar.cc/300?img=47',
        idade: '17 anos',
        age: '17 years old',
        email: 'ana.silva@example.com',
      },
      {
        nome: 'Lucas Santos',
        curso: 'Geografia Física',
        curse: 'Physical Geography',
        foto: 'https://i.pravatar.cc/300?img=12',
        idade: '18 anos',
        age: '18 years old',
        email: 'lucas.santos@example.com',
      },
      {
        nome: 'Mariana Oliveira',
        curso: 'Geografia Humana',
        curse: 'Human Geography',
        foto: 'https://i.pravatar.cc/300?img=44',
        idade: '16 anos',
        age: '16 years old',
        email: 'mariana.oliveira@example.com',
      },
      {
        nome: 'Pedro Costa',
        curso: 'Cartografia',
        curse: 'Cartography',
        foto: 'https://i.pravatar.cc/300?img=13',
        idade: '17 anos',
        age: '17 years old',
        email: 'pedro.costa@example.com',
      },
      {
        nome: 'Julia Mendes',
        curso: 'Geopolítica',
        curse: 'Geopolitics',
        foto: 'https://i.pravatar.cc/300?img=49',
        idade: '18 anos',
        age: '18 years old',
        email: 'julia.mendes@example.com',
      },
    ],
  });

  // VIDEOAULAS
  await prisma.VideoAula.createMany({
    data: [
      {
        conteudo: 'Introdução à Cartografia',
        content: 'Introduction to Cartography',
        urlMidia: 'https://www.youtube.com/results?search_query=introducao+a+cartografia+geografia',
        descricao:
          'Aprenda sobre mapas, escalas cartográficas, legendas, coordenadas geográficas e orientação espacial.',
        description:
          'Learn about maps, map scales, legends, geographic coordinates, and spatial orientation.',
      },
      {
        conteudo: 'Climas e Massas de Ar',
        content: 'Climate and Air Masses',
        urlMidia: 'https://www.youtube.com/results?search_query=climas+do+brasil+massas+de+ar',
        descricao:
          'Entenda os elementos climáticos, os fatores do clima e a atuação das massas de ar no Brasil.',
        description:
          'Understand climate elements, climate factors, and how air masses influence Brazil.',
      },
      {
        conteudo: 'Biomas Brasileiros',
        content: 'Brazilian Biomes',
        urlMidia: 'https://www.youtube.com/results?search_query=biomas+brasileiros+geografia',
        descricao:
          'Conheça Amazônia, Cerrado, Caatinga, Mata Atlântica, Pantanal e Pampa, suas características e biodiversidade.',
        description:
          'Explore the Amazon, Cerrado, Caatinga, Atlantic Forest, Pantanal, and Pampa, including their characteristics and biodiversity.',
      },
      {
        conteudo: 'Placas Tectônicas e Relevo',
        content: 'Tectonic Plates and Landforms',
        urlMidia: 'https://www.youtube.com/results?search_query=placas+tectonicas+relevo+geografia',
        descricao:
          'Descubra como o movimento das placas tectônicas contribui para a formação de montanhas, terremotos e vulcões.',
        description:
          'Discover how tectonic plate movements contribute to the formation of mountains, earthquakes, and volcanoes.',
      },
      {
        conteudo: 'Globalização e Economia Mundial',
        content: 'Globalization and the World Economy',
        urlMidia: 'https://www.youtube.com/results?search_query=globalizacao+geografia+ensino+medio',
        descricao:
          'Estude os fluxos comerciais, as multinacionais, as redes de transporte e as relações econômicas entre países.',
        description:
          'Study trade flows, multinational corporations, transportation networks, and economic relations between countries.',
      },
      {
        conteudo: 'Urbanização e Problemas Urbanos',
        content: 'Urbanization and Urban Problems',
        urlMidia: 'https://www.youtube.com/results?search_query=urbanizacao+problemas+urbanos+geografia',
        descricao:
          'Compreenda o crescimento das cidades, a segregação socioespacial, a mobilidade urbana e a falta de moradia.',
        description:
          'Understand city growth, socio-spatial segregation, urban mobility, and housing shortages.',
      },
      {
        conteudo: 'População e Transição Demográfica',
        content: 'Population and Demographic Transition',
        urlMidia: 'https://www.youtube.com/results?search_query=transicao+demografica+geografia',
        descricao:
          'Aprenda sobre natalidade, mortalidade, expectativa de vida, envelhecimento populacional e migrações.',
        description:
          'Learn about birth rates, mortality, life expectancy, population aging, and migration.',
      },
      {
        conteudo: 'Fusos Horários e Coordenadas',
        content: 'Time Zones and Coordinates',
        urlMidia: 'https://www.youtube.com/results?search_query=fusos+horarios+coordenadas+geograficas',
        descricao:
          'Aprenda a interpretar latitude, longitude, paralelos, meridianos e diferenças de horário entre regiões.',
        description:
          'Learn to interpret latitude, longitude, parallels, meridians, and time differences between regions.',
      },
      {
        conteudo: 'Geopolítica e Conflitos Mundiais',
        content: 'Geopolitics and Global Conflicts',
        urlMidia: 'https://www.youtube.com/results?search_query=geopolitica+conflitos+mundiais+geografia',
        descricao:
          'Entenda as relações de poder entre países, as fronteiras, os recursos estratégicos e as organizações internacionais.',
        description:
          'Understand power relations between countries, borders, strategic resources, and international organizations.',
      },
      {
        conteudo: 'Mudanças Climáticas e Sustentabilidade',
        content: 'Climate Change and Sustainability',
        urlMidia: 'https://www.youtube.com/results?search_query=mudancas+climaticas+sustentabilidade+geografia',
        descricao:
          'Explore as causas e consequências das mudanças climáticas e as estratégias de preservação ambiental.',
        description:
          'Explore the causes and consequences of climate change and environmental conservation strategies.',
      },
    ],
  });

  // DICAS DE GEOGRAFIA
  await prisma.Dicas.createMany({
    data: [
      {
        conteudo: 'Aprenda a interpretar escalas cartográficas.',
        content: 'Learn to interpret map scales.',
        dicas:
          'Em uma escala de 1:100.000, cada 1 cm no mapa representa 100.000 cm, ou 1 km, na realidade.',
        tips:
          'On a 1:100,000 scale map, every 1 cm represents 100,000 cm, or 1 km, in reality.',
      },
      {
        conteudo: 'Não confunda tempo atmosférico com clima.',
        content: 'Do not confuse weather with climate.',
        dicas:
          'Tempo atmosférico descreve condições momentâneas. Clima corresponde aos padrões observados durante longos períodos.',
        tips:
          'Weather describes short-term atmospheric conditions. Climate refers to patterns observed over long periods.',
      },
      {
        conteudo: 'Use os pontos cardeais para se orientar.',
        content: 'Use cardinal directions for orientation.',
        dicas:
          'Os pontos cardeais são norte, sul, leste e oeste. A rosa dos ventos ajuda a identificá-los nos mapas.',
        tips:
          'The cardinal directions are north, south, east, and west. A compass rose helps identify them on maps.',
      },
      {
        conteudo: 'Associe latitude à distância do Equador.',
        content: 'Associate latitude with distance from the Equator.',
        dicas:
          'A latitude varia de 0° no Equador até 90° norte ou sul nos polos.',
        tips:
          'Latitude ranges from 0° at the Equator to 90° north or south at the poles.',
      },
      {
        conteudo: 'Entenda a diferença entre latitude e longitude.',
        content: 'Understand the difference between latitude and longitude.',
        dicas:
          'A latitude é medida a partir do Equador. A longitude é medida a partir do meridiano de Greenwich.',
        tips:
          'Latitude is measured from the Equator. Longitude is measured from the Greenwich meridian.',
      },
      {
        conteudo: 'Relacione vegetação, clima e relevo.',
        content: 'Connect vegetation, climate, and landforms.',
        dicas:
          'A vegetação de uma região está relacionada a fatores como disponibilidade de água, temperatura, solo e relevo.',
        tips:
          'A region’s vegetation is related to factors such as water availability, temperature, soil, and landforms.',
      },
      {
        conteudo: 'Observe os mapas temáticos.',
        content: 'Study thematic maps.',
        dicas:
          'Mapas temáticos representam informações específicas, como densidade populacional, clima, vegetação ou economia.',
        tips:
          'Thematic maps represent specific information, such as population density, climate, vegetation, or the economy.',
      },
      {
        conteudo: 'Estude os impactos da urbanização.',
        content: 'Study the impacts of urbanization.',
        dicas:
          'Relacione o crescimento urbano a temas como saneamento, transporte, habitação, poluição e desigualdade socioespacial.',
        tips:
          'Connect urban growth with sanitation, transportation, housing, pollution, and socio-spatial inequality.',
      },
      {
        conteudo: 'Entenda os movimentos migratórios.',
        content: 'Understand migration patterns.',
        dicas:
          'Analise fatores econômicos, sociais, políticos e ambientais que influenciam os deslocamentos populacionais.',
        tips:
          'Analyze the economic, social, political, and environmental factors that influence population movements.',
      },
      {
        conteudo: 'Conecte globalização e desigualdade.',
        content: 'Connect globalization and inequality.',
        dicas:
          'Compare como os países participam do comércio mundial e como renda, tecnologia e infraestrutura se distribuem.',
        tips:
          'Compare how countries participate in world trade and how income, technology, and infrastructure are distributed.',
      },
      {
        conteudo: 'Conheça os biomas do Brasil.',
        content: 'Learn about Brazil’s biomes.',
        dicas:
          'Estude localização, clima, vegetação e biodiversidade da Amazônia, do Cerrado, da Caatinga, da Mata Atlântica, do Pantanal e do Pampa.',
        tips:
          'Study the location, climate, vegetation, and biodiversity of the Amazon, Cerrado, Caatinga, Atlantic Forest, Pantanal, and Pampa.',
      },
      {
        conteudo: 'Pratique cálculos de fusos horários.',
        content: 'Practice time zone calculations.',
        dicas:
          'A cada 15° de longitude, há aproximadamente uma hora de diferença solar. Considere também os fusos oficiais e eventuais mudanças legais.',
        tips:
          'Every 15° of longitude corresponds to approximately one hour of solar time difference. Also consider official time zones and legal changes.',
      },
      {
        conteudo: 'Diferencie tempo e clima nas questões.',
        content: 'Distinguish weather and climate in exam questions.',
        dicas:
          'Se a questão descreve chuva ou temperatura de hoje, trata do tempo. Se aborda padrões de décadas, trata do clima.',
        tips:
          'If a question describes today’s rain or temperature, it concerns weather. If it discusses patterns over decades, it concerns climate.',
      },
      {
        conteudo: 'Estude as formas de relevo.',
        content: 'Study landforms.',
        dicas:
          'Revise planaltos, planícies e depressões, observando os processos de erosão e sedimentação que contribuem para sua formação.',
        tips:
          'Review plateaus, plains, and depressions, considering the erosion and sedimentation processes that help shape them.',
      },
      {
        conteudo: 'Analise as relações entre sociedade e natureza.',
        content: 'Analyze relationships between society and nature.',
        dicas:
          'Observe como atividades econômicas, ocupação do território e consumo de recursos transformam as paisagens.',
        tips:
          'Observe how economic activities, land occupation, and resource consumption transform landscapes.',
      },
    ],
  });

  // SIMULADOS DE GEOGRAFIA
  await prisma.Simulado.createMany({
    data: [
      {
        pergunta: 'Qual linha imaginária divide a Terra em hemisférios Norte e Sul?',
        question: 'Which imaginary line divides Earth into the Northern and Southern Hemispheres?',
        opcaoA: 'Trópico de Capricórnio',
        optionA: 'Tropic of Capricorn',
        opcaoB: 'Meridiano de Greenwich',
        optionB: 'Greenwich Meridian',
        opcaoC: 'Linha do Equador',
        optionC: 'Equator',
        opcaoD: 'Trópico de Câncer',
        optionD: 'Tropic of Cancer',
        opcaoE: 'Círculo Polar Ártico',
        optionE: 'Arctic Circle',
        respostaCorreta: 'C',
        correctAnswer: 'C',
        explicacao:
          'A Linha do Equador está na latitude 0° e divide o planeta nos hemisférios Norte e Sul.',
        explanation:
          'The Equator lies at 0° latitude and divides the planet into the Northern and Southern Hemispheres.',
        materia: 'Cartografia',
      },
      {
        pergunta: 'Qual é o maior bioma brasileiro em extensão territorial?',
        question: 'Which is the largest Brazilian biome by land area?',
        opcaoA: 'Caatinga',
        optionA: 'Caatinga',
        opcaoB: 'Cerrado',
        optionB: 'Cerrado',
        opcaoC: 'Mata Atlântica',
        optionC: 'Atlantic Forest',
        opcaoD: 'Amazônia',
        optionD: 'Amazon',
        opcaoE: 'Pampa',
        optionE: 'Pampa',
        respostaCorreta: 'D',
        correctAnswer: 'D',
        explicacao:
          'A Amazônia é o maior bioma brasileiro e abriga enorme diversidade de espécies e ecossistemas.',
        explanation:
          'The Amazon is Brazil’s largest biome and contains an enormous diversity of species and ecosystems.',
        materia: 'Biomas Brasileiros',
      },
      {
        pergunta: 'Qual é a diferença entre latitude e longitude?',
        question: 'What is the difference between latitude and longitude?',
        opcaoA: 'Latitude mede altitude e longitude mede temperatura.',
        optionA: 'Latitude measures altitude and longitude measures temperature.',
        opcaoB: 'Latitude indica a posição norte-sul e longitude indica a posição leste-oeste.',
        optionB: 'Latitude indicates north-south position and longitude indicates east-west position.',
        opcaoC: 'Ambas medem somente altitude.',
        optionC: 'Both measure altitude only.',
        opcaoD: 'Longitude existe apenas no hemisfério Sul.',
        optionD: 'Longitude exists only in the Southern Hemisphere.',
        opcaoE: 'Latitude é usada apenas em mapas climáticos.',
        optionE: 'Latitude is used only on climate maps.',
        respostaCorreta: 'B',
        correctAnswer: 'B',
        explicacao:
          'A latitude é medida em relação ao Equador; a longitude, em relação ao meridiano de Greenwich.',
        explanation:
          'Latitude is measured relative to the Equator; longitude is measured relative to the Greenwich meridian.',
        materia: 'Cartografia',
      },
      {
        pergunta: 'Qual processo está diretamente relacionado à formação de cadeias de montanhas?',
        question: 'Which process is directly related to the formation of mountain ranges?',
        opcaoA: 'Movimento e colisão de placas tectônicas',
        optionA: 'Movement and collision of tectonic plates',
        opcaoB: 'Evaporação dos oceanos',
        optionB: 'Ocean evaporation',
        opcaoC: 'Rotação da Lua',
        optionC: 'Moon rotation',
        opcaoD: 'Formação das marés',
        optionD: 'Tide formation',
        opcaoE: 'Condensação atmosférica',
        optionE: 'Atmospheric condensation',
        respostaCorreta: 'A',
        correctAnswer: 'A',
        explicacao:
          'A convergência de placas tectônicas pode comprimir e elevar a crosta terrestre, formando cadeias montanhosas.',
        explanation:
          'Converging tectonic plates can compress and uplift Earth’s crust, forming mountain ranges.',
        materia: 'Geomorfologia',
      },
      {
        pergunta: 'O que caracteriza o processo de urbanização?',
        question: 'What characterizes the process of urbanization?',
        opcaoA: 'Redução das áreas urbanas',
        optionA: 'Reduction of urban areas',
        opcaoB: 'Aumento da população rural em relação à urbana',
        optionB: 'Increase in rural population relative to urban population',
        opcaoC: 'Crescimento da proporção da população que vive em cidades',
        optionC: 'Growth in the proportion of the population living in cities',
        opcaoD: 'Desaparecimento das atividades industriais',
        optionD: 'Disappearance of industrial activities',
        opcaoE: 'Fim dos movimentos migratórios',
        optionE: 'End of migration',
        respostaCorreta: 'C',
        correctAnswer: 'C',
        explicacao:
          'A urbanização ocorre quando aumenta a proporção da população que reside em áreas urbanas.',
        explanation:
          'Urbanization occurs when the proportion of the population living in urban areas increases.',
        materia: 'Geografia Humana',
      },
      {
        pergunta: 'Qual é a principal característica da globalização econômica?',
        question: 'What is a main characteristic of economic globalization?',
        opcaoA: 'Fim de todo comércio internacional',
        optionA: 'End of all international trade',
        opcaoB: 'Isolamento econômico de todos os países',
        optionB: 'Economic isolation of all countries',
        opcaoC: 'Desaparecimento das empresas multinacionais',
        optionC: 'Disappearance of multinational companies',
        opcaoD: 'Maior integração entre mercados e economias',
        optionD: 'Greater integration between markets and economies',
        opcaoE: 'Proibição da circulação de capitais',
        optionE: 'Prohibition of capital flows',
        respostaCorreta: 'D',
        correctAnswer: 'D',
        explicacao:
          'A globalização econômica amplia as conexões entre países por meio de comércio, investimentos, produção e fluxos financeiros.',
        explanation:
          'Economic globalization strengthens connections between countries through trade, investment, production, and financial flows.',
        materia: 'Geopolítica',
      },
      {
        pergunta: 'Qual fator influencia a distribuição dos diferentes tipos de clima na Terra?',
        question: 'Which factor influences the distribution of different climate types on Earth?',
        opcaoA: 'Idioma predominante',
        optionA: 'Predominant language',
        opcaoB: 'Latitude',
        optionB: 'Latitude',
        opcaoC: 'Moeda nacional',
        optionC: 'National currency',
        opcaoD: 'Sistema eleitoral',
        optionD: 'Electoral system',
        opcaoE: 'Alfabeto utilizado',
        optionE: 'Alphabet used',
        respostaCorreta: 'B',
        correctAnswer: 'B',
        explicacao:
          'A latitude influencia o ângulo de incidência solar e, consequentemente, a distribuição de energia e os padrões climáticos.',
        explanation:
          'Latitude affects the angle of incoming sunlight and consequently influences energy distribution and climate patterns.',
        materia: 'Climatologia',
      },
      {
        pergunta: 'Qual alternativa apresenta uma fonte de energia renovável?',
        question: 'Which option represents a renewable energy source?',
        opcaoA: 'Carvão mineral',
        optionA: 'Coal',
        opcaoB: 'Petróleo',
        optionB: 'Oil',
        opcaoC: 'Gás natural',
        optionC: 'Natural gas',
        opcaoD: 'Energia solar',
        optionD: 'Solar energy',
        opcaoE: 'Diesel',
        optionE: 'Diesel',
        respostaCorreta: 'D',
        correctAnswer: 'D',
        explicacao:
          'A energia solar utiliza a radiação do Sol, que é continuamente disponibilizada em escala humana.',
        explanation:
          'Solar energy uses radiation from the Sun, which is continually available on a human timescale.',
        materia: 'Geografia Ambiental',
      },
      {
        pergunta: 'O que é densidade demográfica?',
        question: 'What is population density?',
        opcaoA: 'Número de nascimentos por ano',
        optionA: 'Number of births per year',
        opcaoB: 'Total de cidades de um país',
        optionB: 'Total number of cities in a country',
        opcaoC: 'Número de habitantes por unidade de área',
        optionC: 'Number of inhabitants per unit of area',
        opcaoD: 'Quantidade de rios por região',
        optionD: 'Number of rivers per region',
        opcaoE: 'Média anual de chuvas',
        optionE: 'Average annual rainfall',
        respostaCorreta: 'C',
        correctAnswer: 'C',
        explicacao:
          'A densidade demográfica é calculada dividindo a população de um território pela sua área.',
        explanation:
          'Population density is calculated by dividing a territory’s population by its area.',
        materia: 'Demografia',
      },
      {
        pergunta: 'Qual projeção cartográfica é conhecida por preservar ângulos e formas locais, mas distorcer áreas em altas latitudes?',
        question: 'Which map projection preserves local angles and shapes but distorts areas at high latitudes?',
        opcaoA: 'Projeção de Mercator',
        optionA: 'Mercator projection',
        opcaoB: 'Projeção azimutal equidistante em todos os seus aspectos',
        optionB: 'Azimuthal equidistant projection in every respect',
        opcaoC: 'Projeção cilíndrica equivalente',
        optionC: 'Cylindrical equal-area projection',
        opcaoD: 'Projeção de Peters em todos os seus aspectos',
        optionD: 'Peters projection in every respect',
        opcaoE: 'Nenhuma projeção apresenta distorções',
        optionE: 'No projection has distortions',
        respostaCorreta: 'A',
        correctAnswer: 'A',
        explicacao:
          'A projeção de Mercator é conforme: preserva ângulos locais, mas amplia bastante as áreas representadas próximas aos polos.',
        explanation:
          'The Mercator projection is conformal: it preserves local angles but greatly enlarges areas represented near the poles.',
        materia: 'Cartografia',
      },
      {
        pergunta: 'Qual bioma brasileiro é adaptado a condições de clima semiárido?',
        question: 'Which Brazilian biome is adapted to semi-arid climate conditions?',
        opcaoA: 'Amazônia',
        optionA: 'Amazon',
        opcaoB: 'Caatinga',
        optionB: 'Caatinga',
        opcaoC: 'Mata Atlântica',
        optionC: 'Atlantic Forest',
        opcaoD: 'Pampa',
        optionD: 'Pampa',
        opcaoE: 'Pantanal',
        optionE: 'Pantanal',
        respostaCorreta: 'B',
        correctAnswer: 'B',
        explicacao:
          'A Caatinga apresenta espécies adaptadas à irregularidade das chuvas e aos períodos de seca.',
        explanation:
          'The Caatinga has species adapted to irregular rainfall and periods of drought.',
        materia: 'Biomas Brasileiros',
      },
      {
        pergunta: 'O que são migrações populacionais?',
        question: 'What is population migration?',
        opcaoA: 'Mudanças diárias de temperatura',
        optionA: 'Daily temperature changes',
        opcaoB: 'Movimentos das placas tectônicas',
        optionB: 'Movements of tectonic plates',
        opcaoC: 'Deslocamentos de pessoas entre lugares para residir temporária ou permanentemente',
        optionC: 'Movement of people between places to live temporarily or permanently',
        opcaoD: 'Variações de altitude',
        optionD: 'Altitude variations',
        opcaoE: 'Movimentos de rotação da Terra',
        optionE: 'Earth’s rotational movements',
        respostaCorreta: 'C',
        correctAnswer: 'C',
        explicacao:
          'As migrações envolvem deslocamentos populacionais motivados por fatores econômicos, sociais, políticos, familiares ou ambientais.',
        explanation:
          'Migration involves population movements driven by economic, social, political, family, or environmental factors.',
        materia: 'Demografia',
      },
      {
        pergunta: 'Qual é a função das curvas de nível em um mapa topográfico?',
        question: 'What is the function of contour lines on a topographic map?',
        opcaoA: 'Indicar idiomas locais',
        optionA: 'Show local languages',
        opcaoB: 'Representar diferenças de altitude',
        optionB: 'Represent differences in elevation',
        opcaoC: 'Mostrar fronteiras linguísticas exclusivamente',
        optionC: 'Show only linguistic borders',
        opcaoD: 'Indicar fusos horários',
        optionD: 'Show time zones',
        opcaoE: 'Representar taxas de natalidade',
        optionE: 'Represent birth rates',
        respostaCorreta: 'B',
        correctAnswer: 'B',
        explicacao:
          'Curvas de nível unem pontos de mesma altitude e ajudam a representar o relevo.',
        explanation:
          'Contour lines connect points of equal elevation and help represent landforms.',
        materia: 'Cartografia',
      },
      {
        pergunta: 'Qual fenômeno está associado ao encontro de placas tectônicas em zonas de subducção?',
        question: 'Which phenomenon is associated with tectonic plates meeting at subduction zones?',
        opcaoA: 'Ausência total de atividade geológica',
        optionA: 'Complete absence of geological activity',
        opcaoB: 'Formação exclusiva de dunas',
        optionB: 'Formation of dunes only',
        opcaoC: 'Desaparecimento do relevo',
        optionC: 'Disappearance of landforms',
        opcaoD: 'Terremotos e atividade vulcânica em muitas dessas zonas',
        optionD: 'Earthquakes and volcanic activity in many of these zones',
        opcaoE: 'Mudança imediata de todas as estações',
        optionE: 'Immediate change of all seasons',
        respostaCorreta: 'D',
        correctAnswer: 'D',
        explicacao:
          'Na subducção, uma placa mergulha sob outra, processo associado a terremotos e, em muitos contextos, ao vulcanismo.',
        explanation:
          'During subduction, one plate sinks beneath another, a process associated with earthquakes and, in many settings, volcanism.',
        materia: 'Geologia',
      },
      {
        pergunta: 'Qual é um dos principais objetivos do desenvolvimento sustentável?',
        question: 'What is one of the main goals of sustainable development?',
        opcaoA: 'Esgotar todos os recursos naturais',
        optionA: 'Exhaust all natural resources',
        opcaoB: 'Impedir qualquer atividade econômica',
        optionB: 'Prevent all economic activity',
        opcaoC: 'Conciliar necessidades atuais, proteção ambiental e bem-estar das futuras gerações',
        optionC: 'Balance present needs, environmental protection, and future generations’ well-being',
        opcaoD: 'Eliminar todas as cidades',
        optionD: 'Eliminate all cities',
        opcaoE: 'Substituir todos os ecossistemas por áreas industriais',
        optionE: 'Replace all ecosystems with industrial areas',
        respostaCorreta: 'C',
        correctAnswer: 'C',
        explicacao:
          'O desenvolvimento sustentável busca atender às necessidades presentes sem comprometer a capacidade das futuras gerações de atender às próprias necessidades.',
        explanation:
          'Sustainable development seeks to meet present needs without compromising future generations’ ability to meet their own needs.',
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

export interface Offer {
  slug: string;
  group: string;
  title: string;
  cardTitle: string;
  eyebrow: string;
  hero: string;
  summary: string;
  problem: string[];
  audience: { title: string; text: string }[];
  steps: { title: string; text: string }[];
  included: { title: string; text: string }[];
  faqs: { question: string; answer: string }[];
}

export const offers: Offer[] = [
  {
    slug: 'odontopediatria',
    group: 'Crianças, crescimento e desenvolvimento',
    title: 'Odontopediatria para começar bem desde os primeiros dentes.',
    cardTitle: 'Odontopediatria',
    eyebrow: 'Para bebés, crianças e famílias',
    hero: 'A primeira relação com a saúde oral pode ser tranquila, próxima e adaptada à criança.',
    summary: 'Acompanhamos a saúde oral da criança com tempo para escutar, explicar e criar confiança — desde os primeiros dentes até à adolescência.',
    problem: ['Nem sempre é fácil perceber quando deve ser a primeira consulta.', 'Medos, hábitos, respiração, crescimento e dentes estão muitas vezes ligados.', 'A família precisa de orientação clara, sem culpa e sem excesso de informação.'],
    audience: [
      { title: 'Primeira visita', text: 'Para famílias que querem iniciar o acompanhamento oral com tranquilidade.' },
      { title: 'Sinais e hábitos', text: 'Quando há respiração pela boca, chupeta, bruxismo ou alterações na mordida.' },
      { title: 'Acompanhamento', text: 'Para acompanhar dentes, crescimento e desenvolvimento ao longo do tempo.' },
    ],
    steps: [
      { title: 'Escutar', text: 'Conhecemos a criança, a rotina e as dúvidas da família.' },
      { title: 'Observar', text: 'Avaliamos saúde oral, hábitos e sinais relevantes para o desenvolvimento.' },
      { title: 'Explicar', text: 'Traduzimos o que vemos em prioridades e próximos passos compreensíveis.' },
      { title: 'Acompanhar', text: 'Criamos continuidade para a família saber o que fazer a seguir.' },
    ],
    included: [
      { title: 'Consulta adaptada', text: 'Tempo e linguagem ajustados à idade e ao momento da criança.' },
      { title: 'Prevenção', text: 'Orientação prática para higiene, alimentação e hábitos.' },
      { title: 'Olhar integrado', text: 'Articulação com sono, respiração, ortodontia e outras áreas quando necessário.' },
    ],
    faqs: [
      { question: 'Quando deve ser a primeira consulta?', answer: 'A primeira visita pode acontecer cedo, idealmente ainda no primeiro ano de vida. A equipa orienta a família de acordo com a idade e a situação da criança.' },
      { question: 'E se a criança tiver medo?', answer: 'A consulta começa pela relação e pela adaptação. A criança não precisa de estar pronta para tudo no primeiro encontro.' },
    ],
  },
  {
    slug: 'medicina-dentaria-adulto',
    group: 'Dor, função e cuidado adulto',
    title: 'Medicina dentária para cuidar hoje e preservar amanhã.',
    cardTitle: 'Medicina dentária adulto',
    eyebrow: 'Para adultos e famílias',
    hero: 'Um cuidado oral claro, coordenado e pensado para a sua vida real.',
    summary: 'Da prevenção aos tratamentos necessários, organizamos cada caso com rigor clínico e uma conversa simples sobre prioridades, alternativas e manutenção.',
    problem: ['Consultas adiadas podem transformar uma questão simples numa decisão maior.', 'É difícil escolher o tratamento certo quando se recebe informação fragmentada.', 'A saúde oral precisa de continuidade, não apenas de intervenções pontuais.'],
    audience: [
      { title: 'Prevenção', text: 'Para quem quer retomar consultas e proteger a saúde oral.' },
      { title: 'Tratamento', text: 'Quando existe dor, cárie, desgaste ou uma necessidade específica.' },
      { title: 'Manutenção', text: 'Para manter resultados e acompanhar mudanças ao longo do tempo.' },
    ],
    steps: [
      { title: 'Conhecer', text: 'Reunimos história, sintomas e objetivos numa primeira conversa.' },
      { title: 'Avaliar', text: 'Observamos o que precisa de atenção e o que pode esperar.' },
      { title: 'Planear', text: 'Explicamos possibilidades e construímos um plano individual.' },
      { title: 'Cuidar', text: 'Tratamos e acompanhamos com revisão e manutenção.' },
    ],
    included: [
      { title: 'Prevenção e higiene', text: 'Orientação para reduzir risco e manter saúde oral.' },
      { title: 'Dentisteria restauradora', text: 'Tratamentos para preservar estrutura, função e conforto.' },
      { title: 'Coordenação', text: 'Encaminhamento para outras áreas quando o caso o pede.' },
    ],
    faqs: [
      { question: 'Posso marcar sem saber qual tratamento preciso?', answer: 'Sim. A primeira avaliação serve precisamente para compreender a situação e indicar o próximo passo adequado.' },
      { question: 'A clínica acompanha toda a família?', answer: 'Sim. A equipa trabalha com crianças, adultos e famílias, articulando cuidados quando existem necessidades relacionadas.' },
    ],
  },
  {
    slug: 'dtm-dor-orofacial',
    group: 'Dor, função e cuidado adulto',
    title: 'Quando a dor está na face, na mandíbula ou na articulação.',
    cardTitle: 'DTM e dor orofacial',
    eyebrow: 'Dor, função e ATM',
    hero: 'Perceber a origem do desconforto é o primeiro passo para voltar a ter clareza.',
    summary: 'Avaliamos sinais como dor na mandíbula, estalidos, tensão, bruxismo e dores na face, procurando compreender a função em vez de tratar apenas o sintoma isolado.',
    problem: ['A dor pode aparecer ao mastigar, falar, abrir a boca ou acordar.', 'Estalidos e tensão nem sempre significam o mesmo problema.', 'Uma boa avaliação ajuda a separar sinais, causas possíveis e próximos passos.'],
    audience: [
      { title: 'Dor ou tensão', text: 'Desconforto na mandíbula, face, cabeça ou pescoço.' },
      { title: 'Estalidos', text: 'Ruídos, bloqueios ou dificuldade em abrir e fechar a boca.' },
      { title: 'Bruxismo', text: 'Desgaste, apertamento ou tensão associados ao sono e ao stress.' },
    ],
    steps: [
      { title: 'Mapear', text: 'Registamos quando surge a dor e o que a agrava ou alivia.' },
      { title: 'Observar', text: 'Avaliamos movimento, mordida, musculatura e articulação.' },
      { title: 'Explicar', text: 'Partilhamos o que foi observado e as opções possíveis.' },
      { title: 'Acompanhar', text: 'Reavaliamos a resposta e ajustamos o cuidado quando necessário.' },
    ],
    included: [
      { title: 'Avaliação funcional', text: 'Uma leitura conjunta de sintomas, movimento e função.' },
      { title: 'Plano individual', text: 'O cuidado é definido de acordo com a situação e os objetivos.' },
      { title: 'Articulação', text: 'Quando necessário, coordenamos com medicina, fisioterapia ou outras áreas.' },
    ],
    faqs: [
      { question: 'Estalidos na mandíbula precisam sempre de tratamento?', answer: 'Não necessariamente. O significado depende dos sintomas, da função e da evolução. A avaliação ajuda a perceber o que merece atenção.' },
      { question: 'A dor de cabeça pode estar relacionada?', answer: 'Pode existir relação em alguns casos, mas não é possível concluir sem avaliação clínica individual.' },
    ],
  },
  {
    slug: 'ortodontia-alinhadores',
    group: 'Crianças, crescimento e desenvolvimento',
    title: 'Ortodontia para orientar o sorriso, a função e o crescimento.',
    cardTitle: 'Ortodontia e alinhadores',
    eyebrow: 'Crianças, adolescentes e adultos',
    hero: 'Alinhar dentes é uma parte do cuidado. Perceber a função e o momento certo também.',
    summary: 'Avaliamos o desenvolvimento da mordida e as opções de tratamento, desde aparelhos e ortopedia funcional até alinhadores transparentes, quando indicados.',
    problem: ['Nem todos os casos devem começar da mesma forma ou na mesma idade.', 'A estética é importante, mas a função e a estabilidade também contam.', 'A família precisa compreender duração, alternativas e responsabilidades do tratamento.'],
    audience: [
      { title: 'Crescimento', text: 'Crianças e adolescentes em fases de mudança dentária e facial.' },
      { title: 'Alinhamento', text: 'Adultos que procuram melhorar posição, função ou estética do sorriso.' },
      { title: 'Reavaliação', text: 'Quem quer perceber se chegou o momento certo para iniciar.' },
    ],
    steps: [
      { title: 'Avaliar', text: 'Observamos dentes, mordida, crescimento e contexto individual.' },
      { title: 'Comparar', text: 'Explicamos opções e o que cada uma implica no dia a dia.' },
      { title: 'Tratar', text: 'Acompanhamos o plano com consultas e ajustes necessários.' },
      { title: 'Estabilizar', text: 'Falamos de retenção e continuidade para preservar o resultado.' },
    ],
    included: [
      { title: 'Planeamento', text: 'Uma decisão sustentada por avaliação e objetivos claros.' },
      { title: 'Aparelhos e alinhadores', text: 'Opções selecionadas de acordo com indicação clínica.' },
      { title: 'Visão de desenvolvimento', text: 'Nos mais novos, o momento de crescimento também faz parte da decisão.' },
    ],
    faqs: [
      { question: 'Alinhadores transparentes são indicados para todos?', answer: 'Não. A indicação depende do caso, dos objetivos e da avaliação clínica. A consulta serve para esclarecer as opções.' },
      { question: 'Qual é a melhor idade para começar?', answer: 'Depende do desenvolvimento e do problema a acompanhar. Uma avaliação permite identificar o momento mais adequado.' },
    ],
  },
  {
    slug: 'implantologia-reabilitacao',
    group: 'Dor, função e cuidado adulto',
    title: 'Reabilitar a boca para recuperar função, conforto e confiança.',
    cardTitle: 'Implantologia e reabilitação',
    eyebrow: 'Implantes, prótese e reabilitação oral',
    hero: 'Quando falta um dente ou a função mudou, há mais do que uma solução possível.',
    summary: 'Planeamos reabilitações de forma individual, considerando saúde oral, função, estética, tempo e o que é importante para cada pessoa.',
    problem: ['A perda dentária pode alterar mastigação, fala e confiança.', 'As soluções precisam de ser explicadas com honestidade e sem pressa.', 'O tratamento não termina na colocação: manutenção e acompanhamento importam.'],
    audience: [
      { title: 'Perda dentária', text: 'Para quem perdeu um ou mais dentes e quer conhecer alternativas.' },
      { title: 'Desgaste', text: 'Quando a estrutura dentária ou a função foram comprometidas.' },
      { title: 'Reabilitação', text: 'Para planos que combinam várias etapas e áreas da clínica.' },
    ],
    steps: [
      { title: 'Compreender', text: 'Ouvimos o que mudou e o que espera recuperar.' },
      { title: 'Planear', text: 'Estudamos a situação e apresentamos alternativas possíveis.' },
      { title: 'Reabilitar', text: 'Executamos o plano por etapas, com acompanhamento.' },
      { title: 'Manter', text: 'Definimos cuidados para a durabilidade e a saúde oral.' },
    ],
    included: [
      { title: 'Implantologia', text: 'Avaliação e planeamento de implantes quando indicados.' },
      { title: 'Prótese e restauração', text: 'Soluções para devolver forma, função e harmonia.' },
      { title: 'Cirurgia oral', text: 'Coordenação das etapas cirúrgicas necessárias ao plano.' },
    ],
    faqs: [
      { question: 'Um implante é sempre a melhor solução?', answer: 'Não. A opção adequada depende da saúde oral, do osso, da função, das expectativas e de outros fatores avaliados em consulta.' },
      { question: 'Quanto tempo demora uma reabilitação?', answer: 'O tempo varia muito de acordo com o caso e as etapas necessárias. A equipa explica o percurso depois da avaliação.' },
    ],
  },
  {
    slug: 'estetica-dentaria-restauracao',
    group: 'Dor, função e cuidado adulto',
    title: 'Estética dentária com naturalidade e respeito pela função.',
    cardTitle: 'Estética e restauração',
    eyebrow: 'Restauração, facetas e sorriso',
    hero: 'O objetivo não é criar um sorriso igual ao de outra pessoa. É cuidar do seu.',
    summary: 'Conversamos sobre o que quer mudar, o que faz sentido preservar e como equilibrar estética, saúde oral e função.',
    problem: ['Pequenas alterações podem ter grande impacto na confiança.', 'Uma solução estética deve respeitar a estrutura e a função da boca.', 'É importante distinguir o que é desejado do que é clinicamente indicado.'],
    audience: [
      { title: 'Restauração', text: 'Quando dentes fraturados, desgastados ou alterados precisam de cuidado.' },
      { title: 'Harmonia', text: 'Para quem quer compreender possibilidades estéticas naturais.' },
      { title: 'Planeamento', text: 'Antes de decidir, para comparar opções e limites.' },
    ],
    steps: [
      { title: 'Conversar', text: 'Percebemos o que o incomoda e o resultado que imagina.' },
      { title: 'Avaliar', text: 'Consideramos saúde, estrutura, função e proporção.' },
      { title: 'Propor', text: 'Apresentamos opções com benefícios, limites e cuidados.' },
      { title: 'Preservar', text: 'Acompanhamos a manutenção para cuidar do resultado.' },
    ],
    included: [
      { title: 'Restauração', text: 'Cuidado de dentes comprometidos, com soluções personalizadas.' },
      { title: 'Facetas', text: 'Quando indicadas, para pequenas alterações de forma, cor ou proporção.' },
      { title: 'Visão global', text: 'A estética é avaliada em conjunto com a saúde e a função.' },
    ],
    faqs: [
      { question: 'As facetas são indicadas para qualquer pessoa?', answer: 'Não. A indicação depende da saúde oral, da estrutura dentária e do objetivo clínico. A avaliação vem antes da decisão.' },
      { question: 'O resultado fica natural?', answer: 'O objetivo do planeamento é respeitar proporção, expressão e características individuais, sem prometer um resultado universal.' },
    ],
  },
  {
    slug: 'sono-respiracao-roncopatia',
    group: 'Crianças, crescimento e desenvolvimento',
    title: 'Sono e respiração: sinais que merecem ser escutados.',
    cardTitle: 'Sono, respiração e roncopatia',
    eyebrow: 'Crianças e adultos',
    hero: 'Respirar, dormir e crescer são partes do mesmo cuidado — em muitas famílias, o primeiro sinal aparece à noite.',
    summary: 'Avaliamos ronco, respiração oral, sono inquieto e outros sinais dentro de uma leitura integrada, articulando as áreas necessárias.',
    problem: ['Ronco, boca aberta e sono inquieto podem passar despercebidos durante anos.', 'Nem sempre é evidente qual profissional deve ser procurado primeiro.', 'O cuidado precisa de juntar respiração, sono, boca, crescimento e contexto.'],
    audience: [
      { title: 'Durante o sono', text: 'Ronco, pausas percebidas, sono agitado ou respiração pela boca.' },
      { title: 'Durante o dia', text: 'Cansaço, dificuldade de concentração ou boca frequentemente aberta.' },
      { title: 'Desenvolvimento', text: 'Crianças em que sono, respiração e crescimento parecem relacionados.' },
    ],
    steps: [
      { title: 'Perguntar', text: 'Começamos pela história da família e pelos sinais observados.' },
      { title: 'Avaliar', text: 'Observamos função oral, respiração e fatores relevantes.' },
      { title: 'Coordenar', text: 'Articulamos as áreas clínicas indicadas para cada situação.' },
      { title: 'Acompanhar', text: 'Reavaliamos o caminho e a evolução ao longo do tempo.' },
    ],
    included: [
      { title: 'Consulta de sono', text: 'Uma primeira leitura para organizar sinais e dúvidas.' },
      { title: 'Respiração e função', text: 'Observação dos fatores que podem estar relacionados.' },
      { title: 'Método Respira e Cresce', text: 'Quando adequado, o método pode ser uma forma de organizar o acompanhamento infantil.' },
    ],
    faqs: [
      { question: 'Roncar é normal?', answer: 'O ronco pode ter diferentes significados. Quando é frequente ou acompanhado de outros sinais, vale a pena procurar avaliação.' },
      { question: 'É preciso marcar várias consultas?', answer: 'A equipa orienta o primeiro passo e coordena outras áreas quando existe indicação.' },
    ],
  },
];

export const getOffer = (slug: string) => offers.find((offer) => offer.slug === slug);

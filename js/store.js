/* ===== UBS Central — Data Store (localStorage) =====
   Camada única de dados usada por todas as páginas.
   Tudo é lido/escrito em localStorage sob a chave "ubs_db_v1".
*/

const DB_KEY = "ubs_db_v1";

const SPECIALTIES = ["Clínica", "Psicologia", "Nutrição", "Odontologia"];

const PROFISSIONAIS_SAUDE = [
  { nome: "Ricardo Almeida", registro: "CRM/SP 123456" },
  { nome: "Amélia Alencar", registro: "CRM/SP 234567" },
  { nome: "Fernanda Lima", registro: "CRO/SP 34521" },
  { nome: "Paulo Henrique", registro: "CRM/SP 456789" },
  { nome: "Camila Nogueira", registro: "CRN/SP 12233" },
  { nome: "Ana Paula Costa", registro: "COREN/SP 45.221" },
];

const CONDICOES_SAUDE = ["Gestante", "Puérpera", "Hipertenso", "Diabético", "Criança", "Nenhuma"];

/* ---- Mock de resultados de busca em "Pessoas" (protótipo front-only) ---- */
const MOCK_CIDADAO = {
  nome: "Maria das Graças Silva",
  mae: "Josefa Ribeiro Silva",
  dataNascimento: "12/05/1960",
  cpf: "123.456.789-00",
  cns: "987 6543 2109 0001",
  telefone: "(11) 98765-4321",
  endereco: "Rua das Flores, 123 - Centro",
  idade: 64,
  sexo: "Feminino",
  tags: [
    { label: "Retorno Pendente", cls: "badge-progress" },
    { label: "Hipertenso", cls: "badge-cronica" },
    { label: "Diabético", cls: "badge-cronica" },
  ],
  resumoAcessos: { ultimoAtendimento: "14 Out 2023", agendamentosAtivos: 2, vinculoUbs: "UBS Central" },
  microarea: { numero: "04", agente: "Roberto Gomes" },
  totalAtendimentos: 28,
  historico: [
    { data: "14/10/2023 - 09:30", especialidade: "Clínico Geral", profissional: "Dr. Paulo Amaral (CRM 9901)", status: "Concluída" },
    { data: "28/09/2023 - 14:15", especialidade: "Odontologia", profissional: "Dra. Ana Costa (CRO 4562)", status: "Concluída" },
    { data: "05/09/2023 - 10:00", especialidade: "Nutrição", profissional: "Nutr. Carla Meireles", status: "Cancelada" },
    { data: "15/11/2023 - 08:00", especialidade: "Psicologia", profissional: "Psiq. Roberto Lima", status: "Pendente" },
  ],
};

const MOCK_FUNCIONARIO = {
  nome: "Dra. Mariana Silva",
  especialidade: "Clínica Médica",
  dataNascimento: "12/05/1960",
  cpf: "123.456.789-00",
  registroProfissional: "CRM-SP 123456",
  telefone: "(11) 98765-4321",
  endereco: "Rua das Flores, 123 - Centro",
  idade: 64,
  sexo: "Feminino",
  diasAgendasAbertas: [
    { dia: "Segunda-Feira", periodos: [{ label: "Manhã", horario: "08:00 - 12:00" }, { label: "Tarde", horario: "14:30 - 17:30" }] },
    { dia: "Terça-Feira", periodos: [{ label: "Tarde", horario: "14:30 - 17:30" }] },
  ],
  totalAtendimentos: 28,
  historico: [
    { data: "14/10/2026 - 09:30", paciente: "Paulo Amaral", status: "Concluída" },
    { data: "14/10/2026 - 10:30", paciente: "Ricardo Souza", status: "Concluída" },
  ],
};

function uid(prefix) {
  return prefix + "_" + Math.random().toString(36).slice(2, 9);
}

function seedData() {
  const turnos = [
    { id: uid("t"), especialidade: "Clínica", profissional: "Dr. Ricardo Almeida", iniciais: "RA",
      dias: ["SEG", "QUA"], inicio: "08:00", fim: "12:00", recorrencia: "Semanal",
      vagas: 24, categoria: "livre", publico: "Público Geral", status: "Aberto" },
    { id: uid("t"), especialidade: "Clínica", profissional: "Dr. Amélia Alencar", iniciais: "AM",
      dias: ["TER", "QUI"], inicio: "08:00", fim: "12:00", recorrencia: "Semanal",
      vagas: 16, categoria: "especifica", publico: "Gestante/Puérpera", status: "Aberto" },
    { id: uid("t"), especialidade: "Clínica", profissional: "Dr. Ricardo Almeida", iniciais: "RA",
      dias: ["SEX"], inicio: "14:00", fim: "17:00", recorrencia: "Semanal",
      vagas: 12, categoria: "especifica", publico: "Hipertensos", status: "Aberto" },
    { id: uid("t"), especialidade: "Odontologia", profissional: "Dra. Fernanda Lima", iniciais: "FL",
      dias: ["SEG", "TER", "QUA"], inicio: "08:00", fim: "12:00", recorrencia: "Semanal",
      vagas: 18, categoria: "livre", publico: "Público Geral", status: "Aberto" },
  ];

  const solicitacoes = [
    { id: uid("s"), paciente: "Maria Oliveira Santos", categoria: "Gestante", especialidade: "Clínica Médica",
      cns: "898 0002 1122 3344", dataHora: "14 Out - 08:30", dataPedido: "10/10/2026 - 10:24",
      motivo: "Acompanhamento pré-natal de rotina, 22 semanas de gestação.", status: "pendente" },
    { id: uid("s"), paciente: "João da Silva Costa", categoria: "Doença Crônica", especialidade: "Clínica Médica",
      cns: "898 0003 5566 7788", dataHora: "14 Out - 09:15", dataPedido: "10/10/2026 - 09:15",
      motivo: "Renovação de receita para controle de hipertensão.", status: "pendente" },
    { id: uid("s"), paciente: "Francisca Gomes", categoria: "Gestante", especialidade: "Nutrição",
      cns: "898 0004 9900 1122", dataHora: "14 Out - 09:40", dataPedido: "10/10/2026 - 08:45",
      motivo: "Avaliação nutricional de rotina no pré-natal.", status: "pendente" },
    { id: uid("s"), paciente: "Ana Paula Rodrigues", categoria: "Gestante", especialidade: "Ginecologia e Obstetrícia",
      cns: "898 0001 2345 6789", dataHora: "14 Out - 08:30", dataPedido: "10/10/2026 - 14:22",
      motivo: "Acompanhamento de 28 semanas de gestação, relatando dores lombares leves e necessidade de renovação de exames de rotina.", status: "pendente" },
    { id: uid("s"), paciente: "Marcos Silva Pereira", categoria: "Crônico", especialidade: "Clínica Médica",
      cns: "898 0005 3344 5566", dataHora: "14 Out - 09:15", dataPedido: "10/10/2026 - 09:02",
      motivo: "Consulta de acompanhamento de diabetes tipo 2.", status: "pendente" },
    { id: uid("s"), paciente: "Isabelly Costa de Souza", categoria: "Público Geral", especialidade: "Odontologia",
      cns: "898 0006 7788 9900", dataHora: "14 Out - 10:00", dataPedido: "10/10/2026 - 09:50",
      motivo: "Dor de dente persistente há 3 dias.", status: "pendente" },
    { id: uid("s"), paciente: "Luiza Alves Luz", categoria: "Público Geral", especialidade: "Clínica Médica",
      cns: "898 0007 1234 5678", dataHora: "14 Out - 10:00", dataPedido: "10/10/2026 - 10:05",
      motivo: "Consulta de rotina, check-up geral.", status: "pendente" },
  ];

  const atendimentos = [
    { id: uid("a"), tipo: "ESF", paciente: "Maria Eduarda da Silva Oliveira", turno: "08:00H - 12:00H", status: "em_atendimento" },
    { id: uid("a"), tipo: "ESF", paciente: "Diana Costa", turno: "08:00H - 12:00H", status: "aguardando" },
    { id: uid("a"), tipo: "eMulti", paciente: "Ana Luz", turno: "08:00H - 12:00H", status: "aguardando" },
    { id: uid("a"), tipo: "ESF", paciente: "Beatriz Barros", turno: "08:00H - 12:00H", status: "finalizado" },
    { id: uid("a"), tipo: "eMulti", paciente: "Marcos Vinícius", turno: "13:00H - 17:00H", status: "finalizado" },
    { id: uid("a"), tipo: "ESF", paciente: "Ricardo Souza", turno: "08:00H - 12:00H", status: "aguardando" },
    { id: uid("a"), tipo: "eMulti", paciente: "Diana Costa", turno: "08:00H - 12:00H", status: "aguardando" },
  ];

  return { turnos, solicitacoes, atendimentos, pessoas: [] };
}

function loadDB() {
  const raw = localStorage.getItem(DB_KEY);
  if (!raw) {
    const seeded = seedData();
    localStorage.setItem(DB_KEY, JSON.stringify(seeded));
    return seeded;
  }
  try {
    return JSON.parse(raw);
  } catch (e) {
    const seeded = seedData();
    localStorage.setItem(DB_KEY, JSON.stringify(seeded));
    return seeded;
  }
}

function saveDB(db) {
  localStorage.setItem(DB_KEY, JSON.stringify(db));
}

const Store = {
  reset() {
    const seeded = seedData();
    saveDB(seeded);
    return seeded;
  },

  // ---- Turnos ----
  getTurnos(especialidade) {
    const db = loadDB();
    return especialidade ? db.turnos.filter(t => t.especialidade === especialidade) : db.turnos;
  },
  addTurno(turno) {
    const db = loadDB();
    turno.id = uid("t");
    turno.status = "Aberto";
    db.turnos.push(turno);
    saveDB(db);
    return turno;
  },
  cancelTurno(id) {
    const db = loadDB();
    db.turnos = db.turnos.filter(t => t.id !== id);
    saveDB(db);
  },

  // ---- Solicitações ----
  getSolicitacoes(status) {
    const db = loadDB();
    return status ? db.solicitacoes.filter(s => s.status === status) : db.solicitacoes;
  },
  getSolicitacao(id) {
    const db = loadDB();
    return db.solicitacoes.find(s => s.id === id) || null;
  },
  decidirSolicitacao(id, aprovado, justificativa) {
    const db = loadDB();
    const s = db.solicitacoes.find(x => x.id === id);
    if (!s) return;
    s.status = aprovado ? "aprovado" : "negado";
    if (justificativa) s.justificativa = justificativa;
    saveDB(db);
  },

  // ---- Atendimentos ----
  getAtendimentos() {
    const db = loadDB();
    return db.atendimentos;
  },
  advanceAtendimento(id) {
    const db = loadDB();
    const a = db.atendimentos.find(x => x.id === id);
    if (!a) return;
    if (a.status === "aguardando") a.status = "em_atendimento";
    else if (a.status === "em_atendimento") a.status = "finalizado";
    saveDB(db);
  },
  addAtendimentoEspontaneo(atendimento) {
    const db = loadDB();
    atendimento.id = uid("a");
    atendimento.status = "aguardando";
    db.atendimentos.unshift(atendimento);
    saveDB(db);
    return atendimento;
  },

  counts() {
    const db = loadDB();
    return {
      agendasAtivas: db.turnos.length,
      solicitacoesPendentes: db.solicitacoes.filter(s => s.status === "pendente").length,
      atendimentosHoje: db.atendimentos.length,
    };
  },

  // ---- Pessoas (Cidadãos / Funcionários) — busca simulada ----
  buscarPessoa(tipo, query) {
    // Protótipo front-only: qualquer busca não vazia retorna o registro de exemplo.
    if (!query || !query.trim()) return null;
    return tipo === "funcionario" ? MOCK_FUNCIONARIO : MOCK_CIDADAO;
  },

  // ---- Ficha de Atendimento ----
  getFichaBase(atendimentoId) {
    const db = loadDB();
    const a = db.atendimentos.find(x => x.id === atendimentoId);
    if (!a) return null;
    const hoje = new Date();
    return {
      paciente: a.paciente,
      condicao: "",
      data: hoje.toISOString().slice(0, 10),
      horario: (a.turno.match(/^(\d{2}:\d{2})/) || [,"08:00"])[1],
      profissionais: [PROFISSIONAIS_SAUDE[0].nome, PROFISSIONAIS_SAUDE[5].nome],
    };
  },
};
/* ===== UBS Digital (Cidadão) — store, ícones, shell e helpers ===== */
const s = d => `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
const I = {
  bell: s('<path d="M6 8a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6"/><path d="M10 20a2 2 0 0 0 4 0"/>'),
  gear: s('<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9 7 7M17 17l2.1 2.1M4.9 19.1 7 17M17 7l2.1-2.1"/>'),
  back: s('<path d="M19 12H5m6-6-6 6 6 6"/>'),
  home: s('<path d="m3 11 9-8 9 8v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>'),
  cal: s('<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>'),
  users: s('<circle cx="9" cy="8" r="3.2"/><path d="M2.5 20c0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5"/><path d="M16 4.3a3.2 3.2 0 0 1 0 6.2M21.5 20c0-2.9-1.9-5.3-4.5-6.2"/>'),
  user: s('<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"/>'),
  userplus: s('<circle cx="9" cy="8" r="4"/><path d="M2 21c0-4 3-7 7-7M19 8v6M16 11h6"/>'),
  steth: s('<path d="M6 3v6a4 4 0 0 0 8 0V3"/><path d="M10 13v2a5 5 0 0 0 10 0v-2"/><circle cx="20" cy="11" r="2"/>'),
  brain: s('<path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 6 1V4a3 3 0 0 0-3 0Z"/><path d="M15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-6 1"/>'),
  apple: s('<path d="M12 7c-2-2-7-1-7 5 0 4 3 9 5 9 1 0 1-.5 2-.5s1 .5 2 .5c2 0 5-5 5-9 0-6-5-7-7-5Z"/><path d="M12 7c0-2 1-4 3-4"/>'),
  tooth: s('<path d="M7 3c-2 0-4 2-4 5 0 4 2 5 2 9 0 2 1 4 2 4s1-4 2-4h2c1 0 1 4 2 4s2-2 2-4c0-4 2-5 2-9 0-3-2-5-4-5-2 0-2 1-3 1S9 3 7 3Z"/>'),
  clock: s('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'),
  pin: s('<path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11Z"/><circle cx="12" cy="10" r="2.5"/>'),
  info: s('<circle cx="12" cy="12" r="9"/><path d="M12 8h.01M11 12h1v4h1"/>'),
  check: s('<path d="M20 6 9 17l-5-5"/>'),
  plus: s('<path d="M12 5v14M5 12h14"/>'),
  send: s('<path d="m22 2-11 11M22 2l-7 20-4-9-9-4z"/>'),
  edit: s('<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/>'),
  id: s('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 10h4M7 14h6M16 10h1"/>'),
  prev: s('<path d="m15 18-6-6 6-6"/>'),
  next: s('<path d="m9 18 6-6-6-6"/>'),
};
const ESP = [
  { nome: "Clínica Geral", ic: "steth", cor: "" },
  { nome: "Psicológica", ic: "brain", cor: "pu" },
  { nome: "Nutricional", ic: "apple", cor: "gr" },
  { nome: "Odontológica", ic: "tooth", cor: "sk" },
];
const espIcon = e => /psic/i.test(e) ? "brain" : /nutri/i.test(e) ? "apple" : /odont/i.test(e) ? "tooth" : "steth";
const MEDICOS = {
  "Clínica Geral": { nome: "Dra. Mariana Silva", papel: "Médica de Plantão", reg: "CRM: 12345-SP" },
  "Psicológica": { nome: "Dra. Helena Duarte", papel: "Psicóloga", reg: "CRP: 06/45210" },
  "Nutricional": { nome: "Dra. Camila Nogueira", papel: "Nutricionista", reg: "CRN-3: 12233" },
  "Odontológica": { nome: "Dr. Paulo Amaral", papel: "Cirurgião-Dentista", reg: "CRO: 4562-SP" },
};

/* ---- Datas ---- */
const D = {
  mes: ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],
  dia: ["Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado"],
  parse(iso) { const [y, m, d] = iso.split("-"); return new Date(y, m - 1, d); },
  iso(dt) { return `${dt.getFullYear()}-${String(dt.getMonth() + 1).padStart(2, "0")}-${String(dt.getDate()).padStart(2, "0")}`; },
  longo(iso) { const d = this.parse(iso); return `${d.getDate()} de ${this.mes[d.getMonth()]}`; },
  curto(iso) { const d = this.parse(iso); return `${String(d.getDate()).padStart(2, "0")} ${this.mes[d.getMonth()].slice(0, 3)} ${d.getFullYear()}`; },
  segunda(dt) { const x = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate()); x.setDate(x.getDate() - ((x.getDay() + 6) % 7)); return x; },
};

/* ---- Store (localStorage, chave "ubs_cidadao_v1") ---- */
const KEY = "ubs_cidadao_v1";
const SEED = {
  user: { nome: "Ricardo Oliveira", cns: "898 0001 2345 6789", nasc: "14/05/1992", cpf: "123.***.***-00", tel: "(11) 98765-4321", email: "ricardo.oliveira@email.com" },
  dependentes: [
    { id: "d1", nome: "João Silva", parentesco: "Filho", nasc: "03/08/2015", cns: "898 0012 3456 7890" },
    { id: "d2", nome: "Ana Silva", parentesco: "Mãe", nasc: "21/11/1961", cns: "210 9987 6543 2109" },
  ],
  consultas: [
    { id: "c1", esp: "Clínica Geral", medico: "Dr. Marcos Vinícius", iso: "2026-10-22", hora: "09:30", unidade: "UBS Central", local: "Bloco B", paciente: "Ricardo Oliveira", status: "Confirmada" },
    { id: "c2", esp: "Clínica Geral", medico: "Dr. Ricardo Menezes", iso: "2026-10-24", hora: "09:30", unidade: "UBS Central", local: "Setor A - Piso 2", paciente: "Ricardo Oliveira", status: "Em Análise" },
    { id: "c3", esp: "Odontologia", medico: "Dra. Ana Luiza Costa", iso: "2026-09-12", hora: "14:15", unidade: "UBS Central", local: "Consultório 3", paciente: "Ricardo Oliveira", status: "Concluída" },
    { id: "c4", esp: "Nutricionista", medico: "—", iso: "2026-09-05", hora: "10:00", unidade: "UBS Central", local: "Sala 5", paciente: "Ricardo Oliveira", status: "Cancelada" },
  ],
  draft: null,
};
const Store = {
  get() { try { const r = localStorage.getItem(KEY); if (r) return JSON.parse(r); } catch (e) {} const d = JSON.parse(JSON.stringify(SEED)); this.set(d); return d; },
  set(d) { try { localStorage.setItem(KEY, JSON.stringify(d)); } catch (e) {} },
  update(fn) { const d = this.get(); fn(d); this.set(d); return d; },
  reset() { localStorage.removeItem(KEY); },
  proximas() { return this.get().consultas.filter(c => c.status === "Confirmada" || c.status === "Em Análise").sort((a, b) => (a.iso + a.hora).localeCompare(b.iso + b.hora)); },
  historico() { return this.get().consultas.filter(c => c.status === "Concluída" || c.status === "Cancelada").sort((a, b) => b.iso.localeCompare(a.iso)); },
};

/* ---- UI ---- */
const $ = id => document.getElementById(id);
const UI = {
  esc: t => String(t).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])),
  toast(msg) { const el = $("toast"); el.textContent = msg; el.classList.add("show"); clearTimeout(el._t); el._t = setTimeout(() => el.classList.remove("show"), 2400); },
  initials: n => n.trim().split(/\s+/).slice(0, 2).map(p => p[0]).join("").toUpperCase(),
  pill(status) { return `<span class="pill ${status === "Em Análise" ? "b" : status === "Cancelada" ? "g" : ""}">${status}</span>`; },
  sheet(html) {
    const ov = document.createElement("div");
    ov.className = "ov";
    ov.innerHTML = `<div class="sheet">${html}</div>`;
    ov.addEventListener("click", e => { if (e.target === ov) ov.remove(); });
    document.body.appendChild(ov);
    return ov;
  },
  mask(v) { const n = v.replace(/\D/g, "").slice(0, 15); return [n.slice(0, 3), n.slice(3, 7), n.slice(7, 11), n.slice(11, 15)].filter(Boolean).join(" "); },
};

/* ---- Shell: header + conteúdo + barra inferior ---- */
function mountApp({ active, title = "UBS Digital", back = null, tools = "bell", nav = true }) {
  const user = Store.get().user;
  const right = tools === "full"
    ? `<button title="Notificações" onclick="UI.toast('Nenhuma notificação nova.')">${I.bell}</button>
       <button title="Configurações" onclick="UI.toast('Configurações em construção.')">${I.gear}</button>
       <a class="av" href="perfil.html" title="Perfil">${UI.initials(user.nome)}</a>`
    : tools === "bell" ? `<button title="Notificações" onclick="UI.toast('Nenhuma notificação nova.')">${I.bell}</button>` : "";
  const items = [["home", "Home", "home.html", "home"], ["consultas", "Consultas", "consultas.html", "cal"], ["dependentes", "Dependentes", "dependentes.html", "users"], ["perfil", "Perfil", "perfil.html", "user"]];
  $("app").innerHTML = `<div class="phone">
    <header class="hd">${back ? `<button onclick="location.href='${back}'" aria-label="Voltar">${I.back}</button>` : ""}<h1>${title}</h1>${right}</header>
    <main id="c"></main>
    ${nav ? `<nav class="nav">${items.map(([k, l, h, ic]) => `<a href="${h}" class="${k === active ? "on" : ""}">${I[ic]}${l}</a>`).join("")}</nav>` : ""}
  </div><div class="toast" id="toast"></div>`;
}

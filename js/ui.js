/* ===== UBS Central — Shared UI (sidebar, topbar, toast, badges) ===== */

const ICONS = {
  dashboard: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>`,
  pessoas: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"/></svg>`,
  agendas: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/></svg>`,
  atendimentos: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M12 11v6M9 14h6M16 3v4M8 3v4"/></svg>`,
  solicitacoes: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16v16H4z"/><path d="m4 6 8 7 8-7"/></svg>`,
  ajuda: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 0 1 5 0c0 1.7-2.5 2-2.5 4"/><path d="M12 17h.01"/></svg>`,
  sair: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="M16 17l5-5-5-5M21 12H9"/></svg>`,
  bell: `<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 8a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6"/><path d="M10 20a2 2 0 0 0 4 0"/></svg>`,
  gear: `<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>`,
  plus: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg>`,
  edit: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>`,
  cancelCircle: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="m9.5 9.5 5 5m0-5-5 5"/></svg>`,
  check: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6 9 17l-5-5"/></svg>`,
  eye: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z"/><circle cx="12" cy="12" r="3"/></svg>`,
  warn: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 9v4m0 4h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/></svg>`,
  user: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"/></svg>`,
  inbox: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 4h16v16H4z"/><path d="m4 6 8 7 8-7"/></svg>`,
  chevronDown: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m6 9 6 6 6-6"/></svg>`,
  chevronLeft: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m15 18-6-6 6-6"/></svg>`,
  chevronRight: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m9 18 6-6-6-6"/></svg>`,
  search: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>`,
  filter: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 5h16M7 12h10M10 19h4"/></svg>`,
  download: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v12m0 0-4-4m4 4 4-4"/><path d="M4 19h16"/></svg>`,
  map: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Z"/><path d="M9 4v14M15 6v14"/></svg>`,
  barchart: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 20V10M12 20V4M20 20v-7"/></svg>`,
  clipboard: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1M8 11h8M8 15h5"/></svg>`,
  calendar: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/></svg>`,
  team: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="8" r="3.2"/><path d="M2.5 20c0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5"/><path d="M16 4.3a3.2 3.2 0 0 1 0 6.2M21.5 20c0-2.9-1.9-5.3-4.5-6.2"/></svg>`,
};

const NAV_ITEMS = [
  { key: "dashboard", label: "Dashboard", href: "index.html", icon: "dashboard" },
  {
    key: "pessoas", label: "Pessoas", icon: "pessoas",
    submenu: [
      { key: "cidadao", label: "Cidadãos", href: "pessoas.html?tipo=cidadao" },
      { key: "funcionario", label: "Funcionários", href: "pessoas.html?tipo=funcionario" },
    ],
  },
  { key: "agendas", label: "Agendas", href: "agendas.html", icon: "agendas" },
  { key: "atendimentos", label: "Atendimentos", href: "atendimentos.html", icon: "atendimentos" },
  { key: "solicitacoes", label: "Solicitações", href: "triagem.html", icon: "solicitacoes" },
];

function renderShell({ active, title, activeSub }) {
  const navHtml = NAV_ITEMS.map(item => {
    if (item.submenu) {
      const isOpen = item.key === active;
      const subHtml = item.submenu.map(sub => `
        <a class="nav-subitem ${sub.key === activeSub ? "active" : ""}" href="${sub.href}">${sub.label}</a>
      `).join("");
      return `
        <div class="nav-group ${isOpen ? "open" : ""}">
          <button type="button" class="nav-item nav-item-toggle ${isOpen ? "active" : ""}" onclick="toggleNavGroup(this)">
            ${ICONS[item.icon]}<span>${item.label}</span>
            <span class="nav-chevron">${ICONS.chevronDown}</span>
          </button>
          <div class="nav-submenu">${subHtml}</div>
        </div>`;
    }
    return `
      <a class="nav-item ${item.key === active ? "active" : ""}" href="${item.href}">
        ${ICONS[item.icon]}<span>${item.label}</span>
      </a>`;
  }).join("");

  return `
    <div class="app-shell">
      <aside class="sidebar">
        <div class="sidebar-brand">
          <div class="brand-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2 3 6v6c0 5 4 9 9 10 5-1 9-5 9-10V6l-9-4Z"/><path d="M12 8v6M9 11h6"/></svg></div>
          <div>
            <h1>UBS Central</h1>
            <p>Portal de Agendamento</p>
          </div>
        </div>
        <nav class="sidebar-nav">${navHtml}</nav>
        <div class="sidebar-footer">
          <a class="nav-item" href="#" onclick="alert('Central de ajuda em construção.'); return false;">${ICONS.ajuda}<span>Ajuda</span></a>
          <a class="nav-item" href="#" onclick="return confirm('Deseja sair do portal?');">${ICONS.sair}<span>Sair</span></a>
        </div>
      </aside>
      <div class="main-col">
        <header class="topbar">
          <h2>${title}</h2>
          <div class="topbar-actions">
            <button title="Notificações" onclick="UI.toast('Nenhuma notificação nova.')">${ICONS.bell}</button>
            <button title="Configurações" onclick="UI.toast('Configurações em construção.')">${ICONS.gear}</button>
            <div class="avatar">AC</div>
          </div>
        </header>
        <main class="content" id="content"></main>
      </div>
    </div>
    <div class="toast" id="toast"></div>
  `;
}

function mountShell({ active, title, activeSub }) {
  document.getElementById("app").innerHTML = renderShell({ active, title, activeSub });
}

function toggleNavGroup(btn) {
  const group = btn.closest(".nav-group");
  const wasOpen = group.classList.contains("open");
  document.querySelectorAll(".nav-group.open").forEach(g => g.classList.remove("open"));
  if (!wasOpen) group.classList.add("open");
}

const UI = {
  toast(msg) {
    const el = document.getElementById("toast");
    if (!el) return;
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(el._t);
    el._t = setTimeout(() => el.classList.remove("show"), 2400);
  },
  escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, c => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    }[c]));
  },
  categoryBadgeClass(categoria) {
    const map = {
      "Gestante": "badge-gestante",
      "Doença Crônica": "badge-cronica",
      "Crônico": "badge-cronica",
      "Criança": "badge-crianca",
      "Puérpera": "badge-puerpera",
      "Público Geral": "badge-geral",
    };
    return map[categoria] || "badge-geral";
  },
  initials(name) {
    const parts = String(name).trim().split(/\s+/);
    return ((parts[0]?.[0] || "") + (parts[1]?.[0] || "")).toUpperCase();
  },
};

// Fechar dropdowns se o utilizador clicar fora deles
window.addEventListener('click', function(event) {
  if (!event.target.matches('.btn-acoes') && !event.target.closest('.dropdown-menu')) {
      document.querySelectorAll('.dropdown-menu').forEach(menu => menu.classList.remove('show'));
  }
});
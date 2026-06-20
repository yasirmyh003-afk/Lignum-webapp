function injectSidebarPolishStyles() {
  if (document.getElementById("lignum-sidebar-polish-styles")) return;

  const style = document.createElement("style");
  style.id = "lignum-sidebar-polish-styles";
  style.textContent = `
    :root {
      --sidebar-compact-width: 82px;
      --sidebar-expanded-width: 294px;
      --sidebar-bg: #0f4a63;
      --sidebar-bg-2: #156082;
      --sidebar-accent: #156082;
      --sidebar-accent-2: #d7eef5;
      --sidebar-line: rgba(255,255,255,.12);
      --sidebar-text: #f8fafc;
      --sidebar-muted: #c7d4dc;
    }

    .app-shell {
      transition: all .25s ease;
    }

    .app-sidebar {
      width: var(--sidebar-compact-width) !important;
      min-width: var(--sidebar-compact-width) !important;
      max-width: var(--sidebar-expanded-width);
      background: linear-gradient(180deg, #156082 0%, #0f4a63 100%) !important;
      border-right: 1px solid rgba(255,255,255,.12) !important;
      color: var(--sidebar-text) !important;
      overflow-x: hidden !important;
      transition: width .24s ease, min-width .24s ease, box-shadow .24s ease !important;
      box-shadow: 10px 0 28px rgba(15,23,42,.07);
      z-index: 30;
    }

    .app-sidebar:hover,
    .app-sidebar.sidebar-pinned,
    .app-sidebar.mobile-open {
      width: var(--sidebar-expanded-width) !important;
      min-width: var(--sidebar-expanded-width) !important;
      box-shadow: 18px 0 38px rgba(15,23,42,.14);
    }

    .sidebar-logo {
      min-height: 102px;
      display: flex !important;
      align-items: center;
      gap: 12px;
      padding: 18px 16px !important;
      border-bottom: 1px solid var(--sidebar-line) !important;
      color: var(--sidebar-text) !important;
      overflow: hidden;
    }

    .sidebar-brand-icon {
      width: 46px;
      height: 46px;
      min-width: 46px;
      border-radius: 16px;
      display: grid;
      place-items: center;
      color: #fff;
      font-size: 21px;
      font-weight: 900;
      background: linear-gradient(135deg, #156082, #0f4a63);
      box-shadow: 0 12px 24px rgba(15,74,99,.22);
    }

    .sidebar-brand-text {
      opacity: 0;
      transform: translateX(-8px);
      transition: opacity .18s ease, transform .18s ease;
      white-space: nowrap;
    }

    .app-sidebar:hover .sidebar-brand-text,
    .app-sidebar.sidebar-pinned .sidebar-brand-text,
    .app-sidebar.mobile-open .sidebar-brand-text {
      opacity: 1;
      transform: translateX(0);
    }

    .sidebar-logo h1 {
      color: #ffffff !important;
      font-size: 21px !important;
      line-height: 1.1 !important;
      margin: 0 0 6px !important;
      letter-spacing: .01em !important;
      white-space: nowrap;
    }

    .sidebar-logo p {
      color: rgba(226,232,240,.75) !important;
      font-size: 11px !important;
      letter-spacing: .16em !important;
      text-transform: uppercase !important;
      margin: 0 !important;
      white-space: nowrap;
    }

    .sidebar-pin-btn {
      width: 30px;
      height: 30px;
      border: 1px solid rgba(255,255,255,.12);
      background: rgba(255,255,255,.08);
      color: #e2e8f0;
      border-radius: 999px;
      margin-left: auto;
      cursor: pointer;
      display: grid;
      place-items: center;
      opacity: 0;
      transform: translateX(8px);
      transition: .18s ease;
      flex: 0 0 30px;
    }

    .app-sidebar:hover .sidebar-pin-btn,
    .app-sidebar.sidebar-pinned .sidebar-pin-btn,
    .app-sidebar.mobile-open .sidebar-pin-btn {
      opacity: 1;
      transform: translateX(0);
    }

    .app-sidebar.sidebar-pinned .sidebar-pin-btn {
      background: #ffffff;
      color: #156082;
    }

    .sidebar-nav {
      padding: 16px 10px !important;
      gap: 6px !important;
    }

    .sidebar-link,
    .sidebar-group-button,
    .sidebar-sublink {
      min-height: 46px;
      color: var(--sidebar-muted) !important;
      border: 1px solid transparent !important;
      border-radius: 16px !important;
      background: transparent !important;
      transition: background .18s ease, color .18s ease, border .18s ease, transform .18s ease !important;
      overflow: hidden;
    }

    .sidebar-link:hover,
    .sidebar-group-button:hover,
    .sidebar-sublink:hover {
      background: rgba(255,255,255,.10) !important;
      color: #ffffff !important;
      transform: translateX(2px);
    }

    .sidebar-link.active,
    .sidebar-sublink.active {
      background: rgba(255,255,255,.14) !important;
      color: #ffffff !important;
      border-color: rgba(255,255,255,.22) !important;
      box-shadow: inset 4px 0 0 #ffffff, 0 10px 22px rgba(0,0,0,.10);
    }

    .sidebar-left {
      display: flex !important;
      align-items: center !important;
      gap: 13px !important;
      min-width: 0;
    }

    .sidebar-icon {
      width: 38px;
      height: 38px;
      min-width: 38px;
      border-radius: 14px;
      display: grid;
      place-items: center;
      font-size: 17px;
      font-weight: 900;
      background: rgba(255,255,255,.10);
      color: #edf6f9;
      border: 1px solid rgba(255,255,255,.13);
    }

    .sidebar-link.active .sidebar-icon,
    .sidebar-sublink.active .sidebar-icon {
      background: linear-gradient(135deg, #156082, #0f4a63);
      color: #fff;
      box-shadow: 0 10px 22px rgba(34,199,232,.22);
    }

    .sidebar-text,
    .sidebar-chevron {
      opacity: 0;
      transform: translateX(-8px);
      white-space: nowrap;
      transition: opacity .18s ease, transform .18s ease;
    }

    .app-sidebar:hover .sidebar-text,
    .app-sidebar:hover .sidebar-chevron,
    .app-sidebar.sidebar-pinned .sidebar-text,
    .app-sidebar.sidebar-pinned .sidebar-chevron,
    .app-sidebar.mobile-open .sidebar-text,
    .app-sidebar.mobile-open .sidebar-chevron {
      opacity: 1;
      transform: translateX(0);
    }

    .sidebar-group-button {
      width: 100%;
      display: flex !important;
      justify-content: space-between !important;
      align-items: center !important;
      padding: 4px 10px !important;
      cursor: pointer;
    }

    .sidebar-link,
    .sidebar-sublink {
      display: flex !important;
      align-items: center !important;
      padding: 4px 10px !important;
      text-decoration: none !important;
    }

    .sidebar-submenu {
      max-height: 0;
      overflow: hidden;
      transition: max-height .25s ease;
      padding-left: 0 !important;
    }

    .sidebar-submenu.open,
    .app-sidebar:hover .sidebar-submenu.open,
    .app-sidebar.sidebar-pinned .sidebar-submenu.open {
      max-height: 420px;
    }

    .sidebar-sublink {
      margin: 5px 0 5px 0 !important;
      min-height: 40px;
    }

    .sidebar-sublink .sidebar-icon {
      width: 32px;
      height: 32px;
      min-width: 32px;
      border-radius: 12px;
      font-size: 14px;
      margin-left: 3px;
    }

    .sidebar-footer {
      border-top: 1px solid var(--sidebar-line) !important;
      padding: 12px 10px 16px !important;
      overflow: hidden;
    }

    .user-card {
      background: rgba(255,255,255,.06) !important;
      border: 1px solid rgba(255,255,255,.09) !important;
      border-radius: 18px !important;
      padding: 10px !important;
      display: flex !important;
      align-items: center !important;
      gap: 12px !important;
      color: #fff;
      min-height: 58px;
    }

    .user-avatar {
      width: 40px !important;
      height: 40px !important;
      min-width: 40px !important;
      border-radius: 14px !important;
      background: linear-gradient(135deg, #156082, #22c7e8) !important;
      color: #fff !important;
      box-shadow: 0 10px 20px rgba(15,74,99,.18);
    }

    .user-card > div:last-child {
      opacity: 0;
      transform: translateX(-8px);
      transition: opacity .18s ease, transform .18s ease;
      white-space: nowrap;
    }

    .app-sidebar:hover .user-card > div:last-child,
    .app-sidebar.sidebar-pinned .user-card > div:last-child,
    .app-sidebar.mobile-open .user-card > div:last-child {
      opacity: 1;
      transform: translateX(0);
    }

    .user-name { color: #fff !important; }
    .user-role { color: rgba(226,232,240,.72) !important; }

    @media(max-width: 900px) {
      .app-sidebar {
        width: var(--sidebar-expanded-width) !important;
        min-width: var(--sidebar-expanded-width) !important;
      }
      .sidebar-brand-text,
      .sidebar-text,
      .sidebar-chevron,
      .user-card > div:last-child,
      .sidebar-pin-btn {
        opacity: 1 !important;
        transform: none !important;
      }
      .sidebar-pin-btn { display: none !important; }
    }
  `;
  document.head.appendChild(style);
}

function sidebarLink({ href, key, activeKey, icon, label }) {
  return `
    <a href="${href}" class="sidebar-link ${activeKey === key ? "active" : ""}" title="${label}">
      <span class="sidebar-left">
        <span class="sidebar-icon">${icon}</span>
        <span class="sidebar-text">${label}</span>
      </span>
    </a>
  `;
}

function sidebarSubLink({ href, key, activeKey, icon, label }) {
  return `
    <a href="${href}" class="sidebar-sublink ${activeKey === key ? "active" : ""}" title="${label}">
      <span class="sidebar-left">
        <span class="sidebar-icon">${icon}</span>
        <span class="sidebar-text">${label}</span>
      </span>
    </a>
  `;
}

function getSidebar(activeKey = "") {
  return `
    <aside class="app-sidebar" id="app-sidebar">
      <div class="sidebar-logo">
        <div class="sidebar-brand-icon">L</div>
        <div class="sidebar-brand-text">
          <h1>Lignum Operations</h1>
          <p>Inventory & Release System</p>
        </div>
        <button class="sidebar-pin-btn" type="button" onclick="toggleSidebarPin()" title="Pin sidebar">›</button>
      </div>

      <div class="sidebar-nav">
        ${sidebarLink({ href: "dashboard.html", key: "dashboard", activeKey, icon: "⌂", label: "Dashboard" })}
        ${sidebarLink({ href: "inventory.html", key: "inventory", activeKey, icon: "▦", label: "Inventory" })}
        ${sidebarLink({ href: "new-po.html", key: "new-po", activeKey, icon: "+", label: "New Purchase Order" })}
        ${sidebarLink({ href: "reload.html", key: "reload", activeKey, icon: "⟳", label: "Reload" })}
        ${sidebarLink({ href: "truck-release.html", key: "truck-release", activeKey, icon: "🚚", label: "Truck Release" })}
        ${sidebarLink({ href: "matts.html", key: "matts", activeKey, icon: "M", label: "Matt’s Inventory" })}
        ${sidebarLink({ href: "quality.html", key: "quality", activeKey, icon: "Q", label: "Quality Inventory" })}
        ${sidebarLink({ href: "quotation.html", key: "quotation", activeKey, icon: "⌑", label: "Quotation" })}
        ${sidebarLink({ href: "active-orders.html", key: "active-orders", activeKey, icon: "✓", label: "Active Orders" })}

        <button class="sidebar-group-button" onclick="toggleSidebarGroup('logs-submenu')" type="button" title="Logs">
          <span class="sidebar-left">
            <span class="sidebar-icon">▤</span>
            <span class="sidebar-text">Logs</span>
          </span>
          <span class="sidebar-chevron">▾</span>
        </button>
        <div class="sidebar-submenu" id="logs-submenu">
          ${sidebarSubLink({ href: "truck-release-logs.html", key: "truck-release-logs", activeKey, icon: "🚚", label: "Truck Release Logs" })}
          ${sidebarSubLink({ href: "inv-logs.html", key: "inv-logs", activeKey, icon: "▦", label: "INV Logs" })}
          ${sidebarSubLink({ href: "new-purchases-logs.html", key: "new-purchases-logs", activeKey, icon: "+", label: "New Purchases Logs" })}
          ${sidebarSubLink({ href: "quotation-logs.html", key: "quotation-logs", activeKey, icon: "⌑", label: "Quotation Logs" })}
          ${sidebarSubLink({ href: "reload-logs.html", key: "reload-logs", activeKey, icon: "⟳", label: "Reload Logs" })}
        </div>

        <button class="sidebar-group-button" onclick="toggleSidebarGroup('config-submenu')" type="button" title="Configuration">
          <span class="sidebar-left">
            <span class="sidebar-icon">⚙</span>
            <span class="sidebar-text">Configuration</span>
          </span>
          <span class="sidebar-chevron">▾</span>
        </button>
        <div class="sidebar-submenu" id="config-submenu">
          ${sidebarSubLink({ href: "dropdown-config.html", key: "dropdown-config", activeKey, icon: "⌄", label: "Dropdown Master" })}
          ${sidebarSubLink({ href: "carrier.html", key: "carrier", activeKey, icon: "C", label: "Carriers" })}
          ${sidebarSubLink({ href: "origin.html", key: "origin", activeKey, icon: "⌖", label: "Origin" })}
          ${sidebarSubLink({ href: "customer.html", key: "customer", activeKey, icon: "👥", label: "Customers" })}
        </div>

        ${sidebarLink({ href: "users.html", key: "users", activeKey, icon: "👤", label: "Users" })}
      </div>

      <div class="sidebar-footer">
        <div class="user-card">
          <div class="user-avatar" id="sidebar-user-avatar">U</div>
          <div>
            <div class="user-name" id="sidebar-user-name">Loading...</div>
            <div class="user-role" id="sidebar-user-role">User</div>
          </div>
        </div>

        <a href="#" onclick="logoutUser()" class="sidebar-link" title="Logout">
          <span class="sidebar-left">
            <span class="sidebar-icon">↪</span>
            <span class="sidebar-text">Logout</span>
          </span>
        </a>
      </div>
    </aside>
  `;
}

function loadSidebar(activeKey) {
  injectSidebarPolishStyles();
  const mount = document.getElementById("sidebar-mount");
  if (!mount) {
    console.error("sidebar-mount not found");
    return;
  }

  mount.innerHTML = getSidebar(activeKey);

  const sidebar = document.getElementById("app-sidebar");
  if (sidebar && localStorage.getItem("lignum_sidebar_pinned") === "1") {
    sidebar.classList.add("sidebar-pinned");
  }

  loadSidebarUser();

  if (["new-purchases-logs", "quotation-logs", "truck-release-logs", "reload-logs", "inv-logs"].includes(activeKey)) {
    const logs = document.getElementById("logs-submenu");
    if (logs) logs.classList.add("open");
  }

  if (["dropdown-config", "carrier", "origin", "customer"].includes(activeKey)) {
    const config = document.getElementById("config-submenu");
    if (config) config.classList.add("open");
  }
}

function toggleSidebarPin() {
  const sidebar = document.getElementById("app-sidebar") || document.querySelector(".app-sidebar");
  if (!sidebar) return;

  sidebar.classList.toggle("sidebar-pinned");
  localStorage.setItem("lignum_sidebar_pinned", sidebar.classList.contains("sidebar-pinned") ? "1" : "0");
}

function toggleSidebarGroup(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.toggle("open");
}

function openDrawer(drawerId, overlayId) {
  const drawer = document.getElementById(drawerId);
  const overlay = document.getElementById(overlayId);
  if (drawer) drawer.classList.add("open");
  if (overlay) overlay.classList.add("open");
}

function closeDrawer(drawerId, overlayId) {
  const drawer = document.getElementById(drawerId);
  const overlay = document.getElementById(overlayId);
  if (drawer) drawer.classList.remove("open");
  if (overlay) overlay.classList.remove("open");
}

function showAppModal({ type = "success", title = "Done", message = "" }) {
  const existing = document.getElementById("app-modal-overlay");
  if (existing) existing.remove();

  const overlay = document.createElement("div");
  overlay.id = "app-modal-overlay";
  overlay.className = "app-modal-overlay open";

  const icon = type === "error" ? "✕" : "✓";
  const iconClass = type === "error" ? "error" : "success";

  overlay.innerHTML = `
    <div class="app-modal">
      <div class="app-modal-header">
        <div class="app-modal-icon ${iconClass}">${icon}</div>
        <div class="app-modal-title">${title}</div>
      </div>
      <div class="app-modal-body">
        ${message}
      </div>
      <div class="app-modal-footer">
        <button class="btn btn-primary" onclick="closeAppModal()">OK</button>
      </div>
    </div>
  `;

  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) closeAppModal();
  });

  document.body.appendChild(overlay);
}

function closeAppModal() {
  const overlay = document.getElementById("app-modal-overlay");
  if (overlay) overlay.remove();
}

async function requireLogin() {
  const { data } = await supabaseClient.auth.getSession();

  if (!data.session || !data.session.user) {
    window.location.href = "login.html";
    return null;
  }

  const email = data.session.user.email;

  const { data: appUser, error } = await supabaseClient
    .from("app_users")
    .select("*")
    .eq("email", email)
    .eq("status", "Active")
    .single();

  if (error || !appUser) {
    await supabaseClient.auth.signOut();
    localStorage.clear();
    window.location.href = "login.html";
    return null;
  }

  window.currentAppUser = appUser;
  return data.session.user;
}

async function logoutUser() {
  await supabaseClient.auth.signOut();

  localStorage.removeItem("lignum_access_token");
  localStorage.removeItem("lignum_refresh_token");
  localStorage.removeItem("lignum_user");

  window.location.href = "login.html";
}

async function getCurrentAppUser() {
  if (window.currentAppUser) return window.currentAppUser;

  const { data } = await supabaseClient.auth.getSession();
  const email = data?.session?.user?.email;

  if (!email) return null;

  const { data: appUser } = await supabaseClient
    .from("app_users")
    .select("*")
    .eq("email", email)
    .single();

  window.currentAppUser = appUser;
  return appUser;
}

async function loadSidebarUser() {
  const appUser = await getCurrentAppUser();

  if (!appUser) return;

  const nameEl = document.getElementById("sidebar-user-name");
  const roleEl = document.getElementById("sidebar-user-role");
  const avatarEl = document.getElementById("sidebar-user-avatar");

  if (nameEl) nameEl.textContent = appUser.full_name || appUser.email || "User";
  if (roleEl) roleEl.textContent = appUser.role || "User";

  if (avatarEl) {
    const name = appUser.full_name || appUser.email || "User";
    avatarEl.textContent = name
      .split(" ")
      .map(x => x[0])
      .join("")
      .substring(0, 2)
      .toUpperCase();
  }
}

async function getAuditUser() {
  const appUser = await getCurrentAppUser();

  return {
    name: appUser?.full_name || appUser?.email || "Unknown User",
    email: appUser?.email || ""
  };
}

function setupMobileMenu() {
  if (document.getElementById("mobile-menu-btn")) return;

  const button = document.createElement("button");
  button.id = "mobile-menu-btn";
  button.className = "mobile-menu-btn";
  button.innerHTML = "☰";
  button.type = "button";
  button.setAttribute("aria-label", "Open menu");

  const topBar = document.createElement("div");
  topBar.id = "mobile-top-bar";
  topBar.className = "mobile-top-bar";

  const overlay = document.createElement("div");
  overlay.id = "mobile-sidebar-overlay";
  overlay.className = "mobile-sidebar-overlay";

  document.body.appendChild(topBar);
  document.body.appendChild(button);
  document.body.appendChild(overlay);

  function updateMobileMenuOnScroll() {
    if (window.scrollY > 10) {
      button.classList.add("scrolled");
      topBar.classList.add("scrolled");
    } else {
      button.classList.remove("scrolled");
      topBar.classList.remove("scrolled");
    }
  }

  function openMenu() {
    document.querySelector(".app-sidebar")?.classList.add("mobile-open");
    overlay.classList.add("open");
    button.classList.add("menu-open");
    button.innerHTML = "×";
    button.setAttribute("aria-label", "Close menu");
  }

  function closeMenu() {
    document.querySelector(".app-sidebar")?.classList.remove("mobile-open");
    overlay.classList.remove("open");
    button.classList.remove("menu-open");
    button.innerHTML = "☰";
    button.setAttribute("aria-label", "Open menu");
  }

  button.addEventListener("click", function () {
    const sidebar = document.querySelector(".app-sidebar");
    if (!sidebar) return;

    if (sidebar.classList.contains("mobile-open")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  overlay.addEventListener("click", closeMenu);

  document.addEventListener("click", function (event) {
    if (event.target.closest(".sidebar-link") || event.target.closest(".sidebar-sublink")) {
      closeMenu();
    }
  });

  updateMobileMenuOnScroll();
  window.addEventListener("scroll", updateMobileMenuOnScroll);
}

document.addEventListener("DOMContentLoaded", setupMobileMenu);

function updateMobileMenuButtonOnScroll() {
  const button = document.getElementById("mobile-menu-btn");
  if (!button) return;

  if (window.scrollY > 10) {
    button.classList.add("scrolled");
  } else {
    button.classList.remove("scrolled");
  }
}

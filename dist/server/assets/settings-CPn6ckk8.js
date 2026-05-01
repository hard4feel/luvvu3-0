import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-B6D-WDms.js";
import { c as createLucideIcon, u as useTheme, a as useAuth, b as useNavigate, L as LogOut } from "./router-D3cv9bKD.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$4 = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
const Check = createLucideIcon("check", __iconNode$4);
const __iconNode$3 = [
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
  ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }]
];
const Monitor = createLucideIcon("monitor", __iconNode$3);
const __iconNode$2 = [
  [
    "path",
    {
      d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
      key: "kfwtm"
    }
  ]
];
const Moon = createLucideIcon("moon", __iconNode$2);
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
];
const Sun = createLucideIcon("sun", __iconNode$1);
const __iconNode = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
];
const Trash2 = createLucideIcon("trash-2", __iconNode);
function SettingsPage() {
  const {
    theme,
    setTheme
  } = useTheme();
  const {
    logout
  } = useAuth();
  const navigate = useNavigate();
  const [cleared, setCleared] = reactExports.useState(false);
  const themes = [{
    value: "light",
    label: "Светлая",
    icon: Sun
  }, {
    value: "dark",
    label: "Тёмная",
    icon: Moon
  }, {
    value: "system",
    label: "Системная",
    icon: Monitor
  }];
  const clearCache = () => {
    const keep = localStorage.getItem("luvvu-user");
    const themeKeep = localStorage.getItem("luvvu-theme");
    localStorage.clear();
    if (keep) localStorage.setItem("luvvu-user", keep);
    if (themeKeep) localStorage.setItem("luvvu-theme", themeKeep);
    sessionStorage.clear();
    setCleared(true);
    setTimeout(() => setCleared(false), 2e3);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full overflow-y-auto scrollbar-thin", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl px-4 py-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl font-semibold tracking-tight", children: "Настройки" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Управляйте темой, кэшем и аккаунтом" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Тема оформления", desc: "Выберите внешний вид интерфейса", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2", children: themes.map((t) => {
      const active = theme === t.value;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setTheme(t.value), className: `flex flex-col items-center gap-2 rounded-xl border px-4 py-4 text-sm transition-all ${active ? "border-ember bg-ember/5 text-foreground" : "border-border bg-card text-muted-foreground hover:text-foreground"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(t.icon, { className: `h-5 w-5 ${active ? "text-ember" : ""}` }),
        t.label,
        active && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3.5 w-3.5 text-ember" })
      ] }, t.value);
    }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Данные", desc: "Очистить локальные данные приложения (история, черновики)", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: clearCache, className: "inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm transition-colors hover:bg-accent", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" }),
      cleared ? "Кэш очищен" : "Очистить кэш"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { title: "Уведомления", desc: "Получать уведомления о новых функциях", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleRow, { label: "Email-рассылка", defaultOn: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleRow, { label: "Push-уведомления" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Аккаунт", desc: "Выйти из текущей сессии", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
      logout();
      navigate({
        to: "/"
      });
    }, className: "inline-flex items-center gap-2 rounded-lg bg-destructive px-4 py-2.5 text-sm font-medium text-destructive-foreground transition-opacity hover:opacity-90", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-4 w-4" }),
      "Выйти из аккаунта"
    ] }) })
  ] }) });
}
function Section({
  title,
  desc,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-8 rounded-2xl border border-border bg-card p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-lg font-semibold", children: title }),
    desc && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: desc }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 space-y-2", children })
  ] });
}
function ToggleRow({
  label,
  defaultOn = false
}) {
  const [on, setOn] = reactExports.useState(defaultOn);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between rounded-lg px-1 py-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setOn(!on), className: `relative h-6 w-11 rounded-full transition-colors ${on ? "bg-ember" : "bg-muted"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `absolute top-0.5 h-5 w-5 rounded-full bg-background shadow transition-transform ${on ? "translate-x-[22px]" : "translate-x-0.5"}` }) })
  ] });
}
export {
  SettingsPage as component
};

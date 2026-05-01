import { T as jsxRuntimeExports } from "./worker-entry-B6D-WDms.js";
import { S as Sparkles, d as Link, A as ArrowLeft, B as Briefcase } from "./router-D3cv9bKD.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function BusinessPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ComingSoon, { icon: Briefcase, title: "Luvvu Business", subtitle: "Тёплая забота для команд и сообществ" });
}
function ComingSoon({
  icon: Icon,
  title,
  subtitle
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex h-full items-center justify-center overflow-hidden px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ember/15 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-md text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-ember ember-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-8 w-8 text-ember-foreground" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 inline-flex items-center gap-1.5 rounded-full border border-ember/30 bg-ember/10 px-3 py-1 text-xs font-medium text-ember", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3 w-3" }),
        "В разработке"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl font-semibold tracking-tight", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: subtitle }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-sm text-foreground/70", children: "Эта функция всё ещё придумывается. Мы работаем над тем, чтобы она была идеальной." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/chat", className: "mt-8 inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm transition-colors hover:bg-accent", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
        "Вернуться к чату"
      ] })
    ] })
  ] });
}
export {
  ComingSoon,
  BusinessPage as component
};

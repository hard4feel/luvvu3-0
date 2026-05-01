import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-B6D-WDms.js";
import { a as useAuth, b as useNavigate, h as heartLogo } from "./router-D3cv9bKD.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function LoginPage() {
  const {
    login
  } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    login(email.trim());
    navigate({
      to: "/chat"
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -top-40 left-1/3 h-[520px] w-[520px] rounded-full bg-ember/15 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-ember/10 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full max-w-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10 flex flex-col items-center text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heartLogo, alt: "Luvvu", className: "mb-3 h-20 w-20" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl font-semibold tracking-tight", children: "С возвращением" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Тёплое место, где тебя слышат" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-medium text-muted-foreground", children: "Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", required: true, value: email, onChange: (e) => setEmail(e.target.value), placeholder: "ты@luvvu.ai", className: "h-12 w-full rounded-xl border border-input bg-card px-4 text-sm outline-none transition-all focus:border-ember focus:ring-4 focus:ring-ember/15" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-medium text-muted-foreground", children: "Пароль" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "password", required: true, value: password, onChange: (e) => setPassword(e.target.value), placeholder: "••••••••", className: "h-12 w-full rounded-xl border border-input bg-card px-4 text-sm outline-none transition-all focus:border-ember focus:ring-4 focus:ring-ember/15" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "h-12 w-full rounded-xl bg-ember text-sm font-semibold text-ember-foreground shadow-lg shadow-ember/20 transition-transform hover:scale-[1.01] active:scale-[0.99]", children: "Войти" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-center text-xs text-muted-foreground", children: "Здесь не нужно быть идеальным. Просто будь собой." })
    ] })
  ] });
}
export {
  LoginPage as component
};

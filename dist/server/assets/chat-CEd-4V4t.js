import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-B6D-WDms.js";
import { c as createLucideIcon, h as heartLogo } from "./router-D3cv9bKD.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
];
const ArrowUp = createLucideIcon("arrow-up", __iconNode);
function ChatPage() {
  const [messages, setMessages] = reactExports.useState([]);
  const [input, setInput] = reactExports.useState("");
  const scrollRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth"
    });
  }, [messages]);
  const send = (e) => {
    e.preventDefault();
    const t = input.trim();
    if (!t) return;
    setMessages((m) => [...m, {
      role: "user",
      text: t
    }, {
      role: "assistant",
      text: "Я рядом 💛 Это пока тёплая заглушка — настоящие ответы появятся, когда подключим AI."
    }]);
    setInput("");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: scrollRef, className: "flex-1 overflow-y-auto scrollbar-thin", children: messages.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { onPick: (p) => setInput(p) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-3xl space-y-6 px-4 py-8", children: messages.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Bubble, { msg: m }, i)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border bg-background/80 backdrop-blur", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("form", { onSubmit: send, className: "mx-auto flex max-w-3xl items-end gap-2 px-4 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 items-end rounded-2xl border border-input bg-card px-4 py-3 transition-colors focus-within:border-ember focus-within:ring-4 focus-within:ring-ember/10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 1, value: input, onChange: (e) => setInput(e.target.value), onKeyDown: (e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            send(e);
          }
        }, placeholder: "Расскажи, что у тебя на душе…", className: "max-h-40 flex-1 resize-none bg-transparent text-sm outline-none placeholder:text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: !input.trim(), className: "ml-2 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-ember text-ember-foreground transition-opacity disabled:opacity-30", "aria-label": "Отправить", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUp, { className: "h-4 w-4" }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "pb-3 text-center text-[11px] text-muted-foreground", children: "Luvvu — поддержка, а не замена специалиста. В кризисе обратись к врачу." })
    ] })
  ] });
}
function Bubble({
  msg
}) {
  const isUser = msg.role === "user";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex gap-3 ${isUser ? "justify-end" : "justify-start"}`, children: [
    !isUser && /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heartLogo, alt: "", className: "h-8 w-8 shrink-0" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${isUser ? "rounded-br-md bg-ember text-ember-foreground" : "rounded-bl-md bg-muted text-foreground"}`, children: msg.text })
  ] });
}
function EmptyState({
  onPick
}) {
  const prompts = ["Мне сегодня тревожно, помоги выдохнуть", "Я чувствую себя одиноко", "Хочу найти своих людей — с чего начать?", "Помоги разложить мысли по полочкам"];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex h-full max-w-2xl flex-col items-center justify-center px-4 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heartLogo, alt: "Luvvu", className: "mb-4 h-20 w-20" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl font-semibold tracking-tight md:text-4xl", children: "Привет. Я здесь, чтобы выслушать." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground md:text-base", children: "Расскажи, как ты, или начни с одной из мыслей ниже" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid w-full grid-cols-1 gap-2 sm:grid-cols-2", children: prompts.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => onPick(p), className: "rounded-2xl border border-border bg-card px-4 py-3.5 text-left text-sm text-foreground/80 transition-all hover:-translate-y-0.5 hover:border-ember/40 hover:text-foreground", children: p }, p)) })
  ] });
}
export {
  ChatPage as component
};

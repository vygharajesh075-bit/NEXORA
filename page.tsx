
"use client";

import { useState } from "react";
import {
  BrainCircuit,
  Send,
  Sparkles,
  Bot,
  User,
  Trash2,
  Loader2,
  Zap,
} from "lucide-react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const suggestions = [
  "How can NEXORA improve campus energy efficiency?",
  "Create a smart campus development strategy.",
  "Explain how AI can predict equipment failures.",
  "Generate a campus sustainability improvement plan.",
  "Design an intelligent campus security system.",
  "What features should a next-generation smart campus have?",
];

export default function NEXORAAI() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendMessage(text?: string) {
    const prompt = (text ?? question).trim();

    if (!prompt || loading) return;

    setQuestion("");

    const updatedMessages: Message[] = [
      ...messages,
      { role: "user", content: prompt },
    ];

    setMessages(updatedMessages);
    setLoading(true);

    try {
      const response = await fetch("/api/ai/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: prompt,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "AI request failed");
      }

      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          content: result.answer,
        },
      ]);
    } catch (error) {
      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          content:
            error instanceof Error
              ? `Error: ${error.message}`
              : "Unable to connect to NEXORA AI.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#080d18] text-white">

      <div className="max-w-6xl mx-auto p-5 md:p-8">

        {/* HEADER */}

        <header className="flex flex-wrap items-center justify-between gap-4 mb-10">

          <div className="flex items-center gap-4">

            <div className="p-4 rounded-2xl bg-violet-500/15 border border-violet-500/30">
              <BrainCircuit
                size={32}
                className="text-violet-400"
              />
            </div>

            <div>
              <p className="text-xs tracking-[.3em] text-violet-400">
                NEXORA / INTELLIGENCE
              </p>

              <h1 className="text-3xl font-bold mt-1">
                AI Copilot
              </h1>

              <p className="text-sm text-slate-400">
                Your intelligent campus assistant
              </p>
            </div>

          </div>

          <div className="flex gap-2 items-center">

            <span className="flex gap-2 items-center px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 text-xs border border-emerald-500/20">
              <span className="w-2 h-2 bg-emerald-400 rounded-full"/>
              AI READY
            </span>

            <button
              onClick={() => setMessages([])}
              title="Clear conversation"
              className="p-3 rounded-xl border border-slate-700 hover:bg-slate-800"
            >
              <Trash2 size={18}/>
            </button>

          </div>

        </header>

        {/* AI INTRODUCTION */}

        {messages.length === 0 && (

          <section className="mb-10">

            <div className="rounded-3xl border border-violet-500/20 bg-gradient-to-br from-violet-950/50 via-[#111a2b] to-[#080d18] p-8 md:p-12">

              <div className="flex items-center gap-2 text-violet-300 mb-5">
                <Sparkles size={20}/>
                INTELLIGENT CAMPUS SYSTEM
              </div>

              <h2 className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl">
                Welcome to the future of
                <span className="text-violet-400"> campus intelligence.</span>
              </h2>

              <p className="text-slate-400 mt-5 max-w-2xl leading-7">
                Ask questions, explore intelligent campus
                strategies, analyze operational challenges
                and discover smarter ways to manage your
                university infrastructure.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-9">

                {[
                  ["AI ANALYSIS", "Brain intelligence"],
                  ["PREDICTION", "Future insights"],
                  ["OPTIMIZATION", "Smart decisions"],
                  ["REPORTS", "Intelligent reporting"],
                ].map(([title, description]) => (

                  <div
                    key={title}
                    className="bg-white/5 border border-white/10 rounded-xl p-4"
                  >
                    <p className="text-xs text-violet-300">
                      {title}
                    </p>
                    <p className="text-xs text-slate-400 mt-2">
                      {description}
                    </p>
                  </div>

                ))}

              </div>

            </div>

            {/* SUGGESTIONS */}

            <h3 className="font-semibold mt-10 mb-4">
              Explore NEXORA AI
            </h3>

            <div className="grid md:grid-cols-2 gap-3">

              {suggestions.map((item) => (

                <button
                  key={item}
                  onClick={() => sendMessage(item)}
                  disabled={loading}
                  className="text-left p-5 rounded-xl bg-[#111a2b] border border-slate-800 hover:border-violet-500 transition"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm text-slate-300">
                      {item}
                    </span>
                    <Sparkles
                      size={17}
                      className="text-violet-400 shrink-0"
                    />
                  </div>
                </button>

              ))}

            </div>

          </section>

        )}

        {/* CONVERSATION */}

        {messages.length > 0 && (

          <section className="space-y-6 mb-8 min-h-[400px]">

            {messages.map((message, index) => (

              <div
                key={index}
                className={`flex gap-3 ${
                  message.role === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >

                {message.role === "assistant" && (

                  <div className="w-10 h-10 shrink-0 rounded-xl bg-violet-500/20 flex items-center justify-center">
                    <Bot className="text-violet-400"/>
                  </div>

                )}

                <div
                  className={`max-w-[85%] rounded-2xl p-5 ${
                    message.role === "user"
                      ? "bg-violet-600"
                      : "bg-[#111a2b] border border-slate-800"
                  }`}
                >

                  <p className="text-xs opacity-60 mb-3">
                    {message.role === "user"
                      ? "YOU"
                      : "NEXORA AI"}
                  </p>

                  <p className="text-sm leading-7 whitespace-pre-wrap">
                    {message.content}
                  </p>

                </div>

                {message.role === "user" && (

                  <div className="w-10 h-10 shrink-0 rounded-xl bg-slate-700 flex items-center justify-center">
                    <User size={20}/>
                  </div>

                )}

              </div>

            ))}

            {loading && (

              <div className="flex items-center gap-3 text-violet-300 p-4">
                <Loader2 className="animate-spin"/>
                NEXORA AI is thinking...
              </div>

            )}

          </section>

        )}

        {/* MESSAGE INPUT */}

        <section className="sticky bottom-3 bg-[#111a2b] border border-slate-700 rounded-2xl p-3 shadow-2xl">

          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage();
            }}
            className="flex items-end gap-3"
          >

            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyDown={(e) => {
                if (
                  e.key === "Enter" &&
                  !e.shiftKey &&
                  !e.nativeEvent.isComposing
                ) {
                  e.preventDefault();
                  sendMessage();
                }
              }}
              placeholder="Ask NEXORA anything..."
              rows={2}
              className="flex-1 bg-transparent resize-none outline-none text-white placeholder:text-slate-500 p-3"
            />

            <button
              type="submit"
              disabled={loading || !question.trim()}
              className="p-4 rounded-xl bg-violet-600 hover:bg-violet-500 disabled:opacity-40 transition"
            >
              <Send size={20}/>
            </button>

          </form>

          <div className="flex justify-between px-3 pb-1 text-xs text-slate-500">
            <span className="flex items-center gap-2">
              <Zap size={13}/>
              Powered by OpenAI
            </span>
            <span>Enter to send · Shift + Enter for newline</span>
          </div>

        </section>

        <p className="text-center text-xs text-slate-600 mt-5">
          NEXORA AI can make mistakes. Verify important operational decisions.
        </p>

      </div>

    </main>
  );
}

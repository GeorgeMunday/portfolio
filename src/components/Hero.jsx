export default function Hero({ go }) {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-8 pt-20 pb-16 max-w-5xl mx-auto">
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: none; }
        }
      `}</style>

      <div style={{ animation: "fadeUp 0.6s ease both" }}>
        <h1
          className="text-white font-bold leading-none tracking-tight mb-2"
          style={{ fontSize: "clamp(40px, 7vw, 88px)", letterSpacing: "-2px" }}
        >
          George Munday
        </h1>
        <h2
          className="text-zinc-500 font-bold leading-none tracking-tight mb-6"
          style={{ fontSize: "clamp(40px, 7vw, 88px)", letterSpacing: "-2px" }}
        >
          Full-Stack Developer
        </h2>

        <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-lg mb-6">
          T Level Computing student. Building full-stack apps with TypeScript,
          React, and C#. Experience at Dedalus healthcare software.
        </p>

        {/* CTA buttons — stack on very small screens */}
        <div className="flex flex-wrap items-center gap-3 mb-7">
          <button
            onClick={() => go("projects")}
            className="px-5 py-2.5 rounded-lg bg-white text-zinc-900 text-sm font-semibold cursor-pointer border-none transition-all hover:bg-zinc-100"
          >
            View Projects
          </button>
          <button
            onClick={() => go("contact")}
            className="px-5 py-2.5 rounded-lg bg-white/[0.06] text-zinc-300 text-sm font-medium cursor-pointer border border-white/[0.1] transition-all hover:bg-white/10 hover:text-white"
          >
            Contact Me
          </button>
        </div>

        {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.1] text-xs text-zinc-400">
          <span
            className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"
            style={{ boxShadow: "0 0 6px rgba(52,211,153,0.6)" }}
          />
          Open to opportunities
        </div> */}
      </div>
    </section>
  );
}

import Rev from "./Rev";
import SectionHeading from "./SectionHeading";
import { PROJECTS } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <Rev>
          <SectionHeading label="03 — Projects" title="Things I've built" />
        </Rev>

        {/* Single col on mobile, 2 col on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PROJECTS.map((p, i) => (
            <Rev key={p.title} delay={i * 70}>
              <div
                onClick={() => window.open(p.url, "_blank")}
                className="group rounded-xl bg-white/[0.03] border border-white/[0.07] p-5 md:p-6 cursor-pointer hover:bg-white/[0.06] hover:border-white/[0.14] transition-all duration-200 flex flex-col h-full"
              >
                {/* Top row */}
                <div className="flex items-start justify-between mb-4">
                  <span className="text-zinc-600 text-xs font-mono">{p.num}</span>
                  <span className="text-zinc-600 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 text-base">
                    ↗
                  </span>
                </div>

                <h3 className="text-white font-semibold text-base mb-2">{p.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-5 flex-1">{p.desc}</p>

                {/* Stack chips */}
                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2 py-0.5 rounded bg-white/[0.06] text-zinc-400 font-mono"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Rev>
          ))}
        </div>
      </div>
    </section>
  );
}

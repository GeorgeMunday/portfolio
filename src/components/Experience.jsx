import Rev from "./Rev";
import SectionHeading from "./SectionHeading";
import { EXPERIENCE } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <Rev>
          <SectionHeading label="02 — Experience" title="Where I've worked" />
        </Rev>

        <div className="flex flex-col gap-4">
          {EXPERIENCE.map((e, i) => (
            <Rev key={e.company} delay={i * 80}>
              <div className="rounded-xl bg-white/[0.03] border border-white/[0.07] p-5 md:p-6 hover:bg-white/[0.05] transition-colors">
                {/* Header */}
                <div className="mb-3">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-white font-semibold text-sm md:text-base">
                      {e.role}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-white/[0.08] text-zinc-400 font-medium">
                      {e.badge}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    {e.companyUrl ? (
                      <a
                        href={e.companyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-zinc-400 text-sm font-medium hover:text-white transition-colors no-underline"
                      >
                        {e.company}
                      </a>
                    ) : (
                      <span className="text-zinc-400 text-sm font-medium">
                        {e.company}
                      </span>
                    )}
                    <span className="text-zinc-700">·</span>
                    <span className="text-zinc-500 text-sm">{e.period}</span>
                  </div>
                </div>

                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  {e.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {e.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-md bg-white/[0.06] text-zinc-400 border border-white/[0.08]"
                    >
                      {t}
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

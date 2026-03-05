import Rev from "./Rev";
import SectionHeading from "./SectionHeading";
import { SKILLS } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <Rev>
          <SectionHeading label="04 — Skills" title="Technologies I use" />
        </Rev>

        {/* Single col on mobile, 3 col on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.entries(SKILLS).map(([group, items], i) => (
            <Rev key={group} delay={i * 80}>
              <div className="rounded-xl bg-white/[0.03] border border-white/[0.07] p-5 md:p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-4">
                  {group}
                </p>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-white/[0.07] text-zinc-300 text-sm font-medium border border-white/[0.08] hover:bg-white/[0.12] hover:text-white transition-colors cursor-default"
                    >
                      {skill}
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

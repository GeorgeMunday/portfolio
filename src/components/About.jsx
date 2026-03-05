import Rev from "./Rev";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <Rev>
          <SectionHeading label="01 — About" title="Who I am" />
        </Rev>

        {/* Single col on mobile, 5-col grid on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-start">
          <Rev delay={80} className="md:col-span-3">
            <p className="text-zinc-400 leading-relaxed text-sm mb-4">
              I'm{" "}
              <span className="text-white font-semibold">George Munday</span>, a
              software developer passionate about full-stack development and
              data science. I love building scalable web applications with
              modern technologies like Python, React, and TypeScript.
            </p>
            <p className="text-zinc-400 leading-relaxed text-sm mb-4">
              Currently completing a{" "}
              <span className="text-white font-semibold">
                T Level in Computing and the Digital Environment
              </span>
              . I've gained real-world experience through a software development
              internship at{" "}
              <span className="text-white font-semibold">Dedalus</span>, one of
              Europe's leading healthcare software companies.
            </p>
            <p className="text-zinc-400 leading-relaxed text-sm">
              Outside of code I enjoy the gym and spending time with friends.
            </p>
          </Rev>

          <Rev delay={160} className="md:col-span-2">
            <div className="rounded-xl bg-white/[0.04] border border-white/[0.07] overflow-hidden">
              {[
                ["Role", "Full-Stack Developer"],
                ["Education", "T Level Computing"],
                ["Location", "UK, North Yorkshire"],
                ["Pronouns", "He / Him"],
                [
                  "GitHub",
                  <a
                    key="gh"
                    href="https://github.com/GeorgeMunday"
                    target="_blank"
                    rel="noreferrer"
                    className="text-zinc-300 hover:text-white no-underline transition-colors"
                  >
                    @GeorgeMunday
                  </a>,
                ],
              ].map(([k, v], i, arr) => (
                <div
                  key={k}
                  className={`flex justify-between items-center px-5 py-3 text-sm ${
                    i < arr.length - 1 ? "border-b border-white/[0.06]" : ""
                  }`}
                >
                  <span className="text-zinc-500 shrink-0">{k}</span>
                  <span className="text-zinc-300 text-right">{v}</span>
                </div>
              ))}
            </div>
          </Rev>
        </div>
      </div>
    </section>
  );
}

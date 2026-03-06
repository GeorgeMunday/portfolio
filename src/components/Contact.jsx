import Rev from "./Rev";
import SectionHeading from "./SectionHeading";

const GitHubIcon = () => (
  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 md:py-24 border-t border-white/[0.06]"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <Rev>
          <SectionHeading label="05 — Contact" title="Get in touch" />
        </Rev>

        {/* Single col onen, 2 col on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          <Rev delay={80}>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              Open to internships, placements, freelance work, and
              collaborations. Send me a message directly through GitHub
            </p>
            <a
              href="https://github.com/GeorgeMunday"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/[0.04] border border-white/[0.07] text-zinc-400 text-sm no-underline hover:bg-white/[0.08] hover:text-white transition-all"
            >
              <GitHubIcon />
              <span className="truncate">github.com/GeorgeMunday</span>
              <span className="ml-auto text-zinc-600 text-xs shrink-0">↗</span>
            </a>
          </Rev>
        </div>
      </div>
    </section>
  );
}

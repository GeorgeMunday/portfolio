export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-6 max-w-5xl mx-auto px-6 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
      <span className="text-zinc-600 text-xs">© 2026 George Munday</span>
      <a
        href="https://github.com/GeorgeMunday"
        target="_blank"
        rel="noreferrer"
        className="text-zinc-600 text-xs hover:text-zinc-400 transition-colors no-underline"
      >
        github.com/GeorgeMunday
      </a>
    </footer>
  );
}

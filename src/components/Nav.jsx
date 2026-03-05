import { useState } from "react";

const LINKS = ["about", "experience", "projects", "skills", "contact"];

export default function Nav({ active, go }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (l) => {
    go(l);
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-white/[0.06]">
      <div className="flex items-center justify-between px-6 h-14">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-white font-semibold text-sm tracking-tight bg-transparent border-none cursor-pointer p-0"
        >
          George Munday
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {LINKS.map((l) => (
            <button
              key={l}
              onClick={() => handleNav(l)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium capitalize transition-all duration-150 border-none cursor-pointer
                ${active === l
                  ? "bg-white/10 text-white"
                  : "text-zinc-400 hover:text-white hover:bg-white/5 bg-transparent"
                }`}
            >
              {l}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="md:hidden flex flex-col gap-1.5 p-2 bg-transparent border-none cursor-pointer"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-zinc-400 transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-zinc-400 transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-zinc-400 transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/[0.06] bg-zinc-950/95 px-6 py-4 flex flex-col gap-1">
          {LINKS.map((l) => (
            <button
              key={l}
              onClick={() => handleNav(l)}
              className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium capitalize transition-all duration-150 border-none cursor-pointer
                ${active === l
                  ? "bg-white/10 text-white"
                  : "text-zinc-400 hover:text-white hover:bg-white/5 bg-transparent"
                }`}
            >
              {l}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

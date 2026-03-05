import { useRef } from "react";

export default function Spotlight({ children }) {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top + window.scrollY}px`);
  };

  return (
    <>
      <style>{`
        .spotlight {
          --mx: 50%;
          --my: 50%;
        }
        .spotlight::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(
            700px circle at var(--mx) var(--my),
            rgba(255, 255, 255, 0.032) 0%,
            transparent 65%
          );
          pointer-events: none;
          z-index: 0;
        }
      `}</style>

      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        className="spotlight relative bg-zinc-950 min-h-screen text-white"
      >
        <div className="relative z-10">{children}</div>
      </div>
    </>
  );
}

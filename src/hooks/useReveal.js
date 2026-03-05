import { useRef, useEffect } from "react";

export function useReveal(delay = 0) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "none";
          }, delay);
          io.unobserve(el);
        }
      },
      { threshold: 0.07 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return ref;
}

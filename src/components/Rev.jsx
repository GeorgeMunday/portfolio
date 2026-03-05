import { useReveal } from "../hooks/useReveal";

export default function Rev({ children, delay = 0, className = "" }) {
  const ref = useReveal(delay);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: "translateY(18px)",
        transition: "opacity 0.55s ease, transform 0.55s ease",
      }}
    >
      {children}
    </div>
  );
}

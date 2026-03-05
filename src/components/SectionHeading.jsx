export default function SectionHeading({ label, title }) {
  return (
    <div className="mb-10">
      <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-2">
        {label}
      </p>
      <h2
        className="text-white font-bold tracking-tight"
        style={{ fontSize: "clamp(22px,3vw,32px)", letterSpacing: "-0.6px" }}
      >
        {title}
      </h2>
    </div>
  );
}

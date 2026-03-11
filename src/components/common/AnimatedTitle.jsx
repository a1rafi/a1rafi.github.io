export default function AnimatedTitle() {
  const words = ["Engineering", "Intelligence", "for", "the", "Web."];
  return (
    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white leading-[1.1] flex flex-wrap gap-x-[0.25em]">
      {words.map((word, i) => (
        <span key={word} className="inline-block overflow-hidden pb-1">
          <span
            className={`hero-title-word inline-block ${
              i > 1 ? "hero-title-accent text-transparent bg-clip-text" : ""
            }`}
            style={{
              animation: `hero-word-in 1200ms cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.2}s forwards${
                i > 1
                  ? ", hero-gradient-shift 4s ease-in-out 1.5s infinite alternate, hero-glow-pulse 3.2s ease-in-out 1.5s infinite"
                  : ""
              }`,
              willChange: "transform, opacity",
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </h1>
  );
}

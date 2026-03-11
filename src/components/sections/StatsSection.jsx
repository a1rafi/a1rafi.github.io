export default function StatsSection({ stats }) {
  return (
    <section className="bg-emerald-50/30 dark:bg-emerald-900/10 border-y border-emerald-100 dark:border-emerald-900/30 py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center md:items-start">
            <span className="text-2xl md:text-3xl font-black text-emerald-600 mb-1">{stat.value}</span>
            <span className="text-[10px] md:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

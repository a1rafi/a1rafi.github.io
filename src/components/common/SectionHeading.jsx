export default function SectionHeading({ children, icon }) {
  const Icon = icon;
  return (
    <div className="flex items-center gap-3 mb-8">
      <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
        <Icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
      </div>
      <h2 className="text-3xl font-bold text-slate-800 dark:text-white">{children}</h2>
    </div>
  );
}

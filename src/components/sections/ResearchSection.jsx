import { BookOpen, Leaf } from "lucide-react";

export default function ResearchSection() {
  return (
    <section id="research" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-emerald-600" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-[100px]" />
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-sm">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-black text-white uppercase tracking-tight">Active Research</h2>
        </div>
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-6">
            <h3 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Encrypting{" "}
              <span className="text-emerald-200 underline decoration-4 underline-offset-8">Sentiments</span>
            </h3>
            <p className="text-emerald-50 text-xl leading-relaxed opacity-90">
              Exploring the balance between data security and machine learning utility through
              privacy-preserving NLP research.
            </p>
          </div>
          <div className="md:col-span-5 hidden md:block text-center">
            <div className="p-8 bg-emerald-700/50 border-2 border-white/10 rounded-[3rem] backdrop-blur-xl rotate-3">
              <Leaf className="w-20 h-20 text-emerald-300 mx-auto opacity-50 mb-6" />
              <div className="space-y-4 text-emerald-100 font-mono text-sm italic">
                {"Quantifying data loss while maintaining model robustness in encrypted environments..."}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

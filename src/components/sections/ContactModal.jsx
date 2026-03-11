import { X } from "lucide-react";

export default function ContactModal({
  isOpen,
  contactType,
  contactForm,
  submitMessage,
  isSubmitting,
  onClose,
  onSubmit,
  onChange,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm p-4 flex items-center justify-center">
      <div className="w-full max-w-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-3xl p-6 md:p-8 shadow-2xl">
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white">
              {contactType === "cv" ? "Request CV" : "Let's Talk"}
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              {contactType === "cv"
                ? "Submit your details to get my latest CV."
                : "Share your details and project context below."}
            </p>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:text-emerald-600 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>
        <form onSubmit={onSubmit} className="space-y-4">
          <input
            className="w-full p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none focus:ring-2 focus:ring-emerald-500"
            placeholder="Your name"
            value={contactForm.name}
            onChange={(event) => onChange({ ...contactForm, name: event.target.value })}
          />
          <input
            className="w-full p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none focus:ring-2 focus:ring-emerald-500"
            type="email"
            placeholder="Your email"
            value={contactForm.email}
            onChange={(event) => onChange({ ...contactForm, email: event.target.value })}
          />
          <textarea
            className="w-full p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none focus:ring-2 focus:ring-emerald-500 h-32"
            placeholder="Message"
            value={contactForm.message}
            onChange={(event) => onChange({ ...contactForm, message: event.target.value })}
          />
          {submitMessage && <p className="text-sm text-emerald-600 font-bold">{submitMessage}</p>}
          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 py-3 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 disabled:opacity-50 transition-all"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-xl font-bold"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

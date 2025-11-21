export default function Hero() {
  return (
    <section className="min-h-[70vh] flex items-center">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-4">
          Hi — I’m <span className="text-indigo-500">Shivkant</span>.<br />
          I build web apps & learn cloud infra.
        </h1>
        <p className="text-lg text-slate-400 mb-8">Portfolio focused on internships & placements — Next.js, JS, Tailwind.</p>
        <div className="flex gap-3">
          <a className="px-5 py-3 bg-indigo-600 text-white rounded-md" href="#projects">View Projects</a>
          <a className="px-5 py-3 border border-slate-700 rounded-md" href="#contact">Contact</a>
        </div>
      </div>
    </section>
  );
}

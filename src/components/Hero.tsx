import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const heroImage =
  'https://images.pexels.com/photos/8015461/pexels-photo-8015461.jpeg?auto=compress&cs=tinysrgb&w=1600';

export function Hero() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-32 md:pt-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        {/* Eyebrow */}
        <div
          className="font-mono text-xs uppercase tracking-widest2 text-ink-faint dark:text-ink-faint-dark"
          style={{
            animation: 'fadeInUp 450ms cubic-bezier(0.22,1,0.36,1) forwards',
            opacity: 0,
          }}
        >
          Creative production studio
        </div>

        {/* Headline */}
        <h1
          className="mt-6 max-w-5xl font-display text-[clamp(2.75rem,8vw,7.5rem)] font-extrabold leading-[1] tracking-tightest text-balance"
          style={{
            animation: 'fadeInUp 500ms cubic-bezier(0.22,1,0.36,1) 80ms forwards',
            opacity: 0,
          }}
        >
          Production-studio quality, delivered faster than a shoot.
        </h1>

        {/* Subhead */}
        <p
          className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft dark:text-ink-soft-dark"
          style={{
            animation: 'fadeInUp 500ms cubic-bezier(0.22,1,0.36,1) 160ms forwards',
            opacity: 0,
          }}
        >
          One asset in, a full batch of ready-to-use creative out. AI visuals,
          3D, commercial and product shoots for brands and agencies.
        </p>

        {/* Email capture */}
        <div
          className="mt-10"
          style={{
            animation: 'fadeInUp 500ms cubic-bezier(0.22,1,0.36,1) 240ms forwards',
            opacity: 0,
          }}
        >
          {submitted ? (
            <p className="font-mono text-sm uppercase tracking-widest2 text-accent dark:text-accent-dark">
              Thanks — we'll be in touch within 24 hours.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@studio.com"
                className="w-full max-w-md rounded-full border border-hairline bg-surface px-6 py-3.5 text-base text-ink outline-none transition-all duration-150 placeholder:text-ink-faint focus:border-ink dark:border-hairline-dark dark:bg-surface-dark dark:text-ink-dark dark:placeholder:text-ink-faint-dark dark:focus:border-ink-dark"
              />
              <button
                type="submit"
                className="group flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-base font-medium text-paper transition-transform duration-150 hover:scale-[0.97] dark:bg-ink-dark dark:text-paper-dark"
              >
                Start a project
                <ArrowRight
                  size={18}
                  className="transition-transform duration-150 group-hover:translate-x-1"
                />
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Hero visual — eager loaded */}
      <div
        className="absolute -right-20 top-1/2 hidden h-[80vh] w-[45vw] -translate-y-1/2 overflow-hidden rounded-[2rem] lg:block"
        style={{
          animation: 'fadeInUp 700ms cubic-bezier(0.22,1,0.36,1) 300ms forwards',
          opacity: 0,
        }}
      >
        <img
          src={heroImage}
          alt="Minimalist product photography"
          className="h-full w-full object-cover"
          decoding="async"
        />
      </div>

      {/* Bottom gradient fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-paper to-transparent dark:from-paper-dark" />
    </section>
  );
}

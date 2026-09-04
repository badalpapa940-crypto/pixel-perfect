import { useState } from 'react';
import { Reveal } from '@/components/Reveal';
import { ArrowRight } from 'lucide-react';

export function CTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="border-t border-hairline py-32 md:py-48 dark:border-hairline-dark">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <div className="font-mono text-xs uppercase tracking-widest2 text-ink-faint dark:text-ink-faint-dark">
            Let's build
          </div>
          <h2 className="mt-6 max-w-4xl font-display text-[clamp(2.5rem,7vw,6rem)] font-extrabold leading-[1] tracking-tightest text-balance">
            One asset in.
            <br />
            A full batch out.
          </h2>
          <p className="mt-7 max-w-lg text-lg leading-relaxed text-ink-soft dark:text-ink-soft-dark">
            Tell us what you're making. We'll send a direction and timeline
            within 24 hours.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-12">
          {submitted ? (
            <p className="font-mono text-sm uppercase tracking-widest2 text-accent dark:text-accent-dark">
              Thanks — check your inbox for a reply within 24 hours.
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
        </Reveal>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { Reveal } from '@/components/Reveal';

const services = [
  {
    num: '01',
    title: 'AI Visuals',
    desc: 'Photoreal and stylised imagery generated from a single reference — campaigns, lookbooks, social, all on-brand.',
    tags: ['Campaign', 'Lookbook', 'Social'],
  },
  {
    num: '02',
    title: '3D Shoot',
    desc: 'Photoreal 3D renders and animated product spins, built from CAD or reference, lit and finished like a real studio.',
    tags: ['Renders', 'Animation', 'Configurators'],
  },
  {
    num: '03',
    title: 'Commercial Ad Shoot',
    desc: 'Full creative production — concept, casting, direction, post — for broadcast, OOH, and digital campaigns.',
    tags: ['Concept', 'Direction', 'Post'],
  },
  {
    num: '04',
    title: 'Product Photoshoot',
    desc: 'Packshot, lifestyle, and editorial product photography, shot and retouched to a luxury-editorial standard.',
    tags: ['Packshot', 'Lifestyle', 'Editorial'],
  },
];

const filters = ['All', 'AI Visuals', '3D', 'Commercial', 'Product'];

export function Services() {
  const [active, setActive] = useState('All');

  const filtered = services.filter((s) => {
    if (active === 'All') return true;
    if (active === '3D') return s.title.includes('3D');
    if (active === 'AI Visuals') return s.title === 'AI Visuals';
    if (active === 'Commercial') return s.title.includes('Commercial');
    if (active === 'Product') return s.title.includes('Product');
    return true;
  });

  return (
    <section id="services" className="border-t border-hairline py-24 md:py-32 dark:border-hairline-dark">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <div className="font-mono text-xs uppercase tracking-widest2 text-ink-faint dark:text-ink-faint-dark">
              What we do
            </div>
            <h2 className="mt-4 font-display text-5xl font-extrabold leading-[1] tracking-tightest md:text-6xl">
              Four ways
              <br />
              to create.
            </h2>
          </Reveal>

          {/* Filter pills */}
          <Reveal delay={100}>
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-150 ${
                    active === f
                      ? 'bg-ink text-paper dark:bg-ink-dark dark:text-paper-dark'
                      : 'border border-hairline text-ink-soft hover:opacity-70 dark:border-hairline-dark dark:text-ink-soft-dark'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Service rows */}
        <div className="mt-16">
          {filtered.map((s, i) => (
            <Reveal key={s.num} delay={i * 60} distance={20}>
              <article className="group grid grid-cols-1 gap-4 border-t border-hairline py-10 md:grid-cols-12 md:items-start dark:border-hairline-dark">
                <div className="font-mono text-5xl font-medium text-ink-faint/40 transition-colors duration-300 group-hover:text-accent dark:text-ink-faint-dark/40 dark:group-hover:text-accent-dark md:col-span-1">
                  {s.num}
                </div>
                <h3 className="font-display text-2xl font-bold tracking-tightest md:col-span-3 md:mt-2">
                  {s.title}
                </h3>
                <p className="text-base leading-relaxed text-ink-soft dark:text-ink-soft-dark md:col-span-5">
                  {s.desc}
                </p>
                <div className="flex flex-wrap gap-2 md:col-span-3 md:justify-end">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-hairline px-3 py-1 font-mono text-xs uppercase tracking-widest2 text-ink-faint dark:border-hairline-dark dark:text-ink-faint-dark"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

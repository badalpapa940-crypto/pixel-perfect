import { useEffect } from 'react';
import { Reveal } from '@/components/Reveal';
import { useReveal } from '@/hooks/useReveal';
import { useCountUp } from '@/hooks/useCountUp';

const stats = [
  { value: 1200, suffix: '+', label: 'Assets delivered' },
  { value: 48, suffix: 'h', label: 'Avg turnaround' },
  { value: 40, suffix: '+', label: 'Brand partners' },
  { value: 100, suffix: '%', label: 'Studio standard' },
];

function StatItem({
  stat,
  delay,
}: {
  stat: (typeof stats)[number];
  delay: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const { value, setStarted } = useCountUp(stat.value, 1200);

  useEffect(() => {
    if (visible) setStarted(true);
  }, [visible, setStarted]);

  return (
    <div ref={ref} style={{ transitionDelay: `${delay}ms` }}>
      <div className="font-display text-5xl font-extrabold leading-none tracking-tightest md:text-6xl">
        {value}
        <span className="text-accent dark:text-accent-dark">{stat.suffix}</span>
      </div>
      <div className="mt-3 font-mono text-xs uppercase tracking-widest2 text-ink-faint dark:text-ink-faint-dark">
        {stat.label}
      </div>
    </div>
  );
}

export function Stats() {
  return (
    <section id="studio" className="border-t border-hairline py-24 md:py-32 dark:border-hairline-dark">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <div className="font-mono text-xs uppercase tracking-widest2 text-ink-faint dark:text-ink-faint-dark">
            Proof
          </div>
          <h2 className="mt-4 max-w-2xl font-display text-5xl font-extrabold leading-[1] tracking-tightest md:text-6xl">
            Numbers that
            <br />
            speak for us.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}

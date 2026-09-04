import { Reveal } from '@/components/Reveal';

const steps = [
  {
    num: '01',
    title: 'Brief',
    desc: 'Send one reference, moodboard, or product. We align on direction, deliverables, and timeline.',
  },
  {
    num: '02',
    title: 'Produce',
    desc: 'Our team generates, shoots, or renders the full batch — every asset lit and finished to studio spec.',
  },
  {
    num: '03',
    title: 'Deliver',
    desc: 'Receive a complete, ready-to-use set in your formats. Revisions and format packs included.',
  },
];

export function Process() {
  return (
    <section id="process" className="border-t border-hairline py-24 md:py-32 dark:border-hairline-dark">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <div className="font-mono text-xs uppercase tracking-widest2 text-ink-faint dark:text-ink-faint-dark">
            How it works
          </div>
          <h2 className="mt-4 font-display text-5xl font-extrabold leading-[1] tracking-tightest md:text-6xl">
            Brief. Produce.
            <br />
            Deliver.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-px md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.num} delay={i * 120} distance={24}>
              <div className="border-t border-hairline pt-10 md:pl-8 dark:border-hairline-dark">
                <div className="font-display text-7xl font-extrabold leading-none tracking-tightest text-ink-faint/30 dark:text-ink-faint-dark/30">
                  {step.num}
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold tracking-tightest">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-xs text-base leading-relaxed text-ink-soft dark:text-ink-soft-dark">
                  {step.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

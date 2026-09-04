import { ArrowRight } from 'lucide-react';

import introVideo from '@/assets/intro.mp4.asset.json';

const fadeIn = (delay = 0) => ({
  animation: `fadeInUp 700ms cubic-bezier(0.22,1,0.36,1) ${delay}ms forwards`,
  opacity: 0,
});

function IntroVideo({ className }: { className?: string }) {
  return (
    <video
      src={introVideo.url}
      className={className}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-label="The Cloud Co. intro film"
    />
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        {/* Mobile / tablet — video only */}
        <div
          className="overflow-hidden rounded-[1.5rem] md:rounded-[2rem] lg:hidden"
          style={fadeIn()}
        >
          <IntroVideo className="aspect-[16/10] w-full object-cover md:aspect-[16/9]" />
        </div>

        {/* Laptop and up — intro left, video right */}
        <div className="hidden items-center gap-14 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
          <div>
            <div
              className="font-mono text-xs uppercase tracking-widest2 text-ink-faint dark:text-ink-faint-dark"
              style={fadeIn(0)}
            >
              Creative production studio
            </div>

            <h1
              className="mt-6 font-display text-[clamp(2.75rem,4.4vw,4.5rem)] font-extrabold leading-[1.02] tracking-tightest text-balance"
              style={fadeIn(80)}
            >
              Production-studio quality, delivered faster than a shoot.
            </h1>

            <p
              className="mt-6 max-w-lg text-lg leading-relaxed text-ink-soft dark:text-ink-soft-dark"
              style={fadeIn(160)}
            >
              One asset in, a full batch of ready-to-use creative out. AI visuals, 3D,
              commercial and product shoots for brands and agencies.
            </p>

            <div className="mt-9" style={fadeIn(240)}>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-base font-medium text-paper transition-transform duration-150 hover:scale-[0.97] dark:bg-ink-dark dark:text-paper-dark"
              >
                Start a project
                <ArrowRight
                  size={18}
                  className="transition-transform duration-150 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem]" style={fadeIn(300)}>
            <IntroVideo className="aspect-[4/5] w-full object-cover xl:aspect-[16/12]" />
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-paper to-transparent dark:from-paper-dark" />
    </section>
  );
}

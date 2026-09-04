import { Link } from '@tanstack/react-router';
import { Reveal } from '@/components/Reveal';
import { projects } from '@/lib/projects';

export function Work() {
  return (
    <section id="work" className="border-t border-hairline py-24 md:py-32 dark:border-hairline-dark">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <div className="flex items-end justify-between">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest2 text-ink-faint dark:text-ink-faint-dark">
                Selected work
              </div>
              <h2 className="mt-4 font-display text-5xl font-extrabold leading-[1] tracking-tightest md:text-6xl">
                Recent
                <br />
                productions.
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {projects.map((p, i) => {
            const card = (
              <figure className="group cursor-pointer">
                <div className={`relative overflow-hidden rounded-2xl ${p.aspect}`}>
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover opacity-0 transition-all duration-500 ease-editorial group-hover:scale-[1.03]"
                    onLoad={(e) => {
                      (e.currentTarget as HTMLImageElement).classList.remove('opacity-0');
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  {p.slug && (
                    <span className="absolute bottom-4 left-4 rounded-full bg-paper/90 px-4 py-2 font-mono text-[10px] uppercase tracking-widest2 text-ink dark:bg-paper-dark/90 dark:text-ink-dark">
                      Watch film
                    </span>
                  )}
                </div>
                <figcaption className="mt-4 flex items-center justify-between">
                  <h3 className="font-display text-lg font-bold tracking-tightest">{p.title}</h3>
                  <span className="font-mono text-xs uppercase tracking-widest2 text-ink-faint dark:text-ink-faint-dark">
                    {p.category}
                  </span>
                </figcaption>
              </figure>
            );

            return (
              <Reveal key={p.title} delay={i * 80} distance={24} className={p.span}>
                {p.slug ? (
                  <Link to="/work/$slug" params={{ slug: p.slug }} className="block">
                    {card}
                  </Link>
                ) : (
                  card
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

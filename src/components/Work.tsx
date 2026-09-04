import { Reveal } from '@/components/Reveal';

const projects = [
  {
    title: 'Aether — Skincare Campaign',
    category: 'AI Visuals',
    image:
      'https://images.pexels.com/photos/8015777/pexels-photo-8015777.jpeg?auto=compress&cs=tinysrgb&w=1200',
    span: 'lg:col-span-7',
    aspect: 'aspect-[4/3]',
  },
  {
    title: 'Form Studio — 3D Renders',
    category: '3D Shoot',
    image:
      'https://images.pexels.com/photos/29636880/pexels-photo-29636880.jpeg?auto=compress&cs=tinysrgb&w=1000',
    span: 'lg:col-span-5',
    aspect: 'aspect-[3/4]',
  },
  {
    title: 'Nuit — Fragrance Editorial',
    category: 'Product Photoshoot',
    image:
      'https://images.pexels.com/photos/18848964/pexels-photo-18848964.jpeg?auto=compress&cs=tinysrgb&w=1000',
    span: 'lg:col-span-5',
    aspect: 'aspect-[3/4]',
  },
  {
    title: 'Onyx — Beverage Commercial',
    category: 'Commercial Ad Shoot',
    image:
      'https://images.pexels.com/photos/36698524/pexels-photo-36698524.jpeg?auto=compress&cs=tinysrgb&w=1200',
    span: 'lg:col-span-7',
    aspect: 'aspect-[4/3]',
  },
  {
    title: 'Trueve App — Social Media',
    category: 'AI Influencer / Consistent Characters',
    image:
      'https://images.pexels.com/photos/7148620/pexels-photo-7148620.jpeg?auto=compress&cs=tinysrgb&w=1000',
    span: 'lg:col-span-5',
    aspect: 'aspect-[3/4]',
  },
  {
    title: 'Edibles Candy — Brand Story',
    category: 'AI UGC / Brand Film',
    image:
      'https://images.pexels.com/photos/3776947/pexels-photo-3776947.jpeg?auto=compress&cs=tinysrgb&w=1200',
    span: 'lg:col-span-7',
    aspect: 'aspect-[4/3]',
  },
];

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
          {projects.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 80}
              distance={24}
              className={p.span}
            >
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
                </div>
                <figcaption className="mt-4 flex items-center justify-between">
                  <h3 className="font-display text-lg font-bold tracking-tightest">
                    {p.title}
                  </h3>
                  <span className="font-mono text-xs uppercase tracking-widest2 text-ink-faint dark:text-ink-faint-dark">
                    {p.category}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

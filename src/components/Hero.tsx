import introVideo from '@/assets/intro.mp4.asset.json';

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div
          className="overflow-hidden rounded-[1.5rem] md:rounded-[2rem]"
          style={{
            animation: 'fadeInUp 700ms cubic-bezier(0.22,1,0.36,1) forwards',
            opacity: 0,
          }}
        >
          <video
            src={introVideo.url}
            className="aspect-[16/10] w-full object-cover md:aspect-[16/9]"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="The Cloud Co. intro film"
          />
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-paper to-transparent dark:from-paper-dark" />
    </section>
  );
}

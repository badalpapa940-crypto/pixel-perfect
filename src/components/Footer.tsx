const footerLinks = {
  Services: ['AI Visuals', '3D Shoot', 'Commercial Ad Shoot', 'Product Photoshoot'],
  Studio: ['About', 'Process', 'Careers', 'Contact'],
  Connect: ['Instagram', 'LinkedIn', 'Behance', 'thecloudcompanya.com'],
};

export function Footer() {
  return (
    <footer className="border-t border-hairline py-16 dark:border-hairline-dark">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <a
              href="#top"
              className="font-display text-xl font-extrabold tracking-tightest"
            >
              The Cloud Co.
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-soft dark:text-ink-soft-dark">
              Creative production studio for brands and agencies.
            </p>
          </div>

          {Object.entries(footerLinks).map(([heading, items]) => (
            <div key={heading}>
              <div className="font-mono text-xs uppercase tracking-widest2 text-ink-faint dark:text-ink-faint-dark">
                {heading}
              </div>
              <ul className="mt-4 space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-ink-soft underline-grow dark:text-ink-soft-dark"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-hairline pt-8 md:flex-row md:items-center md:justify-between dark:border-hairline-dark">
          <p className="font-mono text-xs uppercase tracking-widest2 text-ink-faint dark:text-ink-faint-dark">
            © 2026 The Cloud Co.
          </p>
          <p className="font-mono text-xs uppercase tracking-widest2 text-ink-faint dark:text-ink-faint-dark">
            thecloudcompanya.com
          </p>
        </div>
      </div>
    </footer>
  );
}

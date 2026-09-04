import { useEffect, useState } from 'react';
import { ArrowUpRight, Moon, Sun } from 'lucide-react';

type NavProps = {
  dark: boolean;
  onToggleDark: () => void;
};

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Work', href: '#work' },
  { label: 'Studio', href: '#studio' },
];

export function Nav({ dark, onToggleDark }: NavProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 editorial ${
        scrolled
          ? dark
            ? 'bg-paper-dark/85 backdrop-blur-md'
            : 'bg-paper/85 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10">
        <a
          href="#top"
          className={`font-display text-xl font-extrabold tracking-tightest ${
            dark ? 'text-ink-dark' : 'text-ink'
          }`}
        >
          The Cloud Co.
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium underline-grow ${
                dark ? 'text-ink-soft-dark' : 'text-ink-soft'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onToggleDark}
            aria-label="Toggle theme"
            className={`flex h-9 w-9 items-center justify-center rounded-full border border-hairline transition-opacity duration-150 hover:opacity-70 dark:border-hairline-dark ${
              dark ? 'text-ink-soft-dark' : 'text-ink-soft'
            }`}
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a
            href="#contact"
            className="group flex items-center gap-1.5 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-transform duration-150 hover:scale-[0.97] dark:bg-ink-dark dark:text-paper-dark"
          >
            Start a project
            <ArrowUpRight
              size={15}
              className="transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </nav>
    </header>
  );
}

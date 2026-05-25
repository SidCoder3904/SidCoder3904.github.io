import { useState, useEffect, useMemo } from 'react';
import { navLinks, personalInfo } from '../../data/content';
import { useActiveSection } from '../../hooks/useActiveSection';
import SocialLinks from '../ui/SocialLinks';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const sectionIds = useMemo(
    () => navLinks.map((l) => l.href.slice(1)),
    []
  );
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'nav-blur bg-surface-0/80 border-b border-white/[0.06]'
            : 'bg-transparent'
        }`}
      >
        <nav className="section-container flex items-center justify-between h-16">
          <a
            href="#hero"
            className="text-xl font-bold text-zinc-100 hover:text-accent transition-colors"
            aria-label="Back to top"
          >
            SV<span className="text-accent">.</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeSection === link.href.slice(1)
                    ? 'text-accent-light'
                    : 'text-zinc-400 hover:text-zinc-100'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium px-4 py-2 rounded-lg bg-accent/10 text-accent-light border border-accent/20 hover:bg-accent/20 transition-all"
            >
              Resume
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-zinc-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3.75 9h16.5m-16.5 6.75h16.5"
                />
              )}
            </svg>
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          mobileOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 bottom-0 w-72 bg-surface-1 border-l border-white/[0.06] p-6 pt-20 transition-transform duration-300 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  activeSection === link.href.slice(1)
                    ? 'text-accent-light bg-accent/10'
                    : 'text-zinc-300 hover:text-zinc-100 hover:bg-zinc-800/50'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-4 py-3 rounded-lg text-center font-medium bg-accent text-white hover:bg-accent-dark transition-all"
            >
              Resume
            </a>
          </div>
          <div className="mt-8 border-t border-white/[0.06] pt-6">
            <SocialLinks />
          </div>
        </div>
      </div>
    </>
  );
}

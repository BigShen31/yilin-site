'use client';

import { useState, useEffect } from 'react';
import { useI18n } from '@/i18n/provider';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { key: 'about', href: '#about' },
  { key: 'experience', href: '#experience' },
  { key: 'skills', href: '#skills' },
  { key: 'projects', href: '#projects' },
  { key: 'contact', href: '#contact' },
] as const;

export function Navbar() {
  const { locale, setLocale, t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm'
          : 'bg-transparent',
      )}
    >
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="text-lg font-bold text-foreground tracking-tight">
          {locale === 'zh' ? '一林' : 'Yilin'}
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-blue-accent"
            >
              {t.nav[link.key as keyof typeof t.nav]}
            </a>
          ))}
          <button
            onClick={() => setLocale(locale === 'zh' ? 'en' : 'zh')}
            className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:border-blue-accent hover:text-blue-accent"
          >
            {locale === 'zh' ? 'EN' : '中'}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setLocale(locale === 'zh' ? 'en' : 'zh')}
            className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground"
          >
            {locale === 'zh' ? 'EN' : '中'}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-muted-foreground"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-white/95 backdrop-blur-md md:hidden">
          <div className="mx-auto flex max-w-4xl flex-col gap-4 px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm text-muted-foreground transition-colors hover:text-blue-accent"
              >
                {t.nav[link.key as keyof typeof t.nav]}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

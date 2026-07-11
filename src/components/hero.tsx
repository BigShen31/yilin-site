'use client';

import { useI18n } from '@/i18n/provider';

function PixelAvatar({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Head - light blue */}
      <rect x="5" y="2" width="6" height="5" fill="#B8DCEF" />
      {/* Eyes - dark */}
      <rect x="6" y="4" width="1" height="1" fill="#1A1A2E" />
      <rect x="9" y="4" width="1" height="1" fill="#1A1A2E" />
      {/* Mouth - accent blue */}
      <rect x="7" y="5" width="2" height="1" fill="#4A90D9" />
      {/* Body - accent blue */}
      <rect x="4" y="7" width="8" height="4" fill="#4A90D9" />
      {/* Body highlight */}
      <rect x="5" y="8" width="2" height="1" fill="#B8DCEF" opacity="0.5" />
      {/* Feet - dark */}
      <rect x="5" y="11" width="2" height="1" fill="#1A1A2E" />
      <rect x="9" y="11" width="2" height="1" fill="#1A1A2E" />
    </svg>
  );
}

export function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Decorative blob */}
      <div
        className="pointer-events-none absolute -right-20 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full opacity-40 blur-3xl md:h-[600px] md:w-[600px]"
        style={{
          background:
            'radial-gradient(circle at 30% 40%, #E8F4FD 0%, #B8DCEF 40%, #4A90D9 100%)',
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-4xl px-6 py-32 md:py-0">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-start md:gap-16">
          {/* Avatar button */}
          <a
            href="#contact"
            className="group relative flex-shrink-0"
            aria-label="Contact"
          >
            <div className="relative h-32 w-32 rounded-2xl border-2 border-blue-accent bg-accent-blue-soft transition-all duration-300 group-hover:border-blue-accent-hover group-hover:shadow-lg md:h-40 md:w-40">
              {/* Pixel art avatar */}
              <div className="flex h-full w-full items-center justify-center p-6 md:p-8">
                <PixelAvatar className="h-full w-full transition-transform group-hover:scale-105" />
              </div>
              {/* Small decorative dot */}
              <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-blue-accent" />
            </div>
          </a>

          {/* Text content */}
          <div className="text-center md:text-left">
            <p className="mb-3 text-sm font-medium text-blue-accent tracking-wide uppercase">
              {t.hero.greeting}
            </p>
            <h1 className="text-5xl font-bold tracking-tight text-foreground md:text-7xl">
              {t.hero.name}
            </h1>
            <p className="mt-4 whitespace-nowrap text-lg text-muted-foreground md:text-2xl">
              {t.hero.title}
            </p>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
              {t.hero.subtitle}
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4 md:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center rounded-lg bg-blue-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-accent-hover"
              >
                {t.nav.projects}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-lg border border-border px-6 py-3 text-sm font-medium text-muted-foreground transition-colors hover:border-blue-accent hover:text-blue-accent"
              >
                {t.nav.contact}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useI18n } from '@/i18n/provider';
import { useFadeIn } from '@/hooks/use-fade-in';
import { cn } from '@/lib/utils';

export function About() {
  const { t } = useI18n();
  const { ref, isVisible } = useFadeIn();

  return (
    <section id="about" className="py-24 md:py-32">
      <div
        ref={ref}
        className={cn('fade-up', isVisible && 'visible')}
      >
        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          {t.about.heading}
        </h2>
        <div className="mt-2 mb-8 h-1 w-12 rounded-full bg-blue-accent" />
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {t.about.intro}
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {t.about.philosophy.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <h3 className="text-base font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

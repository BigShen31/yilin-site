'use client';

import { useI18n } from '@/i18n/provider';
import { useFadeIn } from '@/hooks/use-fade-in';
import { cn } from '@/lib/utils';

export function Experience() {
  const { t } = useI18n();
  const { ref, isVisible } = useFadeIn();

  return (
    <section id="experience" className="py-24 md:py-32">
      <div ref={ref}>
        <div
          className={cn('fade-up', isVisible && 'visible')}
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {t.experience.heading}
          </h2>
          <div className="mt-2 mb-12 h-1 w-12 rounded-full bg-blue-accent" />
        </div>

        <div className="stagger-children relative ml-4 border-l-2 border-blue-soft pl-8">
          {t.experience.items.map((item, index) => (
            <div
              key={index}
              className={cn(
                'fade-up relative mb-10 last:mb-0',
                isVisible && 'visible',
              )}
            >
              {/* Timeline dot */}
              <div className="absolute -left-[calc(2rem+5px)] top-1.5 h-3 w-3 rounded-full border-2 border-blue-accent bg-white" />

              <div className="rounded-xl border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <span className="text-sm text-blue-accent font-medium">
                    {item.period}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

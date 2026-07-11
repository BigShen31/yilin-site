'use client';

import { useI18n } from '@/i18n/provider';
import { useFadeIn } from '@/hooks/use-fade-in';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

export function Projects() {
  const { t } = useI18n();
  const { ref, isVisible } = useFadeIn();

  return (
    <section id="projects" className="py-24 md:py-32">
      <div ref={ref}>
        <div
          className={cn('fade-up', isVisible && 'visible')}
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {t.projects.heading}
          </h2>
          <div className="mt-2 mb-12 h-1 w-12 rounded-full bg-blue-accent" />
        </div>

        <div className="stagger-children grid gap-6 sm:grid-cols-2">
          {t.projects.items.map((project, index) => {
            const hasLink = project.link && project.link !== '';
            
            const CardContent = () => (
              <>
                {/* Cover image or placeholder */}
                {project.cover ? (
                  <div className="mb-4 relative h-40 w-full overflow-hidden rounded-lg">
                    <Image
                      src={project.cover}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <div className="mb-4 flex h-40 items-center justify-center rounded-lg bg-blue-soft">
                    <span className="text-3xl font-bold text-blue-accent/30">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                )}

                <h3 className="text-lg font-semibold text-foreground group-hover:text-blue-accent transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-blue-soft px-2.5 py-0.5 text-xs font-medium text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {hasLink && (
                    <ArrowUpRight
                      size={18}
                      className="text-muted-foreground transition-colors group-hover:text-blue-accent"
                    />
                  )}
                </div>
              </>
            );

            if (hasLink) {
              return (
                <a
                  key={index}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'fade-up group flex flex-col rounded-xl border border-border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg',
                    isVisible && 'visible',
                  )}
                >
                  <CardContent />
                </a>
              );
            }

            return (
              <div
                key={index}
                className={cn(
                  'fade-up group flex flex-col rounded-xl border border-border bg-white p-6 shadow-sm',
                  isVisible && 'visible',
                )}
              >
                <CardContent />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

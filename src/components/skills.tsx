'use client';

import { useI18n } from '@/i18n/provider';
import { useFadeIn } from '@/hooks/use-fade-in';
import { cn } from '@/lib/utils';

type SkillGroup = {
  label: string;
  items: string[];
};

export function Skills() {
  const { t } = useI18n();
  const { ref, isVisible } = useFadeIn();

  const skillGroups: SkillGroup[] = [
    t.skills.work,
    t.skills.investment,
    t.skills.investmentFocus,
    t.skills.ai,
  ].filter((group): group is SkillGroup => group !== undefined && group !== null);

  return (
    <section id="skills" className="py-24 md:py-32">
      <div
        ref={ref}
        className={cn('fade-up', isVisible && 'visible')}
      >
        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          {t.skills.heading}
        </h2>
        <div className="mt-2 mb-12 h-1 w-12 rounded-full bg-blue-accent" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div key={group.label} className="rounded-2xl bg-blue-soft/50 p-6 transition-all hover:shadow-md">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-blue-accent">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-white px-3 py-1 text-sm font-medium text-foreground shadow-sm transition-all hover:bg-blue-accent hover:text-white hover:shadow"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

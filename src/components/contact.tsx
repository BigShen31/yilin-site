'use client';

import { useI18n } from '@/i18n/provider';
import { useFadeIn } from '@/hooks/use-fade-in';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export function Contact() {
  const { t } = useI18n();
  const { ref, isVisible } = useFadeIn();

  return (
    <section id="contact" className="py-24 md:py-32">
      <div
        ref={ref}
        className={cn('fade-up', isVisible && 'visible')}
      >
        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          {t.contact.heading}
        </h2>
        <div className="mt-2 mb-8 h-1 w-12 rounded-full bg-blue-accent" />

        <div className="mt-8 flex flex-col items-center justify-center gap-8 sm:flex-row sm:items-start sm:gap-12">
          <div className="flex flex-col items-center gap-3">
            <div className="rounded-xl border border-border bg-white p-4 shadow-sm">
              <Image
                src="/wechat-qr.jpg"
                alt="微信二维码"
                width={200}
                height={200}
                className="h-auto w-auto"
                priority
              />
            </div>
            <p className="text-sm text-muted-foreground">
              {t.contact.qrLabel}
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="rounded-xl border border-border bg-white p-4 shadow-sm">
              <Image
                src="/bilibili-qr.jpg"
                alt="哔哩哔哩二维码"
                width={200}
                height={200}
                className="h-auto w-auto"
              />
            </div>
            <p className="text-sm text-muted-foreground">
              {t.contact.bilibiliLabel}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

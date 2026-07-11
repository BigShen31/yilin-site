'use client';

import { useI18n } from '@/i18n/provider';

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto max-w-4xl px-6 text-center text-sm text-muted-foreground">
        {t.footer.copyright}
      </div>
    </footer>
  );
}

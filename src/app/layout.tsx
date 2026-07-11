import type { Metadata } from 'next';
import { Inspector } from 'react-dev-inspector';
import './globals.css';
import { I18nProvider } from '@/i18n/provider';
import { FontPreload } from '@/components/font-preload';

export const metadata: Metadata = {
  title: '一林 | 低风险投资 & AI项目实践者',
  description:
    '10年+金融IT职场人，低风险投资践行者，AI项目落地实践者。转债轮动、港美股打新、基金套利；5年低风险投资/套利还清房贷。',
  keywords: [
    '一林',
    'Yilin',
    '低风险投资',
    'AI项目实践',
    '转债轮动',
    '港美股打新',
    '基金套利',
    'AI出海',
    'AI Agent',
    '金融IT',
    'Portfolio',
  ],
  authors: [{ name: '一林' }],
  openGraph: {
    title: '一林 | 低风险投资 & AI项目实践者',
    description:
      '10年+金融IT职场人，低风险投资践行者，AI项目落地实践者。转债轮动、港美股打新、基金套利；5年低风险投资/套利还清房贷。',
    type: 'website',
    locale: 'zh_CN',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDev = process.env.COZE_PROJECT_ENV === 'DEV';

  return (
    <html lang="zh" className="scroll-smooth">
      <FontPreload />
      <body className="antialiased">
        <I18nProvider>
          {isDev && <Inspector />}
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}

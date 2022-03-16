import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';

import { SiteLayout } from '@/layout';

import '../styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider attribute="class" enableSystem={true} defaultTheme="system">
    <NextNProgress />
    <SiteLayout>
      <Component {...pageProps} />
    </SiteLayout>
  </ThemeProvider>
);

export default MyApp;

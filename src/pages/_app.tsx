import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';

import { SiteLayout } from '@/layout';

import '../styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider attribute="class" enableSystem={true} defaultTheme="system">
    <SiteLayout>
      <Component {...pageProps} />
    </SiteLayout>
  </ThemeProvider>
);

export default MyApp;

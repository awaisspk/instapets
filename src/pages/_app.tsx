import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';

import { PageLayout } from '@/layout';

import '../styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider attribute="class" enableSystem={true} defaultTheme="system">
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
  </ThemeProvider>
);

export default MyApp;

import { AppProps } from 'next/app';

import { PageLayout } from '@/layout';

import '../styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <PageLayout>
    <Component {...pageProps} />
  </PageLayout>
);

export default MyApp;

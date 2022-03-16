import { ReactNode } from 'react';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

type PageLayoutProps = {
  children: ReactNode;
};

export const SiteLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="grid grid-rows-layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

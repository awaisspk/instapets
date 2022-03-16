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
      <div className=" mt-[120px] w-full mx-auto">{children}</div>
      <Footer />
    </div>
  );
};

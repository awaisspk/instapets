import { ReactNode } from 'react';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full antialiased text-gray-700 mt-5">
    {props.meta}
    <main className="mx-auto min-h-screen w-full">{props.children}</main>
  </div>
);

export { Main };

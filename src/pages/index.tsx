import { Main } from '@/layout/Main';
import { Meta } from '@/layout/Meta';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <h1>Home page</h1>
    </Main>
  );
};

export default Index;

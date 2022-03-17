import NextLink from 'next/link';

import { Link } from '@/components/Button';
import { Main, Meta } from '@/layout';

const ErrorPage = () => {
  return (
    <html lang="en">
      <Main meta={<Meta title="404 Page" description="" />}>
        <div className="flex flex-col items-center space-y-5 justify-center">
          <p className="text-2xl md:text-5xl text-center lg:text-9xl">
            404- Something went wrong
          </p>
          <NextLink passHref href="/">
            <Link>Back to home page</Link>
          </NextLink>
        </div>
      </Main>
    </html>
  );
};

export default ErrorPage;

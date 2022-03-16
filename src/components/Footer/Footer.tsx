import { Link } from '../Button';

export const Footer = () => {
  return (
    <footer className="flex justify-center mt-10 py-3">
      <span>
        Build by Awais iqbal.{' '}
        <Link target="_blank" href="https://github.com/awaisspk">
          github
        </Link>
      </span>
    </footer>
  );
};

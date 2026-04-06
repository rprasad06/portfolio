import { Link, useLocation, useNavigate } from 'react-router';

export default function Navbar() {
  const { pathname, search, hash } = useLocation();
  const navigate = useNavigate();
  const contactHref = `${pathname}${search}#contact`;

  function handleHomeClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (pathname !== '/') return;
    e.preventDefault();
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    if (hash || search) {
      void navigate('/', { replace: true });
    }
  }

  function handleContactClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    void navigate({ pathname, search, hash: '#contact' }, { preventScrollReset: true });
  }

  return (
    <div
      className="type-inter-12 flex w-full items-center bg-white p-[16px]"
      data-name="nav"
    >
      <Link
        to="/"
        onClick={handleHomeClick}
        className="shrink-0 w-[calc(var(--sidebar-width)-16px)] text-inherit no-underline hover:underline"
      >
        Rahul Prasad
      </Link>
      <p className="shrink-0 w-[calc(var(--sidebar-width)-16px)]">Cambridge, MA</p>
      <Link
        to={contactHref}
        onClick={handleContactClick}
        className="ml-auto shrink-0 text-right text-inherit no-underline hover:underline"
      >
        Contact
      </Link>
    </div>
  );
}

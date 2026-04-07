import { Link, useLocation, useNavigate } from 'react-router';
import { workNavItems } from '../pages/HomePage';
import reticulatedOrange from './assets/reticulated_orange.png';

const EMAIL = 'rahulprasad@college.harvard.edu';
const PHONE_DISPLAY = '781-428-4276';
const PHONE_TEL = 'tel:+17814284276';

const LINKEDIN_HREF = 'https://www.linkedin.com/in/rahul-prasad-218b57234/';
const TWITTER_HREF = 'https://x.com/rhpsd06';
const GITHUB_HREF = 'https://github.com/rprasad06';
const RESUME_HREF = '/resume.pdf';

const linkClass = 'text-inherit underline decoration-solid underline-offset-2';

export default function Footer() {
  const { pathname, search, hash } = useLocation();
  const navigate = useNavigate();

  function handleHomeClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (pathname !== '/') return;
    e.preventDefault();
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    if (hash || search) {
      void navigate('/', { replace: true });
    }
  }

  return (
    <footer
      id="contact"
      className="type-inter-14 relative mt-auto flex w-full shrink-0 flex-col gap-10 overflow-hidden py-16 scroll-mt-20"
      data-name="contact"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-[-20rem] rotate-340 top-0 z-0 overflow-hidden"
      >
        <img
          alt=""
          src={reticulatedOrange}
          className="absolute right-0 bottom-0 w-[50dvw] object-contain object-right-bottom select-none"
          decoding="async"
        />
      </div>

      <svg className="relative z-10 block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 0.0001">
        <line stroke="var(--stroke-0, black)" x1="0" y1="0" x2="1" y2="0" />
      </svg>

      <div className="relative z-10 flex min-w-0 flex-col sm:gap-8 md:gap-0 md:flex-row py-8 pl-4">
        

        <div className="flex min-w-0 flex-col gap-6 w-[calc(var(--sidebar-width)-16px)]">
          <nav aria-label="Page" className="flex flex-col gap-2">
            <p className="type-inter-10-caps leading-[normal]">Page</p>
            <ul className="flex flex-col gap-2 leading-[normal]">
              <li>
                <Link className={linkClass} to="/" onClick={handleHomeClick}>
                  Home
                </Link>
              </li>
              <li>
                <Link className={linkClass} to="/#about">
                  About
                </Link>
              </li>
            </ul>
          </nav>
          <nav aria-label="Projects" className="flex flex-col gap-2">
            <p className="type-inter-10-caps leading-[normal]">Projects</p>
            <ul className="flex flex-col gap-2 leading-[normal]">
              {workNavItems.map(({ id, name, path }) => (
                <li key={id}>
                  <Link className={linkClass} to={path}>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-4">
          <div className="type-xanh-26 leading-[0]">
            <p className="mb-0 leading-[normal]">Rahul</p>
            <p className="leading-[normal]">Prasad</p>
          </div>
          <div className="flex flex-col gap-2 leading-[normal]">
            <p>
              <span className="text-muted-foreground">Email: </span>
              <a className={linkClass} href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
            </p>
            <p>
              <span className="text-muted-foreground">Phone: </span>
              <a className={linkClass} href={PHONE_TEL}>
                {PHONE_DISPLAY}
              </a>
            </p>
            <p>Cambridge, MA</p>
          </div>
          <ul className="flex flex-wrap gap-x-4 gap-y-1">
            <li>
              <a className={linkClass} href={LINKEDIN_HREF} rel="noopener noreferrer" target="_blank">
                LinkedIn
              </a>
            </li>
            <li>
              <a className={linkClass} href={TWITTER_HREF} rel="noopener noreferrer" target="_blank">
                Twitter
              </a>
            </li>
            <li>
              <a className={linkClass} href={GITHUB_HREF} rel="noopener noreferrer" target="_blank">
                GitHub
              </a>
            </li>
            <li>
              <a className={linkClass} href={RESUME_HREF} rel="noopener noreferrer" target="_blank">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

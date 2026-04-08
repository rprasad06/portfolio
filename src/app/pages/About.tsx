import { Link } from 'react-router';

export default function AboutPage() {
  return (
    <div className="relative flex min-h-px min-w-px flex-[1_0_0] flex-col items-start">
      <div className="h-[var(--unit)] flex flex-col justify-end pb-4">
        <h1 className="type-xanh-32">About Me</h1>
      </div>
      <p className="type-inter-14 max-w-[var(--half-viewport-width)] leading-[2]">
        This page is still under construction—check back soon, or see my contact information below!
      </p>
      <Link to="/" className="type-inter-14 pt-4 underline hover:no-underline">
        ← Back to home
      </Link>
    </div>
  );
}

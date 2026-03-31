import { Link } from 'react-router';

export default function NotFound() {
  return (
    <div className="relative flex min-h-px min-w-px flex-[1_0_0] flex-col items-start justify-center p-16">
      <div className="type-xanh-48 mb-8">
        404
      </div>
      <p className="type-inter-18 mb-8">
        Page not found
      </p>
      <Link 
        to="/" 
        className="type-inter-14 underline hover:no-underline"
      >
        ← Back to home
      </Link>
    </div>
  );
}

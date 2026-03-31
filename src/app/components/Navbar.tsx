export default function Navbar() {
  return (
    <div
      className="type-inter-12 flex w-full items-center bg-white p-[16px]"
      data-name="nav"
    >
      <p className="shrink-0 w-[calc(var(--sidebar-width)-16px)]">Rahul Prasad</p>
      <p className="shrink-0 w-[calc(var(--sidebar-width)-16px)]">Cambridge, MA</p>
      <p className="ml-auto shrink-0 text-right">Contact</p>
    </div>
  );
}

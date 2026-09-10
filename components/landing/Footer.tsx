export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 px-6 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div>
          <p className="text-lg font-bold text-white">Shortlist</p>
          <p className="mt-1 text-sm text-slate-500">
            Turn ideas into a better product.
          </p>
        </div>

        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} Shortlist. No rights reserved.
        </p>
      </div>
    </footer>
  );
}
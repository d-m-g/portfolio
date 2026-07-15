import { site } from "../data/site.js";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-6 py-8 sm:flex-row">
        <p className="font-body text-sm text-faint">
          © {site.name}
        </p>
        <p className="font-body text-sm text-faint">
          Built with React · Vite · Tailwind
        </p>
      </div>
    </footer>
  );
}

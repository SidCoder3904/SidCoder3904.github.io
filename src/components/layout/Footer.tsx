export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/[0.04]">
      <div className="section-container text-center">
        <p className="text-zinc-500 text-sm">
          Designed & Built by{' '}
          <a
            href="https://github.com/SidCoder3904"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-accent transition-colors"
          >
            Siddharth Verma
          </a>
        </p>
        <p className="text-zinc-600 text-xs mt-1">
          Last updated: May, 2026
        </p>
      </div>
    </footer>
  );
}

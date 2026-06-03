const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0a0a0a]/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a href="#about" className="text-sm font-semibold text-white">
          Ayush Chaudhary
        </a>
        <div className="flex items-center gap-1 sm:gap-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-2.5 py-2 text-xs font-medium text-gray-400 transition hover:bg-white/5 hover:text-accent sm:px-3 sm:text-sm"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

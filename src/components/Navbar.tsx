const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a
          href="/"
          className="text-2xl font-bold tracking-tight text-slate-900"
        >
          Rakesh<span className="text-blue-600">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          <a
            href="#about"
            className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
          >
            About
          </a>

          <a
            href="#services"
            className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
          >
            Services
          </a>

          <a
            href="#portfolio"
            className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
          >
            Portfolio
          </a>

          <a
            href="#how-it-works"
            className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
          >
            Process
          </a>

          <a
            href="#pricing"
            className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
          >
            Pricing
          </a>

          <a
            href="#faq"
            className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
          >
            FAQ
          </a>

          <a
            href="#contact"
            className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
          >
            Contact
          </a>
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Free Consultation
          </a>
        </div>
        {/* sign in and Get started buttons */}
        <div className="hidden items-center gap-5 lg:flex">
           <a   href="/signin" className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
           >
            Sign In
           </a>

           <a
           href="/signup"
            className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
           >
           Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="rounded-lg p-2 text-slate-700 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
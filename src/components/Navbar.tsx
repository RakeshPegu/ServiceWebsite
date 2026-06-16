const Navbar = () => {
  const handleAboutClick =()=>{
    const aboutElemet = document.getElementById('about')
    if(aboutElemet){
       aboutElemet.scrollIntoView({behavior: 'smooth'})
    }
  }
  const handleServiceClick = ()=>{
    const serviceElement = document.getElementById('service')
    if(serviceElement){
      serviceElement.scrollIntoView({behavior:'smooth'})
    }
  }
  const handlePortfolioClick = ()=>{
    const portFolioElement = document.getElementById('portfolio')
    if(portFolioElement){
      portFolioElement.scrollIntoView({behavior:'smooth'})
    }
  }
  const handleProcessClick =()=>{
    const processElement = document.getElementById("process")
    if(processElement){
       processElement.scrollIntoView({behavior:"smooth"})
    }
  }
  const handlePricingClick = ()=>{
    const pricingElement = document.getElementById('pricing')
    if(pricingElement){
        pricingElement.scrollIntoView({behavior:"smooth"})
    }
  }
  const handleFAQClick = ()=>{
    const faqElement = document.getElementById('faq')
    if(faqElement){
       faqElement.scrollIntoView({behavior:"smooth"})
    }
  }
    const handleContactClick = ()=>{
    const conElement = document.getElementById('contact')
    if(conElement){
       conElement.scrollIntoView({behavior:"smooth"})
    }
  }
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a
          href="/"
          className="text-2xl font-bold tracking-tight text-slate-900"
        >
          HORIZON<span className="text-blue-600">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          <a
            href="#about"
            className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
            onClick={handleAboutClick}
          >
            About
          </a>

          <a
            href="#services"
            className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
            onClick={handleServiceClick}
          >
            Services
          </a>

          <a
            href="#portfolio"
            className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
            onClick={handlePortfolioClick}
          >
            Portfolio
          </a>

          <a
            href="#how-it-works"
            className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
            onClick={handleProcessClick}
          >
            Process
          </a>

          <a
            href="#pricing"
            className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
            onClick={handlePricingClick}
          >
            Pricing
          </a>

          <a
            href="#faq"
            className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
            onClick={handleFAQClick}
          >
            FAQ
          </a>

          <a
            href="#contact"
            className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
            onClick={handleContactClick}
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
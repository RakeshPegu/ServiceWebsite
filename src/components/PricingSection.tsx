const Pricing = () => {
  return (
    <section className="bg-slate-200 py-24" id="pricing">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Pricing
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Transparent Pricing for Every Business
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Choose a package that fits your needs or request a custom
            quote for larger and more complex projects.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3 ">
          {/* Starter Website */}
          <div className="rounded-3xl border hover:border-2 border-slate-200 hover:border-blue-500 bg-white p-8 shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl">
            <div className="mb-6">
              <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                Starter
              </span>
            </div>

            <h3 className="text-2xl font-bold text-slate-900">
              Starter Website
            </h3>

            <div className="mt-6">
              <span className="text-5xl font-bold text-slate-900">
                ₹15,000+
              </span>
            </div>

            <p className="mt-4 text-slate-600">
              Perfect for individuals, freelancers, and small businesses
              looking for a professional online presence.
            </p>

            <ul className="mt-8 space-y-4">
              <li>✓ Responsive Design</li>
              <li>✓ Up to 5 Pages</li>
              <li>✓ Contact Form</li>
              <li>✓ SEO Basics</li>
              <li>✓ Fast Performance</li>
            </ul>

            <button className="mt-8 w-full rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-50">
              Get Started
            </button>
          </div>

          {/* Business Website */}
          <div className="relative rounded-3xl hover:border-2 hover:border-blue-500 bg-white p-8 shadow-xl">
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="rounded-full bg-gray-600 px-4 py-2 text-sm font-semibold text-white">
                Most Popular
              </span>
            </div>

            <div className="mb-6 mt-4">
              <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
                Business
              </span>
            </div>

            <h3 className="text-2xl font-bold text-slate-900">
              Business Website
            </h3>

            <div className="mt-6">
              <span className="text-5xl font-bold text-slate-900">
                ₹30,000+
              </span>
            </div>

            <p className="mt-4 text-slate-600">
              Ideal for growing businesses that need a professional,
              scalable website with advanced features.
            </p>

            <ul className="mt-8 space-y-4">
              <li>✓ Everything in Starter</li>
              <li>✓ Custom Design</li>
              <li>✓ Advanced SEO</li>
              <li>✓ Blog Integration</li>
              <li>✓ Lead Generation Features</li>
              <li>✓ Performance Optimization</li>
            </ul>

            <button className="mt-8 w-full rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
              Get Started
            </button>
          </div>

          {/* Custom Web Application */}
          <div className="rounded-3xl border hover:border-2 hover:border-blue-500 border-slate-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl">
            <div className="mb-6">
              <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700">
                Custom Solution
              </span>
            </div>

            <h3 className="text-2xl font-bold text-slate-900">
              Custom Web Application
            </h3>

            <div className="mt-6">
              <span className="text-4xl font-bold text-slate-900">
                Custom Quote
              </span>
            </div>

            <p className="mt-4 text-slate-600">
              For dashboards, booking systems, CRM platforms, SaaS
              products, and other custom business solutions.
            </p>

            <ul className="mt-8 space-y-4">
              <li>✓ Custom Features</li>
              <li>✓ Database Design</li>
              <li>✓ Authentication & Security</li>
              <li>✓ API Integrations</li>
              <li>✓ Scalable Architecture</li>
              <li>✓ Ongoing Support</li>
            </ul>

            <button className="mt-8 w-full rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-50">
              Request Quote
            </button>
          </div>
        </div>

        {/* Custom Pricing Section */}
        <div className="mt-20 overflow-hidden rounded-3xl bg-slate-900">
          <div className="p-10 text-center md:p-16">
            <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-blue-300">
              Custom Pricing
            </span>

            <h3 className="mt-6 text-3xl font-bold text-white md:text-4xl">
              Every Project Is Different
            </h3>

            <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-300">
              Need something unique? Project costs depend on features,
              complexity, integrations, and timeline. Contact us for a
              personalized quote tailored to your requirements.
            </p>

            <button className="mt-8 rounded-xl bg-white px-8 py-4 font-semibold text-slate-900 transition hover:scale-105">
              Request a Custom Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
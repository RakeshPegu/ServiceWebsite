const Portfolio = () => {
  return (
    <section className="bg-slate-300 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Our Portfolio
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Recent Projects We've Built
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Explore some of our recent work. From business websites to
            custom web applications, we create solutions that help
            businesses grow and succeed online.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {/* Project 1 */}
          <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl">
            <div className="h-56 bg-linear-to-br from-blue-500 to-indigo-600">
              <div className="flex h-full items-center justify-center text-white text-xl font-semibold">
                Project Screenshot
              </div>
            </div>

            <div className="p-6">
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-600">
                  React
                </span>
                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-600">
                  Node.js
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                Business Website
              </h3>

              <p className="mt-3 text-slate-600">
                A modern company website designed to showcase services,
                improve credibility, and generate leads.
              </p>

              <button className="mt-6 font-semibold text-blue-600 hover:text-blue-700">
                View Project →
              </button>
            </div>
          </div>

          {/* Project 2 */}
          <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl">
            <div className="h-56 bg-linear-to-br from-purple-500 to-pink-500">
              <div className="flex h-full items-center justify-center text-white text-xl font-semibold">
                Project Screenshot
              </div>
            </div>

            <div className="p-6">
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-600">
                  Next.js
                </span>
                <span className="rounded-full bg-pink-100 px-3 py-1 text-xs font-medium text-pink-600">
                  Tailwind
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                E-Commerce Store
              </h3>

              <p className="mt-3 text-slate-600">
                An online store featuring product management, secure
                payments, and a seamless shopping experience.
              </p>

              <button className="mt-6 font-semibold text-blue-600 hover:text-blue-700">
                View Project →
              </button>
            </div>
          </div>

          {/* Project 3 */}
          <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl">
            <div className="h-56 bg-linear-to-br from-green-500 to-emerald-600">
              <div className="flex h-full items-center justify-center text-white text-xl font-semibold">
                Project Screenshot
              </div>
            </div>

            <div className="p-6">
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-600">
                  React
                </span>
                <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-600">
                  MongoDB
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                Booking Platform
              </h3>

              <p className="mt-3 text-slate-600">
                A custom booking system allowing customers to schedule
                appointments and manage reservations online.
              </p>

              <button className="mt-6 font-semibold text-blue-600 hover:text-blue-700">
                View Project →
              </button>
            </div>
          </div>
        </div>

        {/* Featured Project */}
        <div className="mt-20 overflow-hidden rounded-3xl bg-slate-900">
          <div className="grid lg:grid-cols-2">
            {/* Left Side */}
            <div className="p-10 lg:p-14">
              <span className="rounded-full bg-blue-500/20 px-4 py-2 text-sm font-medium text-blue-300">
                Featured Project
              </span>

              <h3 className="mt-6 text-3xl font-bold text-white">
                Custom CRM Dashboard
              </h3>

              <p className="mt-4 text-slate-300">
                A complete customer management platform built for a
                growing business. Includes analytics, customer tracking,
                reporting, and workflow automation.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full bg-slate-800 px-4 py-2 text-sm text-slate-300">
                  React
                </span>
                <span className="rounded-full bg-slate-800 px-4 py-2 text-sm text-slate-300">
                  Node.js
                </span>
                <span className="rounded-full bg-slate-800 px-4 py-2 text-sm text-slate-300">
                  MongoDB
                </span>
                <span className="rounded-full bg-slate-800 px-4 py-2 text-sm text-slate-300">
                  Docker
                </span>
              </div>

              <button className="mt-8 rounded-xl bg-white px-6 py-3 font-semibold text-slate-900 transition hover:scale-105">
                View Case Study
              </button>
            </div>

            {/* Right Side */}
            <div className="flex min-h-87.5 items-center justify-center bg-linear-to-br from-blue-600 to-indigo-700">
              <div className="rounded-2xl bg-white/10 px-8 py-6 text-center backdrop-blur">
                <p className="text-xl font-semibold text-white">
                  Featured Project Screenshot
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-slate-900">
            Have a Project in Mind?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Let's discuss your requirements and build something amazing
            together.
          </p>

          <button className="mt-8 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700">
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
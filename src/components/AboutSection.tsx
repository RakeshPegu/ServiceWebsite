const About = () => {
  return (
    <section className="bg-slate-200 py-24" id="about">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Side - Image Placeholder */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl bg-linear-to-br from-blue-600 to-indigo-700 p-1">
              <div className="flex h-121.5 items-center justify-center rounded-[22px] bg-slate-100">
                <div className="text-center">
                  <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-slate-300 text-4xl font-bold text-slate-700">
                    RP
                  </div>

                  <p className="mt-6 text-slate-500">
                    Your Professional Photo
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 rounded-2xl bg-white p-6 shadow-xl">
              <h3 className="text-3xl font-bold text-blue-600">2+</h3>
              <p className="text-sm text-slate-600">
                Years of Development Experience
              </p>
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
              About 
            </span>

            <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
              Building Modern Web Solutions
              <span className="block text-blue-600">
                For Growing Businesses
              </span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              <strong>HORIZON</strong>, a  Web-site builder service platform
              specializing in modern web applications. We help businesses build
              fast, responsive, and scalable websites using modern technologies.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Whether you need a business website, e-commerce platform, or
              custom web application, Our focus is on creating solutions that
              not only look great but also deliver real business value.
            </p>

            {/* Skills */}
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                React
              </span>

              <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                Next.js
              </span>

              <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                TypeScript
              </span>

              <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                Node.js
              </span>

              <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                Express.js
              </span>

              <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                MongoDB
              </span>

              <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                MySQL
              </span>

              <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                Docker
              </span>
            </div>

            {/* Highlights */}
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 p-5">
                <h3 className="text-2xl font-bold text-slate-900">
                  Fast
                </h3>

                <p className="mt-2 text-slate-600">
                  Optimized websites with excellent performance.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-5">
                <h3 className="text-2xl font-bold text-slate-900">
                  Responsive
                </h3>

                <p className="mt-2 text-slate-600">
                  Seamless experience across all devices.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-5">
                <h3 className="text-2xl font-bold text-slate-900">
                  Scalable
                </h3>

                <p className="mt-2 text-slate-600">
                  Built to support future growth and expansion.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-5">
                <h3 className="text-2xl font-bold text-slate-900">
                  Modern
                </h3>

                <p className="mt-2 text-slate-600">
                  Using the latest web technologies and best practices.
                </p>
              </div>
            </div>

            <button className="mt-10 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700">
              Let's Work Together
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
const FAQ = () => {
  return (
    <section className="bg-white py-24" id="faq">
      <div className="mx-auto max-w-4xl px-6">
        {/* Header */}
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            FAQ
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Have questions? Here are answers to some of the most common
            questions clients ask before starting a project.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="mt-16 space-y-6">
          {/* FAQ 1 */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-blue-200">
            <h3 className="text-lg font-semibold text-slate-900">
              How long does it take?
            </h3>

            <p className="mt-3 text-slate-600">
              Usually <strong>1–4 weeks</strong> depending on the project's
              complexity, required features, and feedback cycle.
            </p>
          </div>

          {/* FAQ 2 */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-blue-200">
            <h3 className="text-lg font-semibold text-slate-900">
              Do you provide hosting?
            </h3>

            <p className="mt-3 text-slate-600">
              Yes. We can help set up, deploy, and manage hosting for your
              website or web application.
            </p>
          </div>

          {/* FAQ 3 */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-blue-200">
            <h3 className="text-lg font-semibold text-slate-900">
              Can you redesign my existing website?
            </h3>

            <p className="mt-3 text-slate-600">
              Yes. We can modernize your existing website, improve its
              performance, enhance the user experience, and make it fully
              responsive.
            </p>
          </div>

          {/* FAQ 4 */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-blue-200">
            <h3 className="text-lg font-semibold text-slate-900">
              Do you provide maintenance?
            </h3>

            <p className="mt-3 text-slate-600">
              Yes. We offer ongoing maintenance, bug fixes, security updates,
              performance optimization, and feature enhancements after launch.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-3xl bg-slate-900 p-10 text-center">
          <h3 className="text-2xl font-bold text-white">
            Still Have Questions?
          </h3>

          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            Let's discuss your project requirements and answer any questions
            you may have.
          </p>

          <button className="mt-6 rounded-xl bg-white px-6 py-3 font-semibold text-slate-900 transition hover:scale-105">
            Get Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
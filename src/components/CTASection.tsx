import { IoRocket } from "react-icons/io5";
const CTASection = () => {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-slate-900">
          {/* Background Decoration */}
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-indigo-600/20 blur-3xl" />

          <div className="relative px-8 py-16 text-center md:px-16 md:py-20">
            {/* Badge */}
            <span className="rounded-full inline-flex items-center gap-3 lg:text-xl bg-white/10 px-4 py-2  font-medium text-blue-300">
              <IoRocket/> Let's Work Together
            </span>

            {/* Heading */}
            <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-bold text-white md:text-5xl">
              Ready to Grow Your Business Online?
            </h2>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
              Let's build a website that helps you attract more customers,
              generate more leads, and establish a strong online presence.
            </p>

            {/* CTA Button */}
            <div className="mt-10">
              <button className="rounded-xl bg-white px-8 py-4 text-lg font-semibold text-slate-900 transition-all hover:scale-105">
                Book a Free Consultation
              </button>
            </div>

            {/* Trust Text */}
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-slate-400">
              <span>✓ Free Consultation</span>
              <span>✓ No Obligation</span>
              <span>✓ Fast Response</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
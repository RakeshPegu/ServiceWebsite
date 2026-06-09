import {GiAutoRepair} from 'react-icons/gi'
import { AiTwotoneThunderbolt } from 'react-icons/ai';
import {FaSearchengin, FaMobile} from 'react-icons/fa'
import { IoRocket } from "react-icons/io5";
const WhyChooseUs = () => {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-xl font-semibold text-blue-600">
            Why Choose Us
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            More Than Just a Website
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            We build modern, high-performing websites that help businesses
            establish credibility, attract customers, and grow online.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="rounded-3xl bg-white p-8 shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-2xl">
              <AiTwotoneThunderbolt/>
            </div>

            <h3 className="mt-6 text-xl font-bold text-slate-900">
              Fast Performance
            </h3>

            <p className="mt-3 text-slate-600">
              Optimized for speed to ensure a smooth experience and better
              conversion rates.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-3xl bg-white p-8 shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-2xl">
              <FaMobile/>
            </div>

            <h3 className="mt-6 text-xl font-bold text-slate-900">
              Fully Responsive
            </h3>

            <p className="mt-3 text-slate-600">
              Every website is designed to work perfectly across desktop,
              tablet, and mobile devices.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-3xl bg-white p-8 shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 text-2xl">
              <FaSearchengin/>
            </div>

            <h3 className="mt-6 text-xl font-bold text-slate-900">
              SEO Optimized
            </h3>

            <p className="mt-3 text-slate-600">
              Built with SEO best practices to help your business get found
              online.
            </p>
          </div>

          {/* Card 4 */}
          <div className="rounded-3xl bg-white p-8 shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-2xl">
              🎨
            </div>

            <h3 className="mt-6 text-xl font-bold text-slate-900">
              Custom Design
            </h3>

            <p className="mt-3 text-slate-600">
              Every project is tailored to match your brand and business
              goals.
            </p>
          </div>

          {/* Card 5 */}
          <div className="rounded-3xl bg-white p-8 shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-100 text-2xl">
              <IoRocket/>
            </div>

            <h3 className="mt-6 text-xl font-bold text-slate-900">
              Fast Delivery
            </h3>

            <p className="mt-3 text-slate-600">
              Efficient development process to launch your project quickly
              without compromising quality.
            </p>
          </div>

          {/* Card 6 */}
          <div className="rounded-3xl bg-white p-8 shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 text-2xl">
              <GiAutoRepair/>
            </div>

            <h3 className="mt-6 text-xl font-bold text-slate-900">
              Ongoing Support
            </h3>

            <p className="mt-3 text-slate-600">
              Continued assistance, updates, and maintenance to keep your
              website running smoothly.
            </p>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid gap-6 rounded-3xl bg-slate-900 p-10 text-center md:grid-cols-4">
          <div>
            <h3 className="text-4xl font-bold text-white">100%</h3>
            <p className="mt-2 text-slate-400">Responsive Design</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-white">Fast</h3>
            <p className="mt-2 text-slate-400">Project Delivery</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-white">SEO</h3>
            <p className="mt-2 text-slate-400">Optimized Websites</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-white">24/7</h3>
            <p className="mt-2 text-slate-400">Support Available</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
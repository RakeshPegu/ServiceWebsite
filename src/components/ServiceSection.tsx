import {GiWireframeGlobe, GiShoppingCart, GiAutoRepair} from 'react-icons/gi'
import { AiTwotoneThunderbolt } from 'react-icons/ai';
function ServiceSection(){
    return(

  <section className="bg-slate-100 py-24" id='service'>
    <div className="mx-auto max-w-7xl px-6">

    {/* Header */}
    <div className="text-center  flex lg:flex-col gap-4 items-center">
      <span className="rounded-full bg-blue-50 lg:w-50 px-4 py-2 text-xl font-semibold text-blue-600">
        Our Services
      </span>

      <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
        Everything You Need to Build
        <span className="text-blue-600"> Your Online Presence</span>
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
        From simple business websites to complex web applications,
        we build solutions that help businesses grow online.
      </p>
    </div>

    {/* Service Cards */}
    <div className="mt-16 grid gap-8 lg:grid-cols-2">

      {/* Business Websites */}
      <div className="group rounded-3xl border border-gray-300 bg-white p-8 transition-all hover:-translate-y-2 hover:shadow-xl">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-2xl">
          <GiWireframeGlobe/>
        </div>

        <h3 className="text-2xl font-bold text-gray-900">
          Business Websites
        </h3>

        <p className="mt-3 text-gray-600">
          Professional websites designed to showcase your business,
          build credibility, and generate more leads.
        </p>

        <ul className="mt-6 space-y-3">
          <li>✓ Company Websites</li>
          <li>✓ Landing Pages</li>
          <li>✓ Portfolio Websites</li>
        </ul>
      </div>

      {/* E-Commerce */}
      <div className="group rounded-3xl border border-gray-300 bg-white p-8 transition-all hover:-translate-y-2 hover:shadow-xl">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-2xl">
          <GiShoppingCart/>
        </div>

        <h3 className="text-2xl font-bold text-gray-900">
          E-Commerce Websites
        </h3>

        <p className="mt-3 text-gray-600">
          Sell products online with secure payments,
          inventory tracking, and a seamless shopping experience.
        </p>

        <ul className="mt-6 space-y-3">
          <li>✓ Online Stores</li>
          <li>✓ Payment Integration</li>
          <li>✓ Inventory Management</li>
        </ul>
      </div>

      {/* Web Applications */}
      <div className="group rounded-3xl border border-gray-300 bg-white p-8 transition-all hover:-translate-y-2 hover:shadow-xl">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-200 text-2xl">
          <AiTwotoneThunderbolt/>
        </div>

        <h3 className="text-2xl font-bold text-gray-900">
          Web Applications
        </h3>

        <p className="mt-3 text-gray-600">
          Custom web applications tailored to your business workflows
          and operational needs.
        </p>

        <ul className="mt-6 space-y-3">
          <li>✓ Dashboards</li>
          <li>✓ Booking Systems</li>
          <li>✓ CRM Systems</li>
        </ul>
      </div>

      {/* Maintenance */}
      <div className="group rounded-3xl border border-gray-300 bg-white p-8 transition-all hover:-translate-y-2 hover:shadow-xl">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-300 text-2xl">
          <GiAutoRepair/>
        </div>

        <h3 className="text-2xl font-bold text-gray-900">
          Maintenance & Support
        </h3>

        <p className="mt-3 text-gray-600">
          Keep your website secure, updated, and running smoothly
          long after launch.
        </p>

        <ul className="mt-6 space-y-3">
          <li>✓ Bug Fixes</li>
          <li>✓ Hosting Support</li>
          <li>✓ Feature Updates</li>
        </ul>
      </div>

    </div>

    {/* Bottom CTA */}
    <div className="mt-16 rounded-3xl bg-slate-900 p-10 text-center">
      <h3 className="text-3xl font-bold text-white">
        Need a Custom Solution?
      </h3>

      <p className="mx-auto mt-4 max-w-2xl text-slate-300">
        Tell us about your project and we'll recommend the best solution
        for your business goals.
      </p>

      <button className="mt-8 rounded-xl bg-white px-8 py-4 font-semibold text-slate-900 transition hover:scale-105">
        Get Free Consultation
      </button>
    </div>

  </div>
</section>

    )
}
export default ServiceSection;
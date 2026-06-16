import {FaSearchengin, FaMobile} from 'react-icons/fa'
import { AiTwotoneThunderbolt } from 'react-icons/ai';
import { GiAutoRepair } from 'react-icons/gi';
 function HeroSection(){
    return(
     <section className="relative overflow-hidden bg-white ">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-25">
       <div className="grid items-center gap-16 lg:grid-cols-2">
      
       {/* Left Content */}
       <div className="flex flex-col gap-3">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center rounded-full border text-xl border-gray-200 bg-gray-50 px-4 py-2 font-medium text-gray-600">
           Professional Website Development
        </div>

        {/* Headline */}
        <h1 className="text-5xl font-bold tracking-tight text-gray-900 lg:text-6xl">
          Build a Website That
          <span className="block text-blue-600">
            Brings You More Customers
          </span>
        </h1>

        {/* What we do + Who we help */}
        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          We help businesses, startups, and local brands create modern,
          high-performing websites that attract customers, generate leads,
          and grow their online presence.
        </p>

        {/* Why choose us */}
        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="rounded-xl border border-gray-200 p-4">
            <p className="text-xl"><FaMobile/></p>
            <h3 className="mt-2 font-semibold">Mobile Friendly</h3>
            <p className="mt-1 text-sm text-gray-500">
              Looks perfect on every device.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 p-4">
            <p className="text-xl"><AiTwotoneThunderbolt/></p>
            <h3 className="mt-2 font-semibold">Fast Loading</h3>
            <p className="mt-1 text-sm text-gray-500">
              Optimized for speed and performance.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 p-4">
            <p className="text-xl"><FaSearchengin/></p>
            <h3 className="mt-2 font-semibold">SEO Optimized</h3>
            <p className="mt-1 text-sm text-gray-500">
              Help customers find your business online.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 p-4">
            <p className="text-xl"><GiAutoRepair/></p>
            <h3 className="mt-2 font-semibold">Ongoing Support</h3>
            <p className="mt-1 text-sm text-gray-500">
              We're here even after launch.
            </p>
          </div>
         </div>

        {/* CTA */}
        <div className="mt-10 flex flex-wrap gap-4">
          <button className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700">
            Get Free Consultation
          </button>

          <button className="rounded-xl border border-gray-300 px-6 py-3 font-medium text-gray-700 transition hover:bg-gray-50">
            View Portfolio
          </button>
        </div>
      </div>

      {/* Right Side Visual */}
      <div className="relative  lg:bottom-35 lg:left-15">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-2xl">
          
          {/* Browser Header */}
          <div className="mb-5 flex gap-2">
            <div className="h-3 w-3 rounded-full bg-red-400"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
            <div className="h-3 w-3 rounded-full bg-green-400"></div>
          </div>

          {/* Mock Website */}
          <div className="overflow-hidden rounded-2xl border border-gray-100">
            <div className="h-48 bg-linear-to-r from-blue-600 to-indigo-600"></div>

            <div className="space-y-4 p-6">
              <div className="h-6 w-3/4 rounded bg-gray-200"></div>
              <div className="h-4 w-full rounded bg-gray-100"></div>
              <div className="h-4 w-5/6 rounded bg-gray-100"></div>

              <div className="flex gap-3 pt-4">
                <div className="h-10 w-28 rounded-lg bg-blue-600"></div>
                <div className="h-10 w-28 rounded-lg bg-gray-200"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="absolute -left-6 top-12 rounded-2xl bg-white p-4 shadow-lg">
          <p className="text-2xl font-bold text-blue-600">+45%</p>
          <p className="text-sm text-gray-500">More Leads</p>
        </div>

        <div className="absolute -right-6 bottom-12 rounded-2xl bg-white p-4 shadow-lg">
          <p className="text-2xl font-bold text-green-600">98%</p>
          <p className="text-sm text-gray-500">Mobile Score</p>
        </div>
        </div>
       </div>
      </div>
     </section>    
    )
}
export default HeroSection;
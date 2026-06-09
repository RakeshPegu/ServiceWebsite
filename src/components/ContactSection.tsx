import {FaWhatsapp, FaLinkedinIn} from 'react-icons/fa'
import {MdOutlineMail} from 'react-icons/md'
const Contact = () => {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Contact Us
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Let's Build Something Amazing Together
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Have a project in mind? Fill out the form or reach out through
            your preferred channel. We'd love to hear about your ideas.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900">
              Send a Message
            </h3>

            <p className="mt-2 text-slate-600">
              Tell us about your project and we'll get back to you shortly.
            </p>

            <form className="mt-8 space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Project Type
                </label>
                <input
                  type="text"
                  placeholder="Business Website, Web App, E-commerce..."
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Project Details
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Methods */}
          <div className="flex flex-col gap-6">
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900">
                Get In Touch
              </h3>

              <p className="mt-2 text-slate-600">
                Prefer direct communication? Reach out using any of the
                channels below.
              </p>

              <div className="mt-8 space-y-4">
                {/* Email */}
                <div className="flex items-center gap-4 rounded-2xl border border-slate-200 p-5 transition hover:border-blue-200">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-2xl">
                    <MdOutlineMail/>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900">Email</h4>
                    <p className="text-slate-600">
                      RakeshPegu903@gmail.com
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center gap-4 rounded-2xl border border-slate-200 p-5 transition hover:border-green-200">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-2xl">
                    <FaWhatsapp/>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900">
                      WhatsApp
                    </h4>
                    <p className="text-slate-600">
                      +91 9387356020
                    </p>
                  </div>
                </div>

                {/* LinkedIn */}
                <a href='https://www.linkedin.com/in/rakeshpegu/'>
                <div className="flex items-center gap-4 rounded-2xl border border-slate-200 p-5 transition hover:border-blue-200 cursor-pointer ">
                                  
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-2xl">
                    <FaLinkedinIn/>
                  </div>
            
                 

                  <div>
                    <h4 className="font-semibold text-slate-900">
                      LinkedIn
                    </h4>
                    <p className="text-slate-600">
                      linkedin.com/in/yourprofile
                    </p>
                  </div>
                </div>
                </a>    
              </div>
            </div>

            {/* Response Time Card */}
            <div className="rounded-3xl bg-slate-900 p-8 text-white">
              <h3 className="text-2xl font-bold">
                Quick Response Guarantee
              </h3>

              <p className="mt-3 text-slate-300">
                We typically respond to inquiries within 24 hours.
                For urgent projects, WhatsApp is the fastest way to
                reach us.
              </p>

              <div className="mt-6 flex items-center gap-6">
                <div>
                  <h4 className="text-3xl font-bold">24h</h4>
                  <p className="text-slate-400">Response Time</p>
                </div>

                <div>
                  <h4 className="text-3xl font-bold">100%</h4>
                  <p className="text-slate-400">Free Consultation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
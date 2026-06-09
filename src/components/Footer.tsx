import {FaWhatsapp, FaLinkedinIn} from 'react-icons/fa'
import {MdOutlineMail} from 'react-icons/md'
const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a
              href="#"
              className="text-3xl font-bold text-white"
            >
              Rakesh<span className="text-blue-500">.</span>
            </a>

            <p className="mt-5 max-w-md leading-relaxed text-slate-400">
              Helping businesses build fast, responsive, and scalable
              websites using modern web technologies. From business
              websites to custom web applications, I create solutions
              that help businesses grow online.
            </p>

            {/* Social Links */}
            <div className="mt-8 flex gap-4">
              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 transition hover:bg-blue-600"
              >
                <FaLinkedinIn/>
              </a>

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 transition hover:bg-green-600"
              >
                <FaWhatsapp/>
              </a>

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 transition hover:bg-red-500"
              >
                <MdOutlineMail/>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="#about"
                  className="transition hover:text-white"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="transition hover:text-white"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="#portfolio"
                  className="transition hover:text-white"
                >
                  Portfolio
                </a>
              </li>

              <li>
                <a
                  href="#pricing"
                  className="transition hover:text-white"
                >
                  Pricing
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="transition hover:text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Contact
            </h3>

            <div className="mt-6 space-y-4">
              <div>
                <p className="text-sm text-slate-500">
                  Email
                </p>

                <p className="mt-1">
                  rakeshpegu903@gmail.com
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  WhatsApp
                </p>

                <p className="mt-1">
                  +91 9387356020
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  LinkedIn
                </p>

                <p className="mt-1">
                  <a href='https://www.linkedin.com/in/rakeshpegu/'>
                    https://www.linkedin.com/in/rakeshpegu/
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-slate-800" />

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} Rakesh. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="privacy_policy"
              className="transition hover:text-white"
            >
              Privacy Policy
            </a>

            <a
              href={'terms_of_service' }
              className="transition hover:text-white"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
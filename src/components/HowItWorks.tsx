import type React from 'react';
import {GiAutoRepair} from 'react-icons/gi'
import { IoIosCall } from "react-icons/io";
import { IoRocket } from "react-icons/io5";
import { MdOutlineLoop } from "react-icons/md";
import { TiDocumentText } from "react-icons/ti";
const HowItWorks = () => {
interface Steps{
  number:string,
  title:string,
  description:string,
  icon: string | React.ReactElement
}
 const steps:Steps[] = [
    {
      number: "01",
      title: "Discovery Call",
      description:
        "We discuss your business, goals, target audience, and project requirements.",
      icon: <IoIosCall/>,
    },
    {
      number: "02",
      title: "Requirement Analysis",
      description:
        "We analyze your needs and create a clear roadmap for the project.",
      icon: <TiDocumentText/>,
    },
    {
      number: "03",
      title: "Design & Development",
      description:
        "We design and build a modern, responsive solution tailored to your business.",
      icon: "🎨",
    },
    {
      number: "04",
      title: "Review & Feedback",
      description:
        "You review the project and provide feedback for final refinements.",
      icon: <MdOutlineLoop/>,
    },
    {
      number: "05",
      title: "Launch",
      description:
        "After approval, we deploy your website or application to production.",
      icon: <IoRocket/>,
    },
    {
      number: "06",
      title: "Ongoing Support",
      description:
        "We provide maintenance, updates, and technical support after launch.",
      icon: <GiAutoRepair/>,
    },
  ];

  return (
    <section className="bg-slate-50 py-24" id='process'>
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-xl font-semibold text-blue-600">
            How It Works
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            A Simple Process From Idea to Launch
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Our streamlined process ensures your project is delivered
            efficiently, professionally, and without unnecessary complexity.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-20">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 rounded-full bg-slate-200 lg:block" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`flex items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className="w-full lg:w-1/2">
                  <div
                    className={`rounded-3xl bg-white p-8 shadow-sm ${
                      index % 2 === 0 ? "lg:mr-12" : "lg:ml-12"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-2xl">
                        {step.icon}
                      </div>

                      <div>
                        <span className="text-sm font-semibold text-blue-600">
                          STEP {step.number}
                        </span>

                        <h3 className="text-2xl font-bold text-slate-900">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    <p className="mt-4 text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="relative hidden lg:flex">
                  <div className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white bg-blue-600 shadow-lg" />
                </div>

                {/* Empty Side */}
                <div className="hidden lg:block lg:w-1/2" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Summary */}
        <div className="mt-20 rounded-3xl bg-slate-900 p-10 text-center">
          <h3 className="text-3xl font-bold text-white">
            Transparent Process. Reliable Delivery.
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            From the first conversation to post-launch support, we work
            closely with you at every stage to ensure a successful outcome.
          </p>

          <button className="mt-8 rounded-xl bg-white px-8 py-4 font-semibold text-slate-900 transition hover:scale-105">
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
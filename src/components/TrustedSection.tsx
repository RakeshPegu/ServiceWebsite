import TechnologyCard from "../cards/technologyCard";

function TrustedSection(){
    return(

    <section className="bg-slate-300 py-20">
     <div className="mx-auto max-w-7xl px-6">

    {/* Heading */}
    <div className="text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
        Trusted By Growing Businesses
      </p>

      <h2 className="mt-3 text-4xl font-bold text-gray-900">
        Helping Businesses Build Their Online Presence
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-gray-600">
        From business websites to custom web applications, we deliver
        fast, modern, and responsive solutions designed to help businesses grow.
      </p>
    </div>

    {/* Stats */}
    <div className="mt-16 grid gap-6 md:grid-cols-4">

      <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
        <h3 className="text-4xl font-bold text-blue-600">25+</h3>
        <p className="mt-2 text-gray-600">Projects Delivered</p>
      </div>

      <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
        <h3 className="text-4xl font-bold text-blue-600">10+</h3>
        <p className="mt-2 text-gray-600">Technologies Used</p>
      </div>

      <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
        <h3 className="text-4xl font-bold text-blue-600">100%</h3>
        <p className="mt-2 text-gray-600">Responsive Design</p>
      </div>

      <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
        <h3 className="text-4xl font-bold text-blue-600">Fast</h3>
        <p className="mt-2 text-gray-600">Project Delivery</p>
      </div>

    </div>

    {/* Technologies */}
    <div className="mt-16">
      <h3 className="text-center text-lg font-semibold text-gray-900">
        Technologies We Work With
      </h3>

      <ul className="mt-8 flex flex-wrap justify-center gap-4">
        {[
          "React",
          "Next.js",
          "TypeScript",
          "Node.js",
          "Express",
          "MongoDB",
          "PostgreSQL",
          "Tailwind CSS",
          "Docker",
          "AWS",
        ].map((tech, index) => (
          <li key={index}><TechnologyCard name={tech}/></li>

        ))}
      </ul>
    </div>
    
 </div>
</section>

    )
}
export default TrustedSection;
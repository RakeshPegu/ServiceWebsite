
import sereneImage from '../assets/serene.png'
import portfolioImage from '../assets/portfolio.png'
import ProjectCard from '../cards/projectCard/projectCard';

const Portfolio = () => {
const projects = [
  {
    name: "Serene Smile",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    description: "Dental clinic website.",
    features: [
      "Appointment booking",
      "Contact form",
      "Responsive design",
      "SEO optimized",
    ],
    github: "https://github.com/...",
    live: "https://...",
    image: sereneImage,
  },

  {
    name: "Rakesh Portfolio",
    techStack: ["React", "Tailwind CSS", "GSAP", "JavaScript"],
    description:
      "A modern developer portfolio showcasing projects, skills, services, and contact information.",
    features: [
      "Responsive design",
      "Smooth GSAP animations",
      "Interactive project showcase",
      "Contact form integration",
      "Modern UI/UX",
      "SEO optimized",
    ],
    github: "https://github.com/...",
    live: "https://...",
    image: portfolioImage,
  },
];
   
  return (
    <section className="bg-slate-300 py-24" id='portfolio'>
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Our Portfolio
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Recent Projects We've Built
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Explore some of our recent work. From business websites to
            custom web applications, we create solutions that help
            businesses grow and succeed online.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          
          {projects.map((project, index)=>(
            <div key={index}>
              <ProjectCard name={project.name} imageName={project.image} description={project.description} techStack={project.techStack} href={project.live}/> 
            </div>
          )
          )}
          
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-slate-900">
            Have a Project in Mind?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Let's discuss your requirements and build something amazing
            together.
          </p>

          <button className="mt-8 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700">
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
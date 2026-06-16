
import TechStackCard from "../techStackCard/techStackCard"

function ProjectCard({name, description, techStack,imageName ,href}:{name:string, description:string, techStack:string[],imageName:string, href:string}){
    return(
            <div className="relative flex flex-col group overflow-hidden min-h-118 rounded-3xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl">
            <div className="flex relative  h-full items-center justify-center text-white text-xl font-semibold">
                <img src={imageName} alt="a screenshot of the project"/>
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
            </div>
           
            <div className="p-6">
              <ul className="mb-4 flex flex-wrap gap-2">
                {techStack.map((techName, index)=>(
                  <li key={index}><TechStackCard stackName={techName}/></li>           
                 
                ))}
                
              </ul>

              <h3 className="text-xl font-bold text-slate-900">
               {name}
              </h3>

              <p className="mt-3 text-slate-600 line-clamp-2">
                {description}
              </p>

              <button className="mt-6 font-semibold text-blue-600 hover:text-blue-700">
                <a href={href} className="flex flex-row">
                View Project →
                </a>
              </button>
            </div>
          </div>
    )
}
export default ProjectCard
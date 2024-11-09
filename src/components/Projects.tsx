import SparklesText from "./magicui/sparkles-text";
import ProjectCards from "./ProjectCards";
import { ProjectInfo } from "./User";

const Projects = () => {
  return (
    <div className=" text-white px-24 xl-mx:px-20 bs-mx:px-0 " id="Projects" >
      <SparklesText text="Projects" className="text-4xl mb-12" />
      <div className="flex flex-wrap justify-center gap-9">
        {ProjectInfo.map((project: any, index: number) => (
          <ProjectCards
            key={index}
            title={project.title}
            desc={project.desc}
            image={project.image}
            live={project.live}
            link={project.link}
            github={project.github}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;

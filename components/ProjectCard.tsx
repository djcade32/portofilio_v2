import { MdOutlineOpenInNew } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { Project } from "@/interfaces";

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  const { title, image, description, techStack, liveDemoUrl, githubRepoUrl, imageAlt } = project;

  return (
    <div className="project-card bg-card border border-secondary rounded-2xl grid grid-cols-1 md:grid-cols-2">
      <div className="h-full overflow-hidden">
        <img className="w-full h-full object-cover" src={image} alt={imageAlt || title} />
      </div>
      <div className="p-10 flex flex-col justify-center">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-3 h-3 bg-accent rounded-full"></div>
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">
            Featured Project
          </span>
        </div>
        <h3 className="text-3xl font-bold mb-4">{title}</h3>
        <p className="text-gray-400 mb-6 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-background border border-accent/30 rounded-full text-sm text-accent"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <a
            href={liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-accent hover:text-white transition"
          >
            <MdOutlineOpenInNew size={20} />
            <span className="font-semibold">Live Demo</span>
          </a>
          <a
            href={githubRepoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition"
          >
            <FaGithub size={20} />
            <span className="font-semibold">View Code</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

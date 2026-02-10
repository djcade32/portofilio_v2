import ProjectCard from "@/components/ProjectCard";
import SectionTitle from "@/components/SectionTitle";
import PROJECTS from "@/content/projects";

const FeaturedWork = () => {
  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-8">
        <SectionTitle title="Featured Work" subtitle="Projects That Make an Impact" />
        <div className="space-y-12">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;

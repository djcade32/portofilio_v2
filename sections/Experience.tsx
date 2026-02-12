import ExperienceCard from "@/components/ExperienceCard";
import SectionTitle from "@/components/SectionTitle";
import EXPERIENCES from "@/content/experiences";
import { Experience as ExperienceInterface } from "@/interfaces";

function sortExperiences(experiences: ExperienceInterface[]) {
  return [...experiences].sort((a, b) => {
    // 1️⃣ Present always first
    const aIsPresent = a.endYear === "Present";
    const bIsPresent = b.endYear === "Present";

    if (aIsPresent && !bIsPresent) return -1;
    if (!aIsPresent && bIsPresent) return 1;

    // 2️⃣ Sort by startYear (descending)
    if (b.startYear !== a.startYear) {
      return b.startYear - a.startYear;
    }

    // 3️⃣ Within same year, items WITH endYear before ones without
    const aHasEndYear = a.endYear !== undefined;
    const bHasEndYear = b.endYear !== undefined;

    if (aHasEndYear && !bHasEndYear) return -1;
    if (!aHasEndYear && bHasEndYear) return 1;

    return 0;
  });
}

const Experience = () => {
  const EXPERIENCES_SORTED = sortExperiences(EXPERIENCES);

  return (
    <section id="experience" className="py-32 relative bg-card">
      <div className="max-w-7xl mx-auto px-8">
        <SectionTitle subtitle="Experience & Milestones" title="Journey" />

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-secondary" />

          <div className="space-y-16">
            {EXPERIENCES_SORTED.map((exp, idx) => (
              <ExperienceCard
                key={exp.title + idx}
                experience={exp}
                justify={idx % 2 > 0 ? "right" : "left"}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

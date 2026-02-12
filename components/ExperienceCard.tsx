import { Experience } from "@/interfaces";

interface Props {
  experience: Experience;
  justify?: "left" | "right";
}

const ExperienceCard = ({ experience, justify = "left" }: Props) => {
  const { title, description, startYear, endYear } = experience;

  const dateRange = endYear ? `${startYear} - ${endYear}` : startYear.toString();

  const rightSide =
    justify === "right" ? (
      <div className="text-left md:pl-8 lg:pl-12">
        <div className="bg-background border border-secondary rounded-xl p-8 inline-block">
          <span className="text-accent text-sm font-semibold">{dateRange}</span>
          <h3 className="text-2xl font-bold mt-2 mb-3">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </div>
      </div>
    ) : (
      <div className="hidden md:flex ml-16 lg:ml-20">
        <div className="timeline-dot"></div>
      </div>
    );

  const leftSide =
    justify === "left" ? (
      <div className="text-right md:pr-8 lg:pr-12">
        <div className="bg-background border border-secondary rounded-xl p-8 inline-block">
          <span className="text-accent text-sm font-semibold">{dateRange}</span>
          <h3 className="text-2xl font-bold mt-2 mb-3">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </div>
      </div>
    ) : (
      <div className="hidden md:flex mr-16 lg:mr-20 justify-end">
        <div className="timeline-dot"></div>
      </div>
    );

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 lg:gap-8 items-center">
      {leftSide}
      {rightSide}
    </div>
  );
};

export default ExperienceCard;

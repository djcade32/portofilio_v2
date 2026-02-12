import { Experience } from "@/interfaces";

interface Props {
  experience: Experience;
  justify?: "left" | "right";
}

const ExperienceCard = ({ experience, justify = "left" }: Props) => {
  const { title, description, startYear, endYear } = experience;

  const dateRange = endYear ? `${startYear} - ${endYear}` : startYear.toString();

  const card = (
    <div className="bg-background border border-secondary rounded-xl p-8 inline-block">
      <span className="text-accent text-sm font-semibold">{dateRange}</span>
      <h3 className="text-2xl font-bold mt-2 mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );

  const dot = (dotClass: string) => (
    <div className={`hidden md:flex ${dotClass}`}>
      <div className="timeline-dot"></div>
    </div>
  );

  const leftSide =
    justify === "left" ? (
      <div className="text-right md:pr-8 lg:pr-12">{card}</div>
    ) : (
      dot("mr-16 lg:mr-20 justify-end")
    );

  const rightSide =
    justify === "right" ? (
      <div className="text-left md:pl-8 lg:pl-12">{card}</div>
    ) : (
      dot("ml-16 lg:ml-20")
    );

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 lg:gap-8 items-center">
      {leftSide}
      {rightSide}
    </div>
  );
};

export default ExperienceCard;

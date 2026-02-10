import TechCard from "@/components/TechCard";
import React from "react";
import TECH_STACK from "@/content/tech";
import SectionTitle from "@/components/SectionTitle";

const Tech = () => {
  return (
    <section id="tech-stack" className="py-32 relative bg-card">
      <div className="max-w-7xl mx-auto px-8">
        <SectionTitle title="Tech Stack" subtitle="Technologies I Work With" />

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
          {TECH_STACK.map(({ Icon, iconColor, name }) => (
            <TechCard key={name} name={name} icon={Icon} iconColor={iconColor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tech;

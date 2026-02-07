import TechCard from "@/components/TechCard";
import React from "react";
import TECH_STACK from "@/content/tech";

const Tech = () => {
  return (
    <section id="tech-stack" className="py-32 relative bg-card">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">
            Tech Stack
          </span>
          <h2 className="text-5xl font-bold mt-4 mb-6">Technologies I Work With</h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

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

import React from "react";

interface Props {
  title: string;
  subtitle: string;
}

const SectionTitle = ({ title, subtitle }: Props) => {
  return (
    <div className="text-center mb-20">
      <span className="text-accent text-sm font-semibold tracking-wider uppercase">{title}</span>
      <h2 className="text-5xl font-bold mt-4 mb-6">{subtitle}</h2>
      <div className="w-24 h-1 bg-accent mx-auto"></div>
    </div>
  );
};

export default SectionTitle;

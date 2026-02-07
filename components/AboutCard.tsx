import { LucideProps } from "lucide-react";
import React, { ForwardRefExoticComponent, RefAttributes } from "react";

interface Props {
  title: string;
  description: string;
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  filledIcon?: boolean;
}

const AboutCard = ({ title, description, icon, filledIcon = false }: Props) => {
  const iconProp = () => {
    let prop: LucideProps = {
      size: 40,
      className: "text-accent",
    };
    if (filledIcon) {
      prop = {
        ...prop,
        fill: "var(--accent)",
        strokeWidth: 1,
        color: "#312A1F",
      };
    }

    return prop;
  };

  return (
    <div className="bg-card border border-secondary rounded-2xl p-10 relative overflow-hidden group hover:border-accent/50 transition">
      <div className="absolute inset-0 chart-pattern opacity-30"></div>
      <svg className="absolute bottom-0 right-0 w-64 h-32 opacity-5" viewBox="0 0 200 100">
        <path d="M0,80 Q50,20 100,50 T200,40" stroke="#fbb53d" stroke-width="2" fill="none"></path>
      </svg>
      <div className="relative z-10">
        <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
          {React.createElement(icon, iconProp())}
        </div>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default AboutCard;

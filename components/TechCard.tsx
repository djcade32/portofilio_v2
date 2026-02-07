import React from "react";
import { IconType } from "react-icons";

interface Props {
  name: string;
  icon: IconType;
  iconColor?: string;
}

const TechCard = ({ name, icon, iconColor }: Props) => {
  return (
    <div className="tech-card bg-background border border-secondary rounded-xl p-8 text-center">
      <div className="mx-auto mb-4 flex items-center justify-center">
        {React.createElement(icon, {
          size: 80,
          ...(iconColor && { className: iconColor }),
        })}
      </div>
      <h3 className="font-semibold text-lg">{name}</h3>
    </div>
  );
};

export default TechCard;

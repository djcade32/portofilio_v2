import React from "react";

interface props {
  type?: "Primary" | "Secondary" | "Ghost";
  children: React.ReactNode;
}

const Button = ({ type = "Primary", children }: props) => {
  const classes: { [type]: string } = {
    Primary: "bg-accent text-background hover:opacity-90",
    Ghost: "transparent hover:bg-accent hover:text-background border-2 border-accent text-accent",
    Secondary: "bg-secondary hover:opacity-90",
  };
  return (
    <button
      className={`px-6 py-2.5 font-semibold rounded-lg transition cursor-pointer ${classes[type]} duration-200`}
    >
      {children}
    </button>
  );
};

export default Button;

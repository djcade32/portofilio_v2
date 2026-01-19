import Link from "next/link";
import React from "react";

interface props {
  title: string;
}

const NavLink = ({ title }: props) => {
  return (
    <li className="text-gray-300 hover:text-white transition-all duration-200 group font-semibold relative">
      <Link href={`#${title.toLowerCase().replace(/\s+/g, "-")}`}>{title}</Link>
      <div className="bg-accent w-0 h-0.75 group-hover:w-full transition-[width] duration-200 mt-0.5 absolute" />
    </li>
  );
};

export default NavLink;

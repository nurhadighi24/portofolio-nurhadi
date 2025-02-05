import React from "react";
import Button from "./button";
import NavButton from "./navButton";

export default function Navbar() {
  return (
    <div className="bg-gray-800 py-5 px-10 shadow-md sticky top-0 z-50">
      <div className="flex justify-center gap-10">
        <NavButton section="profile" label="Profile" />
        <NavButton section="techstack" label="Tech Stack" />
        <NavButton section="projects" label="Projects" />
        <NavButton section="footer" label="Social Media" />
      </div>
    </div>
  );
}

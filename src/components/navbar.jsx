import React from "react";
import Button from "./button";

export default function Navbar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-slate-200 mx-10 my-10 px-5 py-5 rounded-lg top-1 sticky">
      <div className="flex justify-around items-center">
        <Button
          buttonName="Profile"
          onClick={() => scrollToSection("profile")}
        />
        <Button
          buttonName="Projects"
          onClick={() => scrollToSection("projects")}
        />
        <Button
          buttonName="Social Media"
          onClick={() => scrollToSection("footer")}
        />
      </div>
    </div>
  );
}

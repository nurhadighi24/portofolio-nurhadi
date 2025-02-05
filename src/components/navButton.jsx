import React from "react";

export default function NavButton({ section, label }) {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <button
      className="text-gray-300 hover:text-white transition"
      onClick={() => scrollToSection(section)}
    >
      {label}
    </button>
  );
}

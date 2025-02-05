import React from "react";

export default function ProjectCard({ videoSrc, imgSrc, title, link }) {
  return (
    <div className="bg-gray-900 w-[30rem] p-5 rounded-lg shadow-md hover:shadow-lg transition">
      {videoSrc ? (
        <video controls className="w-full rounded-lg">
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag
        </video>
      ) : (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={imgSrc} alt={title} className="w-full rounded-lg" />
        </a>
      )}
      <p className="text-center font-bold mt-3">{title}</p>
    </div>
  );
}

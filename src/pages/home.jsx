import React from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
} from "react-icons/fa";
import { SiVercel, SiTailwindcss } from "react-icons/si";
import Navbar from "../components/navbar";
import ProjectCard from "../components/projectCard";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* NAVBAR */}
      <Navbar />

      {/* PROFILE SECTION */}
      <div
        className="bg-gray-800 md:flex justify-evenly items-center py-20 px-10"
        id="profile"
      >
        <div className="text-2xl w-1/2">
          <p className="text-gray-300">Halo, nama saya</p>
          <span className="font-bold text-4xl text-white">
            Nurhadi Ghifari Ramadhan
          </span>
          <p className="text-gray-300 text-lg mt-2">
            Saya seorang{" "}
            <span className="font-bold text-white">Fresh Graduate</span> yang
            mempunyai keahlian di bidang{" "}
            <span className="font-bold text-white">
              Front-End Web Development
            </span>
            .
          </p>
        </div>
        <div className="py-3">
          <img
            src="/pp1.jpg"
            alt="foto porto"
            className="rounded-lg w-[25rem] border-4 border-gray-700"
          />
        </div>
      </div>

      {/* TECH STACK SECTION */}
      <div className="bg-gray-700 py-20 text-center" id="techstack">
        <h1 className="text-3xl font-bold mb-5">Tech Stack</h1>
        <div className="flex justify-center gap-10 text-5xl">
          <FaHtml5 className="text-orange-500" />
          <FaCss3Alt className="text-blue-500" />
          <FaJs className="text-yellow-400" />
          <FaReact className="text-blue-300" />
          <SiTailwindcss className="text-teal-400" />
          <SiVercel className="text-white" />
        </div>
      </div>

      {/* PROJECT SECTION */}
      <div
        className="bg-gray-800 md:grid md:grid-cols-3 gap-5 md:p-10 p-5"
        id="projects"
      >
        <h1 className="text-white text-center font-extrabold text-3xl col-span-3">
          MY PROJECTS
        </h1>
        <ProjectCard
          videoSrc="sr-gr-bca.mp4"
          title="BCA Ashique Fest 2024 - Web Undian"
        />
        <ProjectCard
          imgSrc="ss-propertease.jpg"
          title="PROPERTEASE - Marketplace Properti"
          link="https://propertease-two.vercel.app/"
        />
        <ProjectCard
          imgSrc="ss-disappear.jpg"
          title="DISAPPEAR - Capstone Project Alterra Academy (Landing Page dan Admin)"
          link="https://frontend-disappear.vercel.app/"
        />
        <ProjectCard
          imgSrc="ss-siap-lapor.jpg"
          title="SIAPLAPOR! - Mini Project Alterra Academy"
          link="https://mini-project-siaplapor.vercel.app/"
        />
        <ProjectCard
          imgSrc="ss-pkumi.jpg"
          title="PKUMI"
          link="https://grandprize-admin.my.id/"
        />
        <ProjectCard
          imgSrc="ss-lapor-yuks.jpg"
          title="Lapor Yuks - Admin Lapor Yuks"
          link="/"
        />
        <ProjectCard
          imgSrc="ss-equalitech.jpg"
          title="Equalitech - Capstone Project Dicoding Indonesia"
          link="https://equaliteach.netlify.app/"
        />
        <ProjectCard
          imgSrc="ss-movie-catalogue.jpg"
          title="Movie Catalogue"
          link="https://meek-biscuit-c944fb.netlify.app/"
        />
      </div>

      {/* FOOTER SECTION */}
      <footer
        className="bg-gray-900 flex items-center justify-center gap-5 py-10 border-t border-gray-700"
        id="footer"
      >
        <a
          href="https://www.linkedin.com/in/nurhadi-ghifari-ramadhan-27b507207/"
          className="text-blue-500 hover:text-blue-400"
        >
          <FaLinkedin className="text-3xl" />
        </a>
        <a
          href="https://www.instagram.com/nurhadighifari/"
          className="flex items-center text-pink-500 hover:text-pink-400"
        >
          <FaInstagram className="text-3xl" />
          <p className="font-bold ml-2">@nurhadighifari</p>
        </a>
      </footer>
    </div>
  );
}

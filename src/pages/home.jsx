import React from "react";
import Navbar from "../components/navbar";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <div className="">
      {/* NAVBAR */}
      <Navbar />
      {/* PROFILE SECTION */}
      <div className="bg-lime-50 flex justify-evenly items-center" id="profile">
        <div className="text-2xl w-1/2">
          Halo, nama saya{" "}
          <span className="font-bold">Nurhadi Ghifari Ramadhan</span>. Saya
          seorang <span className="font-bold">Fresh Graduate</span> dan
          mempunyai ahli di bidang{" "}
          <span className="font-bold">Front-End Web Development</span>.
        </div>
        <div className="py-3">
          <img
            src="/pp1.jpg"
            alt="foto porto"
            className="rounded-lg w-[25rem]"
          />
        </div>
      </div>
      {/* PROJECT SECTION */}
      <div className="bg-lime-100 grid grid-cols-3 pt-10" id="projects">
        <div className="mx-5 bg-white w-[30rem] drop-shadow-md rounded-md">
          <video controls className="w-[27rem] rounded-md m-auto pt-3">
            <source src="sr-gr-bca.mp4" type="video/mp4" />
            Your browser does not support the video tag
          </video>
          <p className="font-bold py-3 text-center">
            BCA Ashique Fest 2024 "EDC dufan ceria", Web undian Dooprize dan
            Grandprize
          </p>
        </div>
        <h1 className="text-black text-center font-extrabold text-3xl pt-5">
          MY PROJECT
        </h1>
        <a
          className=" bg-white w-[28rem] drop-shadow-md rounded-md hover:drop-shadow-2xl transition-all"
          href="https://propertease-two.vercel.app/"
        >
          <img
            src="ss-propertease.jpg"
            alt="pp"
            className="w-[27rem] m-auto pt-3"
          />
          <p className="font-bold py-3 text-center ">
            PROPERTEASE, Marketplace Properti berbasis web
          </p>
        </a>
        <a
          className="mx-5 bg-white w-[30rem] drop-shadow-md rounded-md my-3 hover:drop-shadow-2xl transition-all"
          href="https://frontend-disappear.vercel.app/"
        >
          <img
            src="ss-disappear.jpg"
            alt=""
            className="w-[27rem] m-auto pt-3"
          />
          <p className="font-bold py-3 text-center ">
            DISAPPEAR, Capstone Project Alterra Academy
          </p>
        </a>
      </div>
      {/* FOOTER SECTION */}
      <footer
        className="bg-white flex items-center justify-center gap-5 py-10"
        id="footer"
      >
        <a
          href="https://www.linkedin.com/in/nurhadi-ghifari-ramadhan-27b507207/"
          className="drop-shadow-md hover:drop-shadow-xl"
        >
          <FaLinkedin className="text-3xl drop-shadow-md hover:drop-shadow-xl" />
        </a>
        <a
          href="https://www.instagram.com/nurhadighifari/"
          className="flex items-center"
        >
          <FaInstagram className="text-3xl" />
          <p className="font-bold">@nurhadighifari</p>
        </a>
      </footer>
    </div>
  );
}

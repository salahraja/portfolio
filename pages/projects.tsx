import React, { useState, useEffect } from "react";
import Iframe from "react-iframe";
import Footer from "../components/footer";
import NavBarTwo from "../components/nav2";

const Projects = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <>
      <div className="pb-[6rem]">
        <NavBarTwo />
      </div>
      <div className="">
        <h1 className="text-4xl pl-2 font-bold  text-[#e81017] sm:text-5xl md:text-6xl">
          <span className="block xl:inline">My</span>{" "}
          <span className="block text-gray-900">Projects.</span>
        </h1>
        <div className="pt-[6vh]"><Iframe url="https://darling-longma-eb7d58.netlify.app/"
        width="640px"
        height="320px"
        id=""
        className=""
        display="block"
        position="relative"/></div>
      </div>
      <Footer />
    </>
  );
};

export default Projects;

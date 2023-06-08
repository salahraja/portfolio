import NewCard from "../components/card";
import React, { useState, useEffect } from "react";
import Footer from "../components/footer";
import NavBarTwo from "../components/nav2";
import Head from "next/head";

const Projects = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <>
      <div className="pb-[6rem] dark:bg-black bg-[#F5EDDD]">
        <span className="">
          <NavBarTwo />
        </span>
      </div>
      <div className="dark:bg-black bg-[#F5EDDD]">
        <h1 className="text-4xl pl-2 font-bold  text-[#58A4B0] sm:text-5xl md:text-6xl">
          <span className="block xl:inline">My</span>{" "}
          <span className="block text-gray-900 dark:text-white">Projects.</span>
        </h1>
        <NewCard />
      </div>
      <Footer />
    </>
  );
};

export default Projects;

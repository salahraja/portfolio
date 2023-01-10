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
      <div className="pb-[6rem]">
        <NavBarTwo />
      </div>
      <div className="">
        <h1 className="text-4xl pl-2 font-bold  text-[#e81017] sm:text-5xl md:text-6xl">
          <span className="block xl:inline">My</span>{" "}
          <span className="block text-gray-900">Projects.</span>
        </h1>
        <NewCard />
      </div>
      <Footer />
    </>
  );
};

export default Projects;

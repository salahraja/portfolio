import React, { useState, useEffect } from "react";

import NavBar from "../components/nav";
import Footer from "../components/footer";

const About = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <>
      <div className="pb-[6rem]">
        <NavBar />
      </div>
      <div className="">
        <h1 className="text-4xl pl-2 font-bold  text-[#e81017] sm:text-5xl md:text-6xl">
          <span className="block xl:inline">About</span>{" "}
          <span className="block text-gray-900">Us.</span>
        </h1>
        <div className="flex flex-row  max-w-md text-base text-gray-900 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
          <div className="pb-[22rem] pl-3 w-screen">
            <div className="inline text-[#e81017]">Beyond consulting</div> a
            partner for transformation and growth. Open Source Policy and
            Community Development Support – Altech technologists and engineers
            are active contributors and advocates supporting the Open Source
            Policy and Community Development.{" "}
            <div className=" bg-white ">
              <p className="mt-4 text-gray-800">
                {" "}
                Our efforts across various projects (
                <div className="text-[#e81017] inline">
                  DARPA<p className="inline text-gray-900">,</p> JPL
                  <p className="inline text-gray-900">,</p> NASA
                </div>
                ) have advanced the use of state-of-the-art open source
                practices for the government sector and enhanced the it
                prevalence in terms of use, understanding, and community
                development.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
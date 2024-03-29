import React, { useState, useEffect } from "react";
import Footer from "../components/footer";
import NavBarTwo from "../components/nav2";

const About = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <>
      <div className="pb-[6rem] dark:bg-[#1B1B1E] bg-[#F5EDDD]">
        <NavBarTwo />
      </div>
      <div className="dark:bg-[#1B1B1E] bg-[#F5EDDD] flex flex-col items-center">
        <h1 className="text-4xl pl-2 font-bold pb-5 dark:text-[#f5f5f5] text-[#1B1B1E] sm:text-5xl md:text-6xl">
          <span className="inline xl:inline">About</span>{" "}
          <span className="inline text-[#1B1B1E] dark:text-white ">Me</span>
          <span className="text-black drop-shadow-xl">.</span>
        </h1>
        <div className="flex flex-row  max-w-md text-base text-gray-900 dark:text-white sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
          <div className="pb-[22rem] pl-3 w-screen">
            Hi, my name is{" "}
            <div className="inline text-[#51344D] dark:text-[#F5EDDD]">
              Salah
            </div>
            ! I grew up in Chicago&apos;s inner city before moving to the
            suburbs where I am now. I am also a big fan of European
            football(soccer) via Juventus. I have worked as a Starbucks barista
            and an Uber driver. Both these job experiences have been dear to me
            as they have taught me to communicate and taught me how meaningful
            interactions with my fellow humans are. I love Pokemon, I LOVE The
            Office, and most importantly I love technology!{" "}
            <div className=" bg-white ">
              <p className="mt-4 dark:bg-[#1B1B1E] dark:text-white bg-[#F5EDDD] text-gray-800">
                {" "}
                I have had the pleasure of working at various tech companies
                such as
                <div className="text-[#51344D] dark:text-[#F5EDDD] inline">
                  {" "}
                  Zero Grocery
                  <p className="inline text-gray-900">
                    <span className="dark:text-white">,</span>
                  </p>{" "}
                  Launchgood
                  <p className="inline text-gray-900">
                    <span className="dark:text-white">,</span>
                  </p>{" "}
                  Consilient{" "}
                </div>
                These experiences have been critical to my technical and
                professional growth.{" "}
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

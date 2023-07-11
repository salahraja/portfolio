import React, { useState, useEffect } from "react";
import Footer from "../components/footer";
import NavBarTwo from "../components/nav2";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <>
      <div className="pb-[6rem] dark:bg-[#1B1B1E] bg-[#F5EDDD]">
        <NavBarTwo />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 dark:bg-[#1B1B1E]">
        {/* First Card */}
        <div className="bg-white dark:bg-[#1B1B1E] border border-gray-200 rounded-lg mb-[106px] shadow-md">
          <div className="relative w-full">
            <Image
              src="/serieasite.png"
              alt="Serie A website"
              width={1060}
              height={445}
              className="rounded-t-lg"
            />
          </div>
          <div className="p-5 mt-[22px]">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Serie A website
            </h5>
            <p className="mb-3 text-gray-700 dark:text-gray-400">
              Using Next.js and Tailwind CSS with TypeScript and React, I have
              created a website to track the table and latest match fixtures for
              Italys top football league, Serie A.
            </p>
            <div className="flex items-center dark:invert">
              Link
              <Link
                href={"https://football-scores-seven.vercel.app/"}
                target={"_blank"}
              >
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
        {/* Second Card */}
        <div className="bg-white dark:bg-[#1B1B1E] border border-gray-200 rounded-lg mb-[106px] shadow-md">
          <div className="relative w-full">
            <Image
              src="/npmer.png"
              alt="Serie A website"
              width={1060}
              height={445}
              className="rounded-t-lg"
            />
          </div>
          <div className="p-5 mt-[22px]">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Npmer
            </h5>
            <p className="mb-3 text-gray-700 dark:text-gray-400">
              Using Next.js and Tailwind CSS with TypeScript and React, I have
              created a website to track the table and latest match fixtures for
              Italys top football league, Serie A.
            </p>
            <div className="flex items-center dark:invert">
              Link
              <Link href={"https://npmer.vercel.app/"} target={"_blank"}>
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-white h-auto dark:bg-[#1B1B1E] border border-gray-200 rounded-lg shadow-md">
          <div className="relative">
            <Image
              src="/singlselect.png"
              alt="Multi-Step Registration"
              width={690}
              height={495}
              className="rounded-t-lg"
            />
          </div>
          <div className="p-5">
            <div className="pt-[6rem]">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Multi-Step Registration
              </h5>
              <p className="mb-3 text-gray-700 dark:text-gray-400">
                Using Vite with TypeScript and React, I have created a
                multi-step and multi-selection form for registration.
              </p>
            </div>
            <div className="flex items-center dark:invert">
              Link
              <Link
                href={"https://darling-longma-eb7d58.netlify.app/"}
                target={"_blank"}
              >
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;

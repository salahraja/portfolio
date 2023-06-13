import React from "react";
import Image from "next/image";
import Link from "next/link";

const NewCard = () => {
  return (
    <div className="flex space-x-4 p-3 pr-4 bg-[#F5EDDD] dark:bg-[#1B1B1E]">
      <div className="border border-gray-200 rounded-lg shadow-md flex flex-col p-8 bg-[#F5EDDD] dark:bg-[#1B1B1E]">
        <Link href="https://darling-longma-eb7d58.netlify.app" passHref>
          <div>
            <Image
              src="/singlselect.png"
              alt="Email+Password login screenshot for my project"
              width={690}
              height={445}
              className="rounded-lg"
            />
          </div>
        </Link>
        <div className="p-5">
          <Link href="https://darling-longma-eb7d58.netlify.app" passHref>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white cursor-pointer">
              Multi-Step Registration
            </h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Using Vite with TypeScript and React, I have created a
            multi-selection and stepped form for registration!
          </p>
          <Link href="https://darling-longma-eb7d58.netlify.app" passHref>
            <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#58A4B0] rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 cursor-pointer">
              Link
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
            </div>
          </Link>
        </div>
      </div>
      <div className="border border-gray-200 rounded-lg shadow-md flex flex-col p-8 bg-[#F5EDDD] dark:bg-[#1B1B1E]">
        <Link href="https://football-scores-seven.vercel.app/" passHref>
          <div>
            <Image
              src="/serieasite.png"
              alt="Email+Password login screenshot for my project"
              width={690}
              height={445}
              className="rounded-lg"
            />
          </div>
        </Link>
        <div className="p-5">
          <Link href="https://football-scores-seven.vercel.app/" passHref>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white cursor-pointer">
              Serie A website
            </h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Using Next.js and Tailwind CSS with TypeScript and React, I have
            made a website tracking the table and latest match fixtures for
            Italys top football league, Serie A.
          </p>
          <Link href="https://football-scores-seven.vercel.app/" passHref>
            <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#58A4B0] rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 cursor-pointer">
              Link
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
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewCard;

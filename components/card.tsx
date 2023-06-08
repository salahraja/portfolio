import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function NewCard() {
  return (
    <div className="flex space-x-4 p-3 pr-4 dark:bg-black bg-[#F5EDDD]">
      <div className=" dark:bg-black bg-[#F5EDDD] border border-gray-200 rounded-lg shadow-md flex flex-col p-8">
        <Link href={"https://darling-longma-eb7d58.netlify.app"}>
          <Image
            src="/singlselect.png"
            alt="Email+Password login screenshot for my project"
            width={690}
            height={445}
            className="invert-0 rounded-lg"
          />
        </Link>
        <div className="p-5">
          <Link href={"https://darling-longma-eb7d58.netlify.app"}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Multi-Step Registration
            </h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Using Vite with TypeScript and React I&apos;ve created a
            Multi-selection and stepped form for registration!
          </p>
          <Link href={"https://darling-longma-eb7d58.netlify.app"}>
            <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#58A4B0] rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300">
              <a target="_blank" rel="noopener noreferrer">
                Link
              </a>
              <svg
                aria-hidden="true"
                className="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </Link>
        </div>
      </div>
      <div className=" dark:bg-black bg-[#F5EDDD] border border-gray-200 rounded-lg shadow-md flex flex-col p-8">
        <Link href={"https://football-scores-seven.vercel.app/"}>
          <Image
            src="/serieasite.png"
            alt="Email+Password login screenshot for my project"
            width={690}
            height={445}
            className="invert-0 rounded-lg"
          />
        </Link>
        <div className="p-5">
          <Link href={"https://football-scores-seven.vercel.app/"}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Serie A website
            </h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Using Next.js and TailwinCSS with TypeScript and React I&apos;ve
            made a website tracking the table and latest match fixtures for
            Italy&apos;s top football league, Serie A.
          </p>
          <Link href={"https://football-scores-seven.vercel.app/"}>
            <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#58A4B0] rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300">
              <a target="_blank" rel="noopener noreferrer">
                Link
              </a>
              <svg
                aria-hidden="true"
                className="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

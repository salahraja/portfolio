import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NavBar from "../components/nav";
import Footer from "../components/footer";
import Link from "next/link";

const Home = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <>
      <Head>
        <title>Salah&apos;s Website</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="fixed ">
        <NavBar />
        <Link href={"/"}>
          <div className="col-span-1 -mt-[7vh] ">
            <div className="max-[640px]:h-[1px] max-[640px]:w-[8vw]">
              <Image
                src="/clearsalah.png"
                alt="Hand drawn full body avatar of me in hoody & jeans with glasses & Kufi"
                width={80}
                height={145}
              />
              </div>
          </div>
        </Link>
      </div>
      <div className="">
        <div className="w-full xs:h-[550px] lg:h-[220px] md:h-[200px] sm:h-[200px]"></div>

        <div className="text-center">
          <div>
            <h1 className="text-4xl mb-2 font-bold tracking-tight text-[#e81017] sm:text-5xl md:text-6xl">
              <span className="max-[640px]:pt-[9.7vh] block xl:inline ">My</span>{" "}
              <span className="block">
                Portfolio<div className="inline text-black">.</div>
              </span>
            </h1> <div className="text-center whitespace-nowrap inline-block max-w-sm text-base text-gray-900 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
            <div className="inline text-light">
              &quot;Michael always says K-I-S-S. Keep it simple, stupid.&quot;
            </div>
            <div className="text-[#e81017]"><div className="text-black inline">{"— "} </div>Dwight K. Schrute</div>
          </div>
          </div>
        </div>
        <div className="bg-white">
         
          <div className="px-4 py-5 sm:p-6">
            {/* Content goes here */}

            <div className="relative">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              ></div>
            </div>
            <div className="w-full flex flex-col justify-center text-center pr-3 py-8">
              <p className="w-max-md text-gray-900 text-lg whitespace-pre-wrap tracking-wide leading-snug font-extralight sm:w-full xs:w-full">
                Welcome to my portfolio website! I am a junior software engineer
                with a passion for problem-solving and creating innovative
                solutions. On this site, you will find a selection of my
                projects and technical skills. I have a strong foundation in
                software development and QA testing, with experience working on
                TailwindCSS, Typescript, Next.js, Node.js, among others.
                <div className="pt-9"></div>I am constantly learning and
                expanding my skillset, and am always looking for new challenges.
                In my previous work and personal projects, I have had the
                opportunity to work on a variety of projects, ranging from
                desktop applications to web development. I am excited to share
                some of my notable projects with you, and hope that they give
                you a sense of my capabilities and potential as a software
                engineer. Thank you for visiting my website. If you have any
                questions or would like to discuss potential opportunities,
                please don&apos;t hesitate to contact me.</p>
               
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-light grid grid-cols-2 gap-4 pl-[26rem] place-content-center h-[5rem] relative">
            {/* &rdquo;I&apos;m a Frontend Developer&rdquo; */}
          </h1>
          {/* <p>Hi</p><div className="mt-3 flex flex-col justify-center"></div> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;

import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NavBar from "../components/nav";
import Footer from "../components/footer";
import Link from "next/link";
import TypeWriter from "../components/typewriter";

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
      <div className="dark:bg-[#1B1B1E] bg-[#F5EDDD] max-[1100px]:font-bold">
        <div className="">
          {" "}
          <NavBar />
        </div>{" "}
        <Link href={"/"}>
          {" "}
          <div className="col-span-1 mt-[1rem]">
            <div className="max-[640px]:h-[1px] max-[640px]:w-[4vw] sm:max-w-[4vw] md:max-w-[8vw]">
              <Image
                src="/clearsalah.png"
                alt="Hand drawn full body avatar of me in hoody & jeans with glasses & Kufi"
                width={80}
                height={145}
              />
            </div>
          </div>{" "}
        </Link>{" "}
        <div className="">
          {" "}
          <div className="w-screen xs:h-[550px] lg:h-[220px] md:h-[200px] sm:-mt-[91px] md:-m-[144px]"></div>
          <div className="text-center mt-8">
            <div className="pl-6">
              <h1 className="text-4xl text-center mb-2 font-bold tracking-tight dark:text-[#f5f5f5] text-[#353935] sm:text-5xl md:text-6xl min-[767.8px]:pt[7rem] max-[767.8px]:mt-[7rem] max-[730px]:pt-[7.5rem] min-[168px]:text-white min-[68px]:text-green-500 min-[68px]:pt-[1rem]">
                <h2 className="max-[640px]:pt-[9.7vh] block xl:inline motion-safe:animate-fadeIn">
                  Assalaamalaikum & hello!
                </h2>{" "}
                <span className="block pt-10">
                  I&apos;m Salah & I build in
                  <div className="inline text-black">.</div>
                </span>
                <TypeWriter />
              </h1>
            </div>
            <div className="text-center mx-auto max-w-sm text-base text-gray-900 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
              <div className="inline text-light dark:text-[#f5f5f5]">
                &quot;Michael always says K-I-S-S. Keep it simple, stupid.&quot;
              </div>
            </div>
            <div className="dark:text-[#f5f5f5] text-[#353935]">
              <div className="dark:text-[#f5f5f5] text-[#353935] inline">
                {"— "}{" "}
              </div>
              Dwight K. Schrute
            </div>
            <div className="mt-8 px-4">
              <p className="text-lg text-gray-900 dark:text-white whitespace-pre-wrap tracking-wide leading-snug font-extralight sm:text-xl md:text-2xl lg:text-3xl">
                Welcome to my portfolio website! I am a junior software engineer
                with a passion for problem-solving and creating innovative
                solutions. On this site, you will find a selection of my
                projects and technical skills. I have a strong foundation in
                software development and QA testing, with experience working on
                Tailwind CSS, TypeScript, Next.js, Node.js, among others.
                <br />
                <br />I am constantly learning and expanding my skillset, and am
                always looking for new challenges. In my previous work and
                personal projects, I have had the opportunity to work on a
                variety of projects, ranging from desktop applications to web
                development. I am excited to share some of my notable projects
                with you, and hope that they give you a sense of my capabilities
                and potential as a software engineer. Thank you for visiting my
                website. If you have any questions or would like to discuss
                potential opportunities, please don&apos;t hesitate to contact
                me.
              </p>
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

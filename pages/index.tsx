import React, { useState, useEffect } from "react";
import Head from 'next/head'
import Image from "next/image";
import styles from '../styles/Home.module.css'
import NavBar from "../components/nav";
import Footer from "../components/footer";
import Link from "next/link";


const Home = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <>
      <div className="fixed">
        <NavBar />
      <Link href={"/"}>
         <div className="col-span-1">
          <Image
                src="/clearsalah.png"
                alt="Altech logo"
                width={80}
                height={145}
              />
          </div>
        </Link>
        </div>
      <div className="w-full xs:h-[150px] lg:h-[280px] md:h-[400px] sm:h-[200px]">
       
      </div>

      <div className="text-center">
        <div>
          <h1 className="text-4xl mb-2 font-bold tracking-tight text-[#e81017] sm:text-5xl md:text-6xl">
            <span className="block xl:inline">My</span>{" "}
            <span className="block">Portfolio<div className="inline text-black">.</div></span>
          </h1>
        </div>
        <div className="bg-white relative">
          <div className=" whitespace-nowrap inline-block max-w-md text-base text-gray-900 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
            <div className="inline text-light">&quot;Michael always says K-I-S-S. Keep it simple, stupid.&quot;</div> —<div className="text-[#e81017]"> Dwight K. Schrute</div>
          </div>
          <div className="px-4 py-5 sm:p-6">
            {/* Content goes here */}
            
            <div className="relative">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              ></div>
            </div>
            <div className="w-full flex flex-col justify-center pr-9 py-4">
              <p className="text-gray-900 text-lg whitespace-pre-wrap tracking-widest sm:w-full xs:w-full">
                We deliver scalable, flexible real-time data trends and
                analytics to enable informed and timely data-based decision
                making. Altech data scientists and SMEs have extensive
                experience in capturing, processing, managing, and analyzing
                complex data; decoupling architecture and providing
                information-model driven solutions.
                <div className="pt-9"></div>
                As we find tech sectors intersecting and growing together it is
                important for Altech to be at the forefront of the new age of
                technological intersectionality. If you-re looking up at the
                skies, looking towards the future, or trying to fix problems of
                the present — Here at Altech, you can expect
              </p>
            </div>
          </div>
        </div>
        <div>
          
          <h1 className="text-3xl font-light grid grid-cols-2 gap-4 pl-[26rem] place-content-center h-[5rem] relative">
            Our [Fill in]
          </h1>
          {/* <p>Hi</p><div className="mt-3 flex flex-col justify-center"></div> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;

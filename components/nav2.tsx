import Image from "next/image";
import React from "react";
import Link from "next/link";

function NavBarTwo() {
  return (
    <nav className="font-sans  py-2 px-6 bg-white bg-opacity-30 backdrop-blur-sm shadow sm:items-baseline w-screen">
      <div className="pt-3 grid grid-cols-3 font-semibold">
          <div className="pt-3 -m-2 text-[#e81017]">    
          <Link href={"/"}>
           Home
          </Link>
           </div>
        <div className="h-10 pt-3 ml-auto justify-center flex col-span-1 w-96 whitespace-nowrap font-semibold">
        
          <div className="space-x-3 -m-2">
          <Link href={"/about"}>
           About Me
          </Link>
          <Link href={"https://darling-longma-eb7d58.netlify.app/"}>
           Projects
          </Link>
          </div>
        </div>
       
      </div>
    </nav>
  );
}

export default NavBarTwo;

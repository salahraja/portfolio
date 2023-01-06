import Image from "next/image";
import React from "react";
import Link from "next/link";

function NavBar() {
  return (
    <div className="flex justify-center">
    <nav className="font-sans flex py-2 px-6 bg-white bg-opacity-30 backdrop-blur-sm rounded-sm shadow sm:items-baseline w-5/6">
      <div className="pt-3 grid grid-cols-3 font-semibold w-full text-center">
         
        <div className="h-10 pt-3 ml-auto flex col-span-1 w-96 whitespace-nowrap font-semibold">
        
          <div className="space-x-3 -m-2 flex justify-center w-full">
          <Link href={"/about"}>
           About Me
          </Link>
          <Link href={"https://darling-longma-eb7d58.netlify.app/"}>
           Projects
          </Link>
          </div>

        </div>
        <Link href={"http://crawlcentral.com/"}>
          <div className="flex flex-row justify-end pr-6 mb-2">
           
          </div>
        </Link>
      </div>
    </nav></div>
  );
}

export default NavBar;

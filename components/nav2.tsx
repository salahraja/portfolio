import Image from "next/image";
import React from "react";
import Link from "next/link";

function NavBarTwo() {
  return (
    <div className="flex fixed flex-row justify-center">
      <nav className="font-sans flex py-2 px-6 bg-white bg-opacity-30 backdrop-blur-sm rounded-sm shadow sm:items-baseline w-5/6">
        <div className="pt-3 grid grid-cols-3 font-semibold w-full text-center">
          <div className="h-10 pt-3 ml-auto flex col-auto w-screen whitespace-nowrap font-semibold">
            <div className="flex justify-center w-[80.5vw] pl-[5vw]">
            <div className="flex text-[#e81017] -m-[1vh]">    
          <Link href={"/"}>
           Home
          </Link>
           </div>
              <div className="space-x-3 -m-[1vh] w-full align-center">
                <Link href={"/about"}>About Me</Link>
                <Link href={"/projects"}>
                  Projects
                </Link>
              </div>
              <div className="-m-[1vh] flex flex-row">
                <Link href={"https://www.linkedin.com/"}>
                  <div className="px-2">
                    <Image
                      src="/linkedin.svg"
                      alt="Altech logo"
                      width={30}
                      height={45}
                    />
                  </div>
                </Link>

                <Link href={"https://www.linkedin.com/"}>
                  <div className="pr-9">
                    <Image
                      src="/github.svg"
                      alt="Altech logo"
                      width={30}
                      height={45}
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBarTwo;

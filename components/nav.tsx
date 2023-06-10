import Image from "next/image";
import React from "react";
import Link from "next/link";

function NavBar() {
  return (
    <div className="flex flex-row justify-center">
      <nav className="font-sans flex fixed py-2 px-6 bg-[#F5EDDD] dark:bg-zinc-800/30 bg-opacity-40 backdrop-blur-sm rounded-b-lg shadow sm:items-baseline w-[90%] pl-[22px]">
        <div className="grid grid-cols-3 font-semibold w-full text-center">
          <div className="h-[6vh] ml-auto flex col-auto w-auto  whitespace-nowrap font-semibold">
            <Link href={"/"}>
              <div className="pt-[14.5px] flex"></div>
            </Link>{" "}
            <div className="flex justify-center w-[80.5vw] ">
              <div className="text-black dark:text-white space-x-3 pt-[17.5px]  w-full align-center xl:pl-[13rem] max-[1140px]:text-white md:pl-[6rem]">
                <Link href={"/about"}>About Me</Link>
                <Link href={"/projects"}>Projects</Link>
              </div>
              <div className=" flex flex-row flex-end items-center">
                <div className="px-2 flex flex-row flex-end -ml-10">
                  <div className="mr-2">
                    <Link href={"https://www.linkedin.com/in/salahraja/"}>
                      <Image
                        src="/linkedin.svg"
                        alt="LinkedIn logo"
                        width={30}
                        height={45}
                        className="invert dark:invert-0"
                        style={{
                          fill: "transparent",
                          mixBlendMode: "multiply",
                        }}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href={"https://github.com/salahraja"}>
                      <Image
                        src="/github.svg"
                        alt="Github logo"
                        width={30}
                        height={45}
                        className="invert dark:invert-0"
                        style={{
                          fill: "transparent",
                          mixBlendMode: "multiply",
                        }}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;

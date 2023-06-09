import Image from "next/image";
import React from "react";
import Link from "next/link";

function NavBar() {
  return (
    <div className="flex flex-row justify-center h-full z-10">
      <nav className="font-sans flex fixed py-2 px-6 bg-[#F5EDDD] dark:bg-zinc-800/30 bg-opacity-40 backdrop-blur-sm rounded-b-lg shadow sm:items-baseline h-[9vh] w-5/6">
        <div className="grid grid-cols-3 font-semibold w-full text-center">
          <div className="h-[6vh] ml-auto flex col-auto w-auto  whitespace-nowrap font-semibold">
            <div className="flex justify-center w-[80.5vw] ">
              <div className="text-black dark:text-white space-x-3 pt-[11.5px] h-[22vh] w-full align-center max-[631px]:relative max-[631px]:top-[-2rem] max-[631px]:pb-10">
                <Link href={"/about"}>About Me</Link>
                <Link href={"/projects"}>Projects</Link>
              </div>
              <div className=" flex flex-row items-center">
                <div className="flex mr-5">
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

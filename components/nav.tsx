import Image from "next/image";
import React from "react";
import Link from "next/link";

function NavBar() {
  return (
    <div className="flex flex-row justify-center">
      <nav className="font-sans flex fixed py-2 px-6 bg-[#F5EDDD] dark:bg-zinc-800/30 bg-opacity-40 backdrop-blur-sm rounded-b-lg shadow sm:items-baseline w-5/6">
        <div className="pt-3 grid grid-cols-3 font-semibold w-full text-center">
          <div className="h-10 pt-3 ml-auto flex col-auto w-auto  whitespace-nowrap font-semibold">
            <div className="flex justify-center w-[80.5vw] pl-[5vw]">
              <div className="text-black dark:text-white space-x-3 -m-[1vh] w-full align-center">
                <Link href={"/about"}>About Me</Link>
                <Link href={"/projects"}>Projects</Link>
              </div>
              <div className="-m-[1vh] flex flex-row flex-grow">
                <Link href={"https://www.linkedin.com/in/salahraja/"}>
                  <div className="px-2">
                    <Image
                      src="/linkedin.svg"
                      alt="LinkedIn logo"
                      width={30}
                      height={45}
                      className="dark:backdrop-invert rounded-lg"
                    />
                  </div>
                </Link>

                <Link href={"https://github.com/salahraja"}>
                  <div className="pr-9">
                    <Image
                      src="/github.svg"
                      alt="Github logo"
                      width={32}
                      height={45}
                      className="dark:backdrop-invert dark:rounded-lg"
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

export default NavBar;

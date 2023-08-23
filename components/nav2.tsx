import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";

function NavBar() {
  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      window.addEventListener("resize", () =>
        setWindowWidth(window.innerWidth)
      );
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", () =>
          setWindowWidth(window.innerWidth)
        );
      }
    };
  }, []);

  const getButtonSize = () => {
    if (windowWidth && windowWidth <= 487.8) {
      return { width: 20, height: 30 };
    } else if (windowWidth && windowWidth <= 767.8) {
      return { width: 30, height: 45 };
    } else {
      return { width: 50, height: 55 };
    }
  };

  const buttonSize = getButtonSize();

  return (
    <div className="fixed inset-x-0 mx-auto w-5/6 flex-1 justify-center z-10">
      <nav className="font-sans bg-[#F5EDDD] dark:bg-zinc-800/30 bg-opacity-40 backdrop-blur-sm rounded-lg shadow">
        <div className="mx-auto text-center">
          <div className="w-[80.5vw] h-[3rem] py-10 space-x-5 dark:text-white text-[#353935] flex items-center justify-between">
            <div className="flex items-center">
              <div className="pl-5 ">
                <Link href={"/"}>
                  <Image
                    src="/home.svg" // Adjust the path as needed
                    alt="Home"
                    width={25}
                    height={25}
                    className="cursor-pointer"
                  />
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-5 pt-2 pl-[4rem]">
              <Link href={"/about"}>About Me</Link>
              <Link href={"/projects"}>Projects</Link>
            </div>
            <div className="flex items-center space-x-5">
              <div className="flex space-x-2 items-center">
                <button className="w-5 h-5">
                  <Link href="https://www.linkedin.com/in/salahraja/">
                    <Image
                      src="/linkedin.svg"
                      alt="LinkedIn logo"
                      width={buttonSize.width}
                      height={buttonSize.height}
                      className="invert dark:invert-0 inline-flex"
                      style={{
                        fill: "transparent",
                        mixBlendMode: "multiply",
                      }}
                    />
                  </Link>
                </button>
                <button className="w-5 h-5">
                  <Link href="https://github.com/salahraja">
                    <Image
                      src="/github.svg"
                      alt="Github logo"
                      width={buttonSize.width}
                      height={buttonSize.height}
                      className="invert dark:invert-0 inline-flex"
                      style={{
                        fill: "transparent",
                        mixBlendMode: "multiply",
                      }}
                    />
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;

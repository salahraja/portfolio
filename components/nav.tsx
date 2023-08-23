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
          <div className="sm:h-[6.7vh] phone:h-[11vh] space-y-2 ml-auto w-auto whitespace-nowrap font-semibold">
            <Link href={"/"}>
              <div className="pt-[13.5px]"></div>
            </Link>{" "}
            <div className="w-[80.5vw] h-10 space-x-5 dark:text-white text-[#353935] -space-y-2">
              <div className=""></div>
              <Link href={"/about"}>About Me</Link>
              <Link href={"/projects"}>Projects</Link>
              <button className="w-5 flex-1">
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
              <button className=" w-5 h-2">
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
      </nav>
    </div>
  );
}

export default NavBar;

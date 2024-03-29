/* eslint-disable @next/next/no-html-link-for-pages */
import { SVGProps } from "react";
import Image from "next/image";
import Link from "next/link";

const navigation = {
  main: [
    { name: "About", href: "#" },
    { name: "Technologies", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Solutions", href: "#" },
  ],
};

export default function Footer() {
  return (
    <section className="relative bg-[#F5EDDD]  dark:bg-[#1B1B1E]">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 max-[640px]:hidden">
            <span className="ml-2 bottom-0 text-l max-[640px]:align-center font-bold tracking-wide text-gray-800 dark:text-white uppercase">
              About Me
            </span>

            <div className="mt-6 lg:max-w-sm">
              <p className="text-sm text-gray-800 dark:text-white">
                I&apos;m a Frontend Developer with 2 years experience. I grew up
                in Chicago&apos;s inner city before moving to the suburbs where
                I am now. I love Pokemon, I LOVE The Office, and most
                importantly I love technology!
              </p>
              <p className="mt-4 text-sm text-gray-800 dark:text-white">
                I first coded in Java at about 11 years old. Since then
                I&apos;ve jumped from Pre-Med to Journalism to now finally
                Software Development.
              </p>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-base font-bold tracking-wide text-gray-900 dark:text-white">
              Contact
            </p>

            <div className="flex text-black dark:text-white">
              <p className="mr-1 text-gray-800 dark:text-white">Email:</p>
              <Link href={"mailto:beanies-vantage03@icloud.com"}>
                Email Me!
              </Link>
            </div>
            <div className="flex">
              <p className="mr-1 text-gray-800 dark:text-white">Location:</p>
              <p className=" text-gray-800 dark:text-white">Chicago, IL, USA</p>
            </div>
          </div>
          <div>
            <span className="text-base font-bold tracking-wide text-gray-900 dark:text-white">
              Social
            </span>
            <div className="flex text-gray-800 dark:text-white items-center mt-1 space-x-3">
              <Link href={"https://www.linkedin.com/in/salahraja/"}>
                LinkedIn
              </Link>
              <Link href={"https://github.com/salahraja"}>GitHub</Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
          <p className="text-sm text-gray-600">
            © Copyright 2033 Super Evil Genius Inc. All nights preserved.
          </p>
        </div>
      </div>
    </section>
  );
}

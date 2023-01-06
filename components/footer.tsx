/* eslint-disable @next/next/no-html-link-for-pages */
import { SVGProps } from "react";
import Image from "next/image";

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
    <section className="relative ">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            
              
              <span className="ml-2 bottom-0 text-l font-bold tracking-wide text-gray-800 uppercase">
                About Us
              </span>
            
            <div className="mt-6 lg:max-w-sm">
              <p className="text-sm text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Convallis tellus id interdum velit.
              </p>
              <p className="mt-4 text-sm text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-base font-bold tracking-wide text-gray-900">
              Contacts
            </p>
            <div className="flex">
              <p className="mr-1 text-gray-800">Phone:</p>
              
                (+1)626-676-2427
             
            </div>
            <div className="flex">
              <p className="mr-1 text-gray-800">Email:</p>
            
            </div>
            <div className="flex">
              <p className="mr-1 text-gray-800">Address:</p>
             
                4 Celeste Pl. Rolling Hills Estates CA 90274
            
            </div>
          </div>
          <div>
            <span className="text-base font-bold tracking-wide text-gray-900">
              Social
            </span>
            <div className="flex items-center mt-1 space-x-3">
              
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Bacon ipsum dolor amet short ribs pig sausage prosciutto chicken
              spare ribs salami.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
          <p className="text-sm text-gray-600">
            © Copyright 2020 Lorem Inc. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}

import React, { useState, useEffect } from "react";
import Footer from "../components/footer";
import NavBarTwo from "../components/nav2";
import Image from "next/image";
import { useRouter } from "next/router";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Project = () => {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  // Dummy data for additional cards
  const cards = [
    {
      id: 1,
      imageSrc: "/nuxtos.png",
      title: "NuxtOS",
      skills: "Nuxt.js",
      skills2: "Vue",
      skills3: "Typescript",
      skills4: "TailwindCSS",
      skills5: "pnpm",
      skills6: "webpack",
      skills7: "vite",
      ratingsLink: "https://nuxt-os.vercel.app/",
      isNew: true, // Add the isNew property
    },
    {
      id: 2,
      imageSrc: "/npmer.png",
      title: "npmer",
      skills: "NextUI",
      skills2: "TailwindCSS",
      skills3: "Typescript",
      skills4: "Supabase",
      skills5: "Stitches",
      skills6: "Next.js",
      skills7: "Hanoki auth",
      ratingsLink: "https://npmer.vercel.app/",
      isNew: false, // Add the isNew property
    },
    // Add more cards here
    {
      id: 3,
      imageSrc: "/seriea.png",
      title: "Serie A table",
      skills: "Next.js",
      skills2: "TailwindCSS",
      skills3: "Typescript",
      skills4: "RapidAPI",
      skills5: "React",
      skills6: "Postman",
      ratingsLink: "https://football-scores-seven.vercel.app/",
      isNew: false, // Add the isNew property
    },
    {
      id: 4,
      imageSrc: "/weather.png",
      title: "Weather or Not",
      skills: "Vue",
      skills2: "Vite",
      skills3: "Typescript",
      skills4: "TailwindCSS",
      skills5: "pnpm",
      skills6: "webpack",
      skills7: "Vue router",
      ratingsLink: "https://weatherornot.vercel.app/",
      isNew: true, // Add the isNew property
    },
    {
      id: 5,
      imageSrc: "/halfdark.png",
      title: "This site, yes..hi.",
      skills: "Next.js",
      skills2: "React",
      skills3: "Typescript",
      skills4: "TailwindCSS",
      skills5: "npm",
      skills6: "webpack",
      skills7: "git",
      ratingsLink: "https://www.salahs.org/",
      isNew: false,
    },
    {
      id: 6,
      imageSrc: "/singleselect.png",
      title: "Multi Select form",
      skills: "Vite",
      skills2: "React",
      skills3: "Typescript",
      skills4: "TailwindCSS",
      skills5: "pnpm",
      skills6: "Express.js",
      skills7: "vue",
      ratingsLink: "https://darling-longma-eb7d58.netlify.app/",
      isNew: false,
    },
  ];

  const handleCardClick = (link: string | URL) => {
    if (typeof link === "string") {
      if (link.startsWith("http")) {
        // External link
        window.open(link, "_blank");
      } else {
        // Internal link
        router.push(link);
      }
    }
  };

  return (
    <>
      <div className="pb-[6rem] dark:bg-[#1B1B1E] bg-[#F5EDDD]">
        <NavBarTwo />
      </div>
      <div className="dark:bg-[#1B1B1E] bg-[#F5EDDD] mx-auto px-4 drop-shadow-2xl">
        {/* Set a max width and center the content */}
        <div className="antialiased text-gray-900">
          <div className="max-w-screen-xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Render all cards */}
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="max-w-md mx-auto"
                  onClick={() => handleCardClick(card.ratingsLink)}
                  style={{ cursor: "pointer" }}
                >
                  <Image
                    src={card.imageSrc}
                    alt="random image"
                    className="w-full object-cover object-center rounded-lg shadow-md"
                    height={350}
                    width={350}
                  />
                  <div className="relative px-4 -mt-16">
                    <div className="bg-white p-6 rounded-lg shadow-2xl">
                      {card.isNew && ( // Conditionally render the "New" bubble
                        <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full font-semibold tracking-wide">
                          New
                        </span>
                      )}
                      <div className="flex items-baseline">
                        <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                          {card.skills} &bull; {card.skills2} &bull;{" "}
                          {card.skills3} &bull; {card.skills4} &bull;{" "}
                          {card.skills5} &bull; {card.skills6} &bull;{" "}
                          {card.skills7}
                        </div>
                      </div>
                      <h4 className="mt-1 text-xl font-semibold  leading-tight truncate">
                        {card.title}
                      </h4>
                      <div className="mt-1">
                        <span className="text-gray-600 text-sm"></span>
                      </div>
                      <div className="mt-4">
                        <span className="text-teal-600 text-md font-semibold">
                          Link
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Project;

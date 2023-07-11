import React from "react";
import Image from "next/image";
import GlassCard from "../components/glasscard";

const MyComponent: React.FC = () => {
  return (
    <main className="h-screen bg-cover bg-fixed">
      <div
        id="container"
        className="w-350 h-500 bg-inherit absolute overflow-hidden"
      >
        <GlassCard />
        <div className="before:w-screen before:h-screen before:absolute  before:bg-inherit before:box-shadow-inset before:bg-opacity-20 before:filter-blur-10">
          <form>
            <Image
              src="/nature.jpg"
              alt="profile-image"
              className="w-screen h-screen"
              width={2690}
              height={3445}
            />

            <input
              type="text"
              className="bg-0 w-200 outline-0 border-0 border-b-2 border-opacity-30 border-white m-20px-0 pb-10px text-18px font-bold text-opacity-80 text-white"
            />

            <input
              type="submit"
              value="Submit"
              className="border-0 rounded-8 pb-0 h-60px bg-df2359 text-white cursor-pointer transition-all-600ms-ease-in-out hover:bg-C0392B"
            />
          </form>
        </div>
      </div>
    </main>
  );
};

export default MyComponent;

import React from "react";
import Image from "next/image";
import Link from "next/link";

const GlassCard: React.FC = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <Image
                  className="h-48 w-full object-cover md:w-48"
                  src="/serieasite.png"
                  alt="Image 1"
                  width={200}
                  height={200}
                />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  Card 1
                </div>
                <p className="mt-2 text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  hendrerit nulla non ligula eleifend, et pulvinar mi volutpat.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <Image
                  className="h-48 w-full object-cover md:w-48"
                  src="/singleselect.png"
                  alt="Image 2"
                  height={200}
                  width={200}
                />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  Card 2
                </div>
                <p className="mt-2 text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  hendrerit nulla non ligula eleifend, et pulvinar mi volutpat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlassCard;

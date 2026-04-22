import React from "react";
import Link from "next/link";
import Image from "next/image";

export function generateStaticParams() {
  return Array.from({ length: 25 }).map((_, i) => ({
    id: (i + 1).toString(),
  }));
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const workIdNum = parseInt(resolvedParams.id, 10);
  
  // Predictably cycle colors and texts based on ID to simulate the mockups
  const statuses = [
    { text: "Available", color: "#22c55e" }, // Green
    { text: "SOLD", color: "#ef4444" }, // Red 
    { text: "Reserved", color: "#f59e0b" }, // Orange
  ];
  const activeStatus = statuses[workIdNum % 3];
  
  // Toggle the image shape depending on ID to simulate different formats in your dummy mockups
  const isLandscape = workIdNum % 3 === 2;

  return (
    <div className="bg-[#EBEBEB] min-h-screen w-full flex flex-col py-12 px-6 md:px-16 overflow-y-auto">
      
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-32 items-start mt-8 lg:ml-8">
        
        {/* Left Info Column */}
        <div className="flex flex-col w-full lg:w-1/3 shrink-0">
          
          {/* Menu Box */}
          <div className="bg-[#FFF] py-4 px-6 flex items-center shadow-sm w-fit">
            <div className="flex items-center justify-center p-4">
              <img src="/Logo1.png" className="w-24 h-auto object-contain" alt="Logo Oraxe" />
            </div>
            <div className="w-[1px] h-16 bg-gray-300 mx-4"></div>
            <div className="flex flex-col gap-2 pl-2 pr-4">
              <Link href="/artists" className="cursor-pointer text-left block">
                <span className="text-[#9D9D9D] font-inter text-[11px] font-semibold tracking-widest hover:text-[#000] transition-colors">ARTISTS</span>
              </Link>
              <Link href="/exhibitions" className="cursor-pointer text-left block">
                <span className="text-[#9D9D9D] font-inter text-[11px] font-semibold tracking-widest hover:text-[#000] transition-colors">EXHIBITIONS</span>
              </Link>
              <Link href="/team" className="cursor-pointer text-left block">
                <span className="text-[#9D9D9D] font-inter text-[11px] font-semibold tracking-widest hover:text-[#000] transition-colors">TEAM</span>
              </Link>
              <Link href="/contact" className="cursor-pointer text-left block">
                <span className="text-[#9D9D9D] font-inter text-[11px] font-semibold tracking-widest hover:text-[#000] transition-colors">CONTACT</span>
              </Link>
            </div>
          </div>

          {/* Artist Name & Artwork Info */}
          <div className="mt-16 sm:mt-24 pl-2 lg:pl-[246px]">
            <p className="text-[#000] font-inter text-[15px] font-normal mb-16">
              Mahdi Fatehi
            </p>

            <div className="text-[#000] font-inter text-[15px] font-light leading-relaxed">
              <p>TITLED IS SOMTHING</p>
              <p>2026</p>
              <p>100x20x500</p>
              <p>metal and oil and mxed media</p>
            </div>
          </div>

          {/* E-Commerce Status Section */}
          <div className="mt-32 sm:mt-48 pl-2 lg:pl-[246px] flex flex-col gap-8">
            <button className="flex items-center gap-4 hover:opacity-75 transition-opacity cursor-pointer group">
              {/* Simple Folder Icon simulation */}
              <svg 
                width="24" height="24" viewBox="0 0 24 24" fill="none" 
                stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                className="group-hover:scale-105 transition-transform"
              >
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <span className="text-[#000] font-inter font-light text-[15px]">BUY</span>
            </button>

            <div className="flex items-center gap-4">
              <div 
                className="w-4 h-4 rounded-full" 
                style={{ backgroundColor: activeStatus.color }}
              ></div>
              <span className="text-[#000] font-inter font-light text-[15px]">
                {activeStatus.text}
              </span>
            </div>
          </div>

        </div>

        {/* Right Artwork Placeholder */}
        <div className={`w-full lg:flex-1 flex justify-start items-start mt-12 lg:mt-32 ${isLandscape ? "justify-center lg:justify-start lg:mt-auto" : ""}`}>
           <div className={`bg-[#D9D9D9] w-full ${isLandscape ? "aspect-[16/9] max-w-4xl" : "aspect-[3/4] max-w-2xl"}`}></div>
        </div>

      </div>
    </div>
  );
}

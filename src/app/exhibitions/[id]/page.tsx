import React from "react";
import Link from "next/link";
import Image from "next/image";

export function generateStaticParams() {
  return [{ id: "iranian-women" }, { id: "dans-la-lune" }];
}

export default async function ExhibitionDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  
  // Basic mock database logic simulating fetching the exhibition
  const title = resolvedParams.id === "iranian-women" ? "Iranian Women" : "Dans la lune";

  return (
    <div className="bg-[#EBEBEB] min-h-screen w-full flex flex-col py-12 px-6 md:px-16 overflow-y-auto">
      
      {/* Top Header Row  */}
      <div className="w-full max-w-[1300px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-32 items-start mb-16 mt-8 lg:ml-8">
        
        {/* Left Menu Box */}
        <div className="bg-[#FFF] py-4 px-6 flex items-center shadow-sm shrink-0 h-fit">
          <Link href="/" className="cursor-pointer">
            <div className="flex items-center justify-center p-4 hover:opacity-80 transition-opacity">
              <img src="/Logo1.png" className="w-28 md:w-40 h-auto object-contain" alt="Logo Oraxe" />
            </div>
          </Link>
          <div className="w-[1px] h-16 bg-gray-300 mx-4"></div>
          <div className="flex flex-col gap-2 pl-2 pr-4">
            <Link href="/#artists" className="cursor-pointer text-left block">
              <span className="text-[#9D9D9D] font-inter text-[11px] font-semibold tracking-widest hover:text-[#000] transition-colors">ARTISTS</span>
            </Link>
            <Link href="/#exhibitions" className="cursor-pointer text-left block">
              <span className="text-[#9D9D9D] font-inter text-[11px] font-semibold tracking-widest hover:text-[#000] transition-colors">EXHIBITIONS</span>
            </Link>
            <Link href="/#upcoming-events" className="cursor-pointer text-left block">
              <span className="text-[#9D9D9D] font-inter text-[11px] font-semibold tracking-widest hover:text-[#000] transition-colors">UPCOMING EVENTS</span>
            </Link>
            <Link href="/#team" className="cursor-pointer text-left block">
              <span className="text-[#9D9D9D] font-inter text-[11px] font-semibold tracking-widest hover:text-[#000] transition-colors">TEAM</span>
            </Link>
            <Link href="/#manifeste" className="cursor-pointer text-left block">
              <span className="text-[#9D9D9D] font-inter text-[11px] font-semibold tracking-widest hover:text-[#000] transition-colors">
                MANIFESTE
              </span>
            </Link>
            <Link href="/#contact" className="cursor-pointer text-left block">
              <span className="text-[#9D9D9D] font-inter text-[11px] font-semibold tracking-widest hover:text-[#000] transition-colors">CONTACT</span>
            </Link>
          </div>
        </div>

        {/* Info Column */}
        <div className="flex flex-col flex-grow max-w-4xl">
          
          <div className="flex flex-col mb-12">
            <h1 className="text-[#000] font-inter text-[15px] font-normal uppercase">
              {title}
            </h1>
            <p className="text-[#000] font-inter text-[15px] font-light mt-1">2026</p>
            <p className="text-[#000] font-inter text-[15px] font-light mt-1 w-full lg:w-48 text-justify">
              artist or artissts
            </p>
          </div>

          <div className="text-[#000] font-inter text-[13px] font-normal leading-relaxed text-left">
            <p>
              La Galerie Oraxe est un espace moderne d'exposition d'œuvres d'art qui, en mettant l'accent sur les artistes et commissaires contemporains, présente des expositions en cours et des ventes aux enchères mensuelles. Grâce à son archive d'expositions, son magazine et ses pages associées, iranien. 2026 La Galerie Oraxe est un espace moderne d'exposition d'œuvres d'art qui, en mettant l'accent sur les artistes et commissaires contemporains, présente des expositions en cours et des ventes aux enchères mensuelles. Grâce à son archive d'expositions, son magazine et ses pages associées, iranien.
            </p>
          </div>

        </div>

      </div>

      {/* Masonry Gallery Grid */}
      <div className="w-full max-w-[1300px] mx-auto mt-16 px-2 lg:px-8">
        
        {/*
          Using an explicit grid layout that mimics the specific blocks layout in `ToDo.md` 
          It has 3 logical columns.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px] md:auto-rows-[300px]">
          
          {/* Top Row: 3 standard tall columns */}
          <div className="bg-[#D9D9D9] w-full hover:opacity-85 transition-opacity row-span-2 cursor-pointer overflow-hidden relative">
             <img src="/assets/art1.png" className="absolute inset-0 w-full h-full object-cover" alt="Gallery Art 1" />
          </div>
          <div className="bg-[#D9D9D9] w-full hover:opacity-85 transition-opacity row-span-2 cursor-pointer overflow-hidden relative">
             <img src="/assets/art2.png" className="absolute inset-0 w-full h-full object-cover" alt="Gallery Art 2" />
          </div>
          <div className="bg-[#D9D9D9] w-full hover:opacity-85 transition-opacity row-span-2 cursor-pointer overflow-hidden relative">
             <img src="/assets/art1.png" className="absolute inset-0 w-full h-full object-cover" alt="Gallery Art 1" />
          </div>

          {/* Middle Row: 1 wide column (spans 2), 1 standard column */}
          <div className="bg-[#D9D9D9] w-full hover:opacity-85 transition-opacity lg:col-span-2 row-span-1 lg:row-span-2 cursor-pointer h-[250px] md:h-full overflow-hidden relative">
             <img src="/assets/banner1.png" className="absolute inset-0 w-full h-full object-cover" alt="Gallery Art Banner" />
          </div>
          <div className="bg-[#D9D9D9] w-full hover:opacity-85 transition-opacity row-span-1 lg:row-span-2 cursor-pointer h-[250px] md:h-full overflow-hidden relative">
             <img src="/assets/art2.png" className="absolute inset-0 w-full h-full object-cover" alt="Gallery Art 2" />
          </div>

          {/* Bottom Row: 1 standard column, 1 wide column (spans 2) */}
          <div className="bg-[#D9D9D9] w-full hover:opacity-85 transition-opacity row-span-1 lg:row-span-2 cursor-pointer h-[250px] md:h-full overflow-hidden relative">
             <img src="/assets/art1.png" className="absolute inset-0 w-full h-full object-cover" alt="Gallery Art 1" />
          </div>
          <div className="bg-[#D9D9D9] w-full hover:opacity-85 transition-opacity lg:col-span-2 row-span-1 lg:row-span-2 cursor-pointer h-[250px] md:h-full overflow-hidden relative">
             <img src="/assets/banner2.png" className="absolute inset-0 w-full h-full object-cover" alt="Gallery Art Banner 2" />
          </div>

        </div>

      </div>

    </div>
  );
}

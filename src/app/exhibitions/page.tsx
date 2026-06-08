import React from "react";
import Link from "next/link";

export default function ExhibitionsPage() {
  const exhibitions = [
    {
      id: "iranian-women",
      title: "Iranian Women",
      year: "2026",
      desc: "La Galerie Oraxe est un espace moderne d'exposition d'œuvres d'art qui, en mettant l'accent sur les artistes et commissaires contemporains, présente des expositions en cours et des ventes aux enchères mensuelles. Grâce à son archive d'expositions, son magazine et ses pages associées, iranien.",
      image: "/assets/banner1.png",
    },
    {
      id: "dans-la-lune",
      title: "Dans la lune",
      year: "2026",
      desc: "La Galerie Oraxe est un espace moderne d'exposition d'œuvres d'art qui, en mettant l'accent sur les artistes et commissaires contemporains, présente des expositions en cours et des ventes aux enchères mensuelles. Grâce à son archive d'expositions, son magazine et ses pages associées, iranien.",
      image: "/assets/banner2.png",
    },
  ];

  return (
    <div className="bg-[#EBEBEB] min-h-screen w-full py-12 px-6 md:px-16 overflow-y-auto">
      <div className="w-full max-w-7xl mx-auto mt-8 lg:ml-8 flex flex-col">
        
        {/* Top Header Row -> Just Menu */}
        <div className="mb-16">
          <div className="bg-[#FFF] py-4 px-6 flex items-center shadow-sm w-fit shrink-0">
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
                <span className="text-[#000] font-inter text-[11px] font-semibold tracking-widest transition-colors">EXHIBITIONS</span>
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
        </div>

        {/* Exhibitions List */}
        <div className="flex flex-col gap-24 mt-8">
          {exhibitions.map((ex) => (
            <div key={ex.id} className="flex flex-col lg:flex-row gap-12 lg:gap-32 w-full items-start">
              
              {/* Left text column */}
              <div className="w-full lg:w-[320px] shrink-0 flex flex-col justify-between h-auto lg:h-[220px]">
                <p className="text-[#000] font-inter text-[13px] font-normal leading-relaxed text-justify">
                  {ex.desc}
                </p>
                <p className="text-[#000] font-inter text-[13px] font-normal mt-12 lg:mt-0">
                  {ex.year}
                </p>
              </div>

              {/* Right Image Box & Title column */}
              <div className="w-full flex-grow flex flex-col">
                <Link href={`/exhibitions/${ex.id}`} className="group w-full max-w-4xl block cursor-pointer">
                  <div className="w-full aspect-[3/1] md:aspect-[4/1] bg-[#DBDBDB] group-hover:opacity-85 transition-opacity overflow-hidden flex items-center justify-center shadow-sm">
                     <img src={ex.image} alt={ex.title} className="w-full h-full object-cover" />
                  </div>
                  <h2 className="text-[#9D9D9D] font-inter text-lg lg:text-xl font-normal mt-4 group-hover:text-black transition-colors block pl-2">
                    {ex.title}
                  </h2>
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

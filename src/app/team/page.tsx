import React from "react";
import Link from "next/link";

export default function TeamPage() {
  return (
    <div className="bg-[#EBEBEB] min-h-screen w-full py-12 px-6 md:px-16 overflow-y-auto">
      <div className="w-full max-w-[1400px] mx-auto mt-8 flex flex-col">
        
        {/* Menu Block */}
        <div className="mb-24">
          <div className="bg-[#FFF] py-4 px-6 flex items-center shadow-sm w-fit shrink-0">
            <Link href="/" className="cursor-pointer">
              <div className="flex items-center justify-center p-4 hover:opacity-80 transition-opacity">
                <img
                  src="/Logo1.png"
                  className="w-24 h-auto object-contain"
                  alt="Logo Oraxe"
                />
              </div>
            </Link>
            <div className="w-[1px] h-16 bg-gray-300 mx-4"></div>
            <div className="flex flex-col gap-2 pl-2 pr-4">
              <Link href="/artists" className="cursor-pointer text-left block">
                <span className="text-[#9D9D9D] font-inter text-[11px] font-semibold tracking-widest hover:text-[#000] transition-colors">
                  ARTISTS
                </span>
              </Link>
              <Link href="/exhibitions" className="cursor-pointer text-left block">
                <span className="text-[#9D9D9D] font-inter text-[11px] font-semibold tracking-widest hover:text-[#000] transition-colors">
                  EXHIBITIONS
                </span>
              </Link>
              <Link href="/team" className="cursor-pointer text-left block">
                <span className="text-[#000] font-inter text-[11px] font-semibold tracking-widest transition-colors">
                  TEAM
                </span>
              </Link>
              <Link href="/contact" className="cursor-pointer text-left block">
                <span className="text-[#9D9D9D] font-inter text-[11px] font-semibold tracking-widest hover:text-[#000] transition-colors">
                  CONTACT
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="flex flex-col gap-16 px-0 md:px-4">
          
          {/* Member 1: Asma SHAHBAZI */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-start w-full">
            {/* Column 1: Image */}
            <div className="w-full lg:w-[400px] shrink-0 relative overflow-hidden aspect-[16/9] lg:aspect-[4/3] bg-gray-300">
              <img
                src="/shahbazi.png"
                alt="Asma Shahbazi"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Column 2: Info */}
            <div className="w-full lg:w-48 shrink-0 flex flex-col gap-1">
              <span className="text-[#000] font-inter text-[13px] font-bold">
                Asma SHAHBAZI
              </span>
              <span className="text-[#000] font-inter text-[13px] font-bold mt-4">
                Director
              </span>
              <span className="text-[#000] font-inter text-[13px] font-normal mt-0">
                asmashahbazi@oraxe.com
              </span>
            </div>

            {/* Column 3: Bio */}
            <div className="flex-grow w-full max-w-xl">
              <div className="text-[#000] font-inter text-[13px] font-normal leading-relaxed text-left text-justify flex flex-col gap-4">
                <p>
                  Asma Rahgoshay_shahbazi est la fondatrice et directrice de la Galerie Oraxe, un espace parisien dédié au soutien et à la valorisation des artistes et de la culture persans, avec une attention particulière portée aux artistes irano-français. Ayant grandi en Iran et installée à Paris depuis de nombreuses années, son engagement artistique trouve ses racines dans la peinture, enrichi par une sensibilité nourrie par sa formation en architecture, sa pratique de la photographie et son intérêt pour les diverses expressions de l’art contemporain.
                </p>
                <p>
                  Elle s’entoure d’un réseau exigeant de commissaires d’exposition et d’artistes, assurant la mise en œuvre de sa vision avec rigueur, authenticité et expertise.
                </p>
                <p>
                  Dans le prolongement de cette démarche, Asma R-sh est également directrice artistique d’ORAXE SHOP, où elle développe une sélection d’objets artistiques singuliers et présente ses propres créations, contribuant ainsi à rendre l’art accessible au-delà de l’espace de la galerie.
                </p>
              </div>
            </div>
          </div>

          {/* Member 2: Mahdi FATEHI */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-start w-full">
            {/* Column 1: Image */}
            <div className="w-full lg:w-[400px] shrink-0 relative overflow-hidden aspect-[16/9] lg:aspect-[4/3] bg-gray-300">
              <img
                src="/fathi.png"
                alt="Mahdi Fatehi"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Column 2: Info */}
            <div className="w-full lg:w-48 shrink-0 flex flex-col gap-1">
              <span className="text-[#000] font-inter text-[13px] font-bold">
                Mahdi FATEHI
              </span>
              <span className="text-[#000] font-inter text-[13px] font-bold mt-4">
                Curator
              </span>
              <span className="text-[#000] font-inter text-[13px] font-normal mt-0">
                mahdifatehi@oraxe.com
              </span>
            </div>

            {/* Column 3: Bio */}
            <div className="flex-grow w-full max-w-xl">
              <p className="text-[#000] font-inter text-[13px] font-normal leading-relaxed text-left text-justify">
                Mahdi Fatehi est né en 1982 à Téhéran. Diplômé de l'université
                d'art Azad en Master de design graphique en 2005, il a poursuivi
                son métier d'affichiste pour le cinéma et le théâtre. Il a
                remporté de nombreux prix internationaux tels le Prix de bronze à
                la 10e édition de International Poster Triennial, Toyama, Japon,
                Premier prix à la 35e édition du festival international des
                affiches du théâtre Fadjr, Téhéran, Iran, Prix de bronze à la 8e
                Triennale internationale de l'affiche de scène , Sofia,
                Bulgarie. Depuis 2007, il enseigne dans les universités d'art de
                Téhéran, en Iran. Il a également organisé 4 expositions
                d'affiches solo à Téhéran, Ispahan, Arak et Paris. Is et membre
                de Theatre Poster Designers Society.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

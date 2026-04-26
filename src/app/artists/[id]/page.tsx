import React from "react";
import Link from "next/link";
import Image from "next/image";

export function generateStaticParams() {
  return [{ id: "mahdi-fatehi" }];
}

export default function ArtistProfilePage() {
  return (
    <div className="bg-[#EBEBEB] min-h-screen w-full flex flex-col py-12 px-6 md:px-16 overflow-y-auto">
      
      {/* Top Header Row */}
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-8 items-start mb-16 mt-8 lg:ml-8">
        
        {/* Left Menu Box */}
        <div className="bg-[#FFF] py-4 px-6 flex items-center shadow-sm shrink-0">
          <Link href="/" className="cursor-pointer">
            <div className="flex items-center justify-center p-4 hover:opacity-80 transition-opacity">
              <img src="/Logo1.png" className="w-24 h-auto object-contain" alt="Logo Oraxe" />
            </div>
          </Link>
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

        {/* Profile Image */}
        <div className="w-40 h-40 md:w-48 md:h-48 shrink-0 overflow-hidden rounded-3xl mt-2 md:mt-0 shadow-sm bg-gray-300 flex items-center justify-center">
          <img
            src="/artists/mehdi.png"
            alt="Mahdi Fatehi Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Main Content Info */}
      <div className="w-full max-w-7xl mx-auto flex flex-col items-start px-2 lg:px-8">
        
        <h1 className="text-[#170098] font-inter text-3xl font-bold mb-8">
          Mahdi Fatehi
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-12">
          {/* French Bio in Blue */}
          <p className="text-[#170098] font-inter text-sm font-semibold leading-relaxed text-justify">
            Mahdi Fatehi est né en 1982 à Téhéran. Diplômé de l'université
            d'art Azad en Master de design graphique en 2005, il a poursuivi
            son métier d'affichiste pour le cinéma et le théâtre. Il a
            remporté de nombreux prix internationaux tels le Prix de bronze à
            la 10e édition de International Poster Triennial, Toyama, Japon,
            Premier prix à la 35e édition du festival international des
            affiches du théâtre Fadjr, Téhéran, Iran, Prix de bronze à la 8e
            Triennale internationale de l'affiche de scène , Sofia, Bulgarie.
            Depuis 2007, il enseigne dans les universités d'art de Téhéran, en
            Iran. Il a également organisé 4 expositions d'affiches solo à
            Téhéran, Ispahan, Arak et Paris. Is et membre de Theatre Poster
            Designers Society.
          </p>

          {/* English Bio in Black */}
          <p className="text-black font-inter text-[13px] font-semibold leading-relaxed text-justify">
            Mahdi Fatehi was born in 1982 in Tehran. He graduated from Azad
            University of Art with a Master's degree in Graphic Design in 2005
            and continued his career as a poster designer for cinema and
            theater. He has won numerous international awards such as the
            Bronze Prize at the 10th International Poster Triennial, Toyama,
            Japan; First Prize at the 35th Fadjr International Theater Poster
            Festival, Tehran, Iran; and the Bronze Prize at the 8th Sofia
            International Poster Triennial for the Stage, Sofia, Bulgaria.
            Since 2007, he has taught at art universities in Tehran, Iran. He
            has also held four solo poster exhibitions in Tehran, Isfahan,
            Arak, and Paris.
          </p>
        </div>

        {/* Download Links / CV */}
        <div className="flex flex-wrap gap-12 mb-20 items-center">
          <a href="#" className="flex items-center gap-3 group">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:translate-y-1 transition-transform"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span className="text-[#000] text-[10px] uppercase font-inter tracking-widest font-semibold">
              Telecharger le C.V
            </span>
          </a>
          <a href="#" className="flex items-center gap-3 group">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:translate-y-1 transition-transform"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span className="text-[#000] text-[10px] uppercase font-inter tracking-widest font-semibold">
              Download C.V
            </span>
          </a>
        </div>

        {/* Gallery Grid of Works (Gray SquaresPlaceholder) */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {[...Array(25)].map((_, i) => (
            <Link
              href={`/works/${i + 1}`}
              key={i}
              className="aspect-square bg-[#DBDBDB] w-full hover:opacity-80 transition-opacity cursor-pointer block"
            ></Link>
          ))}
        </div>
      </div>
      
    </div>
  );
}

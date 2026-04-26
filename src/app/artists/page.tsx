"use client";

import React from "react";
import Link from "next/link";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

type Artist = { name: string; url?: string };

// From ToDo2.md exactly
const uniqueArtists: Artist[] = [
  { name: "Mahdi Fatehi" },
  { name: "Farzaneh Hosseini" },
  { name: "Yasaman Khezri" },
  { name: "Morteza Khosravi" },
  { name: "Saeideh Mirshekari" },
  { name: "Asareh Akasheh" },
  { name: "Faezeh" },
  { name: "Negareh Ayat" },
  { name: "Amaneh Eskandari", url: "https://www.amaneheskandari.com/" },
  { name: "Maryam Eskandari", url: "https://maryameskandari.art/" },
];

// Repeat to match the dense Figma visual
const allArtists = Array.from({ length: 48 }, (_, i) => uniqueArtists[i % uniqueArtists.length]);

export default function ArtistsPage() {
  return (
    <div className="bg-[#EBEBEB] min-h-screen w-full flex flex-col py-12 px-6 md:px-16 overflow-y-auto">
      {/* Top Left Menu Box */}
      <div className="bg-[#FFF] py-4 px-6 flex items-center shadow-sm w-fit self-start mb-24 mt-8 lg:ml-8">
        {/* Logo */}
        <Link href="/" className="cursor-pointer">
          <div className="flex items-center justify-center p-4 hover:opacity-80 transition-opacity">
            <img
              src="/Logo1.png"
              className="w-24 h-auto object-contain"
              alt="Logo Oraxe"
            />
          </div>
        </Link>

        {/* Divider */}
        <div className="w-[1px] h-16 bg-gray-300 mx-4"></div>

        {/* Navigation Menu */}
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
            <span className="text-[#9D9D9D] font-inter text-[11px] font-semibold tracking-widest hover:text-[#000] transition-colors">
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

      <div className="w-full max-w-7xl mx-auto flex flex-col gap-12">
        {/* Alphabet Filter */}
        <div className="w-full flex justify-between text-[#9D9D9D] font-inter text-md md:text-xl font-normal overflow-x-auto gap-4 scrollbar-hide pb-2">
          {alphabet.map((char) => (
            <button
              key={char}
              className="hover:text-black transition-colors shrink-0"
            >
              {char}
            </button>
          ))}
        </div>

        {/* Artists Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-1">
          {allArtists.map((artist, idx) => {
            const urlSlug = artist.name.toLowerCase().replace(" ", "-");
            const href = artist.url || `/artists/${urlSlug}`;
            const targetProps = artist.url ? { target: "_blank", rel: "noopener noreferrer" } : {};
            return (
              <Link
                key={idx}
                href={href}
                {...targetProps}
                className="text-[#9D9D9D] font-inter text-[15px] md:text-lg text-left hover:text-black transition-colors focus:outline-none whitespace-nowrap block w-fit"
              >
                {artist.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

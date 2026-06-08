import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manifeste - L'Intersection | Galerie Oraxe",
  description: "Le Nouveau Manifeste de la Galerie Oraxe. Oubliez les frontières, les passeports et les étiquettes géographiques. L'art n'a pas de visa.",
  openGraph: {
    title: "Manifeste - L'Intersection | Galerie Oraxe",
    description: "Le Nouveau Manifeste de la Galerie Oraxe. Oubliez les frontières, les passeports et les étiquettes géographiques. L'art n'a pas de visa.",
  }
};

export default function ManifestePage() {
  return (
    <div className="bg-[#EBEBEB] min-h-screen w-full py-8 md:py-12 px-4 md:px-16 overflow-y-auto">
      <div className="w-full max-w-7xl mx-auto mt-4 md:mt-8 lg:ml-8 flex flex-col">

        {/* Top Header Row -> Just Menu */}
        <div className="mb-10 md:mb-16">
          <div className="bg-[#FFF] py-3 md:py-4 px-4 md:px-6 flex items-center shadow-sm w-fit max-w-full overflow-x-auto shrink-0 rounded-sm">
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
              <Link href="/#team" className="cursor-pointer text-left block">
                <span className="text-[#9D9D9D] font-inter text-[11px] font-semibold tracking-widest hover:text-[#000] transition-colors">TEAM</span>
              </Link>
              <Link href="/#manifeste" className="cursor-pointer text-left block">
                <span className="text-[#000] font-inter text-[11px] font-semibold tracking-widest transition-colors">MANIFESTE</span>
              </Link>
              <Link href="/#contact" className="cursor-pointer text-left block">
                <span className="text-[#9D9D9D] font-inter text-[11px] font-semibold tracking-widest hover:text-[#000] transition-colors">CONTACT</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-16 w-full max-w-4xl text-[#000] font-inter items-center mx-auto mt-10">

          <div className="flex flex-col items-center gap-6">
            <div className="text-2xl md:text-3xl font-bold tracking-[0.1em] text-[#000] uppercase text-center">Manifeste : "L'Intersection"</div>
            <p className="text-[15px] md:text-base tracking-widest text-[#9D9D9D] uppercase text-center">L'art n'a pas de visa.</p>
          </div>

          <div className="text-[15px] md:text-base font-light leading-relaxed text-center max-w-2xl text-[#000]">
            <p>
              Oubliez les frontières, les passeports et les étiquettes géographiques. La Galerie Oraxe, propulsée par l'énergie nomade d'<a href="https://www.artistessansfrontieres.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">Art Conversation</a>, devient une "zone libre".
            </p>
            <p className="mt-6">
              Ici, on ne collectionne pas des origines, on expose des frissons.
            </p>
          </div>

          <div className="flex flex-col items-center gap-8 w-full mt-4">
            <div className="text-xl md:text-2xl font-bold tracking-[0.1em] text-[#000] uppercase text-center">Pourquoi nous ?</div>

            <p className="text-[15px] md:text-base font-light leading-relaxed text-center max-w-2xl text-[#000]">
              Parce que le monde est trop grand pour tenir dans une seule case. Oraxe est un accélérateur de particules artistiques :
            </p>

            <div className="flex flex-col gap-8 mt-4 items-center">
              <p className="text-[15px] md:text-base font-light leading-relaxed text-center max-w-2xl text-[#000]">
                <strong className="font-semibold uppercase tracking-wider text-[13px] md:text-[14px]">Curations Sans Filtre :</strong> On ne suit pas les tendances, on invite ceux qui les brisent, qu'ils viennent de Téhéran, New York, Kinshasa ou Tokyo.
              </p>

              <p className="text-[15px] md:text-base font-light leading-relaxed text-center max-w-2xl text-[#000]">
                <strong className="font-semibold uppercase tracking-wider text-[13px] md:text-[14px]">Ventes aux Enchères "Live" :</strong> Chaque mois, on met le feu au marché avec des pièces qui ont une âme, pas juste une cote.
              </p>

              <p className="text-[15px] md:text-base font-light leading-relaxed text-center max-w-2xl text-[#000]">
                <strong className="font-semibold uppercase tracking-wider text-[13px] md:text-[14px]">Archives Vivantes :</strong> Notre magazine n'est pas une revue de presse, c'est le carnet de bord d'une révolution esthétique globale.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-8 w-full mb-24 mt-4">
            <div className="text-xl md:text-2xl font-bold tracking-[0.1em] text-[#000] uppercase text-center">Oraxe+Art Conversation</div>

            <p className="text-[15px] md:text-base font-light leading-relaxed text-center max-w-2xl text-[#000]">
              C’est notre "Open Border policy". Grâce au réseau <a href="https://www.artistessansfrontieres.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">Art Conversation (Artistes Sans Frontières)</a>, Oraxe devient un hub où un sculpteur norvégien peut dialoguer avec une photographe brésilienne. C’est le chaos, mais c’est un chaos magnifique, organisé et accessible.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

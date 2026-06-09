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
                  className="w-28 md:w-40 h-auto object-contain"
                  alt="Logo Oraxe"
                />
              </div>
            </Link>
            <div className="w-[1px] h-16 bg-gray-300 mx-4"></div>
            <div className="flex flex-col gap-2 pl-2 pr-4">
              <Link href="/#artists" className="cursor-pointer text-left block">
                <span className="text-[#9D9D9D] font-inter text-[11px] font-semibold tracking-widest hover:text-[#000] transition-colors">
                  ARTISTS
                </span>
              </Link>
              <Link href="/#exhibitions" className="cursor-pointer text-left block">
                <span className="text-[#9D9D9D] font-inter text-[11px] font-semibold tracking-widest hover:text-[#000] transition-colors">
                  EXHIBITIONS
                </span>
              </Link>
              <Link href="/#team" className="cursor-pointer text-left block">
                <span className="text-[#000] font-inter text-[11px] font-semibold tracking-widest transition-colors">
                  TEAM
                </span>
              </Link>
              <Link href="/#manifeste" className="cursor-pointer text-left block">
                <span className="text-[#9D9D9D] font-inter text-[11px] font-semibold tracking-widest hover:text-[#000] transition-colors">
                  MANIFESTE
                </span>
              </Link>
              <Link href="/#contact" className="cursor-pointer text-left block">
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
                src="/asma_2.JPG"
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
              <a
                href="mailto:Asma.SHAHBAZI@oraxe.eu"
                className="text-[#9D9D9D] font-inter text-[12px] font-medium hover:text-[#000] transition-colors mt-4 break-all"
              >
                Asma.SHAHBAZI@oraxe.eu
              </a>
            </div>

            {/* Column 3: Bio */}
              <div className="flex-grow w-full max-w-xl">
                <div className="text-[#000] font-inter text-[13px] font-normal leading-relaxed text-left text-justify flex flex-col gap-4">
                  <p>
                    Fondatrice et directrice de la Galerie Oraxe, Asma Shahbazi-Rahgoshay insuffle une vision singulière à cette structure parisienne indépendante, dédiée au rayonnement de l’art contemporain, du monde persan et des cultures d’Asie du Sud-Est (moyen Orient).
                  </p>
                  <p>
                    Titulaire d'un master en développement rural et architecture appliquée ainsi que d'un master 2 en architecture intérieure, elle nourrit son approche pluridisciplinaire d’influences croisées : peinture, photographie, design et arts visuels. Établie en France depuis de nombreuses années, elle a imaginé la Galerie Oraxe comme un trait d’union entre les artistes persans, ceux d’Asie du Sud-Est et le public, favorisant des échanges nourris par le dialogue artistique.
                  </p>
                  <p>
                    Par une collaboration étroite avec des artistes, commissaires d’exposition, institutions et collectionneurs, elle conçoit des projets qui conjuguent héritage culturel et esthétique contemporaine, avec la volonté profonde de démocratiser l'accès à la création.
                  </p>
                  <p>
                    En parallèle, en sa qualité de directrice artistique d’ORAXE SHOP, elle sélectionne des pièces de design et d’artisanat d'exception, tout en y dévoilant ses propres créations. À travers cet écosystème, Asma Shahbazi-Rahgoshay s'attache à inscrire l'art et la culture au cœur du quotidien d'un public toujours plus vaste.
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
              <a
                href="mailto:Mahdi.FATEHI@oraxe.eu"
                className="text-[#9D9D9D] font-inter text-[12px] font-medium hover:text-[#000] transition-colors mt-4 break-all"
              >
                Mahdi.FATEHI@oraxe.eu
              </a>
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

          {/* Member 3: Joëlle PÉHAUT */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-start w-full">
            {/* Column 1: Image */}
            <div className="w-full lg:w-[400px] shrink-0 relative overflow-hidden aspect-[16/9] lg:aspect-[4/3] bg-gray-300">
              <img
                src="/Joolle_Pehaut .jpg"
                alt="Joëlle Péhaut"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Column 2: Info */}
            <div className="w-full lg:w-48 shrink-0 flex flex-col gap-1">
              <span className="text-[#000] font-inter text-[13px] font-bold">
                Joëlle PÉHAUT
              </span>
              <span className="text-[#000] font-inter text-[13px] font-bold mt-4">
                Consultante
              </span>
              <a
                href="mailto:Joelle.PEHAUT@oraxe.eu"
                className="text-[#9D9D9D] font-inter text-[12px] font-medium hover:text-[#000] transition-colors mt-4 break-all"
              >
                Joelle.PEHAUT@oraxe.eu
              </a>
            </div>

            {/* Column 3: Bio */}
            <div className="flex-grow w-full max-w-xl">
              <div className="text-[#000] font-inter text-[13px] font-normal leading-relaxed text-left text-justify flex flex-col gap-4">
                <p>
                  Joëlle Péhaut née en 1959, vit entre Paris et la Bourgogne. Socio-linguiste de formation. Directrice de communication pour un groupe industriel ( BTE) puis cheffe d’établissement à Paris.
                </p>
                <p>
                  Diplômée d’arts plastiques, présidente de l’association UN/UN qui a montré pendant plusieurs années de l’art conceptuel et minimal dans l’espace public. À collaboré plusieurs années avec le Centre National Art et d’Image Imprimée( CNEAI)
                </p>
                <p>
                  Accompagne les artistes et rédige notamment critiques, textes et entretiens pour des catalogues, expositions et magazines. Commissaire d’expositions et journaliste à Artension et à Saisons de Culture.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

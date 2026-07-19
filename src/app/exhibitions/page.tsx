import React from "react";
import Link from "next/link";

export default function ExhibitionsPage() {
  const exhibitions = [
    {
      id: "regards-croises",
      title: "Regards Croisés",
      year: "2026",
      desc: "Une exploration fascinante des perspectives multiples dans l'art moderne, mettant en lumière la diversité des expressions visuelles et la richesse des dialogues interculturels.",
      image: "https://galleryoraxe.com/events/expo_oraxe_1.png",
    },
    {
      id: "echos-invisible",
      title: "Échos de l'Invisible",
      year: "2026",
      desc: "Cette exposition plonge dans les dimensions cachées de la création, où les artistes traduisent l'immatériel en formes sensibles et poétiques.",
      image: "https://galleryoraxe.com/events/expo_oraxe_2.png",
    },
    {
      id: "horizons-contemporains",
      title: "Horizons Contemporains",
      year: "2026",
      desc: "Un panorama audacieux des nouvelles tendances de la scène artistique internationale, repoussant les limites de l'esthétique traditionnelle.",
      image: "https://galleryoraxe.com/events/expo_oraxe_3.png",
    },
    {
      id: "matiere-memoire",
      title: "Matière et Mémoire",
      year: "2026",
      desc: "À travers la sculpture et la peinture, cette sélection d'œuvres interroge notre rapport au passé et la persistance des souvenirs dans le monde contemporain.",
      image: "https://galleryoraxe.com/events/expo_oraxe_4.png",
    },
    {
      id: "lumieres-urbaines",
      title: "Lumières Urbaines",
      year: "2026",
      desc: "Une immersion vibrante dans l'effervescence de la ville, capturée par des artistes qui transforment l'espace urbain en toile de fond de leurs récits.",
      image: "https://galleryoraxe.com/events/expo_oraxe_5.png",
    },
    {
      id: "dialogues-silencieux",
      title: "Dialogues Silencieux",
      year: "2026",
      desc: "Des œuvres intimistes qui invitent à la contemplation, créant un espace de réflexion où le silence devient un langage à part entière.",
      image: "https://galleryoraxe.com/events/expo_oraxe_6.png",
    },
    {
      id: "empreintes-du-temps",
      title: "Empreintes du Temps",
      year: "2026",
      desc: "Une réflexion profonde sur l'écoulement du temps, matérialisée par des techniques mixtes et des approches conceptuelles novatrices.",
      image: "https://galleryoraxe.com/events/expo_oraxe_7.png",
    },
    {
      id: "audela-frontieres",
      title: "Au-delà des Frontières",
      year: "2026",
      desc: "Célébrant l'universalité de l'art, cette exposition rassemble des créateurs d'horizons divers pour déconstruire les barrières culturelles et géographiques.",
      image: "https://galleryoraxe.com/events/expo_oraxe_8.png",
    },
    {
      id: "resonances",
      title: "Résonances",
      year: "2026",
      desc: "Un voyage sensoriel où les couleurs, les textures et les sons se répondent pour offrir une expérience immersive inédite au spectateur.",
      image: "https://galleryoraxe.com/events/expo_oraxe_9.png",
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
              <Link href="/#past-events" className="cursor-pointer text-left block">
                <span className="text-[#9D9D9D] font-inter text-[11px] font-semibold tracking-widest hover:text-[#000] transition-colors">EVENTS</span>
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
                  <div className="w-full bg-[#DBDBDB] group-hover:opacity-85 transition-opacity overflow-hidden flex items-center justify-center shadow-sm">
                     <img src={ex.image} alt={ex.title} className="w-full h-auto object-contain" />
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

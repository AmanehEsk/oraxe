import React from "react";
import Link from "next/link";

interface Artist {
  id: number;
  title: { rendered: string };
  slug: string;
  acf?: any;
}

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

async function getArtists(): Promise<Artist[]> {
  const res = await fetch(
    'https://manager.galleryoraxe.com/index.php?rest_route=/wp/v2/artists&_embed&per_page=100',
    {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      },
      cache: 'force-cache',
    }
  );

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Failed to fetch artists. Status: ${res.status}. Response: ${errorText}`);
  }
  return res.json();
}

export default async function HomePage() {
  const artists = await getArtists();

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
    <div className="bg-[#EBEBEB] min-h-screen w-full flex flex-col items-center py-12 px-6 md:px-16 overflow-y-auto">
      
      {/* Main Content Container */}
      <div className="w-full max-w-7xl flex flex-col gap-24">
        
        {/* Banner Section */}
        <div className="relative w-full aspect-[21/9] md:aspect-[16/9] lg:aspect-[2/1] overflow-hidden bg-gray-100 max-w-6xl mx-auto">
          
          {/* Main Background Image */}
          <img
            src="/assets/Ykpeinture11.png"
            className="w-full h-full object-cover object-[center_30%]"
            alt="YKPeinture Banner"
          />

          {/* Top Left Menu Box Layer */}
          <div className="absolute top-4 left-4 md:top-10 md:left-10 bg-[#FFF] py-3 px-4 md:py-4 md:px-6 flex items-center shadow-lg z-10">
            
            {/* Logo */}
            <Link href="/" className="cursor-pointer">
              <div className="flex items-center justify-center p-2 md:p-4 hover:opacity-80 transition-opacity">
                <img
                  src="/Logo1.png"
                  className="w-28 md:w-40 h-auto object-contain"
                  alt="Logo Oraxe"
                />
              </div>
            </Link>
            
            {/* Divider */}
            <div className="w-[1px] h-12 md:h-16 bg-gray-300 mx-3 md:mx-4"></div>
            
            {/* Navigation Menu */}
            <div className="flex flex-col gap-1 md:gap-2 pl-1 md:pl-2 pr-2 md:pr-4">
              <Link href="#artists" className="cursor-pointer text-left block">
                <span className="text-[#9D9D9D] font-inter text-[10px] md:text-[11px] font-semibold tracking-widest hover:text-[#000] transition-colors">
                  ARTISTS
                </span>
              </Link>
              <Link href="#exhibitions" className="cursor-pointer text-left block">
                <span className="text-[#9D9D9D] font-inter text-[10px] md:text-[11px] font-semibold tracking-widest hover:text-[#000] transition-colors">
                  EXHIBITIONS
                </span>
              </Link>
              <Link href="#team" className="cursor-pointer text-left block">
                <span className="text-[#9D9D9D] font-inter text-[10px] md:text-[11px] font-semibold tracking-widest hover:text-[#000] transition-colors">
                  TEAM
                </span>
              </Link>
              <Link href="#manifeste" className="cursor-pointer text-left block">
                <span className="text-[#9D9D9D] font-inter text-[10px] md:text-[11px] font-semibold tracking-widest hover:text-[#000] transition-colors">
                  MANIFESTE
                </span>
              </Link>
              <Link href="#contact" className="cursor-pointer text-left block">
                <span className="text-[#9D9D9D] font-inter text-[10px] md:text-[11px] font-semibold tracking-widest hover:text-[#000] transition-colors">
                  CONTACT
                </span>
              </Link>
            </div>
            
          </div>
        </div>

        {/* Text Section */}
        <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl mx-auto px-4 md:px-0 items-start">
          
          {/* Title */}
          <div className="md:w-1/3 flex-shrink-0">
            <h2 className="text-[#170098] font-inika text-2xl lg:text-3xl font-bold leading-tight m-0 uppercase">
              ORAXE : NO MAPS, <br className="hidden md:block" /> JUST ART.
            </h2>
          </div>

          {/* Description Paragraph */}
          <div className="md:w-2/3">
            <div className="text-[#170098] font-inter text-sm md:text-[15px] font-semibold leading-relaxed text-justify m-0">
              <p>
                On a arrêté de regarder les cartes pour commencer à regarder les œuvres. En partenariat avec Art Conversation, on transforme la galerie en un terminal de départ pour l'imaginaire.
              </p>
              <p className="mt-4">
                Le deal ? Une scène internationale brute, des enchères qui font battre le cœur et un magazine qui raconte demain.
              </p>
              <p className="mt-4">
                Bienvenue dans l'art monde. Bienvenue chez vous.
              </p>
            </div>
          </div>
          
        </div>

        {/* Artists Section */}
        <div id="artists" className="flex flex-col gap-12 scroll-mt-24 pt-8 border-t border-gray-300">
          <div>
            <h2 className="text-[#170098] font-inika text-2xl lg:text-3xl font-bold tracking-widest uppercase text-left">
              ARTISTS
            </h2>
          </div>
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
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-2">
            {artists.map((artist) => (
              <Link
                key={artist.id}
                href={`/artists/${artist.slug}`}
                className="text-[#9D9D9D] font-inter text-[15px] md:text-lg text-left hover:text-black transition-colors focus:outline-none whitespace-nowrap block w-fit"
              >
                {artist.title?.rendered || "Unknown Artist"}
              </Link>
            ))}
          </div>
        </div>

        {/* Exhibitions Section */}
        <div id="exhibitions" className="flex flex-col gap-12 scroll-mt-24 pt-8 border-t border-gray-300">
          <div>
            <h2 className="text-[#170098] font-inika text-2xl lg:text-3xl font-bold tracking-widest uppercase text-left">
              EXHIBITIONS
            </h2>
          </div>
          <div className="flex flex-col gap-24 mt-4">
            {exhibitions.map((ex) => (
              <div key={ex.id} className="flex flex-col lg:flex-row gap-12 lg:gap-32 w-full items-start">
                <div className="w-full lg:w-[320px] shrink-0 flex flex-col justify-between h-auto lg:h-[220px]">
                  <p className="text-[#000] font-inter text-[13px] font-normal leading-relaxed text-justify">
                    {ex.desc}
                  </p>
                  <p className="text-[#000] font-inter text-[13px] font-normal mt-12 lg:mt-0">
                    {ex.year}
                  </p>
                </div>
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

        {/* Team Section */}
        <div id="team" className="flex flex-col gap-12 scroll-mt-24 pt-8 border-t border-gray-300">
          <div>
            <h2 className="text-[#170098] font-inika text-2xl lg:text-3xl font-bold tracking-widest uppercase text-left">
              TEAM
            </h2>
          </div>
          <div className="flex flex-col gap-16 px-0 md:px-4">
            {/* Member 1: Asma SHAHBAZI */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-start w-full">
              <div className="w-full lg:w-[400px] shrink-0 relative overflow-hidden aspect-[16/9] lg:aspect-[4/3] bg-gray-300">
                <img
                  src="/asma_2.JPG"
                  alt="Asma Shahbazi"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full lg:w-48 shrink-0 flex flex-col gap-1">
                <span className="text-[#000] font-inter text-[13px] font-bold text-left">
                  Asma SHAHBAZI
                </span>
                <span className="text-[#000] font-inter text-[13px] font-bold mt-4 text-left">
                  Director
                </span>
                <a
                  href="mailto:Asma.SHAHBAZI@oraxe.eu"
                  className="text-[#9D9D9D] font-inter text-[12px] font-medium hover:text-[#000] transition-colors mt-4 break-all text-left"
                >
                  Asma.SHAHBAZI@oraxe.eu
                </a>
              </div>
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
              <div className="w-full lg:w-[400px] shrink-0 relative overflow-hidden aspect-[16/9] lg:aspect-[4/3] bg-gray-300">
                <img
                  src="/fathi.png"
                  alt="Mahdi Fatehi"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full lg:w-48 shrink-0 flex flex-col gap-1">
                <span className="text-[#000] font-inter text-[13px] font-bold text-left">
                  Mahdi FATEHI
                </span>
                <span className="text-[#000] font-inter text-[13px] font-bold mt-4 text-left">
                  Curator
                </span>
                <a
                  href="mailto:Mahdi.FATEHI@oraxe.eu"
                  className="text-[#9D9D9D] font-inter text-[12px] font-medium hover:text-[#000] transition-colors mt-4 break-all text-left"
                >
                  Mahdi.FATEHI@oraxe.eu
                </a>
              </div>
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
              <div className="w-full lg:w-[400px] shrink-0 relative overflow-hidden aspect-[16/9] lg:aspect-[4/3] bg-gray-300">
                <img
                  src="/Joolle_Pehaut .jpg"
                  alt="Joëlle Péhaut"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full lg:w-48 shrink-0 flex flex-col gap-1">
                <span className="text-[#000] font-inter text-[13px] font-bold text-left">
                  Joëlle PÉHAUT
                </span>
                <span className="text-[#000] font-inter text-[13px] font-bold mt-4 text-left">
                  Consultante
                </span>
                <a
                  href="mailto:Joelle.PEHAUT@oraxe.eu"
                  className="text-[#9D9D9D] font-inter text-[12px] font-medium hover:text-[#000] transition-colors mt-4 break-all text-left"
                >
                  Joelle.PEHAUT@oraxe.eu
                </a>
              </div>
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

        {/* Manifeste Section */}
        <div id="manifeste" className="flex flex-col gap-12 scroll-mt-24 pt-8 border-t border-gray-300">
          <div>
            <h2 className="text-[#170098] font-inika text-2xl lg:text-3xl font-bold tracking-widest uppercase text-left">
              MANIFESTE
            </h2>
          </div>
          <div className="flex flex-col gap-16 w-full max-w-4xl text-[#000] font-inter items-center mx-auto mt-4">
            <div className="flex flex-col items-center gap-6">
              <div className="text-2xl md:text-3xl font-bold tracking-[0.1em] text-[#000] uppercase text-center">
                Manifeste : "L'Intersection"
              </div>
              <p className="text-[15px] md:text-base tracking-widest text-[#9D9D9D] uppercase text-center">
                L'art n'a pas de visa.
              </p>
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
              <div className="text-xl md:text-2xl font-bold tracking-[0.1em] text-[#000] uppercase text-center">
                Pourquoi nous ?
              </div>

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

            <div className="flex flex-col items-center gap-8 w-full mt-4">
              <div className="text-xl md:text-2xl font-bold tracking-[0.1em] text-[#000] uppercase text-center">
                Oraxe+Art Conversation
              </div>

              <p className="text-[15px] md:text-base font-light leading-relaxed text-center max-w-2xl text-[#000]">
                C’est notre "Open Border policy". Grâce au réseau <a href="https://www.artistessansfrontieres.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">Art Conversation (Artistes Sans Frontières)</a>, Oraxe devient un hub où un sculpteur norvégien peut dialoguer avec une photographe brésilienne. C’est le chaos, mais c’est un chaos magnifique, organisé et accessible.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" className="flex flex-col gap-12 scroll-mt-24 pt-8 border-t border-gray-300">
          <div>
            <h2 className="text-[#170098] font-inika text-2xl lg:text-3xl font-bold tracking-widest uppercase text-left">
              CONTACT
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-12 lg:gap-32 items-start w-full">
            {/* Left Side: Form Column */}
            <div className="flex flex-col gap-12 w-full">
              <div className="bg-white p-8 rounded-lg shadow-sm w-full">
                <form className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-black font-inter text-sm font-semibold">Name</label>
                    <input 
                      type="text" 
                      placeholder="Value" 
                      className="border border-gray-200 p-2.5 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 font-inter text-sm"
                    />
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label className="text-black font-inter text-sm font-semibold">Surname</label>
                    <input 
                      type="text" 
                      placeholder="Value" 
                      className="border border-gray-200 p-2.5 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 font-inter text-sm"
                    />
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label className="text-black font-inter text-sm font-semibold">Email</label>
                    <input 
                      type="email" 
                      placeholder="Value" 
                      className="border border-gray-200 p-2.5 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 font-inter text-sm"
                    />
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label className="text-black font-inter text-sm font-semibold">Message</label>
                    <textarea 
                      placeholder="Value" 
                      rows={4}
                      className="border border-gray-200 p-2.5 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 font-inter text-sm resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="bg-[#2D2D2D] text-white font-inter text-sm font-semibold py-3 rounded-md hover:bg-black transition-colors"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>

            {/* Right Side: Address + Map Column */}
            <div className="flex flex-col gap-12 lg:gap-24 w-full">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-6 text-[#000] font-inter text-[13px] font-normal">
                  <div>
                    <p className="font-bold mb-1 text-left">Galerie d'art ORAXE :</p>
                    <p className="text-left">📍 20 Rue Saint Roch 75001 Paris</p>
                  </div>

                  <div>
                    <p className="font-bold mb-1 text-left">Siege :</p>
                    <p className="text-left">TRIVARIUS</p>
                    <p className="text-left">📍 320 RUE SAINT-HONORÉ</p>
                    <p className="text-left">75001 PARIS</p>
                  </div>
                  
                  <div className="flex items-center gap-3 mt-4">
                    <div className="w-8 h-8 flex items-center justify-center border border-gray-400 rounded-lg text-gray-600 shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </div>
                    <div className="flex flex-col text-[11px] font-light text-left">
                      <span>Siret: 91764406400011</span>
                      <span>Code NAF: 4778C</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full max-w-[700px] overflow-hidden shadow-sm">
                <img
                  src="/map.png"
                  alt="Oraxe Gallery Map"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-[#FFF] min-h-screen w-full flex flex-col items-center py-12 px-6 md:px-16">
      
      {/* Main Content Container */}
      <div className="w-full max-w-6xl flex flex-col gap-4">
        
        {/* Banner Section */}
        <div className="relative w-full aspect-[21/9] md:aspect-[16/9] lg:aspect-[2/1] overflow-hidden bg-gray-100">
          
          {/* Main Background Image */}
          <img
            src="/assets/Ykpeinture11.png"
            className="w-full h-full object-cover object-[center_30%]"
            alt="YKPeinture Banner"
          />

          {/* Top Left Menu Box Layer */}
          <div className="absolute top-4 left-4 md:top-10 md:left-10 bg-[#FFF] py-3 px-4 md:py-4 md:px-6 flex items-center shadow-lg">
            
            {/* Logo */}
            <Link href="/" className="cursor-pointer">
              <div className="flex items-center justify-center p-2 md:p-4 hover:opacity-80 transition-opacity">
                <img
                  src="/Logo1.png"
                  className="w-16 md:w-24 h-auto object-contain"
                  alt="Logo Oraxe"
                />
              </div>
            </Link>
            
            {/* Divider */}
            <div className="w-[1px] h-12 md:h-16 bg-gray-300 mx-3 md:mx-4"></div>
            
            {/* Navigation Menu */}
            <div className="flex flex-col gap-1 md:gap-2 pl-1 md:pl-2 pr-2 md:pr-4">
              <Link href="/artists" className="cursor-pointer text-left block">
                <span className="text-[#9D9D9D] font-inter text-[10px] md:text-[11px] font-semibold tracking-widest hover:text-[#000] transition-colors">
                  ARTISTS
                </span>
              </Link>
              <Link href="/exhibitions" className="cursor-pointer text-left block">
                <span className="text-[#9D9D9D] font-inter text-[10px] md:text-[11px] font-semibold tracking-widest hover:text-[#000] transition-colors">
                  EXHIBITIONS
                </span>
              </Link>
              <Link href="/team" className="cursor-pointer text-left block">
                <span className="text-[#9D9D9D] font-inter text-[10px] md:text-[11px] font-semibold tracking-widest hover:text-[#000] transition-colors">
                  TEAM
                </span>
              </Link>
              <Link href="/contact" className="cursor-pointer text-left block">
                <span className="text-[#9D9D9D] font-inter text-[10px] md:text-[11px] font-semibold tracking-widest hover:text-[#000] transition-colors">
                  CONTACT
                </span>
              </Link>
            </div>
            
          </div>
        </div>

        {/* Text Section: A propo de galerie */}
        <div className="flex flex-col md:flex-row gap-8 mt-12 w-full max-w-4xl mx-auto px-4 md:px-0 items-start">
          
          {/* Title */}
          <div className="md:w-1/3 flex-shrink-0">
            <h2 className="text-[#170098] font-inika text-2xl lg:text-3xl font-bold leading-tight m-0">
              A propo <br className="hidden md:block" /> de galerie
            </h2>
          </div>

          {/* Description Paragraph */}
          <div className="md:w-2/3">
            <p className="text-[#170098] font-inter text-sm md:text-[15px] font-semibold leading-relaxed text-justify m-0">
              La Galerie Oraxe est un espace moderne d'exposition d'œuvres d'art
              qui, en mettant l'accent sur les artistes et commissaires
              contemporains, présente des expositions en cours et des ventes aux
              enchères mensuelles. Grâce à son archive d'expositions, son magazine
              et ses pages associées, la galerie joue un rôle actif dans la
              sensibilisation du public à l'art contemporain et le soutien aux
              artistes. Malgré les informations limitées dans les sources
              disponibles, la Galerie Oraxe est reconnue comme une plateforme
              collaborative promouvant l'art iranien.
            </p>
          </div>
          
        </div>
        
      </div>
    </div>
  );
}

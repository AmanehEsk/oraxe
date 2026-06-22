import React from "react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="bg-[#EBEBEB] min-h-screen w-full py-12 px-6 md:px-16 overflow-y-auto">
      <div className="w-full max-w-7xl mx-auto mt-8 lg:ml-8">
        
        {/* Main Grid: Left Column (Menu + Form), Right Column (Address + Map) */}
        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-12 lg:gap-32 items-start">

          {/* Left Side: Menu + Form Column */}
          <div className="flex flex-col gap-12">
            
            {/* Menu Box */}
            <div className="bg-[#FFF] py-4 px-6 flex items-center shadow-sm shrink-0 h-fit w-fit">
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
                <Link href="/#upcoming-events" className="cursor-pointer text-left block">
                  <span className="text-[#9D9D9D] font-inter text-[11px] font-semibold tracking-widest hover:text-[#000] transition-colors">
                    UPCOMING EVENTS
                  </span>
                </Link>
                <Link href="/#team" className="cursor-pointer text-left block">
                  <span className="text-[#9D9D9D] font-inter text-[11px] font-semibold tracking-widest hover:text-[#000] transition-colors">
                    TEAM
                  </span>
                </Link>
                <Link href="/#manifeste" className="cursor-pointer text-left block">
                  <span className="text-[#9D9D9D] font-inter text-[11px] font-semibold tracking-widest hover:text-[#000] transition-colors">
                    MANIFESTE
                  </span>
                </Link>
                <Link href="/#contact" className="cursor-pointer text-left block">
                  <span className="text-[#000] font-inter text-[11px] font-semibold tracking-widest transition-colors">
                    CONTACT
                  </span>
                </Link>
              </div>
            </div>

            {/* Contact Form Card */}
            <div className="bg-transparent w-full">
              <form className="flex flex-col gap-8">
                <div className="flex flex-col gap-1">
                  <label className="text-gray-400 font-inter text-[10px] uppercase tracking-widest font-medium">Name</label>
                  <input 
                    type="text" 
                    className="bg-transparent border-b border-gray-300 py-3 focus:outline-none focus:border-black font-inter text-sm transition-colors rounded-none placeholder-gray-300"
                    placeholder="Your name"
                  />
                </div>
                
                <div className="flex flex-col gap-1">
                  <label className="text-gray-400 font-inter text-[10px] uppercase tracking-widest font-medium">Surname</label>
                  <input 
                    type="text" 
                    className="bg-transparent border-b border-gray-300 py-3 focus:outline-none focus:border-black font-inter text-sm transition-colors rounded-none placeholder-gray-300"
                    placeholder="Your surname"
                  />
                </div>
                
                <div className="flex flex-col gap-1">
                  <label className="text-gray-400 font-inter text-[10px] uppercase tracking-widest font-medium">Email</label>
                  <input 
                    type="email" 
                    className="bg-transparent border-b border-gray-300 py-3 focus:outline-none focus:border-black font-inter text-sm transition-colors rounded-none placeholder-gray-300"
                    placeholder="Your email address"
                  />
                </div>
                
                <div className="flex flex-col gap-1">
                  <label className="text-gray-400 font-inter text-[10px] uppercase tracking-widest font-medium">Message</label>
                  <textarea 
                    rows={1}
                    className="bg-transparent border-b border-gray-300 py-3 focus:outline-none focus:border-black font-inter text-sm transition-colors rounded-none placeholder-gray-300 resize-none overflow-hidden"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="mt-4 border border-black text-black bg-transparent font-inter text-xs uppercase tracking-widest font-medium py-4 px-10 hover:bg-black hover:text-white transition-all w-fit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>

          {/* Right Side: Address + Map Column */}
          <div className="flex flex-col gap-16 lg:gap-20 w-full">
            
            {/* Address Block */}
            <div className="flex flex-col gap-10">
              
              <div className="flex flex-col gap-1 text-[#000] font-inter">
                <p className="text-gray-400 text-[10px] uppercase tracking-widest font-medium mb-3">Galerie d'art Oraxe</p>
                <p className="text-sm font-medium">20 Rue Saint Roch</p>
                <p className="text-sm text-gray-500">75001 Paris</p>
              </div>

              <div className="flex flex-col gap-1 text-[#000] font-inter">
                <p className="text-gray-400 text-[10px] uppercase tracking-widest font-medium mb-3">Siège</p>
                <p className="text-sm font-medium">TRIVARIUS</p>
                <p className="text-sm text-gray-500">320 Rue Saint-Honoré</p>
                <p className="text-sm text-gray-500">75001 Paris</p>
              </div>
              
              <div className="flex items-center gap-4 mt-2">
                <a href="https://www.instagram.com/oraxegalerie?igsh=MTd3ZndlYjY1NWIxNQ%3D%3D" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center border border-gray-300 hover:border-black hover:bg-black hover:text-white transition-all rounded-full text-black shrink-0 cursor-pointer">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <div className="flex flex-col text-[10px] font-medium text-gray-400 tracking-wider">
                  <span>SIRET: 91764406400011</span>
                  <span>CODE NAF: 4778C</span>
                </div>
              </div>
              
            </div>

            {/* Map Image */}
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
  );
}

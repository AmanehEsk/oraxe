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
            
            {/* Address Block */}
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-6 text-[#000] font-inter text-[13px] font-normal">
                <div>
                  <p className="font-bold mb-1">Galerie d'art ORAXE :</p>
                  <p>📍 20 Rue Saint Roch 75001 Paris</p>
                </div>

                <div>
                  <p className="font-bold mb-1">Siege :</p>
                  <p>TRIVARIUS</p>
                  <p>📍 320 RUE SAINT-HONORÉ</p>
                  <p>75001 PARIS</p>
                </div>
                
                <div className="flex items-center gap-3 mt-4">
                  {/* Instagram Icon Placeholder */}
                  <div className="w-8 h-8 flex items-center justify-center border border-gray-400 rounded-lg text-gray-600">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </div>
                  <div className="flex flex-col text-[11px] font-light">
                    <span>Siret: 91764406400011</span>
                    <span>Code NAF: 4778C</span>
                  </div>
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

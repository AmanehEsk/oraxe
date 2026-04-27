import React from "react";
import Link from "next/link";

export async function generateStaticParams() {
  const res = await fetch('https://manager.galleryoraxe.com/index.php?rest_route=/wp/v2/artists&per_page=100');
  const artists = await res.json();

  if (!Array.isArray(artists)) return [];

  return artists.map((artist: any) => ({
    slug: artist.slug,
  }));
}

async function getArtist(slug: string) {
  const res = await fetch(`https://manager.galleryoraxe.com/index.php?rest_route=/wp/v2/artists&slug=${slug}&_embed`);
  const artists = await res.json();
  return artists[0];
}

export default async function ArtistProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const artist = await getArtist(slug);

  if (!artist) {
    return <div className="p-20 text-[#170098] bg-[#EBEBEB] min-h-screen">Artist not found</div>;
  }

  const featuredImage = artist._embedded?.['wp:featuredmedia']?.[0]?.source_url;

  return (
    <div className="bg-[#EBEBEB] min-h-screen w-full flex flex-col py-12 px-6 md:px-16 overflow-y-auto font-inter">
      
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
          {featuredImage ? (
            <img
              src={featuredImage}
              alt={artist.title?.rendered || "Artist Profile"}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-gray-500 text-xs">No Image</div>
          )}
        </div>
      </div>

      {/* Main Content Info */}
      <div className="w-full max-w-7xl mx-auto flex flex-col items-start px-2 lg:px-8">
        
        <h1 className="text-[#170098] font-inter text-3xl font-bold mb-8">
          {artist.title?.rendered || "Artist"}
        </h1>

        <div className="w-full max-w-4xl mb-12">
          {/* Bio from WordPress ACF or Content */}
          {artist.acf?.description ? (
            <div 
              className="text-[#170098] font-inter text-sm leading-relaxed text-justify wp-content"
              dangerouslySetInnerHTML={{ __html: artist.acf.description }}
            />
          ) : artist.content?.rendered ? (
            <div 
              className="text-[#170098] font-inter text-sm leading-relaxed text-justify wp-content"
              dangerouslySetInnerHTML={{ __html: artist.content.rendered }}
            />
          ) : (
            <p className="text-[#170098] font-inter text-sm leading-relaxed">No description available for this artist.</p>
          )}
        </div>

        {/* Download Links / CV (Placeholders as in original design) */}
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

        {/* Gallery Grid of Works (Placeholders as in original design) */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="aspect-square bg-[#DBDBDB] w-full hover:opacity-80 transition-opacity cursor-pointer block"
            ></div>
          ))}
        </div>
      </div>
      
    </div>
  );
}

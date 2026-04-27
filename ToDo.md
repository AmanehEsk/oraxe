Update artist page to display this specific ACF data. : app/artists/[slug]/page.tsx file and update the return section:

export default async function ArtistProfile({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const artist = await getArtist(slug);

  if (!artist) return <div>Artist not found</div>;

  return (
    <main className="p-10 md:p-20 bg-white">
      <h1 className="text-[#170098] text-4xl font-bold uppercase mb-8">
        {artist.title.rendered}
      </h1>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Artist Image */}
        <div className="w-full md:w-1/3">
          <img
            src={artist._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/placeholder.jpg'}
            alt={artist.title.rendered}
            className="w-full h-auto"
          />
        </div>

        {/* The New Description Section */}
        <div className="w-full md:w-2/3 text-[#170098]">
          <h2 className="text-xl font-bold mb-4 italic">Biography</h2>

          {/* This line fetches the ACF field you just created */}
          {artist.acf?.description ? (
            <div
              className="prose prose-blue leading-relaxed text-justify"
              dangerouslySetInnerHTML={{ __html: artist.acf.description }}
            />
          ) : (
            <p>No description available for this artist.</p>
          )}
        </div>
      </div>
    </main>
  );
}


The Code Fix in Next.js (getArtists Fetch)
When you make a standard fetch() call on a cloud server runner, it sends an automated default user agent header (like node-fetch). LiteSpeed security rules immediately reject this.

You need to explicitly mask the User-Agent header inside your data-fetching files (e.g., inside lib/api.ts or wherever your getArtists function is defined) so your build environment sounds like a normal desktop web browser.

Update your Next.js fetch code to match this configuration precisely:

TypeScript
const API_URL = "https://manager.galleryoraxe.com/index.php?rest_route=/wp/v2/artists";

export async function getArtists() {
  const res = await fetch(`${API_URL}&_embed`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      // This forces the server to see the GitHub Runner as a standard Chrome browser
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    },
    // Ensure Next.js doesn't try to rely heavily on cache during a hard re-build
    cache: 'no-store'
  });

  if (!res.ok) {
    // This will print the exact server response error in your GitHub Actions logs if it fails again
    const errorText = await res.text();
    throw new Error(`Failed to fetch artists. Status: ${res.status}. Response: ${errorText}`);
  }

  return res.json();
}
2. Double-Check your Next.js Build Configuration
Because this workflow builds a static site that uploads via FTP (local-dir: ./out/), make sure your next.config.js (or next.config.mjs) is set to output static files. If it isn't, the build will pass but the FTP step will fail because the folder doesn't exist.

Ensure your next.config.js file includes this line:

JavaScript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // This creates the static "./out" directory required by your deploy file
  images: {
    unoptimized: true, // Required for unmanaged static HTML hosting
  },
};

module.exports = nextConfig;
3. How to verify the specific error in GitHub
If you save these changes, push them to main, and the run still turns red:

Click directly on the failed run text (e.g., "Add User-Agent to API fetch calls...") inside your GitHub interface.

Click on the build-and-deploy job block on the left panel.

Expand the "Build Next.js" step section to see the live console printout. It will reveal the exact line or network exception causing the pipeline execution to fail.

Apply the explicit browser User-Agent headers to your Next.js request, push your code to your main branch, and let me know what the build output log displays if it runs into any secondary hurdles!

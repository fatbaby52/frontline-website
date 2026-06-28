// IndexNow submission script for frontline.rentals
//
// Notifies IndexNow-participating search engines (Bing, Yandex, Seznam,
// Naver, etc. — and Google reads the same protocol) that pages have
// changed, so they recrawl sooner.
//
// Usage:
//   node scripts/indexnow-submit.mjs                 # submit every URL in the sitemap
//   node scripts/indexnow-submit.mjs https://frontline.rentals/equipment ...   # submit specific URLs
//
// The key file (public/<key>.txt) must already be live at the site root,
// otherwise IndexNow rejects the submission.

const HOST = "frontline.rentals";
const KEY = "4b0e57ecdbe634882e0c16a490b445e6";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";

async function urlsFromSitemap() {
  const res = await fetch(SITEMAP_URL);
  if (!res.ok) throw new Error(`Failed to fetch sitemap (${res.status}): ${SITEMAP_URL}`);
  const xml = await res.text();
  const matches = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
  if (matches.length === 0) throw new Error("No <loc> entries found in sitemap.");
  return matches;
}

async function main() {
  const cliUrls = process.argv.slice(2);
  const urlList = cliUrls.length > 0 ? cliUrls : await urlsFromSitemap();

  console.log(`Submitting ${urlList.length} URL(s) to IndexNow:`);
  for (const u of urlList) console.log(`  ${u}`);

  const res = await fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: KEY_LOCATION,
      urlList,
    }),
  });

  const body = await res.text();
  // 200 = accepted, 202 = accepted pending key validation.
  if (res.status === 200 || res.status === 202) {
    console.log(`\nSuccess (HTTP ${res.status}). IndexNow accepted the submission.`);
  } else {
    console.error(`\nIndexNow returned HTTP ${res.status}.`);
    if (body) console.error(body);
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});

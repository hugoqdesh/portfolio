import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hugo Di Maria",
  description: `Hey im Hugo - a 16 year old web developer`,
};

export default function Head() {
  return (
    <head>
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#fff" />
      <meta name="msapplication-TileColor" content="#fff" />
      <meta
        name="google-site-verification"
        content="GIEMYYdVuBC-MWItd08APF11prO3MTs2ko1Ifu2jINU"
      />
      <meta property="og:image" content="/thumbnail.png" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:url" content="https://hugoqdesh.lol/" />
      <meta property="og:site_name" content="Hugo Di Maria" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:image" content="0" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
            {
              "@context": "https://schema.org/",
              "@type": "Person",
              "name": "Hugo Di Maria",
              "url": "https://hugoqdesh.lol",
              "image": "https://www.hugoqdesh.lol/_next/image?url=",
              "sameAs": [
                "https://github.com/hugoqdesh",
                "https://www.instagram.com/hugoqdesh"
              ],
              "jobTitle": "Full Stack Developer",
              "worksFor": {
                "@type": "",
                "name": ""
              }
            }
            `,
        }}
      ></script>
      <script
        defer
        data-domain="hugoqdesh.lol"
        src="https://stats.wouldyoubot.gg/js/script.js"
      ></script>

      {/* <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4113864436683156"
        crossOrigin="anonymous"
      ></script> */}
    </head>
  );
}

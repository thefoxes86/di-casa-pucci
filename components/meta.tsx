import Head from "next/head";
import { CMS_NAME, HOME_OG_IMAGE_URL } from "@/lib/constants";

export default function Meta() {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="https://backend.dicasapucci.com/wp-content/uploads/2023/11/favicon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="https://backend.dicasapucci.com/wp-content/uploads/2023/11/favicon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="https://backend.dicasapucci.com/wp-content/uploads/2023/11/favicon.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />

      <link
        rel="shortcut icon"
        href="https://backend.dicasapucci.com/wp-content/uploads/2023/11/favicon-1.png"
      />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta
        name="description"
        content={`A statically generated blog example using Next.js and ${CMS_NAME}.`}
      />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
    </Head>
  );
}

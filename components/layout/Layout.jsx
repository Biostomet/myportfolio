// components/layout.js

import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Head from "next/head";

export default function Layout({ children, title, metaContent, image }) {
  return (
    <>
      <Head>
        <title>{title} Nassim Segura Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={metaContent} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaContent} />
        <meta property="og:image" content={image} />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow py-10">{children}</main>
        <Footer />
      </div>
    </>
  );
}

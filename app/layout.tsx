'use client';

import { Inter } from 'next/font/google';
import './globals.css';

const nameDomain = "https://www.waterdrcape.com";

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin']
});

function rank() {
    return {
      __html: `{
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "https://www.waterdrcape.com",
    "operatingSystem": "ANDROID",
    "applicationCategory": "GameApplication",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "ratingCount": "7143729"
    },
	"review": {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5",
            "worstRating": "1"
          },
	"author": {
            "@type": "Person",
            "name": "S8toto : Slot Deposit Pulsa Tanpa Potongan Dan Slot Deposit 5000",
            "reviewBody": "S8toto hadir dengan berbagai kemudahan bagi para pemain slot online, salah satunya adalah pilihan Slot Deposit Pulsa Tanpa Potongan. Dengan fitur ini, pemain dapat melakukan deposit menggunakan pulsa tanpa harus khawatir akan adanya potongan. Ini adalah solusi yang praktis bagi mereka yang ingin bermain dengan mudah dan cepat"
          }
        },
    "offers": {
      "@type": "Offer",
      "price": "10000",
      "priceCurrency": "IDR"
    }
  }
  `,
    };
  }

function histats() {
    return {
      __html: `
        var _Hasync= _Hasync|| [];
        _Hasync.push(['Histats.start', '1,4921027,4,5,172,25,00010000']);
        _Hasync.push(['Histats.fasi', '1']);
        _Hasync.push(['Histats.track_hits', '']);
        (function() {
        var hs = document.createElement('script'); hs.type = 'text/javascript'; hs.async = true;
        hs.src = ('//s10.histats.com/js15_as.js');
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);
        })();
      `,
    };
  };

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" data-browser="chrome">
      <head>
        <title>S8toto : Slot Deposit Pulsa Tanpa Potongan Dan Slot Deposit 5000</title>
        <meta name="description" content="S8toto hadir dengan berbagai kemudahan bagi para pemain slot online, salah satunya adalah pilihan Slot Deposit Pulsa Tanpa Potongan. Dengan fitur ini, pemain dapat melakukan deposit menggunakan pulsa tanpa harus khawatir akan adanya potongan. Ini adalah solusi yang praktis bagi mereka yang ingin bermain dengan mudah dan cepat" />
        <meta name="keywords" content="S8toto, Slot Deposit Pulsa Tanpa Potongan, Slot Deposit 5000, Slot Deposit Pulsa, Slot Paling Gacor 2025, Situs Slot Terbaik 2025, Link Slot Gates OF Olympus, Situs Slot Daftar Dapat Bonus, Link Slot Bonus 100, Link Slot Baru Daftar Dapat Bonus" />
        <meta name="google-site-verification" content="8tFqQOaMmffiuV6DntlR5cMN8LHt6tKo3rvzINRsZA4" />
        <meta name="application-name" content="s8toto" />
        <link rel="author" href={nameDomain} />
        <link rel="canonical" href={nameDomain} />
        <meta name="author" content="s8toto" />
        <meta name="publisher" content="s8toto" />
        <meta name="copyright" content="s8toto" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="category" content="slot" />
        <meta name="geo.region" content="ID" />
        <meta name="geo.placename" content="Indonesia" />
        <meta name="language" content="id-ID" />
        <meta name="rating" content="general" />
        <meta name="geo.country" content="ID" />
        <meta name="page-locale" content="id,en" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="width" />
        <meta name="distribution" content="global" />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
        <meta property="og:title" content="S8toto : Slot Deposit Pulsa Tanpa Potongan Dan Slot Deposit 5000" />
        <meta property="og:description" content="S8toto hadir dengan berbagai kemudahan bagi para pemain slot online, salah satunya adalah pilihan Slot Deposit Pulsa Tanpa Potongan. Dengan fitur ini, pemain dapat melakukan deposit menggunakan pulsa tanpa harus khawatir akan adanya potongan. Ini adalah solusi yang praktis bagi mereka yang ingin bermain dengan mudah dan cepat" />
        <meta property="og:url" content={nameDomain} />
        <meta property="og:site_name" content="s8toto" />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:image" content={nameDomain} />
        <meta property="og:image:width" content="840" />
        <meta property="og:image:height" content="480" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="s8toto" />
        <meta name="twitter:title" content="S8toto : Slot Deposit Pulsa Tanpa Potongan Dan Slot Deposit 5000" />
        <meta name="twitter:description" content="S8toto hadir dengan berbagai kemudahan bagi para pemain slot online, salah satunya adalah pilihan Slot Deposit Pulsa Tanpa Potongan. Dengan fitur ini, pemain dapat melakukan deposit menggunakan pulsa tanpa harus khawatir akan adanya potongan. Ini adalah solusi yang praktis bagi mereka yang ingin bermain dengan mudah dan cepat" />
        <meta name="twitter:image" content={nameDomain} />
        <link rel="icon" href="/favicon.ico?favicon.088e6c96.ico" sizes="256x256" type="image/x-icon" />
        <meta name="next-size-adjust" content="" />
        <script type="application/ld+json" dangerouslySetInnerHTML={rank()} key="product-jsonld" />
        <script dangerouslySetInnerHTML={histats()} type="text/javascript" />
      </head>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}

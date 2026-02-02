import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Script from "next/script";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Novtryx – End-to-End Product Development & Digital Solutions",
  description: "Novtryx builds scalable web and mobile applications, UX/UI designs, and digital products that drive growth. From idea to launch, we turn complex business challenges into modern technology solutions.",
  keywords: [
    "Novtryx",
    "software development",
    "digital solutions",
    "product design",
    "UX/UI design",
    "web development",
    "mobile apps",
    "scalable architecture",
    "digital transformation",
    "product development",
  ],
  authors: [{ name: "Novtryx" }],
  creator: "Novtryx",
  publisher: "Novtryx",
  openGraph: {
    title: "Novtryx – End-to-End Product Development & Digital Solutions",
    description: "Novtryx builds scalable web and mobile applications, UX/UI designs, and digital products that drive growth.",
    type: "website",
    url: "https://www.novtryx.com", // replace with actual domain
    images: [
      {
        url: "/logo.svg", // your social share image
        width: 1200,
        height: 630,
        alt: "Novtryx - Product Development & Digital Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Novtryx – End-to-End Product Development & Digital Solutions",
    description: "Novtryx builds scalable web and mobile applications, UX/UI designs, and digital products that drive growth.",
    images: ["/logo.svg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo2.svg" />
      </head>
      <body className={`${dmSans.variable} antialiased`}>
        <Header />
        {children}
        <Footer/>




         <Script
          id="tawk-to"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/697c841be3acdf1c3c3fd4fd/1jg7683he';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}

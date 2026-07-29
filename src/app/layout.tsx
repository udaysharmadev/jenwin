import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/ui/PageTransition";
import LoadingScreen from "@/components/ui/LoadingScreen";
import CurrentlyBuildingWidget from "@/components/ui/CurrentlyBuildingWidget";
import { ModalProvider } from "@/components/ui/ModalContext";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
  metadataBase: new URL("https://jenwin.in"),
  title: {
    default: "Jenwin — Development Agency",
    template: "%s | Jenwin",
  },
  description:
    "Jenwin is a development agency that blends engineering, product thinking, and design discipline to build digital experiences that look sharp, work fast, and scale cleanly.",
  keywords: [
    "development agency",
    "web development agency",
    "product development studio",
    "website design and development",
    "MVP development agency",
    "UI engineering agency",
    "AI development agency",
  ],
  authors: [{ name: "Jenwin" }],
  creator: "Jenwin",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Jenwin",
    title: "Jenwin — Development Agency",
    description:
      "Engineering, product thinking, and design discipline. Digital experiences that look sharp, work fast, and scale cleanly.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jenwin Development Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jenwin — Development Agency",
    description:
      "Engineering, product thinking, and design discipline. Digital experiences that look sharp, work fast, and scale cleanly.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        {/* Preload critical font weights only */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full bg-[#030303] text-[#f8f8f8] flex flex-col" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
        <NextTopLoader
          color="#DC143C"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #DC143C,0 0 5px #DC143C"
        />
        <ModalProvider>
          <LoadingScreen />
          <Navbar />
          <main className="flex-1 relative z-10">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
          <CurrentlyBuildingWidget />
        </ModalProvider>
      </body>
    </html>
  );
}

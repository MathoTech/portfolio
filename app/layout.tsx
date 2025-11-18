import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://matho.dev"),
  title: {
    default: "Thomas Lopez — Développeur Full Stack",
    template: "%s | Thomas Lopez"
  },
  description:
    "Portfolio de Thomas Lopez, développeur Full Stack basé à Montlhéry. Expert Next.js, Node.js et plateformes cloud résilientes.",
  openGraph: {
    title: "Thomas Lopez — Développeur Full Stack",
    description:
      "Solutions web modernes, plateformes data et intégrations cloud pour accélérer vos produits.",
    type: "website",
    locale: "fr_FR",
    url: "https://matho.dev"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="bg-base">
      <body className={`${spaceGrotesk.variable} bg-base text-white`}>
        <div className="grain" aria-hidden="true" />
        <a href="#content" className="skip-link">
          Passer au contenu principal
        </a>
        <div className="relative flex min-h-screen flex-col bg-night-glow">
          <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-64 blur-[140px]">
            <div className="mx-auto h-full w-2/3 rounded-full bg-gradient-to-r from-accent-iris/30 via-accent-electric/30 to-accent-magenta/30 opacity-65" />
          </div>
          <Header />
          <main id="content" className="relative z-10 flex-1 pb-20 pt-14">
            <div className="mx-auto w-full max-w-6xl px-6">{children}</div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

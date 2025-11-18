import type { Metadata } from "next";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Accueil"
};

export default function HomePage() {
  return (
    <div className="space-y-10">
      <Hero />
    </div>
  );
}

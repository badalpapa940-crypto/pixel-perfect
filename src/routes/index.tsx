import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Work } from "@/components/Work";
import { Stats } from "@/components/Stats";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const title = "The Cloud Co. — Creative Production Studio";
const description =
  "One asset in, a full batch of ready-to-use creative out. AI visuals, 3D, commercial and product shoots for brands and agencies.";
const ogImage =
  "https://images.pexels.com/photos/8015461/pexels-photo-8015461.jpeg?auto=compress&cs=tinysrgb&w=1600";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: ogImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: ogImage },
    ],
  }),
  component: Index,
});

function Index() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div className="min-h-screen bg-paper text-ink dark:bg-paper-dark dark:text-ink-dark">
      <Nav dark={dark} onToggleDark={() => setDark((d) => !d)} />
      <main>
        <Hero />
        <Services />
        <Work />
        <Stats />
        <Process />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

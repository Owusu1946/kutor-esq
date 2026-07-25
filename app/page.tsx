import { Hero } from "@/app/components/sections/Hero";
import { HeroGallery } from "@/app/components/sections/HeroGallery";

export default function Home() {
  return (
    <div className="space-y-12 pb-20">
      <Hero />
      <HeroGallery />
    </div>
  );
}

import Approach from "@/components/sections/Approach";
import Ribbon from "@/components/sections/Ribbon";
import Work from "@/components/sections/Work";
import Marquee from "@/components/sections/Marquee";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import { projects } from "@/constants";

export default function Home() {
  return (
    <main>
      <Approach />
      {/* Everything after the hero rises up over it on scroll.
          Ribbon sits at the top edge as a visible "lid". */}
      <div className="relative z-10 bg-bg">
        <Ribbon />
        <Work projects={projects} />
        <Marquee />
        <Experience />
        <Contact />
      </div>
    </main>
  );
}

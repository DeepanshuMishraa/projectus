import { Globe } from "@/components/Globe";
import { Hero } from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { Cover } from "@/components/ui/cover";
import { FeaturesSection } from "@/components/Features";
import { Raleway } from "next/font/google";
import { StickyScrollRevealDemo } from "@/components/Sticky-Scroll";
import { Footer } from "@/components/Footer";

const raleway = Raleway({
    subsets: ["latin"],
    weight: ["400", "700"],
})

export default function Home() {
    return (
      <div className="min-h-screen bg-neutral-900 flex flex-col items-center justify-start relative w-full">
        <Navbar />
        <div className="w-full max-w-7xl items-center justify-center flex h-screen px-4 py-2">
          <Hero />
        </div>
        <div className="flex flex-col lg:flex-row items-start justify-between w-full max-w-7xl mx-auto px-4 py-2">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:self-center">
            <h2 className="text-3xl font-semibold text-white mb-6">
              <Cover>Connect Globally</Cover>
            </h2>
            <p className="text-xl text-neutral-300 mb-4">
              Projectus: Your gateway to worldwide collaboration
            </p>
            <ul className="text-neutral-400 space-y-2">
              <li>• Share ideas with developers across continents</li>
              <li>• Find skilled collaborators for your projects</li>
              <li>• Get valuable feedback from a diverse community</li>
              <li>• Showcase your work to a global audience</li>
            </ul>
          </div>
          <div className="w-full lg:w-1/2 lg:self-center">
            <Globe />
          </div>
        </div>
        <ShootingStars />
        <StarsBackground />
        <div className="flex flex-col items-center justify-center w-full max-w-7xl mt-10 py-16 px-4">
            <div className="flex items-center justify-center mb-12">
                <Cover className={`text-4xl font-bold ${raleway.className}`}>What We Offer</Cover>
            </div>
            <FeaturesSection/>
        </div>

        <div className="w-full py-24">
          <div className="flex items-center justify-center mb-12">
            <Cover className={`text-4xl font-bold ${raleway.className}`}>How Projectus Works</Cover>
          </div>
          <StickyScrollRevealDemo/>
        </div>
        <Footer/>
      </div>
    );
  }

"use client"

import React from "react";
import { Cover } from "@/components/ui/cover";
import { Button } from "./ui/button";
import Link from "next/link";
import AnimatedGradientText from "./magicui/animated-gradient-text";
import { ArrowRight } from "lucide-react";

export const  Hero = ()=> {
  return (
    <div>
      <AnimatedGradientText>Introducing Projectus <ArrowRight/></AnimatedGradientText>
      <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center  relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        Share your projects <br /> at <Cover>warp speed</Cover>
      </h1>
      <p className="text-xl text-center text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
        Connect with collaborators, get feedback, and find resources for your development projects globally.
      </p>
      <div className="flex  justify-center mt-8 space-x-4">
        <Link href="/project" className="z-10">
        <Button
          variant="outline"
          size="lg"
        >
          Explore Projects
        </Button>
        </Link>
      </div>
    </div>
  );
}

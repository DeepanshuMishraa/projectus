import React from 'react';
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import WordFadeIn from '@/components/magicui/word-fade-in';
import ProjectsCard from '@/components/ProjectsCard';

const Dashboard = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden bg-black">
      <Navbar/>

      <main className="flex-grow p-10 mt-20">
        <div className='flex  items-center justify-between'>
            <WordFadeIn words="Discover Projects" />
            <Button>
                <PlusIcon className="w-6 h-6 mr-2"/>
                Create Project
            </Button>
        </div>

        <div>
            <ProjectsCard/>
        </div>
      </main>

      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "absolute inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />
    </div>
  );
}

export default Dashboard;

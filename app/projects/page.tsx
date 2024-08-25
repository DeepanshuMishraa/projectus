'use client';

import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import WordFadeIn from '@/components/magicui/word-fade-in';
import ProjectsCard from '@/components/ProjectsCard';
import Pagination from '@/components/Pagination';
import { Footer } from '@/components/Footer';
import { CreateProject } from '@/components/CreateProject';

const Dashboard = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10; // This should be calculated based on your data

    const handlePageChange = (page: number) => {
      setCurrentPage(page);
      // Here you would typically fetch data for the new page
      // For example: fetchData(page);
    };
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden bg-black">
      <Navbar/>

      <main className="flex-grow p-10 mt-20">
        <div className='flex  items-center justify-between'>
            <WordFadeIn words="Discover Projects" />
            <CreateProject/>
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
      <div  className='py-10'>
            <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      </div>

      <Footer/>
    </div>
  );
}

export default Dashboard;

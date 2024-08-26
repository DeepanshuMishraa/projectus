'use client';

import React, { useState } from 'react';
import { BackgroundBeams } from "@/components/ui/background-beams";
import ProjectsCard from "@/components/ProjectsCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Pagination from '@/components/Pagination';
import { Button } from '@/components/ui/button';
import Link from 'next/link';



export default function(){

    const [searchTerm,setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10; // This should be calculated based on your data

    const handlePageChange = (page: number) => {
      setCurrentPage(page);
      // Here you would typically fetch data for the new page
      // For example: fetchData(page);
    };
    return (
        <div className="min-h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-start overflow-hidden">
        <div className="w-full max-w-7xl mx-auto p-4  relative z-10">
          <h1 className="text-4xl md:text-7xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 mb-8 mt-16 transition-all duration-300 ease-in-out hover:from-neutral-100 hover:to-neutral-500">
            Discover Amazing Projects
          </h1>

          <div className="mb-12 flex justify-center">
            <div className="relative w-full max-w-xl">
              <Input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full bg-neutral-900 border-neutral-800 text-neutral-200 placeholder:text-neutral-500 focus:ring-2 focus:ring-teal-500 transition-all duration-300 ease-in-out"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-500" size={20} />
            </div>
            <div className="px-4">
                <Link href="/dashboard">
                <Button>
                    Create your own
                </Button>
                </Link>
              </div>
          </div>

          <div className="transition-all mb-6 duration-300 ease-in-out">
            <ProjectsCard />
          </div>
          <Pagination
                     currentPage={currentPage}
                     totalPages={totalPages}
                     onPageChange={handlePageChange}
          />
        </div>
        <BackgroundBeams />
      </div>
    )
}

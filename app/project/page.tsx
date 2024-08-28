'use client';

import React, { useState, useEffect } from 'react';
import { BackgroundBeams } from "@/components/ui/background-beams";
import ProjectsCard from "@/components/ProjectsCard";
import Pagination from '@/components/Pagination';
import axios from 'axios';
import SearchBar from '@/components/Search';


export default function ProjectPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  useEffect(() => {
    // Fetch the total number of projects to calculate total pages
    const fetchProjectsCount = async () => {
      try {
        const res = await axios.get("/api/v1/get");
        const totalProjects = res.data.AllProjects.length;
        const projectsPerPage = 6;
        setTotalPages(Math.ceil(totalProjects / projectsPerPage));
      } catch (error) {
        console.error("Error fetching project count:", error);
      }
    };

    fetchProjectsCount();
  }, []);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-start overflow-hidden">
      <div className="w-full max-w-7xl mx-auto p-4 relative z-10">
        <h1 className="text-4xl md:text-7xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 mb-8 mt-16 transition-all duration-300 ease-in-out hover:from-neutral-100 hover:to-neutral-500">
          Discover Amazing Projects
        </h1>

        <div className="mb-12 flex justify-center">
{/* search goes here */}
<SearchBar/>
        </div>

        <div className="transition-all mb-6 duration-300 ease-in-out">
          <ProjectsCard currentPage={currentPage} />
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
      <BackgroundBeams />
    </div>
  );
}

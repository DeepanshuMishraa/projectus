'use client'

import { useState, useEffect } from "react";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import { useDebounce } from "@/hooks/hooks";
import axios from "axios";
import Link from "next/link";

// Define a type for project results
interface Project {
  id: string;
  title: string;
}

// Search bar implementation using debouncing
const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>(""); // Set type for searchTerm
  const [searchResults, setSearchResults] = useState<Project[]>([]); // Set type for searchResults
  const debouncedSearchTerm = useDebounce(searchTerm, 500); // Debounce search term with a delay of 500ms

  const handleSearch = async (searchTerm: string) => {
    try {
      const result = await axios.get(`/api/v1/get?search=${searchTerm}`);
      console.log("Fetched results:", result.data); // Debugging log

      if (result.data && result.data.AllProjects) {
        setSearchResults(result.data.AllProjects);
      } else {
        setSearchResults([]);
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  useEffect(() => {
    if (debouncedSearchTerm) {
      handleSearch(debouncedSearchTerm);
    } else {
      setSearchResults([]);
    }
  }, [debouncedSearchTerm]);

  return (
    <div className="relative w-full max-w-xl">
      <Input
        type="text"
        placeholder="Search GitHub repositories..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="pl-10 pr-4 py-2 w-full bg-neutral-900 border-neutral-800 text-neutral-200 placeholder:text-neutral-500 focus:ring-2 focus:ring-teal-500 transition-all duration-300 ease-in-out"
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-500" size={20} />
      {searchResults.length > 0 && (
        <ul className="absolute z-10 w-full mt-2 bg-neutral-800 border border-neutral-700 rounded-md shadow-lg">
          {searchResults.map((project) => (
            <Link href={`/project/${project.id}`} key={project.id}>
            <li key={project.id} className="px-4 py-2 hover:bg-neutral-700">
              {project.title}
            </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;

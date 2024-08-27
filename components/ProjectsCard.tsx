'use client';

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";
import { toast } from "./ui/use-toast";
import { User, Loader2 } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string | string[];  // tags can be either a string or an array
  image: string;
  author: string;
  github: string;
}

const ProjectsCard = ({ currentPage }: { currentPage: number }) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const projectsPerPage = 6;

  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/api/v1/get");
      setProjects(res.data.AllProjects);
    } catch (e) {
      console.error("Error fetching projects:", e);
      toast({
        title: "Error",
        description: "An error occurred while fetching the projects",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  // Calculate the index of the first and last projects on the current page
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {currentProjects.map((project, index) => {
        let tagsArray: string[] = [];

        // Check if tags are a string or an array and convert accordingly
        if (typeof project.tags === 'string') {
          tagsArray = project.tags.split(",");
        } else if (Array.isArray(project.tags)) {
          tagsArray = project.tags;
        }

        const displayedTags = tagsArray.slice(0, 4); // Display only up to 4 tags
        const additionalTagsCount = tagsArray.length - displayedTags.length;

        return (
          <Card key={index} className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-48">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
              <CardDescription className="text-sm text-gray-100">
                <div className="mt-4">
                  {project.description}
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2 mb-4">
                {displayedTags.map((tag, i) => (
                  <Badge key={i}>{tag}</Badge>
                ))}
                {additionalTagsCount > 0 && (
                  <Badge className="bg-gray-300 text-gray-700">
                    +{additionalTagsCount} more
                  </Badge>
                )}
              </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between bg-black px-6 py-3">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4 text-gray-100" />
                <span className="text-sm text-gray-100">{project.author}</span>
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-500 hover:underline"
              >
                View on GitHub
              </a>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
};

export default ProjectsCard;

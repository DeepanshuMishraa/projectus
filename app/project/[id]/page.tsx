'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, Star, User, Calendar, ExternalLink, BookOpen, Code } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Progress } from "@/components/ui/progress";
import { useRouter } from 'next/navigation';
import axios from 'axios';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  author: string;
  github: string;
  tags: string[];
  stars: number;
  forks: number;
  contributors: number;
  openIssues: number;
  lastPushed: string;
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(`/api/v1/get?id=${params.id}`);
        if (response.data && response.data.project) {
          setProject(response.data.project);
        } else {
          throw new Error("Project data not found in the response");
        }
      } catch (error) {
        console.error('Error fetching project:', error);
        setError(error instanceof Error ? error.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [params.id]);

  if (loading) {
    return (
      <div className="container mx-auto p-6 max-w-6xl">
        <Skeleton className="h-[600px] w-full" />
      </div>
    );
  }

  if (error) {
    return <div className="container mx-auto p-6">Error: {error}</div>;
  }

  if (!project) {
    return <div className="container mx-auto p-6">Project not found</div>;
  }

  const lastPushedDate = new Date(project.lastPushed).toLocaleDateString();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto p-6 max-w-6xl"
    >
      <Button
        variant="ghost"
        className="mb-4"
        onClick={() => router.back()}
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back
      </Button>
      <Card className="overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center justify-center"
          >
            <div className="relative w-64 h-64 rounded-full overflow-hidden bg-white p-8">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="contain"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col justify-between"
          >
            <div>
              <CardHeader className="p-0">
                <CardTitle className="text-4xl font-bold mb-2">{project.title}</CardTitle>
                <CardDescription className="flex items-center text-lg text-gray-300">
                  <User className="mr-2 h-5 w-5" />
                  {project.author}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 mt-4">
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="bg-gray-700 text-gray-200">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </div>
          </motion.div>
        </div>
        <div className="bg-gray-800 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <StatCard icon={<Star />} label="Stars" value={project.stars.toLocaleString()} />
            <StatCard icon={<Code />} label="Forks" value={project.forks.toLocaleString()} />
            <StatCard icon={<User />} label="Contributors" value={project.contributors.toLocaleString()} />
            <StatCard icon={<BookOpen />} label="Open Issues" value={project.openIssues.toLocaleString()} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Project Timeline</h3>
              <Progress value={75} className="h-2 mb-2" />
              <div className="flex justify-between text-sm text-gray-400">
                <span>Last Push: {lastPushedDate}</span>
              </div>
            </div>
            <div className="flex flex-col justify-end">
              <Button asChild className="w-full mb-2" variant="outline">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> View on GitHub
                </a>
              </Button>
              <Button asChild className="w-full">
                <a href={`https://${project.author}.org`} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" /> Visit Website
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

const StatCard = ({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) => (
  <div className="flex items-center space-x-3 bg-gray-700 p-3 rounded-lg">
    {icon}
    <div>
      <div className="text-sm text-gray-400">{label}</div>
      <div className="text-xl font-bold">{value}</div>
    </div>
  </div>
);

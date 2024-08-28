import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id");
  const search = searchParams.get("search");

  console.log("Received request with id:", id, "and search:", search);

  try {
    if (id) {
      console.log("Fetching single project with id:", id);
      const projectId = parseInt(id, 10);
      if (isNaN(projectId)) {
        return NextResponse.json(
          { error: "Invalid ID format" },
          { status: 400 }
        );
      }

      const project = await prisma.repo.findUnique({
        where: { id: projectId },
        select: {
          id: true,
          title: true,
          image: true,
          github: true,
          tags: true,
          author: true,
          description: true,
          forks: true,
          stars: true,
          contributors: true,
          openIssues: true,
          lastPushed: true,
        },
      });

      console.log("Fetched project:", project);

      if (!project) {
        console.log("Project not found for id:", id);
        return NextResponse.json(
          { error: "Project not found" },
          { status: 404 }
        );
      }

      return NextResponse.json({ project, status: 200 });
    } else if (search) {
      console.log("Fetching projects with search term:", search);
      const projects = await prisma.repo.findMany({
        where: {
          title: {
            contains: search,
            mode: "insensitive", // Optional: to make the search case insensitive
          },
        },
        select: {
          id: true,
          title: true,
          image: true,
          github: true,
          tags: true,
          author: true,
          description: true,
        },
      });

      console.log("Fetched projects count:", projects.length);

      return NextResponse.json({ AllProjects: projects, status: 200 });
    } else {
      console.log("Fetching all projects");
      const projects = await prisma.repo.findMany({
        select: {
          id: true,
          title: true,
          image: true,
          github: true,
          tags: true,
          author: true,
          description: true,
        },
      });

      console.log("Fetched projects count:", projects.length);

      return NextResponse.json({ AllProjects: projects, status: 200 });
    }
  } catch (e) {
    console.error("Database error:", e);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

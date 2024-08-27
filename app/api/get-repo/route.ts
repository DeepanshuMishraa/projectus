// app/api/github-repos/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import { Octokit } from "@octokit/rest";

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

const MIN_STARS = 100;
const DAYS_SINCE_LAST_PUSH = 30;
const MAX_REPOS = 100;

export async function GET() {
  try {
    let allRepos = [];
    let page = 2;

    while (allRepos.length < MAX_REPOS) {
      const query = `stars:>=${MIN_STARS} pushed:>=${getDateNDaysAgo(
        DAYS_SINCE_LAST_PUSH
      )} sort:stars-desc`;
      const { data } = await octokit.search.repos({
        q: query,
        per_page: 100,
        page: page,
        sort: "stars",
        order: "desc",
      });

      const filteredRepos = data.items.filter(
        (repo) =>
          repo.description &&
          repo.homepage &&
          (repo.topics?.some((topic) =>
            [
              "project",
              "application",
              "fullstack",
              "webapp",
              "typescript",
              "react",
              "nextjs",
              "express",
              "monorepo",
              "prisma",
              "graphql",
              "trpc",
              "tailwindcss",
              "shadcn",
              "python",
              "django",
              "flask",
              "fastapi",
              "deep-learning",
                "machine-learning",
                "data-science",
                "rust",
                "golang",
                "kotlin",
                "java",
                "data-structures",
                "algorithms",
                "nodejs",
                "javascript",
            ].includes(topic)
          ) ??
            false)
      );

      allRepos = allRepos.concat(filteredRepos);

      if (data.items.length < 100 || page * 100 >= 1000) break; // GitHub API limitation
      page++;
    }

    allRepos = allRepos.slice(0, MAX_REPOS);

    for (const repo of allRepos) {
      await prisma.repo.upsert({
        where: { id: repo.id },
        update: {
          title: repo.name,
          description: repo.description || "",
          image: repo.owner.avatar_url,
          github: repo.html_url,
          tags: repo.topics,
          author: repo.owner.login,
          stars: repo.stargazers_count,
          lastPushed: new Date(repo.pushed_at),
        },
        create: {
          id: repo.id,
          title: repo.name,
          description: repo.description || "",
          image: repo.owner.avatar_url,
          github: repo.html_url,
          tags: repo.topics,
          author: repo.owner.login,
          stars: repo.stargazers_count,
          lastPushed: new Date(repo.pushed_at),
        },
      });
    }

    const projects = await prisma.repo.findMany({
      select: {
        title: true,
        image: true,
        github: true,
        tags: true,
        author: true,
        description: true,
        stars: true,
        lastPushed: true,
      },
    });

    return NextResponse.json({
      AllProjects: projects,
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching or saving repositories:", error);
    return NextResponse.json({
      error: "Internal Server Error",
      status: 500,
    });
  }
}

function getDateNDaysAgo(n: number): string {
  const date = new Date();
  date.setDate(date.getDate() - n);
  return date.toISOString().split("T")[0];
}

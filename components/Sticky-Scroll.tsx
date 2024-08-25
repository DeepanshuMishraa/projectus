"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { Raleway } from "next/font/google";

const raleway = Raleway({
    subsets: ["latin"],
    weight: ["400", "700"],
});

const content = [
  {
    title: "Share Your Projects",
    description:
      "Showcase your development projects to a global audience. Get visibility for your work and connect with potential collaborators, investors, and clients.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <span className={`text-4xl font-bold ${raleway.className}`}>Showcase</span>
      </div>
    ),
  },
  {
    title: "Get Valuable Feedback",
    description:
      "Receive insights and suggestions from developers worldwide. Improve your projects with constructive criticism and fresh perspectives from the community.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <span className={`text-4xl font-bold ${raleway.className}`}>Feedback</span>
      </div>
    ),
  },
  {
    title: "Find Collaborators",
    description:
      "Connect with skilled developers who share your passion. Find the perfect team members for your projects and expand your professional network.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <span className={`text-4xl font-bold ${raleway.className}`}>Collaborate</span>
      </div>
    ),
  },
  {
    title: "Attract Investors",
    description:
      "Present your projects to potential investors. Showcase your skills and innovative ideas to secure funding and take your projects to the next level.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <span className={`text-4xl font-bold ${raleway.className}`}>Invest</span>
      </div>
    ),
  },
];

export function StickyScrollRevealDemo() {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <StickyScroll content={content} />
    </div>
  );
}

import { cn } from "@/lib/utils";
import {
  IconUserCircle,
  IconFolderPlus,
  IconSearch,
  IconBrowserCheck,
  IconFileDescription,
  IconUserSearch,
  IconMessageCircle2,
  IconUsers,
} from "@tabler/icons-react";

export function FeaturesSection() {
  const features = [
    {
      title: "User Registration",
      description: "Register with email or social media. Create your developer profile.",
      icon: <IconUserCircle />,
    },
    {
      title: "Project Management",
      description: "Create, edit, and manage your development projects easily.",
      icon: <IconFolderPlus />,
    },
    {
      title: "Project Discovery",
      description: "Explore projects with search and filter options. Find inspiration.",
      icon: <IconSearch />,
    },
    {
      title: "Custom Project Pages",
      description: "Showcase your projects with unique, customizable pages.",
      icon: <IconBrowserCheck />,
    },
    {
      title: "Resume Generator",
      description: "Create project-specific resumes with customizable templates.",
      icon: <IconFileDescription />,
    },
    {
      title: "Recruiter Features",
      description: "Share projects with recruiters. Highlight your best work.",
      icon: <IconUserSearch />,
    },
    {
      title: "Community Interaction",
      description: "Comment, rate, and engage in Q&A for each project.",
      icon: <IconMessageCircle2 />,
    },
    {
      title: "Collaboration Tools",
      description: "Find collaborators, message team members, and work together.",
      icon: <IconUsers />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
        
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import Image from "next/image";

const ProjectsCard = () => {
    // web3,webdev and devops projects along with tags

    const projects = [
        {
            title: "Decentralized Social Media App",
            description: "A decentralized social media app built on the Ethereum blockchain",
            tags: ["web3", "solidity", "react", "blockchain"],
            image: "https://images.unsplash.com/photo-1520509414578-d9cbf09933a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcHV0ZXIlMjBzY2llbmNlfGVufDB8fDB8fHww",
        },
        {
            title: "E-commerce Platform",
            description: "A full-stack e-commerce platform for selling digital products",
            tags: ["webdev", "react", "nodejs", "mongodb"],
            image: "https://images.unsplash.com/photo-1520509414578-d9cbf09933a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcHV0ZXIlMjBzY2llbmNlfGVufDB8fDB8fHww",
        },
        {
            title: "Decentralized Exchange",
            description: "A decentralized exchange for trading ERC20 tokens",
            tags: ["web3", "solidity", "react", "blockchain"],
            image: "https://images.unsplash.com/photo-1520509414578-d9cbf09933a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcHV0ZXIlMjBzY2llbmNlfGVufDB8fDB8fHww",
        },
        {
            title: "Decentralized Social Media App",
            description: "A decentralized social media app built on the Ethereum blockchain",
            tags: ["web3", "solidity", "react", "blockchain"],
            image: "https://images.unsplash.com/photo-1520509414578-d9cbf09933a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcHV0ZXIlMjBzY2llbmNlfGVufDB8fDB8fHww",
        },
        {
            title: "E-commerce Platform",
            description: "A full-stack e-commerce platform for selling digital products",
            tags: ["webdev", "react", "nodejs", "mongodb"],
            image: "https://images.unsplash.com/photo-1520509414578-d9cbf09933a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcHV0ZXIlMjBzY2llbmNlfGVufDB8fDB8fHww",
        },
        {
            title: "Decentralized Exchange",
            description: "A decentralized exchange for trading ERC20 tokens",
            tags: ["web3", "solidity", "react", "blockchain"],
            image: "https://images.unsplash.com/photo-1520509414578-d9cbf09933a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcHV0ZXIlMjBzY2llbmNlfGVufDB8fDB8fHww",
        },
    ]
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
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
                        <CardDescription className="text-sm text-gray-600">
                            {project.description}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, tagIndex) => (
                                <Badge key={tagIndex} variant="outline" className="text-xs">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
  )
}

export default ProjectsCard

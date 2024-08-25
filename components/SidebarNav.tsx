import { Search, PenSquare, Home, Users, FolderOpen, MessageCircle, BarChart, ChevronDown, ChevronRight } from "lucide-react"
import { useState } from "react"

export default function SidebarNav() {
  const [isProjectsExpanded, setIsProjectsExpanded] = useState(true)

  return (
    <div className="w-64 h-screen bg-gray-900 text-gray-300 p-4 fixed">
      <div className="flex justify-between items-center mb-6">
        <Search className="h-5 w-5" />
        <PenSquare className="h-5 w-5" />
      </div>

      <nav>
        <ul className="space-y-2">
          <li className="flex items-center space-x-3 bg-gray-800 rounded p-2">
            <Home className="h-5 w-5" />
            <span>Home</span>
          </li>
          <li className="flex items-center space-x-3 p-2">
            <Users className="h-5 w-5" />
            <span>Community</span>
          </li>
          <li className="flex items-center space-x-3 p-2">
            <FolderOpen className="h-5 w-5" />
            <span>My Projects</span>
          </li>
          <li className="flex items-center space-x-3 p-2">
            <MessageCircle className="h-5 w-5" />
            <span>Messages</span>
          </li>
        </ul>

        <div className="mt-6 mb-2 text-xs text-gray-500">Explore Projects</div>
        <ul className="space-y-2">
          <li className="flex items-center space-x-3 p-2">
            <BarChart className="h-5 w-5" />
            <span>Trending</span>
          </li>
          <li className="flex items-center space-x-3 p-2">
            <BarChart className="h-5 w-5" />
            <span>Recent</span>
          </li>
          <li className="flex items-center space-x-3 p-2">
            <BarChart className="h-5 w-5" />
            <span>Most Viewed</span>
          </li>
        </ul>

        <div className="mt-6 mb-2 flex items-center justify-between text-xs text-gray-500 cursor-pointer" onClick={() => setIsProjectsExpanded(!isProjectsExpanded)}>
          <span>My Projects</span>
          {isProjectsExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        </div>
        {isProjectsExpanded && (
          <ul className="space-y-2 ml-2">
            <li className="flex items-center space-x-3 p-2">
              <span className="text-sm">Projectus Development</span>
            </li>
            <li className="flex items-center space-x-3 p-2">
              <span className="text-sm">Community Feedback System</span>
            </li>
            <li className="flex items-center space-x-3 p-2">
              <span className="text-sm">Real-time Collaboration Tool</span>
            </li>
          </ul>
        )}
      </nav>
    </div>
  )
}

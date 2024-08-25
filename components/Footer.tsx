import Link from "next/link"
import { Cover } from "./ui/cover"


export const Footer = ()=>{
    return (
        <div className="w-full shadow-lg shadow-gray-500 h-14 flex items-center justify-center text-center">
            <Cover>&copy; {new Date().getFullYear()} Projectus</Cover>
        </div>
    )
}

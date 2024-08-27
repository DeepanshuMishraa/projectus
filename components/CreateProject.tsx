import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import axios from "axios"
import { toast } from "./ui/use-toast"

export function CreateProject() {
  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [gh, setGh] = useState("")
  const [tags, setTags] = useState("")
  const [description, setDescription] = useState("")
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
        setLoading(true)
      const response = await axios.post('/api/v1/create', {
        title,
        image,
        gh,
        tags,
        description
      })
      console.log('API Response:', response.data)
      toast({
        title: "Project Created Successfully",
        description: "Your project has been created successfully",
        variant: "default"
      })
      setOpen(false) // Close the dialog
      // Reset form fields
      setTitle("")
      setImage("")
      setGh("")
      setTags("")
      setDescription("")
    } catch (e) {
      console.error('API Error:', e)
      toast({
        title: "Error",
        description: "An error occurred while creating the project",
        variant: "destructive"
      })
    }finally{
        setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" onClick={() => setOpen(true)}>Create Project</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create New Project</DialogTitle>
          <DialogDescription>
            Enter your project details. Click create when you're done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Title
              </Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="image" className="text-right">
                Image
              </Label>
              <Input
                id="image"
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="gh" className="text-right">
                GitHub Repo
              </Label>
              <Input
                id="gh"
                value={gh}
                onChange={(e) => setGh(e.target.value)}
                placeholder="https://github.com/username/repo"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="tags" className="text-right">
                Tags
              </Label>
              <Textarea
                id="tags"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                placeholder="Enter tags separated by commas"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
          <Button type="submit">
{loading ? (
  <div className="flex items-center">
    <svg
      className="animate-spin h-5 w-5 mr-3 text-white dark:text-black"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
    Processing
  </div>
) : (
  "Create Project"
)}
</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ShootingStars } from "@/components/ui/shooting-stars"
import { StarsBackground } from "@/components/ui/stars-background"
import Navbar from "@/components/Navbar"

export default function Signup() {
  return (
    <div className="w-full flex items-center justify-center h-screen">
        <Navbar/>
    <div className="flex items-center justify-center py-12">
      <div className="mx-auto grid w-[350px] gap-6">
        <div className="grid  gap-2 text-center">
          <h1 className="text-3xl font-bold">Signup</h1>
          <p className="text-balance text-muted-foreground">
            Enter your email below to Create  your account
          </p>
        </div>
        <div className="grid gap-4 z-10">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <Link
                href="/forgot-password"
                className="ml-auto inline-block text-sm underline"
              >
                Forgot your password?
              </Link>
            </div>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" className="w-full">
            Signup
          </Button>
          <Button variant="outline" className="w-full">
            Continue with Google
          </Button>
        </div>
        <div className="mt-4 z-10 text-center text-sm">
          Already have an account?{" "}
          <Link href="/login" className="underline">
            Sign in
          </Link>
        </div>
      </div>
    </div>
    <div className="hidden lg:block">
    <ShootingStars />
    <StarsBackground />
    </div>
  </div>
  )
}

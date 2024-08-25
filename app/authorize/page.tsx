'use client'

import { submitGitHubLogin } from '@/lib/githubAuth'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Component() {
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter();

  const handleGitHubLogin = async () => {
    setIsLoading(true)
    try {
      await submitGitHubLogin()
      router.push("/projects");
    } catch (error) {
      console.error('Failed to sign in:', error)
    } finally {
      setIsLoading(false)
}
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 p-4">
      <div className="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-xl">
        <div className="p-8">
          <h2 className="text-center text-2xl font-bold text-gray-800">Welcome Back</h2>
          <p className="mt-2 text-center text-sm text-gray-600">Sign in to your account using GitHub</p>
          <form action={submitGitHubLogin}>
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault()
                handleGitHubLogin()
              }}
              disabled={isLoading}
              className="mt-8 flex w-full items-center justify-center rounded-lg bg-[#24292e] px-4 py-3 text-white transition-colors hover:bg-[#24292e]/90 focus:outline-none focus:ring-2 focus:ring-[#24292e] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isLoading ? (
                <svg className="h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                <>
                  <svg className="mr-2 h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                  Continue with GitHub
                </>
              )}
            </button>
          </form>
          <p className="mt-6 text-center text-xs text-gray-600">
            By signing in, you agree to our{" "}
            <a href="#" className="font-medium text-blue-600 hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="font-medium text-blue-600 hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
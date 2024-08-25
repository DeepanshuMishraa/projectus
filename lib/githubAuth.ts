'use server'

import { signIn } from '@/lib/auth'

export async function submitGitHubLogin() {
  await signIn("github")
}

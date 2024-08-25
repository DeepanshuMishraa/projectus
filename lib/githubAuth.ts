'use server'

import { signIn } from "./auth"


export async function submitGitHubLogin() {
  await signIn("github")
}

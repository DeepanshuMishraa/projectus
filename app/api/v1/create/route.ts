import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const { title, description, image, gh, tags } = reqBody;

    // Check if all the fields are present
    if (!title || !description || !image || !gh || !tags) {
      return NextResponse.json({ error: "Please fill all the fields" }, { status: 400 });
    }

    // Get the user from the session
    const { getUser } = getKindeServerSession();
    const userSession = await getUser();

    console.log("User Session:", userSession);

    // Check if the user is logged in
    if (!userSession || !userSession.id) {
      return NextResponse.json({ error: "Please login to create a project" }, { status: 401 });
    }

    // Create a project
    const project = await prisma.projects.create({
      data: {
        title,
        description,
        image,
        github: gh,
        tags,
        userId: userSession.id,
        author: userSession.given_name ?? "Anonymous"
      }
    });

    console.log("Created Project:", project);

    return NextResponse.json({ message: "Project created successfully", data: project }, { status: 201 });
  } catch (e) {
    console.error("Error creating project:", e);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

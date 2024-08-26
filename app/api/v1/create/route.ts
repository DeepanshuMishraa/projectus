

// API to create a project

import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
    try{
            const reqBody = await req.json();
    const {title,description,image,gh,tags} = reqBody;

    // Check if all the fields are present
    if(!title || !description || !image || !gh || !tags){
        return NextResponse.json({error:"Please fill all the fields",status:400});
    }


    // get the user from the session

    const {getUser} = getKindeServerSession();

    const userSession = await getUser()

    console.log(userSession);

    // Check if the user is logged in
    if(!userSession){
        return NextResponse.json({error:"Please login to create a project",status:401});
    }

    // Create a project
    const project = await prisma.projects.create({
        data:{
            title,
            description,
            image,
            github:gh,
            tags,
            userId:userSession.id
        }
    });

    return NextResponse.json({data:project,status:200});
    }catch(e){
        console.log(e);
        return NextResponse.json({error:"e.message",status:500});
    }

}

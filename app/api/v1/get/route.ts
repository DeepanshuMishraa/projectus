import prisma from "@/lib/db";
import { NextResponse } from "next/server";


export async  function GET(){
    // get the data from the databse
    try{
        const project = await prisma.projects.findMany({
            select:{
                title:true,
                image:true,
                github:true,
                tags:true,
                author:true,
                description:true,
            }
        })

        return NextResponse.json({
            AllProjects:project,
            status:200
        })
    }catch(e){
        return NextResponse.json({
            error:"Internal Server Error",
            status:500
        })
    }
}

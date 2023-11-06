

import connectMong from "@/libs/mongodb";
import { NextRequest, NextResponse } from "next/server";
import Project from "@/models/project";


export async function GET(req:NextRequest) {

    await connectMong();
    const projects = await Project.find()
    const pro1= JSON.stringify(projects)
    console.log("connected")
    return NextResponse.json({pro1})
}
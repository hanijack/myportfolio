
import connectMong from "@/libs/mongodb";
import { NextRequest, NextResponse } from "next/server";
import Project from "@/models/project";


export async function GET(req:NextRequest , {params}:{params:{id:any}}) {
    const { id } = params;
    await connectMong();
    const project = await Project.findOne({ _id: id })
    console.log("connected")
    return NextResponse.json({project})
}
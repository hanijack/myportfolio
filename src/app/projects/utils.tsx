import { headers } from "next/headers";

async function getAllProjects(){
    const host = headers().get("host");
    const protocal = process?.env.NODE_ENV==="development"?"http":"https"
    let res = await fetch(`${protocal}://${host}/api/projects`, { cache: "no-store" });
    let projects = res.json();
    return projects;
}


async function getProject(id){
    const host = headers().get("host");
    const protocal = process?.env.NODE_ENV==="development"?"http":"https"
    let res = await fetch(`${protocal}://${host}/api/projects/${id}`, { cache: "no-store" });
    let project = res.json();
    return project;
}

export {getAllProjects , getProject}
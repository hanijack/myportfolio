import { headers } from "next/headers";


export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";



async function getAllProjects() {
  const host = headers().get("host");
  const protocal = process?.env.NODE_ENV === "development" ? "http" : "https";
  let res = await fetch(`${protocal}://${host}/api/projects`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });
  let projects = res.json();
  return projects;
}

async function getProject(id: string) {
  const host = headers().get("host");
  const protocal = process?.env.NODE_ENV === "development" ? "http" : "https";
  let res = await fetch(`${protocal}://${host}/api/projects/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });
  let project = res.json();
  return project;
}

export { getAllProjects, getProject };


import Image from "next/image"
import Link from "next/link"
import { getAllProjects } from "./utils";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Projects',
}


async function Projects() {
  const { projects } = await getAllProjects()
  return (
    <>
      <section className="mb-24 flex flex-col  gap-y-4 gap-x-10 bg-[#282c34] p-4 rounded-md">
        <h1 className='text-white text-2xl  text-center'>Projects </h1>
        <div className="cont ">
          {projects?.map((proj: any | null) => <div key={proj?._id} className="proj ">
            <Link  href={`./projects/${proj._id}`} className="w-1/2 hover:scale-[1.05] transition ease-in-out duration-300 flex flex-col gap-2">
              <h4 className="text-sm text-center text-white">{proj?.name} </h4>
              <Image src={proj?.imgUrl} alt={proj?.name} width={200} height={300} className="mx-auto  rounded-md "></Image>
            </Link>
          </div>)}
        </div>
      </section>
    </>
  )
}

export default Projects
import Image from "next/image"
import Link from "next/link"
import { getProject } from "../utils"
import { Metadata } from "next";

  type Props = { params: { id: string } }
  export const generateMetadata=async({params} :Props):Promise<Metadata>=>{
    const {project} = await getProject(params.id)
    return {
      title:`Project ${project.name}`
    }
  }
  async function Proj({params}:Props ) {
    const {project}= await getProject(params.id)
    
 
  return (
    
        <>
          <h1 className="text-lg text-center dark:text-white">{project.name}</h1>
        <div className="flex flex-col sm:flex-row  py-4 my-4 gap-2">
          <Image src={project.imgUrl} width={300} height={300} alt={project.name} className="rounded-md self-center border-[1px] w-[300px] h-[300px] border-[#3e93d5] border-opacity-50 shadow-xl dark:shadow-white dark:shadow-sm"></Image>
          <div className="flex flex-col flex-grow justify-between gap-4 md:w-1/2">
            <h2 className="text-lg font-semibold mb-4 text-indigo-600 dark:text-indigo-400">Tech Stack</h2>
<div className="flex flex-wrap gap-2 mb-8">
  {project.techn?.map((tech, idx) => (
  <span
    key={tech}
    className={`animate-fade  px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-700 dark:bg-slate-700 dark:text-indigo-300 shadow-sm`}
  >
    {tech}
  </span>
))}

</div>

            <ul className="flex justify-evenly">
              <li className="submit-but"><Link href={project.links[0]}>Website</Link></li>
              <li className="submit-but"><Link href={project.links[1]}>Github</Link></li>
              
            </ul>
          </div>
        </div>
        </>
    
    
  )
}
export default Proj
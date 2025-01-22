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
          <Image src={project.imgUrl} width={300} height={300} alt={project.name} className="rounded-md self-center border-[1px] border-[#3e93d5] border-opacity-50 shadow-xl dark:shadow-white dark:shadow-sm"></Image>
          <div className="flex flex-col flex-grow justify-between gap-4 md:w-1/2">
            <ul className="flex flex-col gap-2 justify-center items-start dark:text-white p-4">{project.techn.map((item:string , index:number) =>{
              return <li key={index}>{index+1}-{item}</li>
            })}</ul>
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
import Image from "next/image"
import Link from "next/link"


const fetchSingleProject= async (id:String)=>{
  const response = await fetch(`http://localhost:3000/api/projects/${id}`,{
    method:"GET",
    headers: {
      "Content-Type": "application/json"
    }
    , cache: "no-cache"
  }
  
  )
  if (!response) {
    const message = "An error occurred while fetching projects  "
  }
  return response.json()
} 
  async function Proj({params}: { params: { id: string } }) {
    const {id} = params
    const {project}= await fetchSingleProject(id)
    console.log(project)
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
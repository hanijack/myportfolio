import Image from "next/image"
import Link from "next/link"





const fetchedProjects = async() => {
  const response = await fetch("http://localhost:3000/api/projects" ,{method: "GET" , 
headers:{
  "Content-type": "application/json"
}
,cache:"no-cache"} )

  if(!response){
    const message = "There are no projects to be displayed "
  }
  return response.json()
}


async function Projects() {
  const {pro1} = await fetchedProjects()
  const pro2 = JSON.parse(pro1)

  return (
    <>
      <section className="mb-24 flex flex-col  gap-y-4 gap-x-10 ">
        <h1 className='dark:text-white text-2xl text-black text-center'>Projects </h1>
        <div className="cont ">
          {pro2.map((proj:any) =><div key={proj._id} className="proj ">
            <div className="w-1/2">
             <p>{proj.name} </p>

            </div>
             </div>)}
        </div>
      </section>
    </>
  )
}

export default Projects
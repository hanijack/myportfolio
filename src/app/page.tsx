import Image from 'next/image'
import photo from "../../public/mypic.png"

export default function Home() {
  return (
    <>
      <section className='mb-24 flex flex-col items-start gap-y-4 gap-x-10 md:flex-row-reverse md:items-center'>
      <div  className=' max-w-xs flex items-center justify-center '>
                <Image src={photo} alt='personal' className='rounded-full h-[250] w-[300px] dark:saturate-0'/>
              </div>
              <div className=''>
                <h3>Hello , <span className='text-[#3e93d5]'>I am</span>  </h3>
                <h1 className='font-bold mb-4 text-xl dark:text-white'>Mohamad Darklt</h1>
                <p className='text-gray-500'>Welcome to my digital corner , I am a web developer, React specialist.
                  And here where I put my latest projects  </p>
              </div>
      </section>
    </>
  )
}

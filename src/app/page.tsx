import Image from 'next/image'
import photo from "../../public/mypic.png"
import next from "../../public/Next.svg"
import React from "../../public/React.svg"
import Redux from "../../public/Redux.svg"
import Js from "../../public/Js.svg"
import Link from 'next/link'

export default function Home() {
  return (
    <>
     <div className='flex flex-col'>
        <section className='mb-24 flex flex-col items-start gap-y-4 gap-x-10 md:flex-row-reverse md:items-center'>
        <div  className=' max-w-xs flex items-center justify-center '>
                  <Image src={photo} alt='personal' className='rounded-full h-[150] w-[200px] dark:saturate-0'/>
                </div>
                <div className=''>
                  <h3>Hello , <span className='text-[#3e93d5]'>I am</span>  </h3>
                  <h1 className='font-bold mb-4 text-xl dark:text-white'>Mohamad Darklt</h1>
                  <p className='text-gray-500'>Welcome to my digital corner , I am a web developer, React specialist.
                    And here where I put my latest projects  </p>
                    <div className='flex justify-evenly mt-8'>
                      <Link href="/about" className='px-4 py-2 bg-slate-300 hover:bg-slate-400 rounded-md hover:text-blue-800 text-[#0865b6]'>About</Link>
                      <Link href="/contact" className='px-4 py-2 bg-slate-900 rounded-md hover:bg-slate-800 hover:text-[#3e93d5] text-[#0865b6]'>Contact</Link>
                    </div>
                </div>
        </section>
        <div className='flex flex-col'>
          <h2 className='font-bold mb-8 text-xl dark:text-white'> Current preferred stacks</h2>
          <div className='grid grid-cols-2 md:grid-cols-4  gap-4'>
            <Image src={next} width={100} height={100} className='mx-auto'/>
            <Image src={React} width={100} height={100} className='mx-auto'/>
            <Image src={Redux} width={100} height={100} className='mx-auto'/>
            <Image src={Js} width={100} height={100} className='mx-auto'/>
          </div>
          </div>
     </div>
    </>
  )
}

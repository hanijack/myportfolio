import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About',
  description: 'Welcome to my web corner',
}
const About = () => {
  return (
    <>
            <section className="mb-24 flex flex-col items-start gap-y-4 gap-x-10 md:items-center">
              <h1 className='dark:text-white text-2xl text-black'>About</h1>
        <div className="md:text-center  ">
          <p className='my-4'>

        Seeking knowledge is an eternal process that stems from humility,
        has pleasure in contemplating the immensity of the attempt.
          </p>
          <q>The moment you stop learning is the moment you start dying</q>
          <br/>
          <cite> <b className='text-gray-500 dark:text-gray-400'>Albert Einstein.</b></cite>
        </div>
      </section>
      <h2 className=' text-black text-center text-xl font-bold dark:text-white mb-12'>Skills</h2>
      <section className="flex  justify-start flex-col md:flex-row md:justify-between gap-8 text-center">
        <div className="md:w-[45%] flex flex-col gap-4 items-center">
          <div className="flex flex-col  w-full max-w-[400px] gap-4">
            <h5>Html</h5>
            <div className="relative border-b-8 rounded-lg ">
              <div className="w-[70%] border-b-8 border-gray-500 absolute top-0  rounded-lg" ></div>
              <div className="-top-[30px] absolute ">70%</div>
            </div>
          </div>
          <div className="flex flex-col  w-full max-w-[400px] gap-4">
            <h5>Css</h5>
            <div className="relative border-b-8 rounded-lg">
              <div className="w-[75%] border-b-8 border-gray-500 absolute top-0  rounded-lg"></div>
              <div className="-top-[30px] absolute">75%</div>
            </div>
          </div>
          <div className="flex flex-col  w-full max-w-[400px] gap-4">
            <h5>Js</h5>
            <div className="relative border-b-8 rounded-lg">
              <div className="w-[70%] border-b-8 border-gray-500 absolute top-0  rounded-lg"></div>
              <div className="-top-[30px] absolute">70%</div>
            </div>
          </div>
          <div className="flex flex-col  w-full max-w-[400px] gap-4">
            <h5>React</h5>
            <div className="relative border-b-8 rounded-lg">
              <div className="w-[85%] border-b-8 border-gray-500 absolute top-0  rounded-lg"></div>
              <div className="-top-[30px] absolute">85%</div>
            </div>
          </div>
          <div className="flex flex-col  w-full max-w-[400px] gap-4">
            <h5>GraphQL</h5>
            <div className="relative border-b-8 rounded-lg">
              <div className="w-[30%] border-b-8 border-gray-500 absolute top-0  rounded-lg" ></div>
              <div className="-top-[30px] absolute">30%</div>
            </div>
          </div>
        </div>
        <div className="md:w-[45%] flex flex-col gap-4 items-center">
          
          <div className="flex flex-col  w-full max-w-[400px] gap-4">
            <h5>NextJs</h5>
            <div className="relative border-b-8 rounded-lg">
              <div className="w-[70%] border-b-8 border-gray-500 absolute top-0  rounded-lg"></div>
              <div className="-top-[30px] absolute">70%</div>
            </div>
          </div>
          <div className="flex flex-col  w-full max-w-[400px] gap-4">
            <h5>ExpressJs</h5>
            <div className="relative border-b-8 rounded-lg">
              <div className="w-[40%] border-b-8 border-gray-500 absolute top-0  rounded-lg"></div>
              <div className="-top-[30px] absolute">40%</div>
            </div>
          </div>
          <div className="flex flex-col  w-full max-w-[400px] gap-4">
            <h5>NodeJs</h5>
            <div className="relative border-b-8 rounded-lg">
              <div className="w-[30%] border-b-8 border-gray-500 absolute top-0  rounded-lg"></div>
              <div className="-top-[30px] absolute">30%</div>
            </div>
          </div>
          <div className="flex flex-col  w-full max-w-[400px] gap-4">
            <h5>MongoDB</h5>
            <div className="relative border-b-8 rounded-lg">
              <div className="w-[30%] border-b-8 border-gray-500 absolute top-0  rounded-lg"></div>
              <div className="-top-[30px] absolute">30%</div>
            </div>
          </div>
          <div className="flex flex-col  w-full max-w-[400px] gap-4">
            <h5>TypeScript</h5>
            <div className="relative border-b-8 rounded-lg">
              <div className="w-[30%] border-b-8 border-gray-500 absolute top-0  rounded-lg"></div>
              <div className="-top-[30px] absolute">40%</div>
            </div>
          </div>

        </div>
      </section>

    </>
  )
}

export default About
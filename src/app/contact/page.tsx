
import Image from "next/image";
import Form from "../../Components/Form"
import pic from "../../../public/work.jpg"






const Contact = () => {
 
  return (

    <section className="mb-24 flex flex-col justify-between items-center gap-y-8 md:flex-row md:items-center">
      <div className="flex flex-col max-w-[300px] gap-2">
        <Image src={pic} alt="img" className="rounded-xl"/>
        <p>Build your website with the most modern technologies.
            with focusing on the most friendly  ui/ux . </p>
      </div>
      <Form/>  
    </section>
    
  )

}

export default Contact

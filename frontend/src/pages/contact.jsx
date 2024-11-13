import { assets } from "../assets/assets"
import Newsletterbox from "../components/newsletterbox"
import Title from "../components/title"


const Contact = () => {
  return (
    <div>
      ,<div className="text-center text-2xl pt-10 border-t">
        <Title text1={'CONTACT'} text2={'US'}/>

      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img className="w-full md:max-w-[480px]" src={assets.contact_img} alt="" />
        <div className="flex flex-col justify- items-start-gap-6">
          <div>
            <p className="font-semibold text-xl text-gray-600">Our Store</p>


            <p className="text-gray-500 mb-4">54709 Near Railway Station <br/>Suite 350, Vishakhaptnam,A.P, India </p>
            <p className="text-gray-500 mb-4">Tel:(415) 555-0132 <br/> Email: admin@forever.com</p>


            <p className="font-semibold text- text-gray-500 mb-2">Careers at Forever</p>
            <p className="text-gray-500 mb-4">Learn more about our teams and job openings </p>


            <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500"> Explore Jobs </button>
          </div>
        </div>
        <Newsletterbox/>

      </div>
      
    </div>
  )
}

export default Contact

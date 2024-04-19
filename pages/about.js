import Link from 'next/link'
import React, {useState} from 'react'
import { Menu, X, Settings, LifeBuoy, Lock, Code, Users, Search, PenTool } from 'react-feather';
import Image from 'next/image'


export default function About() {

  const [isOpen, setIsOpen] = useState(false);


  return (
    <div>
    
      {/* Navbar and hero */}
      <div className="relative bg-cover bg-center h-[60vh] md:h-[70vh] lg:h-[80vh] flex flex-col justify-center items-center" style={{backgroundImage: 'url("/002.jpg")'}}>
        {/* Dark overlay */}
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>

        <div className="absolute top-4 left-0 right-0 px-8 lg:px-10 py-2 flex justify-between items-center w-full">
          <div className="font-bold text-white">
            <Image src={'/logo.jpg'} className='rounded-full w-[50px] md:[60px] lg:w-[70px]' height={80} width={80} />
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className='lg:hidden'>
            {!isOpen ? (
              <Menu className="icon text-white" onClick={() => setIsOpen(true)} />
            ) : (
              <X className="icon text-white" onClick={() => setIsOpen(false)} />
            )}
          </div>

          {/* Full Menu for Large Screens */}
          <div className='hidden lg:flex item-center space-x-4'>
            <Link href="/" className="text-white">&#8226; Home</Link>
            <Link href="/about" className="text-white">&#8226; About</Link>
            <Link href="#" className="text-white">&#8226; Services</Link>
          </div>
        </div>

        {/* Responsive Menu for Mobile */}
        {isOpen && (
          <div className="lg:hidden absolute top-16 right-4 z-50 flex flex-col space-y-4 bg-gray-900 p-4 rounded-lg">
            <Link href="/" className="text-white">&#8226; Home</Link>
            <Link href="about" className="text-white">&#8226; About</Link>
            <Link href="#" className="text-white">&#8226; Services</Link>
          </div>
        )}

        <div className="text-center w-full pl-8 lg:pl-28 pr-8 lg:pr-10 z-40">
          <div className="font-bold text-2xl lg:text-4xl text-white mb-6 shadow-lg"><span className='text-yellow-500 text-sm'>Home /</span> About us</div>
        </div>

      </div>

      {/* Intro text */}
      <div className="flex flex-col lg:flex-row justify-center text-white p-2 mt-0 md:mt-6 lg:mt-6">
        <div className="flex-1 m-0 md:m-4 lg:m-4 relative flex justify-center items-center">
            <div className='relative w-full bg-blue-500'>
                <div className="overflow-hidden w-full h-full md:w-72 lg:w-72 md:h-72 lg:h-72 bg-blue-500 z-40"> {/* Adjust width and height here */}
                    <Image src="/icon-9.jpg" alt="Profile" width={280} height={280} className="object-cover h-full w-full" />
                </div>
                <div className="hidden md:block lg:block absolute top-28 -left-16 overflow-hidden w-72 h-72 z-40"> {/* Adjust width and height here */}
                    <Image src="/icon-9.jpg" alt="Profile" width={280} height={280} className="object-cover h-[200px] w-[180px]" />
                </div>
            </div>
            <div className="absolute -bottom-16 right-4 lg:top-8 lg:left-16 bg-gray-800 w-12 h-12 rounded-full mt-2 ml-2"></div>
            <div className="hidden md:block lg:block absolute top-4 lg:left-6 bg-blue-500 w-8 h-8 rounded-full mt-2 ml-2"></div>
            <div className="hidden md:block lg:block absolute top-2 lg:-left-2 bg-blue-300 w-4 h-4 rounded-full mt-2 ml-2"></div>
        </div>
        <div className="flex-1 m-4 flex flex-col justify-start">
          <div className="bg-blue-500 w-2 h-2 rounded-full mb-2"></div>
          <p className='text-sm text-gray-700 font-medium mb-2'>About Code Revolution</p>
          <h2 className="text-xl lg:text-2xl font-bold mb-4">Get to know about <br /> <span className='text-blue-500'>Code Revolution</span></h2>
          <p className="text-gray-400 text-sm mb-6">
            Code Revolution offers web development, SEO, social media advertising, and graphics design services, crafting innovative solutions with a focus on ethics and responsibility. We empower businesses and individuals to thrive in the digital age by delivering user-friendly and impactful technologies that drive positive change and foster growth.
          </p>
          <Link href="#" className="text-white bg-blue-500 px-4 py-2 w-[fit-content]">Learn more</Link>
        </div>
      </div>

    </div>
  )
}

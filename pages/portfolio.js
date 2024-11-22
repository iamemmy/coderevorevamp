import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import { Menu, X } from 'react-feather';
import Image from 'next/image'
import Footer from '../components/Footer';
import Head from 'next/head';
import Projects from '@/components/Projects';

export default function About() {

  const [isOpen, setIsOpen] = useState(false);
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);


  return (
    <div>
        <Head>
          <title>Home | Services</title>
        </Head>
        {/* Navbar and hero */}
        <div className="relative bg-cover bg-center h-[60vh] md:h-[70vh] lg:h-[80vh] flex flex-col justify-center items-center" style={{backgroundImage: 'url("/port5.jpg")'}}>
        {/* Dark overlay */}
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>

        <div className="absolute top-4 left-0 right-0 px-8 lg:px-10 py-2 flex justify-between items-center w-full">
            <div className="font-bold text-white">
            <Image src={'/logo.jpg'} alt='Coderevo logo' className='rounded-full w-[50px] md:[60px] lg:w-[70px]' height={80} width={80} />
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
            <Link href="/services" className="text-white">&#8226; Services</Link>
            <Link href="/portfolio" className="text-white">&#8226; Portfolio</Link>
            </div>
        </div>

        {/* Responsive Menu for Mobile */}
        {isOpen && (
            <div className="lg:hidden absolute top-16 right-4 z-50 flex flex-col space-y-4 bg-gray-900 p-4 rounded-lg">
            <Link href="/" className="text-white">&#8226; Home</Link>
            <Link href="/about" className="text-white">&#8226; About</Link>
            <Link href="/services" className="text-white">&#8226; Services</Link>
            <Link href="/portfolio" className="text-white">&#8226; Portfolio</Link>
            </div>
        )}

        <div className="text-center w-full pl-8 lg:pl-28 pr-8 lg:pr-10 z-40">
            <div className="font-bold text-2xl lg:text-4xl text-white mb-6"><span className='text-yellow-500 text-sm'>Home /</span> Portfolio</div>
        </div>

        </div>

       {/* Animation Box */}
       {showAnimation && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black z-50 opacity-80 overflow-hidden">
            <div className="w-[20vw] h-[5px] bg-white rounded-3xl overflow-hidden">
            <div className="animate-box bg-blue-500 h-full"></div>
            </div>
        </div>
       )}

       <Projects />
       <div className="max-w-6xl mx-auto text-center py-12 mb-4">
            <p className="text-sm lg:text-base text-white mb-12 px-4">
                These are some of our past works for our clients, and we have many more not featured here. We strive to build
                solutions based on each client&apos;s preferences, tailoring our work to meet their personal or business needs. Feel
                free to <strong>contact us today</strong> to discuss how we can help bring your vision to life.
            </p>
            <Link href={'https://wa.link/teo1p3'} className="font-bold text-white bg-blue-500 py-4 px-6 w-[fit-content] cursor-pointer hover:bg-blue-400">
                Contact Us
            </Link>
        </div>

      <Footer />

    </div>
  )
}

import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import { Menu, X } from 'react-feather';
import Image from 'next/image'
import ReviewsSlider from '@/components/ReviewSlider';
import Footer from '../components/Footer';
import Head from 'next/head';


export default function About() {

  const [isOpen, setIsOpen] = useState(false);
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const reviews = [
    { text: "Code Revolution delivers excellence! Their web development services surpassed my expectations. Highly recommended for top-notch quality, reliability, and functionality. A must-have for any digital venture!", author: "Kingsley Anajemba", role: "CEO Realest Digital" },
    { text: "Exceptional experience with Code Revolution! Their web development services are top-tier, exceeding expectations. Highly recommended for quality, reliability, and functionality. A definite asset for any online project!", author: "Precious Okeke", role: "CEO Fashion Apex" },
  ];


  return (
    <div>
      <Head>
        <title>Home | About us</title>
      </Head>
      {/* Navbar and hero */}
      <div className="relative bg-cover bg-center h-[60vh] md:h-[70vh] lg:h-[80vh] flex flex-col justify-center items-center" style={{backgroundImage: 'url("/image-2.jpg")'}}>
        {/* Dark overlay */}
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>

        <div className="absolute top-4 left-0 right-0 px-8 lg:px-10 py-2 flex justify-between items-center w-full">
          <div className="font-bold text-white">
            <Image src={'/logo.jpg'} alt="about Coderevo" className='rounded-full w-[50px] md:[60px] lg:w-[70px]' height={80} width={80} />
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
          </div>
        </div>

        {/* Responsive Menu for Mobile */}
        {isOpen && (
          <div className="lg:hidden absolute top-16 right-4 z-50 flex flex-col space-y-4 bg-gray-900 p-4 rounded-lg">
            <Link href="/" className="text-white">&#8226; Home</Link>
            <Link href="/about" className="text-white">&#8226; About</Link>
            <Link href="/services" className="text-white">&#8226; Services</Link>
          </div>
        )}

        <div className="text-center w-full pl-8 lg:pl-28 pr-8 lg:pr-10 z-40">
          <div className="font-bold text-2xl lg:text-4xl text-white mb-6 shadow-lg"><span className='text-yellow-500 text-sm'>Home /</span> About us</div>
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

      {/* Intro text */}
      <div className="flex flex-col md:flex-row lg:flex-row justify-center text-white p-2 mt-0 md:mt-6 lg:mt-6">
        <div className="flex-1 m-0 md:m-4 lg:m-4 relative flex justify-center items-center">
            <div className='relative w-full flex justify-end items-end'>
                <div className="hidden md:block lg:block overflow-hidden w-full h-full md:w-72 lg:w-72 md:h-72 lg:h-72 bg-blue-500 z-40">
                    <Image src="/image-1.jpg" alt="About Coderevolution" width={280} height={280} className="object-cover h-full w-full" />
                </div>
                <div className="hidden md:block lg:block absolute top-36 right-28 overflow-hidden w-72 h-72 z-40">
                    <Image src="/image-3.jpg" alt="About Coderevolution" width={280} height={280} className="object-cover h-[200px] w-[180px]" />
                </div>
            </div>
            <div className="absolute -bottom-16 right-4 lg:top-8 lg:left-36 bg-gray-800 w-12 h-12 rounded-full mt-2 ml-2"></div>
            <div className="hidden md:block lg:block absolute top-4 lg:left-24 bg-blue-500 w-8 h-8 rounded-full mt-2 ml-2"></div>
            <div className="hidden md:block lg:block absolute top-2 lg:left-16 bg-blue-300 w-4 h-4 rounded-full mt-2 ml-2"></div>
        </div>
        <div className="flex-1 m-4 flex flex-col justify-start">
          <div className="bg-blue-500 w-2 h-2 rounded-full mb-2"></div>
          <p className='text-sm text-gray-700 font-medium mb-2'>About Code Revolution</p>
          <h2 className="text-xl lg:text-2xl font-bold mb-4">Get to know about <br /> <span className='text-blue-500'>Code Revolution</span></h2>
          <p className="text-gray-400 text-sm mb-6">
            Code Revolution offers web development, SEO, social media advertising, and graphics design services, crafting innovative solutions with a focus on ethics and responsibility. We empower businesses and individuals to thrive in the digital age by delivering user-friendly and impactful technologies that drive positive change and foster growth.
          </p>
          <Link href="https://wa.link/teo1p3" className="text-white bg-blue-500 px-4 py-2 w-[fit-content]">Learn more</Link>
        </div>
      </div>

      {/* Services marquee */}
      <marquee behavior="scroll" direction="left" scrollamount="5" className="mt-4 mb-4 md:mt-20 lg:mt-20 bg-gray-800 py-2">
        <ul class="list-none m-0 p-0 text-white text-sm md:text-base lg:text-base">
          <li class="inline-block mr-6">&#8226; Web design & development</li>
          <li class="inline-block mr-6">&#8226; Social media advertising</li>
          <li class="inline-block mr-6">&#8226; SEO services</li>
          <li class="inline-block mr-6">&#8226; Social media management</li>
          <li class="inline-block mr-6">&#8226; Graphics & design</li>
          <li class="inline-block mr-6">&#8226; Web hosting services</li>
        </ul>
      </marquee>

      {/* Reviews */}
      <div className='pt-4 pb-10 px-6 lg:px-8'>
        <div className='w-full flex flex-col justify-center items-start lg:items-center text-white px-0'>
          <div className="bg-blue-500 w-2 h-2 rounded-full mb-2"></div>
          <p className='text-sm text-gray-700 font-medium mb-2 text-start lg:text-center'>Our Reviews</p>
          <h2 className="text-xl lg:text-2xl font-bold mb-4 w-full lg:w-[40%] text-start lg:text-center"><span className='text-blue-500'>Reviews</span> from our happy Customers</h2>
        </div>
        <ReviewsSlider reviews={reviews} />
      </div>

      {/* Trusted by */}
      <div className="py-8">
        <div className="max-w-6xl mx-auto px-4 text-white">
          <h2 className="text-2xl font-bold text-center mb-6">Trusted by:</h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-2 md:gap-8 lg:gap-8">
            <div className="rounded-full object-cover overflow-hidden m-auto">
              <Image src="/t-1.png" height={100} width={100} alt="logo" className="w-[80px]" />
            </div>
            <div className="rounded-full object-cover overflow-hidden m-auto">
              <Image src="/t-2.png" height={100} width={100} alt="logo" />
            </div>
            <div className="rounded-full object-cover overflow-hidden w-[50px] h-[50px] m-auto">
              <Image src="/t-3.png" height={100} width={100} alt="logo" />
            </div>
            <div className="rounded-full object-cover overflow-hidden m-auto">
              <Image src="/t-7.png" height={100} width={100} alt="logo" className="w-[130px]" />
            </div>
            <div className="rounded-full object-cover overflow-hidden m-auto">
              <Image src="/t-5.jpg" height={100} width={100} alt="logo" className="w-[130px]" />
            </div>
            <div className="rounded-full object-cover overflow-hidden m-auto">
              <Image src="/t-6.png" height={100} width={100} alt="logo" />
            </div>
          </div>
        </div>
      </div>


      <Footer />

    </div>
  )
}

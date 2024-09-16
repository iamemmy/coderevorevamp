import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import { Menu, X, Code, Users, Search, PenTool } from 'react-feather';
import Image from 'next/image'
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

  const services = [
    {
      title: "Web Development",
      description: "Maximize your online presence with our social media management and advertising services. We expertly handle Facebook, Instagram, Twitter, and more, ensuring your brand shines across platforms. Let us elevate your social media game and drive results.",
      icon: <Code />
    },
    {
      title: "Social Media Services",
      description: "Boost your online presence with our comprehensive social media management and advertising services. From managing social media accounts on platforms like Facebook, Instagram, and Twitter to revamping your social handles, we ensure your brand stands out and thrives in the digital landscape.",
      icon: <Users />
    },
    {
      title: "SEO Services",
      description: "Elevate your online visibility with our SEO services. We optimize your website to rank higher on search engines, driving organic traffic and boosting your online presence. Let us help your business reach new heights with our proven SEO strategies.",
      icon: <Search />
    },
    {
      title: "Graphics and Design",
      description: "Illuminate your brand with our graphic design expertise. From eye-catching flyers and rate cards to captivating stickers and logos, we craft visual assets that leave a lasting impression. Let our designs bring your vision to life and elevate your brand identity.",
      icon: <PenTool />
    }
  ];

  const CheckIcon = () => (
    <div className='bg-gray-800 p-2 rounded-full w-[fit-content]'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
      </svg>
    </div>
  );


  return (
    <div>
        <Head>
          <title>Home | Services</title>
        </Head>
        {/* Navbar and hero */}
        <div className="relative bg-cover bg-center h-[60vh] md:h-[70vh] lg:h-[80vh] flex flex-col justify-center items-center" style={{backgroundImage: 'url("/image-4.jpg")'}}>
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
            <div className="font-bold text-2xl lg:text-4xl text-white mb-6 shadow-lg"><span className='text-yellow-500 text-sm'>Home /</span> Services</div>
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


        {/* Attributes we have */}
        <div className="flex flex-col lg:flex-row justify-center text-white px-2 lg:px-6 py-8">
        <div className="flex-1 m-4 flex flex-col justify-start">
            <div className="bg-blue-500 w-2 h-2 rounded-full mb-2"></div>
            <p className='text-sm text-gray-700 font-medium mb-2'>Why Choose us</p>
            <h2 className="text-xl lg:text-2xl font-bold mb-8">Providing The <span className='text-blue-500'>Best</span> <br /> Services</h2>
            <div className='flex flex-col justify-start items-start space-y-3'>
            <div className='flex justify-start items-start space-x-3'>
                <CheckIcon />
                <div>
                    <h2 className='text-base md:text-lg lg:text-lg font-medium text-white'>Expertise</h2>
                    <p className='text-sm text-gray-400'>Our team boasts extensive experience and knowledge in delivering top-notch solutions tailored to your needs.</p>
                </div>
            </div>
            <div className='flex justify-start items-start space-x-3'>
                <CheckIcon />
                <div>
                    <h2 className='text-base md:text-lg lg:text-lg font-medium text-white'>Innovation</h2>
                    <p className='text-sm text-gray-400'>We leverage cutting-edge technologies to provide innovative and efficient solutions for your business.</p>
                </div>
            </div>
            <div className='flex justify-start items-start space-x-3'>
                <CheckIcon />
                <div>
                    <h2 className='text-base md:text-lg lg:text-lg font-medium text-white'>Reliability</h2>
                    <p className='text-sm text-gray-400'>Count on us for consistent, reliable support and solutions that drive your business forward.</p>
                </div>
            </div>
            <div className='flex justify-start items-start space-x-3'>
                <CheckIcon />
                <div>
                    <h2 className='text-base md:text-lg lg:text-lg font-medium text-white'>Tailored Solutions</h2>
                    <p className='text-sm text-gray-400'>We listen to your needs and deliver personalized solutions that exceed expectations.</p>
                </div>
            </div>
            </div>
        </div>
        <div className="flex-1 m-4 relative flex justify-center items-center">
            <div className="rounded-full w-72 h-72 bg-blue-500 z-20 flex justify-center items-center"> {/* Adjust width and height here */}
            <div className='bg-black rounded-full w-64 h-64 z-30 flex justify-center items-center'>
                <div className='rounded-full overflow-hidden w-60 h-60 z-40'>
                    <Image src="/icon-5.jpg" alt="Profile" width={280} height={280} className="object-cover h-full w-full" />
                </div>
            </div>
            </div>
            <div className="absolute -bottom-6 lg:bottom-8 left-0 lg:left-32 bg-gray-800 w-28 h-28 rounded-full mt-2 ml-2 z-50 flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-16 h-16">
                <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
            </svg>
            </div>
        </div>
        </div>

        {/* Services */}
        <div className='flex flex-col justify-center items-start lg:items-center text-white px-6 lg:px-2 py-8'>
        <div className="bg-blue-500 w-2 h-2 rounded-full mb-2"></div>
        <p className='text-sm text-gray-700 font-medium mb-2'>What we can do for you</p>
        <h2 className="text-xl lg:text-2xl font-bold mb-4 w-full lg:w-[40%] text-start lg:text-center"><span className='text-blue-500'>Services</span> We are Providing To Our Customers</h2>
        <div className='flex flex-col lg:flex-row lg:justify-center items-start space-x-0 lg:space-x-4 px-0 space-y-4 lg:space-y-0 lg:px-8 pt-4'>
            {services.map((service, index) => (
            <div key={index} className='bg-gray-800 px-4 pt-4 pb-8 rounded-2xl'>
                <p className='mb-4'>{service.icon}</p>
                <div className='border-b pb-4'>
                <p className='text-xl font-medium text-white mb-4'>{service.title}</p>
                <p className='text-sm lg:text-base'>{service.description}</p>
                </div>
            </div>
            ))}
        </div>
        </div>

        {/* CTA */}
        <div className='px-6 lg:px-2 pb-8 pt-2 md:pt-4 lg:pt-4'>
            <div class="max-w-3xl mx-auto p-8 bg-gray-100 text-center rounded-lg">
                <p class="text-lg md:text-xl lg:text-2xl font-semibold mb-8">How can we tailor our solutions to meet your needs and elevate your business today?</p>
                <Link href={'https://wa.link/teo1p3'} class="mt-4 px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600">Get in touch</Link>
            </div>
        </div>

      <Footer />

    </div>
  )
}

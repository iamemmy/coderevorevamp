import Image from 'next/image'
import Link from 'next/link'
import React, {useState} from 'react'
import { Menu, X, Settings, LifeBuoy, Lock, Code, Users, Search, PenTool } from 'react-feather';
import ReviewsSlider from '../components/ReviewSlider';
import Footer from '@/components/Footer';


export default function Index() {

  const [isOpen, setIsOpen] = useState(false);
  const images = ['/icon-6.jpg', '/icon-5.jpg', '/icon-8.jpg'];

  const dataAttribute = [
    { text: "Personalised Solution", icon: <Settings /> },
    { text: "Reliable Customer Assistance", icon: <LifeBuoy /> },
    { text: "Secure System", icon: <Lock /> }
  ];

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

  const reviews = [
    { text: "Code Revolution delivers excellence! Their web development services surpassed my expectations. Highly recommended for top-notch quality, reliability, and functionality. A must-have for any digital venture!", author: "Kingsley Anajemba", role: "CEO Realest Digital" },
    { text: "Exceptional experience with Code Revolution! Their web development services are top-tier, exceeding expectations. Highly recommended for quality, reliability, and functionality. A definite asset for any online project!", author: "Precious Okeke", role: "CEO Fashion Apex" },
  ];

  return (
    
    <>

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
            <Link href="#" className="text-white">&#8226; Home</Link>
            <Link href="#" className="text-white">&#8226; About</Link>
            <Link href="#" className="text-white">&#8226; Services</Link>
          </div>
        </div>

        {/* Responsive Menu for Mobile */}
        {isOpen && (
          <div className="lg:hidden absolute top-16 right-4 z-50 flex flex-col space-y-4 bg-gray-900 p-4 rounded-lg">
            <Link href="#" className="text-white">&#8226; Home</Link>
            <Link href="#" className="text-white">&#8226; About</Link>
            <Link href="#" className="text-white">&#8226; Services</Link>
          </div>
        )}

        <div className="text-left w-full pl-8 lg:pl-28 pr-8 lg:pr-10 z-40">
          <div className="font-bold text-2xl lg:text-4xl text-white mb-6 shadow-lg">Custom Web Solutions: <br /> Tailored for Your Business Needs.</div>
          <Link href={'/'} className="font-bold text-white bg-blue-500 py-3 px-4 w-[fit-content] cursor-pointer hover:bg-blue-400">Get in Touch</Link>
        </div>

        <div className='z-50 absolute bottom-4 right-4 lg:right-auto lg:left-10 lg:bottom-[7.5vh] flex flex-col space-y-4'>
          <Link href={'/'}><Image src={'/icon-1.png'}  height={25} width={25} alt='image'/></Link>
          <Link href={'/'}><Image src={'/icon-2.png'}  height={25} width={25} alt='image'/></Link>
          <Link href={'/'}><Image src={'/icon-3.png'}  height={25} width={25} alt='image'/></Link>
        </div>

      </div>

      {/* Attributes */}
      <div className="flex flex-col lg:flex-row justify-center text-white p-2 lg:p-6">
        {images.map((imageUrl, index) => (
          <div key={index} className="flex-1 m-4">
            <div
              className="bg-cover bg-center h-40 lg:h-60 flex items-end relative"
              style={{ backgroundImage: `url(${imageUrl})` }}
            >
              <div className="bg-black bg-opacity-50 px-2 py-10 absolute bottom-4 left-4 right-4">
                <div className='relative'>
                  <div className="flex items-center space-x-2">
                    <p className='absolute right-4 top-[-68px] bg-blue-500 text-white p-4 rounded-full'>{dataAttribute[index].icon}</p>
                    <p className="text-white text-lg lg:text-xl font-medium">{dataAttribute[index].text}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Intro text */}
      <div className="flex flex-col lg:flex-row justify-center text-white p-2">
        <div className="flex-1 m-4 relative flex justify-center items-center">
          <div className="rounded-full overflow-hidden w-72 h-72 bg-blue-500 z-40"> {/* Adjust width and height here */}
            <Image src="/icon-9.jpg" alt="Profile" width={280} height={280} className="object-cover h-full w-full" />
          </div>
          <div className="absolute top-0 left-0 lg:left-24 bg-gray-800 w-24 h-24 rounded-full mt-2 ml-2"></div>
          <div className="absolute bottom-0 left-10 bg-blue-500 w-8 h-8 rounded-full mt-2 ml-2"></div>
        </div>
        <div className="flex-1 m-4 flex flex-col justify-start">
          <div className="bg-blue-500 w-2 h-2 rounded-full mb-2"></div>
          <p className='text-sm text-gray-700 font-medium mb-2'>About Code Revolution</p>
          <h2 className="text-xl lg:text-2xl font-bold mb-4">We are a Leading-edge <br /> <span className='text-blue-500'>Web Development and Social Media</span> <br /> Force, Driving Success</h2>
          <p className="text-blue-500 text-sm mb-6">
            We use technology to empower and create positive change. We design user-friendly, innovative solutions with a commitment to ethics and responsibility. Our goal is to help businesses and individuals thrive in the digital age.
          </p>
          <Link href="#" className="text-white bg-blue-500 px-4 py-2 w-[fit-content]">Learn more</Link>
        </div>
      </div>

      {/* Web solutions */}
      <div className="relative flex flex-col items-end text-white h-auto lg:h-[50vh] w-full overflow-hidden mt-8">
        <div className="w-full h-full">
          <Image src="/003.jpg" width={460} height={460} alt="Image" className="w-full h-full object-cover" />
        </div>
        <div className="block lg:absolute lg:w-[40%] h-full bg-black opacity-70 p-6 lg:p-4">
          <p className='text-2xl font-medium mb-4'>Custom Web Solutions? Count on us.</p>
          <p className="text-sm lg:text-lg">
            Code Revolution provides a full range of services to boost clients online presence and drive business growth. With custom web solutions, web development, SEO services, and social media integration and management, we help clients create engaging websites, improve search engine visibility, and connect with their audience. Our approach delivers cutting-edge strategies for long-term success.
          </p>
        </div>
      </div>

      {/* Services */}
      <div className='flex flex-col justify-center items-start lg:items-center text-white px-6 lg:px-2 py-8'>
        <div className="bg-blue-500 w-2 h-2 rounded-full mb-2"></div>
        <p className='text-sm text-gray-700 font-medium mb-2'>What we can do for you</p>
        <h2 className="text-xl lg:text-2xl font-bold mb-4 w-full lg:w-[40%] text-start lg:text-center"><span className='text-blue-500'>Services</span> We are Providing To Our Customers</h2>
        <div className='flex flex-col lg:flex-row lg:justify-center items-start space-x-0 lg:space-x-4 px-0 space-y-4 lg:space-y-0 lg:px-8 pt-4'>
          {services.map((service, index) => (
            <div key={index} className='bg-gray-800 px-4 pt-4 pb-8'>
              <p className='mb-4'>{service.icon}</p>
              <div className='border-b pb-4'>
                <p className='text-xl font-medium text-white mb-4'>{service.title}</p>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews */}
      <div className='pt-4 pb-10 px-6 lg:px-8'>
        <div className='w-full flex flex-col justify-center items-start lg:items-center text-white px-0'>
          <div className="bg-blue-500 w-2 h-2 rounded-full mb-2"></div>
          <p className='text-sm text-gray-700 font-medium mb-2 text-start lg:text-center'>Our Reviews</p>
          <h2 className="text-xl lg:text-2xl font-bold mb-4 w-full lg:w-[40%] text-start lg:text-center"><span className='text-blue-500'>Reviews</span> from our happy Customers</h2>
        </div>
        <ReviewsSlider reviews={reviews} />
      </div>

      <Footer />

    </>

  )
}

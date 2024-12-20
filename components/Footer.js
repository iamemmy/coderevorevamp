import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className='bg-gray-800 px-6 md:px-8 lg:px-10 py-8'>

        <div className='text-white w-full flex flex-col md:flex-row lg:flex-row justify-between items-center border-b border-gray-600 pb-8 space-y-4 md:space-y-0 lg:space-y-0'>
            <p className='font-medium text-3xl'>Code Revolution</p>
            <div className='flex justify-center items-center space-x-4'>
            <Link href={'https://www.instagram.com/coderevo/'}><Image src={'/instagram.png'}  height={25} width={25} alt='image'/></Link>
            <Link href={'https://bit.ly/4aKwSVG'}><Image src={'/facebook.png'}  height={25} width={25} alt='coderevo on facebook'/></Link>
            <Link href={'https://wa.link/teo1p3'}><Image src={'/whatsapp.png'}  height={25} width={25} alt='coderevo on whatsapp'/></Link>
            </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row lg:flex-row justify-between pt-8 text-white">
            <div className="w-full md:w-1/2 lg:w-2/3">
                <div className="flex flex-col">
                    <p className='text-base'>Lets start working together</p>
                    <p className="text-sm">coderevolution.tech@gmail.com</p>
                    <p className='text-xs lg:text-sm mt-8'>&copy;Copyright 2024 by Code Revolution</p>
                </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3">
                <div className="grid grid-cols-2">
                    <ul className="list-none text-sm lg:text-base flex flex-col justify-center items-start">
                        <Link href={'/'} className='mb-2'>Home</Link>
                        <Link href={'/about'} className='mb-2'>About</Link>
                        <Link href={'/services'} className='mb-2'>Services</Link>
                        <Link href={'/portfolio'} className='mb-2'>Our Works</Link>
                    </ul>
                    <ul className="list-none text-sm lg:text-base">
                        <li className='mb-2'>Web Development</li>
                        <li className='mb-2'>Advertising</li>
                        <li className='mb-2'>SEO Services</li>
                        <li className='mb-2'>Graphics</li>
                    </ul>
                </div>
                <div className="flex flex-col md:flex-row lg:flex-row justify-start items-center space-x-0 md:space-x-2 lg:space-x-2 space-y-2 md:space-y-0 lg:space-y-0 w-full mt-6 mb-10 md:mb-0 lg:mb-0">
                    <input type="email" placeholder="Enter your email" className="w-full md:w-auto lg:w-auto px-4 py-2 border border-gray-300 rounded-md" />
                    <button className="w-full md:w-auto lg:w-auto px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Subscribe</button>
                </div>
            </div>
        </div>
        <div className='mt-16 w-full flex justify-center items-center space-x-2 text-gray-400'>
            <p className='text-xs lg:text-sm'>&#8226; Privacy policy</p>
            <p className='text-xs lg:text-sm'>&#8226; Code Revolution</p>
            <p className='text-xs lg:text-sm'>&#8226; Terms & conditions</p>
        </div>

    </footer>
  )
}

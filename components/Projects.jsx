import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const projects = [
    {
        title: 'Vintage Medical Centre',
        description: 'Vintage Medical Centre: A modern healthcare platform providing premium, personalized medical services, built with Next.js.',
        image: '/vmc.png',
        link: 'https://vintagemedicalcentre.com/',
        bgColor: 'bg-[#4b46e5]'
    },
    {
        title: 'BluntFreak',
        description: 'BluntFreak: A comprehensive cannabis collection platform with search capabilities for shops, products, brands, and more. Built with Next.js, React, Tailwind CSS, Firebase, Google API, Contentful, and Google Analytics.',
        image: '/bluntfreak.png',
        link: 'https://bluntfreak.com',
        bgColor: 'bg-[#172654]'
    },
    {
        title: 'BNosite',
        description: 'BNosite: A platform connecting you to businesses without websites. Perfect for students building portfolios or freelancers growing their client base. Built with Next.js, Tailwind CSS, Stripe and Google API.',
        image: '/bnosite.png',
        link: 'https://www.bnosite.com/',
        bgColor: 'bg-[#d5bbfd]'
    },
    {
        title: 'Code Revolution',
        description: 'Coderevo: A web development agency offering web design and development, social media integration and SEO services. Website built using Next.js, Redux and Tailwind css.',
        image: '/coderevo.png',
        link: 'https://coderevo.netlify.app/',
        bgColor: 'bg-[#4082f2]'
    },
    {
        title: 'Life Spring Mission',
        description: 'Life Spring Missions provides clean water, healthcare, and sharing the gospel, uplifting underserved communities and fostering hope in rural areas.',
        image: '/lifespring.png',
        link: 'https://life.springmissions.org/',
        bgColor: 'bg-[#0e2b24]'
    },
    {
        title: 'Jewel Haven Initiative',
        description: 'Jewel Haven Initiative (JHI) is an NGO empowering children, youths, and women through impactful programs fostering purpose and social relevance.',
        image: '/jhi.png',
        link: 'https://www.jewelhaven.org/',
        bgColor: 'bg-[#231c5c]'
    },
    {
        title: 'Carrie Link Mobile Notary',
        description: 'Carrie Link Mobile Notary: A professional notary website offering mobile notary services, built with WordPress.',
        image: '/carrie.png',
        link: 'https://soloriodesigns.com/carriemobilenotary/',
        bgColor: 'bg-[#50130f]'
    },
    {
        title: 'EasyCliQ Auth',
        description: 'EasyCliQ: This is a simple authentication system enabling user to sign-up and sign-in. Built with React + vite and Google firebase.',
        image: '/firebase.png',
        link: 'https://samsonauthentication.netlify.app/',
        bgColor: 'bg-[#123736]'
    },
    {
        title: 'Green Acres Hospital',
        description: 'Green Acres Hospital provides professional, personalized medical care in a modern, ambient environment with cutting-edge technology.',
        image: '/greenacres.png',
        link: 'https://greenacreshospital.com/',
        bgColor: 'bg-[#4d56a2]'
    },
    {
        title: 'UrielSpark Store',
        description: 'UrielSpark Store: A multipurpose e-commerce store built with Shopify and integrated with Flutterwave for payments.',
        image: '/urielspark.png',
        link: 'https://98c27b-11.myshopify.com/',
        bgColor: 'bg-[#161616]'
    },
];

const Projects = function () {
  return (
    <section id="projects" className="py-16 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto text-center">
        {/* <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12">My Projects</h2> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(function (project, index) {
            return (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1000}
                  height={1000}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-800">{project.title}</h3>
                  <p className="text-sm lg:text-base mt-2 text-gray-600 flex-grow mb-4">{project.description}</p>
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-auto inline-block ${project.bgColor} text-white px-4 py-2 rounded-lg`}
                  >
                    View Project
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;

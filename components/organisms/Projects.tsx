import React from 'react';
import { CommonImage } from '../atom/image';
import { Avtelcom, BeatMasterMobile, FotoKraftWerks } from '../assets';
import Link from 'next/link';

const ProjectList = [
  {
    index: 1,
    src: Avtelcom,
    alt: 'AVTELCOM-LLC',
    subTitle:
      'Is a trusted private company that acts as an Authorized Dealer and Supplier for renowned Pro Audio Video Telecom Electronics and Computer IT Companies worldwide. They are a market leader in providing top-quality Professional Commercial and Consumer Audio Visual Products to a diverse range of industries, including hospitality, broadcasting, education, government, entertainment, and more.',
    title: 'AVTELCOM LLC',
    link: 'https://avtelcom.com',
  },
  {
    index: 2,
    src: BeatMasterMobile,
    alt: 'BEATMASTERMOBILE',
    subTitle:
      'Is a premier provider of Music and Lighting Services for diverse events, catering to various sizes and types. Their top-notch sound and lighting setups, facilitated by professional-grade equipment, guarantee an impeccable audio and lighting experience throughout any occasion.',
    title: 'BEATMASTERMOBILE',
    link: 'https://beatmastermobile.com',
  },
  {
    index: 3,
    src: FotoKraftWerks,
    alt: 'FOTOKRAFTWERKS',
    subTitle:
      'Is a leading photo booth rental company, renowned for its distinctive and cutting-edge photo booth experiences tailored for various events. Their dedicated team aims to curate unforgettable moments by incorporating the latest trends in photo booth technology and design.',
    title: 'FOTOKRAFTWERKS',
    link: 'https://fotokraftwerks.com',
  },
];

const Projects = () => {
  return (
    <section className="flex flex-col md:p-10 sm:p5 w-full min-h-[600px]">
      <div className="flex flex-col justify-center">
        <span className="font-bold text-center text-5xl self-center p-1">
          PROJECTS
        </span>
        <span className="font-semibold text-center text-xl self-center p-1">
          Showcasing Excellence: A Glimpse into My Accomplished Portfolio
        </span>
      </div>
      {ProjectList.map((project) => (
        <div
          key={project.index}
          className={`md:flex ${
            project.index % 2 === 0 ? 'md:flex-row-reverse' : ''
          } p-5 md:p-10`}
        >
          <div className="md:flex-grow md:w-1/2 rounded-xl overflow-hidden">
            <Link href={project.link} target="_blank">
              <CommonImage
                src={project.src}
                alt={project.alt}
                className="transition-transform duration-300 transform hover:translate-y-10 hover:scale-125"
              />
            </Link>
          </div>
          <div className="md:flex-grow md:p-10 sm:p5 md:w-1/2">
            <div className="pt-10">
              <span className="text-2xl font-bold hover:text-modernity-primary-3">
                <Link href={project.link} target="_blank">
                  {project.title}
                </Link>
              </span>
              <p className="text-justify py-2 text-md">{project.subTitle}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export { Projects };

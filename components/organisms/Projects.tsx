import React from 'react';
import { CommonImage } from '../atom/image';
import {
  Avtelcom,
  BeatMasterMobile,
  FotoKraftWerks,
  Spacesium1,
  CropLook2,
  SeniorCitizen,
  ForestLake,
  BIRDocumentTracer,
  JOMS,
  SalesAndInventory,
  JMBullion,
  BreweryTrader,
} from '@/assets';
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
  {
    index: 4,
    src: Spacesium1,
    alt: 'Spacesium',
    subTitle:
      'Spacesium’s data-first digital twins are designed to be highly customisable and adaptable to your needs. The platform does not only facilitates data integration, but also provides intuitive data visualisation and robust data analysis capabilities. With Spacesium, you can unlock the full potential of your location data.',
    title: 'SPACESIUM',
    link: 'https://www.spacesium.com',
  },
  {
    index: 5,
    src: JMBullion,
    alt: 'JM-BULLION:-Buy-Gold-and-Silver-Bullion-Online',
    subTitle:
      'The company enables investors to acquire physical bullion, granting them ownership they can hold rather than mere paper claims. Since its inception, the company has maintained a position as a leader in industry pricing. It consistently surpasses expectations by facilitating weekly sales, ensuring prompt shipping, and providing service that has received accolades. Situated in Dallas, Texas, the corporate headquarters and contact center serve as the hub of operations.',
    title: 'JM BULLION: Buy Gold & Silver Bullion Online',
    link: 'https://www.jmbullion.com/',
  },
  {
    index: 6,
    src: BreweryTrader,
    alt: 'Brewery Trader',
    subTitle:
      'For those selling equipment or in search of industrial bargains, this marketplace stands as the ultimate destination. Addressing diverse needs, it presents sellers with a platform to highlight their items, while buyers discover a range of competitively priced options. A realm of seamless transactions and intelligent industrial shopping awaits.',
    title: 'Brewery Trader',
    link: 'https://brewerytrader.com/',
  },
  {
    index: 5,
    src: CropLook2,
    alt: 'CropLook',
    subTitle:
      'This study aimed to create a website addressing challenges in crop trading. The website allows farmers to input crop information for smooth transactions. It displays crop availability, a real-time chatbox, sends SMS notifications for reservations, and communicates reservation details to customers. It also showcases profitable crops with statistical charts, aiding farmers decision-making.',
    title:
      'CROPLOOK: CROP TRADING PORTAL FOR KAPATAGAN UPLAND FARMERS ASSOCIATION (KUFA) WITH SMS NOTIFICATION AND DATA STATISTICS TO EXHIBIT THE MOST AND LEAST',
    link: 'https://github.com/amilissa/MYCROPLOOK',
  },
  {
    index: 6,
    src: SalesAndInventory,
    alt: 'sales-and-inventory-management-system-using-vbnet',
    subTitle:
      'The Sales and Inventory System in VB.Net simplifies sales and inventory management. It enables easy item selling, stock monitoring, sales report printing, log management, and user account creation. This system improves operational efficiency and facilitates informed decision-making for businesses.',
    title: 'SALES AND INVENTORY MANAGEMENT SYSTEM USING VB.NET',
    link: 'https://www.youtube.com/watch?v=FqvJT37Ao0Y',
  },
];

// hide these projects
// {
//   index: 5,
//   src: SeniorCitizen,
//   alt: 'Senior-Citizen-ID-Printing-System',
//   subTitle:
//     'This is an automated tool that generates IDs particularly for Senior Citizens, Disabled Persons, and Solo Parents. This ID gives a huge help for the beneficiaries because they will have the privileges to have discounts when purchasing essential goods and services like groceries, medicines and transportation etc.',
//   title: 'SENIOR CITIZEN ID PRINTING SYSTEM',
//   link: '#',
// },
// {
//   index: 5,
//   src: SeniorCitizen,
//   alt: 'Senior-Citizen-ID-Printing-System',
//   subTitle:
//     'This is an automated tool that generates IDs particularly for Senior Citizens, Disabled Persons, and Solo Parents. This ID gives a huge help for the beneficiaries because they will have the privileges to have discounts when purchasing essential goods and services like groceries, medicines and transportation etc.',
//   title: 'SENIOR CITIZEN ID PRINTING SYSTEM',
//   link: '#',
// },
// {
//   index: 6,
//   src: ForestLake,
//   alt: 'ForestLake',
//   subTitle:
//     'The Simplified Cemetery Reservation System is an online platform that simplifies burial planning and management. It allows individuals and families to easily reserve burial plots, select services, and manage funeral arrangements from anywhere. This user-friendly system eliminates paperwork and physical visits, providing a convenient and efficient experience. Cemetery staff can also manage plot availability and scheduling effortlessly. With this streamlined system, burial planning becomes hassle-free during a difficult time.',
//   title: 'FOREST LAKE RESERVATION WEBSITE',
//   link: '#',
// },
// {
//   index: 7,
//   src: BIRDocumentTracer,
//   alt: 'BIR-Document-Tracer',
//   subTitle:
//     'The Efficient Document Tracer System simplifies document tracking and management. It enables easy retrieval, storage, and monitoring of documents throughout their lifecycle. This centralized system ensures quick access, enhances collaboration, and improves workflow efficiency. With enhanced security measures, it ensures confidentiality and data integrity. By streamlining document tracking, this system enhances productivity and eliminates manual handling challenges.',
//   title: 'Digos City BIR Document Tracer',
//   link: '#',
// },
// {
//   index: 8,
//   src: JOMS,
//   alt: 'Job-Order-Management-System',
//   subTitle:
//     'I support the LGU of Digos City and its people by providing technological solutions. In line with this, I have developed a web-based Job Order Management System (JOMS) for the Human Resource Management Office. This system allows them to efficiently encode all the job order employees in the city. With its user-friendly interface, this project simplifies the task of record-keeping, searching, and filtering.',
//   title: 'JOB ORDER MANAGEMENT SYSTEM',
//   link: '#',
// },

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
          className={`md:flex  min-h-[400px] ${
            project.index % 2 === 0 ? 'md:flex-row-reverse' : ''
          } p-5 md:p-10 `}
        >
          <div className="md:flex-grow md:w-1/2 rounded-xl overflow-hidden  max-h-64">
            <Link
              href={project.link}
              target={project.link === '#' ? '_self' : '_blank'}
            >
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
                <Link
                  href={project.link}
                  target={project.link === '#' ? '_self' : '_blank'}
                >
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

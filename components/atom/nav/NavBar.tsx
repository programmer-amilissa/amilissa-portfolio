import { EuphyLogo } from "@/components/assets/pngs";
import Image from "next/image";
import React from "react";
const NavBar = () => {
  const links = [
    { index: 1, link: "/", title: "Home" },
    { index: 2, link: "/", title: "Projects" },
    { index: 3, link: "/", title: "About" },
  ];

  return (
    <nav>
      <ul className="flex flex-row p-10 bg-modernity-accent-1 select-none">
        <li className="mr-auto">
          <Image
            alt="Euphy's Corner Logo"
            className="w-auto h-16"
            src={EuphyLogo}
          />
        </li>

        {links.map((link) => (
          <li key={link.index} className="mx-10 hover:font-semibold">
            <a href={link.link}>{link.title}</a>
          </li>
        ))}
        <li className="ml-auto rounded-2xl h-12 bg-modernity-primary-3 p-3 text-modernity-accent-1 font-semibold hover:scale-110 transition-transform hover:text-modernity-accent-2 hover:bg-modernity-primary-2">
          <a href="mailto:programmer.amilissa@gmail.com">
            programmer.amilissa@gmail.com
          </a>
        </li>
      </ul>
    </nav>
  );
};

export { NavBar };

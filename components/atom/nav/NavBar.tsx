import React from "react";

const NavBar = () => {
    const links = [
      { index: 1, link: "/", title: "Home" },
      { index: 2, link: "/", title: "Projects" },
      { index: 3, link: "/", title: "About" },
    ];
    
  return (
    <nav>
      <ul className="flex flex-row p-10 bg-modernity-accent-1">
        <li className="mr-auto p-3 text-modernity-accent-1 font-semibold">Euphy's Corner</li>
      
        {links.map((link)=>(
            <li key={link.index} className="mx-10">
            <a href={link.link}>{link.title}</a>
          </li>
        ))}
        <li className="ml-auto rounded-2xl bg-modernity-primary-3 p-3 text-modernity-accent-1 font-semibold hover:scale-110 transition-transform hover:text-modernity-accent-2 hover:bg-modernity-primary-2">programmer.amilissa@gmail.com</li>
      </ul>
    </nav>
  );
};

export { NavBar };

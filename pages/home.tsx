import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import {
  Contact,
  Home,
  NavBar,
  Projects,
  ProjectsVA,
  HomeVA,
  ContactVA,
  Footer,
} from '@/components';

const HomePage: React.FC<{}> = () => {
  const [asVA, setAsVA] = useState<boolean>(false);

  const handleOnClickVA = () => {
    setAsVA(!asVA);
  };

  return (
    <>
      <Head>
        <title>Amilissa Araneta - Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="Amilissa Araneta - Portfolio"
          key="amilissa-araneta-portfolio"
        />
      </Head>
      <NavBar handleOnClick={handleOnClickVA} asVA={asVA} />
      <div className="bg-modernity-accent-1 md:p-10 select-none">
        {asVA ? (
          <>
            <HomeVA />
            <ProjectsVA />
            <ContactVA />
          </>
        ) : (
          <>
            <Home />
            <Projects />
            <Contact />
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default HomePage;

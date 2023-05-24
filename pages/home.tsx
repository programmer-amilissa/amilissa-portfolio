import React, { useEffect, useState } from "react";
import Head from "next/head";
import { ContactSection, Home, NavBar } from "@/components";

const HomePage: React.FC<{}> = () =>{
    
  return (
    <>
      <Head>
        <title>Amilissa Araneta - Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Amilissa Araneta - Portfolio" key="amilissa-araneta-portfolio" />
      </Head>
      <NavBar />
      <Home />
      </>
  )
}

export default HomePage;
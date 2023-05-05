import React, { useEffect, useState } from "react";
import Head from "next/head";
import DefaultButton from "@/components/ui/button/DefaultButton";

const HomePage: React.FC<{}> = () =>{
    
  return (
    <>
      <Head>
        <title>HomePage</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <div>
        <h1>
        Amilissa Araneta - Portfolio
        </h1>
        <DefaultButton />
      </div>
      </>
  )
}

export default HomePage;
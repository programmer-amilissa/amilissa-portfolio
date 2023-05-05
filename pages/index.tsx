import React from "react";
import Head from "next/head";
import HomePage from "./home";

const Home: React.FC<{}> = () => {
  return (
    <div>
      <Head>
        <title>Sakay Davao</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </div>
  );
};

export default Home;

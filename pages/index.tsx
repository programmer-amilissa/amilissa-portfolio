import React from 'react';
import Head from 'next/head';
import HomePage from './home';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const Home: React.FC<{}> = () => {
  return (
    <main>
      <HomePage />
    </main>
  );
};

export default Home;

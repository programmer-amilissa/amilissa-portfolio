import React from 'react';
import { IconButton } from '../../atom';
import { GithubSVG, LinkedInSVG, YoutubeSVG } from '@/assets';

const HomeVA = () => {
  return (
    <section
      id="introduction"
      className="flex flex-col lg:flex-row w-full max-h-[600px] md:min-h-[700px]"
    >
      <div className="flex flex-col lg:w-[60%] lg:justify-center">
        <span className="md:text-9xl lg:self-end text-6xl font-extrabold text-modernity-accent-2 self-center ">
          VERSATILE{' '}
        </span>
        <span className="self-center md:text-8xl xl:text-9xl lg:self-center text-6xl font-extrabold hover:scale-110 transition-transform text-modernity-primary-2 ">
          {' '}
          VIRTUAL{' '}
        </span>
        <span className="md:text-9xl lg:self-end text-6xl font-extrabold text-modernity-accent-2 self-center ">
          ASSISTANT{' '}
        </span>
      </div>
      <div className="flex flex-col items-center lg:items-start lg:justify-center lg:w-[35%]">
        <span className="self-center md:text-5xl text-center text-7xl font-extrabold text-modernity-primary-3 hover:scale-110 transition-transform ">
          AMILISSA ARANETA
        </span>
        <p className="text-justify min-w-[200px] px-10 lg:px-0">
          As a{' '}
          <b className="text-modernity-accent-2">skilled virtual assistant</b>,
          I bring a diverse range of expertise to the table, empowering
          businesses like yours to thrive and grow. Harnessing the power of
          exceptional{' '}
          <b className="text-modernity-accent-2">administrative support</b>,
          top-notch <b className="text-modernity-accent-2">customer service</b>,
          captivating{' '}
          <b className="text-modernity-accent-2">social media management</b>,
          and creative{' '}
          <b className="text-modernity-accent-2">graphic design skills</b>, I am
          your all-in-one solution for business success.
        </p>
        <div className="flex gap-1">
          <IconButton>
            <LinkedInSVG />
          </IconButton>
          <IconButton>
            <YoutubeSVG />
          </IconButton>
          <IconButton>
            <GithubSVG />
          </IconButton>
        </div>
      </div>
    </section>
  );
};

export { HomeVA };

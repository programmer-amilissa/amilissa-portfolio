import React from 'react';
import { IconButton } from '../atom';
import { GithubSVG, LinkedInSVG, YoutubeSVG } from '@/assets';

const Home = () => {
  return (
    <section
      id="introduction"
      className="flex flex-col lg:flex-row w-full max-h-[500px] md:min-h-[600px]"
    >
      <div className="flex flex-col lg:w-[60%] lg:justify-center">
        <span className="md:text-9xl lg:self-end text-6xl font-extrabold text-modernity-accent-2 self-center ">
          CREATIVE{' '}
        </span>
        <span className="self-center md:text-8xl xl:text-9xl lg:self-center text-6xl font-extrabold hover:scale-110 transition-transform text-modernity-primary-2 ">
          {' '}
          FRONT-END{' '}
        </span>
        <span className="md:text-9xl lg:self-end text-6xl font-extrabold text-modernity-accent-2 self-center ">
          DEVELOPER{' '}
        </span>
      </div>
      <div className="flex flex-col items-center lg:items-start lg:justify-center lg:w-[35%]">
        <span className="self-center md:text-5xl text-center text-7xl font-extrabold text-modernity-primary-3 hover:scale-110 transition-transform ">
          AMILISSA ARANETA
        </span>
        <p className="text-justify min-w-[200px] px-10 lg:px-0 ">
          With a keen eye for aesthetics and a knack for coding, I bring
          websites to life as a front-end developer, merging innovative design
          elements with clean and efficient code to create visually stunning and
          user-friendly digital experiences.
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

export { Home };

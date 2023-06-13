import React from "react";
import styles from "@/styles/HomeSection.module.css";
import { IconButton } from "../atom";
import { GithubSVG, LinkedInSVG, YoutubeSVG } from "../assets";

const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full min-h-[600px] p-5 bg-modernity-accent-1">
      <div className="flex flex-col lg:w-[60%] lg:justify-center">
        <span className="md:text-9xl lg:self-end text-4xl font-extrabold text-modernity-accent-2 self-center select-none">
          CREATIVE{" "}
        </span>
        <span className="md:text-8xl xl:text-9xl lg:self-center text-4xl font-extrabold hover:scale-110 transition-transform text-modernity-primary-2 self-center select-none">
          {" "}
          FRONT-END{" "}
        </span>
        <span className="md:text-9xl lg:self-end text-4xl font-extrabold text-modernity-accent-2 self-center select-none">
          DEVELOPER{" "}
        </span>
      </div>
      <div className="flex flex-col items-center lg:items-start lg:justify-center lg:w-[35%]">
        <span className="md:text-5xl text-3xl font-extrabold text-modernity-primary-3 hover:scale-110 transition-transform select-none">
          AMILISSA ARANETA
        </span>
        <p className="text-justify min-w-[200px] px-10 lg:px-0 select-none">
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
    </div>
  );
};

export { Home };

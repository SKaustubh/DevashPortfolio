import React from "react";
import {
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <FaYoutube />
              <span className="text-[15px] ml-[6px] cursor-pointer">
                Youtube
              </span>
            </a>
            <a
              href="https://github.com/SKaustubh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px] cursor-pointer">
                Github
              </span>
            </a>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            <a
              href="https://www.instagram.com/s_ingh._.k/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxInstagramLogo />
              <span className="text-[15px] ml-[6px] cursor-pointer">
                Instagram
              </span>
            </a>
            <a
              href="https://twitter.com/Singhkaustubh3"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer cursor-pointer"
            >
              <RxTwitterLogo />
              <span className="text-[15px] ml-[6px] cursor-pointer">
                Twitter
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/kaustubh-singh-11-gt/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxLinkedinLogo />
              <span className="text-[15px] ml-[6px] cursor-pointer">
                Linkedin
              </span>
            </a>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <a href="#" className="text-[15px] ml-[6px]">
                Become Sponsor
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <a href="#" className="text-[15px] ml-[6px]">
                Learning about me
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <a
                href="mailto:kaustubhsingh37@gmail.com"
                className="text-[15px] ml-[6px]"
              >
                kaustubhsingh37@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="mb-[20px] text-[15px] text-center">
          &copy; Kaustubh Singh 2003 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;

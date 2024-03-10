import socialMedia from "@/constants/sociaMedia";
import Image from "next/image";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/my_photo.jpg"
            alt="logo"
            width={30}
            height={30}
            className="cursor-pointer hover:animate-slowspin flex items-center justify-center rounded-full"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Kaustubh Singh
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {socialMedia.map((social) => (
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              key={social.name}
              className="flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-900 p-2 transition-all duration-300"
              style={{ width: "50px", height: "50px" }}
            >
              <img
                src={social.image} // Use the image property as the source
                alt={social.name}
                width={50}
                height={50}
                style={{ filter: "brightness(2.2) contrast(2.5)" }}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

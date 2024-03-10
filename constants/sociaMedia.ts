// socialMedia.ts

interface SocialMedia {
  name: string;
  url: string;
  image: string; // Assuming the image property contains the path to the image file
}

const socialMedia: SocialMedia[] = [
  {
    name: "GitHub",
    url: "https://github.com/SKaustubh",
    image: "/github.png", // Adjust the path based on the actual location of your image file
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/s_ingh._.k/",
    image: "/instagram.png", // Adjust the path based on the actual location of your image file
  },
  {
    name: "Twitter",
    url: "https://twitter.com/Singhkaustubh3",
    image: "/twitter.png", // Adjust the path based on the actual location of your image file
  },

  // Add more social media platforms as needed
];

export default socialMedia;

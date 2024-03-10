import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Modern Next.js Portfolio"
          description="
          A modern Next.js portfolio is a polished and efficient showcase of a developer's expertise, projects, and accomplishments, crafted using the Next.js framework for its powerful capabilities in server-side rendering, static site generation, and seamless client-side navigation. Featuring a clean and responsive design, the portfolio integrates CSS frameworks like Tailwind CSS or styled-components for aesthetic appeal and customization. Leveraging APIs and databases enables dynamic content presentation, while Next.js's built-in support for SEO optimization and performance enhancements ensures a smooth and engaging user experience, making the portfolio an effective tool for attracting potential clients or employers."
        />
        <ProjectCard
          src="/CardImage.png"
          title="Blog App"
          description="
          The Blog App is a dynamic and user-friendly platform built with React.js as the front-end framework and Appwrite as the backend service. This innovative combination allows users to create, edit, and publish blog posts effortlessly while enjoying a seamless and responsive user experience. Leveraging the power of React.js, the app offers an intuitive interface with features such as rich text editing, real-time previews, and interactive components for a visually engaging blog creation process. Meanwhile, with Appwrite handling the backend operations, including user authentication, database management, and file storage, the Blog App ensures robust security and scalability, enabling users to focus on crafting captivating content without worrying about technical complexities. Whether you're a seasoned blogger or a newcomer to the world of content creation, the Blog App powered by React.js and Appwrite offers an unparalleled platform to express your ideas and connect with your audience effortlessly."
        />
        <ProjectCard
          src=""
          title="Diet Tracker"
          description="
          A diet tracker application built using the MERN (MongoDB, Express.js, React, Node.js) stack and styled with Bootstrap CSS offers users a seamless and intuitive platform to monitor and manage their dietary habits effectively. With MongoDB serving as the database to store user data, Express.js providing a robust backend framework, and Node.js powering the server, the application ensures reliable data storage and retrieval. Utilizing React on the frontend enables dynamic and interactive user interfaces, allowing users to easily track their meals, calorie intake, and nutritional information. Bootstrap CSS enhances the application's visual appeal and responsiveness, providing a clean and modern design that adapts seamlessly across various devices. Users can log their meals, set dietary goals, and view detailed reports and analytics to make informed decisions about their nutrition and health. With its user-friendly interface and comprehensive features, the diet tracker application empowers users to achieve their wellness goals and maintain a healthy lifestyle effortlessly."
        />
      </div>
    </div>
  );
};

export default Projects;

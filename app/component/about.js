import React from "react";
import Image from "next/image";
import compimg from "public/images/comp.PNG";
const About = () => {
  return (
    <>
      <div className="items-center justify-center hidden pb-40 align-middle sm:flex pt-36 ">
        <div className="flex flex-col justify-center ">
          <div className="flex justify-center">
            <div className="relative h-32">
              <Image src={compimg} alt="Image of a Computer" width={400} height={200} style={{ borderRadius: "40px" }} />
            </div>
            <div className="w-4/12 ml-16">
              <p className="font-extrabold text-purple-800" style={{ fontSize: "15px" }}>
                ABOUT ME
              </p>
              <p className="mt-2 font-extrabold " style={{ fontSize: "23px" }}>
                I’m a Software Enginner from Malaysia.
              </p>
              <p className="mt-2 text-justify text-gray-500 " style={{ fontSize: "16px" }}>
                As a Junior Software Engineer, I bring a multifaceted expertise that encompasses both web development and emerging technologies like
                machine learning, artificial intelligence, and computer vision. With a strong foundation in frontend and backend technologies,
                including React JS, Tailwind, SCSS, Next.js, Material-UI, HTML, CSS, and JavaScript, I seamlessly integrate these skills with my
                knowledge of advanced algorithms and frameworks. This holistic approach enables me to create adaptive websites and robust web
                applications while also exploring innovative solutions at the intersection of technology and AI.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative justify-center px-6 pt-16 pb-16 mx-6 sm:hidden">
        <div className="relative ">
          <Image src={compimg} alt="Image of a Computer" width={400} height={200} style={{ borderRadius: "40px" }} />
        </div>
        <div className="flex flex-col items-center justify-center mt-4">
          <p className="font-extrabold text-purple-800" style={{ fontSize: "15px" }}>
            ABOUT ME
          </p>
          <p className="mt-2 font-extrabold text-center " style={{ fontSize: "23px" }}>
            I'm a Front End and Software Developer from Malaysia.
          </p>
          <p className="mt-2 text-center text-gray-500 " style={{ fontSize: "16px" }}>
            As a Junior Front-End Developer, I bring a diverse range of proficiencies encompassing HTML, CSS, JavaScript, React, Tailwind, SCSS,
            Next.js, Material-UI, and TypeScript. My forte lies in orchestrating the creation and upkeep of adaptive websites, ensuring seamless user
            interactions. I specialize in constructing vibrant, interactive interfaces by meticulously crafting efficient code and harnessing
            state-of-the-art methodologies and tools. My collaborative spirit shines through as I thrive in team environments, working harmoniously
            across departments to deliver remarkable web applications.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLaptopCode } from "@fortawesome/pro-light-svg-icons";
import Image from "next/image";
import nextimg from "public/images/next.png";
import tsimg from "public/images/typescript.png";
import muiimg from "public/images/mui.png";
import twimg from "public/images/tailwind.png";
import htmlimg from "public/images/html.png";
import jsimg from "public/images/js.png";
import reactimg from "public/images/react.png";
import cplusimg from "public/images/c++.png";
import pythonimg from "public/images/python.png";
import javaimg from "public/images/java.webp";
import seleniumimg from "public/images/selenium.png";
import nodeimg from "public/images/node.png";
import cimg from "public/images/c.png";
import githubimg from "public/images/github.png";
import jiraimg from "public/images/jira.jpg";
import qtimg from "public/images/qt.png";
import stackoverflowimg from "public/images/stackoverflow.png";
import vscimg from "public/images/vsc.png";
import atomimg from "public/images/atom.png";
import chromedevimg from "public/images/chromdev.jpg";
import myphoto from "public/images/photo.jpg";
const TechStackImg = [reactimg, nextimg, jsimg, tsimg, htmlimg, muiimg, twimg];
const langImg = [pythonimg, cplusimg, javaimg, seleniumimg, nodeimg, cimg, reactimg];
const toolImg = [githubimg, jiraimg, qtimg, vscimg, atomimg, chromedevimg, stackoverflowimg];
const About = () => {
  return (
    <>
      <div className="flex-col justify-center hidden pt-32 pb-16 sm:flex">
        <div className="flex justify-center">
          <div className="w-5/12 mr-16">
            <p className="font-bold " style={{ fontSize: "54px" }}>
              Junior Software Engineer
            </p>
            <p className="mt-4 text-gray-500" style={{ fontSize: "18px" }}>
              Hi, I am Yong Hann. A passionate sofware engineer. I innovate and create impactful solutions.
            </p>
            <p className="mt-4 text-gray-400" style={{ fontSize: "16px" }}>
              Nice to meet you!
            </p>
          </div>
          <div className="relative h-10 hover:animate-bounce" style={{ fontSize: "120px", borderRadius: "50px" }}>
            <Image src={myphoto} alt="React JS" width={240} height={60} style={{ borderRadius: "60px", border: "3px solid black" }} />
          </div>
        </div>
        <div className="flex items-center justify-center mt-28">
          <div className="flex flex-col items-center justify-center ">
            <div className="flex items-center justify-center mb-5 font-semibold align-middle">
              Tech Stack |
              <div className="flex flex-wrap ml-20">
                {TechStackImg.map((src, index) => (
                  <div
                    key={index}
                    className="p-3 mr-8 bg-white"
                    style={{
                      borderRadius: "40px",
                      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                      cursor: "pointer",
                    }}
                    title="React"
                  >
                    <Image src={src} alt={`Image ${index}`} width={36} height={10} />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center mb-5 font-semibold align-middle">
              Languages |
              <div className="flex flex-wrap ml-20">
                {langImg.map((src, index) => (
                  <div
                    key={index}
                    className="p-3 mr-8 bg-white"
                    style={{
                      borderRadius: "40px",
                      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                      cursor: "pointer",
                    }}
                    title="React"
                  >
                    <Image src={src} alt={`Image ${index}`} width={36} height={10} />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center mb-5 font-semibold align-middle">
              Tools &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
              <div className="flex flex-wrap ml-20">
                {toolImg.map((src, index) => (
                  <div
                    key={index}
                    className="p-3 mr-8 bg-white"
                    style={{
                      borderRadius: "40px",
                      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                      cursor: "pointer",
                    }}
                    title="React"
                  >
                    <Image src={src} alt={`Image ${index}`} width={36} height={10} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center px-6 pt-16 pb-16 mx-6 sm:hidden">
        <div className="flex justify-center" style={{ fontSize: "120px", borderRadius: "50px" }}>
          <Image src={myphoto} alt="React JS" width={240} height={60} style={{ borderRadius: "60px", border: "3px solid black" }} />
        </div>
        <div className="mt-8 text-center">
          <p className="font-bold " style={{ fontSize: "34px" }}>
            Front-End Web Developer <FontAwesomeIcon icon={faLaptopCode} style={{ fontSize: "45px", color: "#4a01b7" }} />
          </p>
          <p className="mt-4 text-gray-500" style={{ fontSize: "17px" }}>
            Hi, I am Yong Hann. A passionate front-end web developer. I design and build user interfaces.
          </p>
          <p className="mt-4 text-gray-400" style={{ fontSize: "16px" }}>
            Nice to meet you!
          </p>
        </div>
        <div className="flex flex-col items-center justify-center mt-10 mb-5 font-semibold align-middle">
          <p className="mb-4 underline">Tech Stack</p>
          <div className="flex flex-wrap items-center justify-center">
            {TechStackImg.map((src, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-3 mr-3 bg-white"
                style={{
                  borderRadius: "40px",
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                  cursor: "pointer",
                  marginBottom: "20px",
                }}
                title="React"
              >
                <Image src={src} alt={`Image ${index}`} width={36} height={10} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-10 mb-5 font-semibold align-middle">
          <p className="mb-4 underline">Languages</p>
          <div className="flex flex-wrap items-center justify-center">
            {langImg.map((src, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-3 mr-3 bg-white"
                style={{
                  borderRadius: "40px",
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                  cursor: "pointer",
                  marginBottom: "20px",
                }}
                title="React"
              >
                <Image src={src} alt={`Image ${index}`} width={36} height={10} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-10 mb-5 font-semibold align-middle">
          <p className="mb-4 underline">Tools</p>
          <div className="flex flex-wrap items-center justify-center">
            {toolImg.map((src, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-3 mr-3 bg-white"
                style={{
                  borderRadius: "40px",
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                  cursor: "pointer",
                  marginBottom: "20px",
                }}
                title="React"
              >
                <Image src={src} alt={`Image ${index}`} width={36} height={10} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

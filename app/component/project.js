"use client";
import React, { useState } from "react";
import Image from "next/image";
import compimg from "public/images/comp.PNG";
import tomeo from "public/images/tomeo.jpg";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faVideo } from "@fortawesome/free-solid-svg-icons";
import hotweather from "public/images/hotweather.PNG";
import coldweather from "public/images/coldweather.PNG";
import icaiare1 from "public/images/icaiare1.png";
import icaiare2 from "public/images/icaiare2.png";
import icaiare3 from "public/images/icaiare3.png";
import icaiare4 from "public/images/icaiare4.png";
import icaiare5 from "public/images/icaiare5.png";
import icaiare6 from "public/images/icaiare6.png";
import icaiare7 from "public/images/icaiare7.png";
import icaiare8 from "public/images/icaiare8.png";
import wecare1 from "public/images/wecare1.png";
import wecare2 from "public/images/wecare2.png";
import wecare3 from "public/images/wecare3.png";
import wecare4 from "public/images/wecare4.png";
import wecare5 from "public/images/wecare5.png";
import wecare6 from "public/images/wecare6.png";
import wecare7 from "public/images/wecare7.png";
import wecare8 from "public/images/wecare8.png";
import wecare9 from "public/images/wecare9.png";
import connect1 from "public/images/connect1.png";
import connect2 from "public/images/connect2.png";
import connect3 from "public/images/connect3.png";
import connect4 from "public/images/connect4.png";
import connect5 from "public/images/connect5.png";
import connect6 from "public/images/connect6.png";
import connect7 from "public/images/connect7.png";
import connect8 from "public/images/connect8.png";
import connect9 from "public/images/connect9.png";
import connect10 from "public/images/connect10.png";
import connect11 from "public/images/connect11.png";
import chatgptclone from "public/images/chatgptclone.PNG";
import ImageCarousel from "./imagecarousel";

const Project = () => {
  const weatherimages = [
    {
      imageURL: hotweather,
    },
    {
      imageURL: coldweather,
    },
  ];
  const icaiareimages = [
    {
      imageURL: icaiare1,
    },
    {
      imageURL: icaiare2,
    },
    {
      imageURL: icaiare3,
    },
    {
      imageURL: icaiare4,
    },
    {
      imageURL: icaiare5,
    },
    {
      imageURL: icaiare6,
    },
    {
      imageURL: icaiare7,
    },
    {
      imageURL: icaiare8,
    },
  ];
  const wecareimages = [
    {
      imageURL: wecare1,
    },
    {
      imageURL: wecare2,
    },
    {
      imageURL: wecare3,
    },
    {
      imageURL: wecare4,
    },
    {
      imageURL: wecare5,
    },
    {
      imageURL: wecare6,
    },
    {
      imageURL: wecare7,
    },
    {
      imageURL: wecare8,
    },
    {
      imageURL: wecare9,
    },
  ];
  const connectfreshimages = [
    {
      imageURL: connect1,
    },
    {
      imageURL: connect2,
    },
    {
      imageURL: connect3,
    },
    {
      imageURL: connect4,
    },
    {
      imageURL: connect5,
    },
    {
      imageURL: connect6,
    },
    {
      imageURL: connect7,
    },
    {
      imageURL: connect8,
    },
    {
      imageURL: connect9,
    },
    {
      imageURL: connect10,
    },
    {
      imageURL: connect11,
    },
  ];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex-col hidden w-7/12 pt-24 pb-20 sm:flex">
        <div>
          <p className="font-extrabold text-purple-800" style={{ fontSize: "15px" }}>
            PROJECT
          </p>
        </div>
        <div>
          <p className="mt-2 mb-8 font-extrabold" style={{ fontSize: "23px" }}>
            Each project is a unique piece of development
          </p>
        </div>

        <div className="flex mb-12 bg-gray-100" style={{ borderRadius: "20px" }}>
          <div className="flex items-center justify-center m-5 ">
            <Image src={chatgptclone} alt="Image of a Computer" width={450} height={150} style={{ marginLeft: "25px", borderRadius: "20px" }} />
          </div>
          <div className="flex flex-col items-center w-1/2 m-3 mt-16 ">
            <div className="mb-5 font-bold" style={{ fontSize: "16px" }}>
              ChatGPT Clone
            </div>
            <div className="items-center mb-5 font-sans font-semibold text-center text-gray-500 w-80">
              <p>
                A ChatGPT clone powered by React.js and the OpenAI API. This project showcases expertise in front-end development and AI integration.
                Users can engage in lifelike text-based conversations with the AI chatbot, offering a glimpse into the capabilities of advanced
                language models.
              </p>
            </div>

            <div className="flex mb-5">
              <div className="p-3 mr-3 font-bold bg-white shadow-md">React</div>
              <div className="p-3 font-bold bg-white shadow-md">OpenAI API</div>
            </div>
            <div className="flex">
              <div className="p-3 mr-3 font-bold ">
                <a href="https://github.com/yhann0827/chatgptclone">Code</a> <FontAwesomeIcon icon={faGithub} size="1x" />
              </div>
              <div className="p-3 font-bold">
                <a href="https://chatgptclone-nu.vercel.app/">Live Demo</a>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </div>
            </div>
          </div>
        </div>

        <div className="flex mb-12 bg-gray-100" style={{ borderRadius: "20px" }}>
          <div className="flex items-center justify-center m-5 ">
            <ImageCarousel images={weatherimages} />
          </div>
          <div className="flex flex-col items-center w-1/2 m-3 mt-16 ">
            <div className="mb-5 font-bold" style={{ fontSize: "16px" }}>
              WEATHER APP
            </div>
            <div className="items-center mb-5 font-sans font-semibold text-center text-gray-500 w-80">
              <p>
                A web-based weather forecasting tool developed using React.js, Tailwind CSS and the OpenWeather API. This project showcases my skills
                in front-end web development, API integration, and responsive design.
              </p>
            </div>

            <div className="flex mb-5">
              <div className="p-3 mr-3 font-bold bg-white shadow-md">React</div>
              <div className="p-3 mr-3 font-bold bg-white shadow-md">Tailwind CSS</div>
              <div className="p-3 font-bold bg-white shadow-md">OpenWeather API</div>
            </div>
            <div className="flex">
              <div className="p-3 mr-3 font-bold ">
                <a href="https://github.com/yhann0827/weathernow">Code</a> <FontAwesomeIcon icon={faGithub} size="1x" />
              </div>
              <div className="p-3 font-bold">
                <a href="https://yhann0827.github.io/weathernow/">Live Demo</a> <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </div>
            </div>
          </div>
        </div>

        <div className="flex mb-12 bg-gray-100" style={{ borderRadius: "20px" }}>
          <div className="flex items-center justify-center m-5 ">
            <ImageCarousel images={connectfreshimages} />
          </div>
          <div className="flex flex-col items-center w-1/2 m-3 mt-16 ">
            <div className="mb-5 font-bold" style={{ fontSize: "16px" }}>
              ConnectFresh
            </div>
            <div className="items-center mb-5 font-sans font-semibold text-center text-gray-500 w-80">
              <p>
                I developed ConnectFresh, a personalized social networking app for first-year international students in the UK, as part of a
                university coursework. It offers tailored support and connections, adapting dynamically to user preferences. Achieving full marks,
                this project highlights my creativity and skill in applying personalization for user-centric solutions.
              </p>
            </div>

            <div className="flex mb-5">
              <div className="p-3 mr-3 font-bold bg-white shadow-md">Figma</div>
              <div className="p-3 mr-3 font-bold bg-white shadow-md">Mark: 70/70</div>
            </div>
            <div className="flex">
              <div className="p-3 mr-3 font-bold ">
                <a href="https://www.youtube.com/watch?v=tWmynSUMYmk">Video</a> <FontAwesomeIcon icon={faVideo} size="1x" />
              </div>
              <div className="p-3 font-bold">
                <a href="https://www.figma.com/proto/MFu53P1ZutSjP0NiRqFvya/ConnectFresh?type=design&node-id=101-2&t=VEfDNLbJA1F93uvh-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=101%3A2">
                  Live Demo
                </a>{" "}
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </div>
            </div>
          </div>
        </div>

        <div className="flex mb-12 bg-gray-100" style={{ borderRadius: "20px" }}>
          <div className="flex items-center justify-center m-5 ">
            <Image src={tomeo} alt="Image of a Computer" width={450} height={150} style={{ marginLeft: "25px", borderRadius: "20px" }} />
          </div>
          <div className="flex flex-col items-center w-1/2 m-3 mt-16 ">
            <div className="mb-5 font-bold" style={{ fontSize: "16px" }}>
              RESPONSIVE VIDEO PLAYER
            </div>
            <div className="items-center mb-5 font-sans font-semibold text-center text-gray-500 w-80">
              <p>
                In my university&apos;s user interface course, I created a responsive video player in C++. This project showcases my ability to apply
                user interface principles effectively, resulting in an intuitive and visually appealing user experience. It received a first-class
                grade, reflecting its exceptional quality.
              </p>
            </div>

            <div className="flex mb-5">
              <div className="p-3 mr-3 font-bold bg-white shadow-md">C++</div>
              <div className="p-3 mr-3 font-bold bg-white shadow-md">Figma</div>
              <div className="p-3 font-bold bg-white shadow-md">QT Creator</div>
            </div>
            <div className="flex">
              <div className="p-3 mr-3 font-bold ">
                Code <FontAwesomeIcon icon={faGithub} size="1x" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex mb-12 bg-gray-100" style={{ borderRadius: "20px" }}>
          <div className="flex items-center justify-center m-5 ">
            <ImageCarousel images={icaiareimages} />
          </div>
          <div className="flex flex-col items-center w-1/2 m-3 mt-16 ">
            <div className="mb-5 font-bold" style={{ fontSize: "16px" }}>
              icAIAre
            </div>
            <div className="items-center mb-5 font-sans font-semibold text-center text-gray-500 w-80">
              <p>
                An inventive application interface prototype designed to tackle mental health issues for AIA. Showcased creativity and problem-solving
                abilities, which played a vital role in creating an engaging and user-oriented prototype
              </p>
            </div>

            <div className="flex mb-5">
              <div className="p-3 mr-3 font-bold bg-white shadow-md">Figma</div>
              <div className="p-3 mr-3 font-bold bg-yellow-100 shadow-md">Semi Finalist</div>
              <div className="p-3 mr-3 font-bold bg-yellow-100 shadow-md">Best Pitch Prize</div>
            </div>
            <div className="flex">
              <div className="p-3 font-bold">
                <a href="https://www.figma.com/proto/AUFOlpAJRjsafGqjMaI2yl/AIA-Hackathon?type=design&node-id=14-3&t=gkYk5BH43IygLL2j-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=14%3A3">
                  Live Demo
                </a>{" "}
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </div>
            </div>
          </div>
        </div>

        {/* Only open when button is clicked */}
        {isOpen ? (
          <div>
            <div className="flex mb-12 bg-gray-100" style={{ borderRadius: "20px" }}>
              <div className="flex items-center justify-center m-5 ">
                <ImageCarousel images={wecareimages} />
              </div>
              <div className="flex flex-col items-center w-1/2 m-3 mt-16 ">
                <div className="mb-5 font-bold" style={{ fontSize: "16px" }}>
                  WeCare
                </div>
                <div className="items-center mb-5 font-sans font-semibold text-center text-gray-500 w-80">
                  <p>
                    A impactful website application targeted at combating the pressing concern of youth suicide and contributing to a reduction in the
                    global suicide rate. his project reflects a deep commitment to social responsibility, utilizing technical expertise and empathy to
                    create a potentially life-saving tool with a global impact.
                  </p>
                </div>

                <div className="flex mb-5">
                  <div className="p-3 mr-3 font-bold bg-white shadow-md">Figma</div>
                </div>
                <div className="flex">
                  <div className="p-3 font-bold">
                    <a href="https://www.figma.com/proto/JfNRTGF286BibfDNcAIxZc/WeCare?type=design&t=gkYk5BH43IygLL2j-0&scaling=min-zoom&page-id=0%3A1&node-id=65-2766&starting-point-node-id=65%3A2766">
                      Live Demo
                    </a>{" "}
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}

        <div className="flex items-center justify-center m-5 ">
          <Button
            variant="outlined"
            style={{ color: "black", borderColor: "black" }}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? "View Less" : "View More"}
          </Button>
        </div>
      </div>

      <div className="relative justify-center pt-16 pb-16 mx-5 sm:hidden">
        <div className="flex flex-col items-center justify-center mt-4">
          <p className="font-extrabold text-purple-800" style={{ fontSize: "15px" }}>
            PROJECT
          </p>
          <p className="mt-2 mb-5 font-extrabold text-center" style={{ fontSize: "20px" }}>
            Each project is a unique piece of development
          </p>

          <div className="flex flex-col mb-12 bg-gray-100" style={{ borderRadius: "20px" }}>
            <div className="flex items-center justify-center ">
              <ImageCarousel images={weatherimages} />
            </div>
            <div className="flex flex-col items-center m-5">
              <div className="mb-3 font-bold" style={{ fontSize: "16px" }}>
                WEATHER APP
              </div>
              <div className="items-center mb-5 font-sans font-semibold text-center text-gray-500 w-80">
                <p>
                  A web-based weather forecasting tool developed using React.js, Tailwind CSS and the OpenWeather API. This project showcases my
                  skills in front-end web development, API integration, and responsive design.
                </p>
              </div>
              <div className="flex mb-5">
                <div className="p-3 mr-3 font-bold bg-white shadow-md">React</div>
                <div className="p-3 font-bold bg-white shadow-md">Tailwind CSS</div>
              </div>
              <div className="flex">
                <div className="p-3 mr-3 font-bold ">
                  Code <FontAwesomeIcon icon={faGithub} size="1x" />
                </div>
                <div className="p-3 font-bold">
                  Live Demo <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col mb-12 bg-gray-100" style={{ borderRadius: "20px" }}>
            <div className="flex items-center justify-center m-5 ">
              <Image src={tomeo} alt="Image of a Computer" width={450} height={150} style={{ borderRadius: "20px" }} />
            </div>
            <div className="flex flex-col items-center m-5">
              <div className="mb-3 font-bold" style={{ fontSize: "16px" }}>
                RESPONSIVE VIDEO PLAYER
              </div>
              <div className="items-center mb-5 font-sans font-semibold text-center text-gray-500 w-80">
                <p>
                  In my university&apos;s user interface course, I created a responsive video player in C++. This project showcases my ability to
                  apply user interface principles effectively, resulting in an intuitive and visually appealing user experience. It received a
                  first-class grade, reflecting its exceptional quality.
                </p>
              </div>
              <div className="flex mb-5">
                <div className="p-3 mr-3 font-bold bg-white shadow-md">C++</div>
                <div className="p-3 mr-3 font-bold bg-white shadow-md">Figma</div>
                <div className="p-3 font-bold bg-white shadow-md">QT Creator</div>
              </div>
              <div className="flex">
                <div className="p-3 mr-3 font-bold ">
                  Code <FontAwesomeIcon icon={faGithub} size="1x" />
                </div>
                <div className="p-3 font-bold">
                  Live Demo <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col mb-12 bg-gray-100" style={{ borderRadius: "20px" }}>
            <div className="flex items-center justify-center m-5 ">
              <ImageCarousel images={icaiareimages} />
            </div>
            <div className="flex flex-col items-center m-5">
              <div className="mb-3 font-bold" style={{ fontSize: "16px" }}>
                icAIAre
              </div>
              <div className="items-center mb-5 font-sans font-semibold text-center text-gray-500 w-80">
                <p>
                  An inventive application interface prototype designed to tackle mental health issues for AIA. Showcased creativity and
                  problem-solving abilities, which played a vital role in creating an engaging and user-oriented prototype
                </p>
              </div>
              <div className="flex mb-5">
                <div className="p-3 mr-3 font-bold bg-white shadow-md">Figma</div>
                <div className="p-3 mr-3 font-bold bg-yellow-100 shadow-md">Semi Finalist</div>
                <div className="p-3 mr-3 font-bold bg-yellow-100 shadow-md">Best Pitch Prize</div>
              </div>
              <div className="flex">
                <div className="p-3 font-bold">
                  Live Demo <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col mb-12 bg-gray-100" style={{ borderRadius: "20px" }}>
            <div className="flex items-center justify-center m-5 ">
              <ImageCarousel images={wecareimages} />
            </div>
            <div className="flex flex-col items-center m-5">
              <div className="mb-3 font-bold" style={{ fontSize: "16px" }}>
                WeCare
              </div>
              <div className="items-center mb-5 font-sans font-semibold text-center text-gray-500 w-80">
                <p>
                  A impactful website application targeted at combating the pressing concern of youth suicide and contributing to a reduction in the
                  global suicide rate. his project reflects a deep commitment to social responsibility, utilizing technical expertise and empathy to
                  create a potentially life-saving tool with a global impact.
                </p>
              </div>
              <div className="flex mb-5">
                <div className="p-3 mr-3 font-bold bg-white shadow-md">Figma</div>
              </div>
              <div className="flex">
                <div className="p-3 font-bold">
                  Live Demo <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;

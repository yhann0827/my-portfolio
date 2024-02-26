import React from "react";
import CustomizedTimeline from "./timeline";

const Experience = () => {
  return (
    <>
      <div className="sm:flex flex-col items-center pt-24 align-middle pb-36 hidden">
        <div className="mb-16 text-center">
          <p className="mb-3 font-extrabold text-purple-800" style={{ fontSize: "15px" }}>
            EXPERIENCE
          </p>
          <p className="font-extrabold" style={{ fontSize: "24px" }}>
            My Experience As A Software Developer
          </p>
        </div>
        <div className="flex items-center justify-center mx-32">
          <CustomizedTimeline />
        </div>
      </div>

      <div className="relative sm:hidden pb-16 pt-16 justify-center mx-5">
        <div className="items-center flex flex-col justify-center mt-4">
          <p className="font-extrabold text-purple-800" style={{ fontSize: "15px" }}>
            EXPERIENCE
          </p>
          <p className="mt-2 text-center font-extrabold " style={{ fontSize: "20px" }}>
            My Experience As A Software Developer
          </p>
          <CustomizedTimeline />
        </div>
      </div>
    </>
  );
};

export default Experience;

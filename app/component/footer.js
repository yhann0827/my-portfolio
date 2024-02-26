import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="hidden sm:flex justify-between py-10 bg-gray-800 px-60">
        <div className="font-bold text-white">Copyright @ 2023. All rights are reserved</div>
        <div>
          <FontAwesomeIcon icon={faGithub} size="2x" style={{ marginRight: "20px", color: "white" }} />
          <FontAwesomeIcon icon={faLinkedin} size="2x" style={{ color: "white" }} />
        </div>
      </div>

      <div className="flex justify-between py-10 bg-gray-800 sm:hidden">
        <div className="font-bold text-white pl-10 pr-6">Copyright @ 2023. All rights are reserved</div>
        <div className="flex pr-10">
          <FontAwesomeIcon icon={faGithub} size="2x" style={{ marginRight: "20px", color: "white" }} />
          <FontAwesomeIcon icon={faLinkedin} size="2x" style={{ color: "white" }} />
        </div>
      </div>
    </>
  );
};

export default Footer;

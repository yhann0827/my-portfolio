"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    <nav className="fixed top-0 flex items-center justify-between w-full p-6 bg-white shadow-md z-10">
      <div className="flex items-center justify-between space-x-4 w-full">
        <div className="mr-2 font-bold font-roboto-mono font-signika-negative" style={{ fontSize: "22px" }}>
          YHANN
        </div>

        <div className="flex justify-between space-x-8 ">
          <a
            href="#profile"
            className="font-semibold font-roboto-mono"
            style={{ fontSize: "18px" }}
            onClick={e => {
              e.preventDefault(); // Prevent the default anchor behavior
              smoothScroll("profile"); // Call the smoothScroll function with the target section's ID
            }}
          >
            Home
          </a>
          <a
            href="#about"
            className="font-semibold font-roboto-mono"
            style={{ fontSize: "18px" }}
            onClick={e => {
              e.preventDefault(); // Prevent the default anchor behavior
              smoothScroll("about"); // Call the smoothScroll function with the target section's ID
            }}
          >
            About
          </a>
          <a
            href="#experience"
            className="font-semibold font-roboto-mono"
            style={{ fontSize: "18px" }}
            onClick={e => {
              e.preventDefault(); // Prevent the default anchor behavior
              smoothScroll("experience"); // Call the smoothScroll function with the target section's ID
            }}
          >
            Experience
          </a>
          <a
            href="#project"
            className="font-semibold font-roboto-mono"
            style={{ fontSize: "18px" }}
            onClick={e => {
              e.preventDefault(); // Prevent the default anchor behavior
              smoothScroll("project"); // Call the smoothScroll function with the target section's ID
            }}
          >
            Project
          </a>
        </div>
        <div className="flex justify-between space-x-8 ">
          <FontAwesomeIcon icon={faGithub} size="2x" />
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </div>
      </div>
    </nav>
  );
};

function smoothScroll(targetId) {
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: "smooth", // This makes it scroll smoothly
    });
  }
}

export default Nav;

import React from "react";
import { FaLinkedin, FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";

const Socials = () => {
  return (
    <>
      <a href="https://www.youtube.com/">
        <FaLinkedin className="h-5 w-5 text-icon hover:text-yellow-500 transition duration-200" />
      </a>
      <a href="https://www.youtube.com/">
        <FaFacebookSquare className="h-5 w-5 text-icon hover:text-yellow-500 transition duration-200" />
      </a>
      <a href="https://www.youtube.com/">
        <FaTwitterSquare className="h-5 w-5 text-icon hover:text-yellow-500 transition duration-200" />
      </a>
    </>
  );
};

export default Socials;

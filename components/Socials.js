import React from "react";
import {
  FaLinkedin,
  FaFacebookSquare,
  FaTwitterSquare,
  FaFileDownload,
} from "react-icons/fa";

const Socials = () => {
  return (
    <>
      <a href="https://www.linkedin.com/in/niyoh-edwyn-villanueva-5b2524113/">
        <FaLinkedin className="h-5 w-5 text-icon hover:text-yellow-500 transition duration-200" />
      </a>
      <a href="https://www.facebook.com/niyohedwyn.villanueva/">
        <FaFacebookSquare className="h-5 w-5 text-icon hover:text-yellow-500 transition duration-200" />
      </a>
      <a href="https://twitter.com/niyohhh">
        <FaTwitterSquare className="h-5 w-5 text-icon hover:text-yellow-500 transition duration-200" />
      </a>

      <a
        href="https://drive.google.com/file/d/1rHF9N882vJ1dLIBsT0K_vGGjC2dIChN3/view?usp=sharing"
        download
      >
        <FaFileDownload className="h-5 w-5 text-icon hover:text-yellow-500 transition duration-200" />
      </a>
    </>
  );
};

export default Socials;

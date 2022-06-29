import React, { useEffect } from "react";

import { useRouter } from "next/router";
import { motion, useAnimation } from "framer-motion";
import cssLogo from "./../../images/css-removebg-preview.png";
import htmlLogo from "./../../images/html-removebg-preview.png";
import jsLogo from "./../../images/js-removebg-preview.png";
import nextLogo from "./../../images/nextjs-removebg-preview.png";
import nodeLogo from "./../../images/node-removebg-preview.png";
import reactLogo from "./../../images/react-removebg-preview.png";
import rnLogo from "./../../images/rn-removebg-preview.png";
import mongoLogo from "./../../images/download-removebg-preview.png";
import Head from "next/head";
import Image from "next/image";

const Home = () => {
  const router = useRouter();

  const logos = [
    jsLogo,
    reactLogo,
    nextLogo,
    rnLogo,
    htmlLogo,
    cssLogo,
    nodeLogo,
    mongoLogo,
  ];

  const GridDisplay = (props) => {
    return logos.map((logo, index) => (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: index * 0.3 }}
        className="hover:scale-110 transition-all duration-400 w-48 h-48 flex justify-center items-center bg-[#f3f2f3] p-2 rounded-3xl "
        key={index}
      >
        <Image src={logo} />
      </motion.div>
    ));
  };
  // useEffect(() => {
  //   window.addEventListener("scroll", console.log(window.scrollY));
  // }, []);

  const mainPage = useAnimation();

  const doAnimation = async () => {
    await mainPage.start(() => ({
      scale: 1,
      transition: { duration: 0.6 },
    }));
  };

  useEffect(() => {
    doAnimation();
  }, []);

  const currentPath = router.asPath.toString();
  return (
    <motion.div
      initial={{ scale: 0.5 }}
      animate={mainPage}
      className="flex flex-col justify-center items-center w-full h-full min-w-screen min-h-screen lg:mx-40"
    >
      <Head>
        <title>Skills</title>
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="font-nunito text-7xl lg:mb-20 mt-10 text-white tracking-widest text-center">
          My skills
        </h1>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-y-10 my-10 lg:my-0 lg:grid-cols-4 lg:w-full md:gap-x-10 lg:gap-y-20 xl:gap-x-40 ">
        <GridDisplay />
      </div>
    </motion.div>
  );
};

export default Home;

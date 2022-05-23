import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

const About = () => {
  return (
    <div className="w-full h-full">
      <Head>
        <title>About</title>
      </Head>
      <motion.div
        initial={{ height: "100vh" }}
        animate={{ height: ["100vh", "0vh"] }}
        transition={{ duration: 0.8, ease: "easeIn" }}
        className="h-[100vh] bg-black "
      ></motion.div>
      <motion.div
        initial={{ height: "0vh" }}
        animate={{ height: ["0%", "100%"], minHeight: ["0vh", "100vh"] }}
        transition={{ duration: 0.8, ease: "easeIn" }}
        className="w-full flex justify-center items-center bg-blue-bg text-white font-nunito overflow-x-hidden"
      >
        <motion.div>
          <div className="flex flex-row h-full w-full min-w-[100vw] ">
            <div className="h-full flex-1 px-3 2xl:px-60 xl:px-40 lg:px-20 md:px-15 sm:px-10 pt-5 ">
              <div className="lg:hidden text-center">
                <p className="text-[3rem] 2xl:text-[13rem] xl:text-[10rem] lg:text-[9rem] md:text-[7rem] sm:text-[5rem] text-yellowMain font-light tracking-wider">
                  About
                </p>
              </div>
              <div className="flex flex-row ">
                <div className=" hidden lg:flex flex-col justify-end items-end">
                  <h1 className="text-[3rem] 2xl:text-[13rem] xl:text-[10rem] lg:text-[9rem] md:text-[7rem] sm:text-[5rem] text-yellowMain font-light tracking-wider ">
                    About
                  </h1>
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  className="flex flex-row flex-initial justify-center items-start w-full mt-5 "
                >
                  {/* <img src="https://i.ibb.co/nzBjqVQ/1-29304022021.jpg" /> */}
                  <Image
                    src="https://i.ibb.co/nCSh6jP/194056538-824738471489108-8045471048089244225-n.jpg"
                    width={500}
                    height={500}
                    layout="intrinsic"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.3 }}
                className="w-full font-gilda"
              >
                <div className="text-4xl py-10 px-5 sm:px-0">
                  <p>Hi! I&apos;m Niyoh. A full-stack developer.</p>
                </div>

                <div className="text-2xl xl:text-justify px-5 sm:px-0 pb-20">
                  {/* I was amazed on how programming works, how it is
                    done, the different programming languages and the different
                    applications of it. */}
                  <p>
                    {"\t"}I'm pretty much a self-taught developer. I began programming since I was in College. I was
                    first introduced to the concept of programming on my first
                    major course, on this course we were taught the basics of
                    C++. I enjoyed and excelled in every course where
                    programming is involved, we were taught different
                    programming languages like Python, C++, and PHP. Python was
                    for computer vision, C++ was mainly focused on introducing
                    us to the fundamentals, and PHP was for web development with
                    a simple backend server.
                    <br></br>
                    <br></br>
                    {"\t"}My first job experience is when we had our internships
                    for College, I was tasked to make an E-Commerce Site using
                    Magento and a simple mobile application using Ionic. After
                    College, I got an internship to a startup company that
                    mainly focuses on E-Commerce applications. This is where I
                    was first introduced to Javascript frameworks in general. We
                    used React Native for building an E-Commerce application
                    that sells products from a specific brand. I was greatly
                    involved on the project and have worked on different parts
                    of the application. My tasks were mainly focus on the
                    front-end side of the application.
                    <br></br>
                    <br></br>
                    {"\t"}Upon realizing how useful and simple to use Javascript
                    Frameworks are, I took courses on Udemy regarding ReactJS,
                    React Native and NodeJS. And I&apos;m still learning
                    everyday 😁
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;

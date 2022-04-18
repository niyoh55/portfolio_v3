import React from "react";

import { useRouter } from "next/router";
import { motion, useAnimation } from "framer-motion";
import Head from "next/head";
const Home = () => {
  const mainPage = useAnimation();
  const router = useRouter();

  const arrHi = "Hi,".split("");
  //const arrName = [`I'm`, " ", `Niyoh`, " ", `Edwyn`];

  const arrName = `I'm Niyoh Edwyn`.split("");
  const arrDesc = "Full Stack Developer / Freelancer".split(" ");

  const redirectPage = (path) => {
    mainPage.start(() => ({
      scale: 0.5,
      overflowX: "hidden",
      opacity: [1, 1, 0.8, 0.8, 0.5],
      transition: { duration: 0.5 },
    }));
    setTimeout(() => router.push(path), 500);
  };

  const currentPath = router.asPath.toString();
  return (
    <motion.div className="flex w-full min-w-screen" animate={mainPage}>
      <Head>
        <title>Home</title>
      </Head>

      <div className="flex flex-col justify-center w-auto ">
        <div className="flex flex-col gap-y-10 sm:gap-y-0 px-5 md:px-20 2xl:px-30 text-3xl md:text-5xl xl:text-7xl font-nunito tracking-widest text-white w-auto md:mt-0 mt-20">
          <h1 className="text-[2em] mb-3">
            {arrHi.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2, delay: index * 0.2 }}
              >
                {letter}
              </motion.span>
            ))}
          </h1>

          <h1 className="lg:text-[13rem] md:text-[10rem] sm:text-[8rem] text-[5rem] leading-none">
            {arrName.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  color: "#ffd700",
                  //adjust this for font sizes
                }}
                transition={{
                  duration: 0.2,
                  delay: (index + 1) * 0.2 + 0.5,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </h1>

          <h1>
            {arrDesc.map((letter, index) => (
              <motion.span
                key={index}
                className=" text-2xl tracking-widest"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.2,
                  delay: (index + 1) * 0.2 + arrName.length * 0.2 + 0.5,
                }}
              >
                {letter + " "}
              </motion.span>
            ))}
          </h1>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: (arrName.length + arrHi.length + arrDesc.length) * 0.2,
            }}
            onClick={() => redirectPage("/contact")}
            className="border-2 border-yellowMain text-yellowMain hover:bg-yellowMain active:scale-110 hover:text-black w-auto px-5 py-3 mt-5 self-start tracking-widest font-nunito text-xl"
          >
            Contact Me
          </motion.button>
        </div>
      </div>
      <div></div>
    </motion.div>
  );
};

export default Home;
